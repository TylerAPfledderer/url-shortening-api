import { mount } from '@vue/test-utils';
import ShortenerResults from '@/components/Main/ShortenerResults';
import { createStore } from 'vuex';

let mockGeneratedUrls = [
  {
    id: 1,
    inputUrl: 'https://www.google.com',
    generatedUrl: 'https://shrtco.de/ntWPhR',
  },
];

const store = createStore({
  state() {
    return {
      generatedUrls: mockGeneratedUrls,
      hasServerErr: false,
    };
  },
});

describe('ShortenerResults', () => {
  it('renders two items with input and generated urls', async () => {
    const wrapper = mount(ShortenerResults, {
      global: {
        plugins: [store],
      },
    });
    const renderedResults = wrapper.findAllComponents("[data-test='single-result-item']");
    expect(renderedResults.length).toBe(mockGeneratedUrls.length);
    expect(renderedResults.at(0).text()).toContain(mockGeneratedUrls[0].generatedUrl);

    mockGeneratedUrls = [
      ...mockGeneratedUrls,
      {
        id: 2,
        inputUrl: 'youtube.com',
        generatedUrl: 'https://shrtco.de/6FQF1l',
      },
    ];

    store.state.generatedUrls = mockGeneratedUrls;

    await wrapper.vm.$forceUpdate();

    const updatedResults = await wrapper.findAllComponents("[data-test='single-result-item']");

    expect(updatedResults.length).toBe(mockGeneratedUrls.length);
    expect(updatedResults.at(1).text()).toContain(mockGeneratedUrls[1].generatedUrl);
  });
});
