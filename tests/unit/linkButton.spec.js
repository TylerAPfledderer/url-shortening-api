import { shallowMount } from '@vue/test-utils';

import LinkButton from '@/components/LinkButton.vue';

describe('LinkButton', () => {
  it('renders the proper text', () => {
    const wrapper = shallowMount(LinkButton, {
      props: {
        name: 'Test',
      },
    });

    expect(wrapper.text()).toMatch('Test');
  });

  it('renders the "LinkButton--solid" classname when passing the solidVariant prop', () => {
    const wrapper = shallowMount(LinkButton, {
      props: {
        name: 'Test',
        solidVariant: true,
      },
    });

    expect(wrapper.classes('LinkButton--solid')).toBe(true);
  });

  it('renders a size variant class name based on the "size" prop receiving the respective value', async () => {
    const wrapper = shallowMount(LinkButton, {
      props: {
        name: 'Test',
        size: 'small',
      },
    });

    expect(wrapper.classes('LinkButton--small')).toBe(true);

    await wrapper.setProps({ size: 'large' });
    expect(wrapper.classes('LinkButton--large')).toBe(true);
  });
});
