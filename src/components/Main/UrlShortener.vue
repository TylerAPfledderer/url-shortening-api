<template>
  <section class="UrlShortenSection">
    <DesktopWrapper class="background-pattern">
      <form @submit.prevent="handleUrl" novalidate>
        <label for="url-shorten" class="sr-hidden">Shorten a link here</label>
        <div class="input-wrap" :class="{ inputError: hasErr }">
          <input
            type="url"
            v-model="urlValue"
            name="url-shorten"
            id="url-shorten"
            placeholder="Shorten a link here..."
            class="UrlShortenSection__input"
            required
          />
          <p v-show="hasErr">{{ errMessage }}</p>
        </div>
        <button type="submit" class="UrlShortenSection__btn">{{ isLoading ? 'Loading...' : 'Shorten It!' }}</button>
      </form>
    </DesktopWrapper>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import DesktopWrapper from '../DesktopWrapper.vue';

const store = useStore();

const urlValue = ref('');

const isLoading = computed(() => store.state.isLoading);

const hasErr = computed(() => store.state.hasServerErr);

const errMessage = computed(() => store.state.serverErrMsg);

async function handleUrl() {
  await store.dispatch('createShortenUrl', { inputUrl: urlValue.value });
  if (!hasErr.value) {
    urlValue.value = '';
  }
}
</script>
<style scoped>
.UrlShortenSection {
  padding: 0 var(--base-padding-x);
  height: 0;
}

.UrlShortenSection .DesktopWrapper {
  align-items: stretch;
  border-radius: 10px;
  padding: var(--base-padding-x);
  row-gap: 16px;

  /* So the content is vertically centered over the "dividing" line where the 0-height parent element is */
  transform: translateY(-50%);
}

.UrlShortenSection .background-pattern {
  background-image: url('~@/assets/bg-shorten-mobile.svg');
  background-position: top right;
  background-size: unset;
}

form {
  /**
   * This form element is treated as a wrapper for the proper submission functionality.
   * It inherits most of the styling from the DesktopWrapper that is being scoped in this component.
   */
  align-items: inherit;
  display: inherit;
  flex-direction: inherit;
  gap: inherit;

  /* Width is not default to 100% */
  width: 100%;
}

.UrlShortenSection__input,
.UrlShortenSection__btn {
  border-radius: 5px;
  border: none;
  height: 48px;
}

.UrlShortenSection__input,
.UrlShortenSection__input::placeholder {
  font-family: inherit;
}

.UrlShortenSection__input {
  padding: 0 16px;
  width: 100%;
}
.UrlShortenSection__input::placeholder {
  color: var(--neutral-700);
  opacity: 0.5;
  font-size: 16px;
  letter-spacing: 0.5px;
}

.input-wrap {
  position: relative;
  width: 100%;
}

.inputError {
  padding-bottom: 35px;
}

.inputError input {
  outline: 3px solid #f46363;
}

.inputError p {
  color: #f46363;
  font-style: italic;
  position: absolute;
  bottom: 0;
}

.UrlShortenSection__btn {
  background: var(--primary-cyan);
  color: white;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--font-weight-bold);
}

.UrlShortenSection__btn:hover,
.UrlShortenSection__btn:focus {
  filter: brightness(1.1);
  outline: 2px solid white;
}

@media (min-width: 768px) {
  .UrlShortenSection .DesktopWrapper {
    flex-direction: row;
    column-gap: 24px;
    padding: 48px;
  }

  .UrlShortenSection .background-pattern {
    background-image: url('~@/assets/bg-shorten-desktop.svg');
    background-position: center right;
    background-size: 100% 100%;
  }

  .inputError {
    padding-bottom: 0;
  }

  .inputError p {
    bottom: -35px;
  }

  .UrlShortenSection__btn {
    width: 184px;
  }
}
</style>
