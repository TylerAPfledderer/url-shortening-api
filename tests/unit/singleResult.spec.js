import { mount } from '@vue/test-utils';
import SingleResult from '@/components/Main/ShortenerResults/SingleResult.vue';

const MOCK_INPUT_URL = 'https://www.google.com';
const MOCK_GENERATED_URL = 'https://shrtco.de/X3pjFD';

describe('SingleResult', () => {
  const wrapper = mount(SingleResult, {
    propsData: {
      inputUrl: MOCK_INPUT_URL,
      generatedUrl: MOCK_GENERATED_URL,
    },
  });

  it('renders the input url text', () => {
    const inputUrl = wrapper.find('[data-test="input-url"]');
    expect(inputUrl.text()).toBe(MOCK_INPUT_URL);
  });

  it('renders the generated url text', () => {
    const generatedUrl = wrapper.find('[data-test="generated-url"]');
    expect(generatedUrl.text()).toBe(MOCK_GENERATED_URL);
  });
});
