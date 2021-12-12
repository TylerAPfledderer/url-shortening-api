import { createStore } from 'vuex';
import { uuid } from 'vue-uuid';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  state: {
    generatedUrls: [],
    hasServerErr: null,
    serverErrMsg: '',
    isLoading: false,
  },
  mutations: {
    SET_URLS(state, urls) {
      state.generatedUrls = urls;
    },
    ADD_URLS(state, { inputUrl, generatedUrl }) {
      state.generatedUrls = [{ inputUrl, generatedUrl }, ...state.generatedUrls];
    },
    SET_SERVER_ERROR(state, { hasErr, message }) {
      let errMsg = '';
      switch (message) {
        case 1:
          errMsg = 'Please enter a url';
          break;
        case 2:
          errMsg = 'Please enter a valid url';
          break;
        case 5:
          errMsg = 'The "shrtcode" url is already taken';
          break;
        case 10:
          errMsg = 'Not allowed to shorten.';
          break;
        case 'NetworkError when attempting to fetch resource.':
          errMsg = 'Please check your internet connection';
          break;
        default:
          errMsg = message;
          break;
      }
      state.hasServerErr = hasErr;
      state.serverErrMsg = errMsg;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    /**
     * Pass in the input url and run shrtcode apu
     */
    async createShortenUrl({ commit }, { inputUrl }) {
      // Show loading visual is there is server lag
      await commit('SET_LOADING', true);

      await fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)
        .then((res) => res.json())
        .then(({ ok, error_code, result }) => {
          if (!ok) {
            // Set Server error info if the API return is invalid
            commit('SET_SERVER_ERROR', { hasErr: true, message: error_code });
            return;
          }
          const newUrl = { id: uuid.v1(), inputUrl, generatedUrl: result?.full_short_link };

          // Add Generated URL and Input Url to the array
          commit('ADD_URLS', newUrl);
          // Send to local storage
          const prevStorage = JSON.parse(localStorage.getItem('generatedUrls'));
          const newStorage = prevStorage ? [newUrl, ...prevStorage] : [newUrl];
          localStorage.setItem('generatedUrls', JSON.stringify(newStorage));

          // Ensure Server Error States are cleared
          commit('SET_SERVER_ERROR', { hasErr: null, message: '' });
        })
        .catch((err) => {
          console.error('Something went wrong: ', err);
          commit('SET_SERVER_ERROR', { hasErr: true, message: err.message });
        });

      await commit('SET_LOADING', false);
    },
  },
  strict: debug,
});
