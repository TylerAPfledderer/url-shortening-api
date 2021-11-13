import { mount } from '@vue/test-utils';
import UrlShortener from '@/components/Main/UrlShortener';

describe('UrlShortener', () => {
  it('binds data successfully in the input', () => {
    const wrapper = mount(<UrlShortener />);
    const urlInput = wrapper.find('input[type="url"]');
    urlInput.setValue('https://www.google.com');

    expect(urlInput.element.value).toBe('https://www.google.com');
  });

  it.todo('submits the input to vuex');
});
