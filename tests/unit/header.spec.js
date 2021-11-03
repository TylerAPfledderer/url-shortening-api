import { mount } from '@vue/test-utils';

import Header from '@/components/Header';

describe('Header', () => {
  it('has a menu button for mobile screens on mount that opens and closes the nav', async () => {
    // Provide a small screen width to simulate mobile
    global.innerWidth = 500;
    const wrapper = mount(Header);
    const mainNav = wrapper.find('[data-test="main-nav"]');
    const menuBtn = wrapper.find('[data-test="menu-btn"]');

    // Menu button is visible at the 500px screen width;
    expect(menuBtn.isVisible()).toBe(true);

    // To make menu visible (default state is false)
    await menuBtn.trigger('click');
    expect(mainNav.classes('MainNav--closed')).toBe(false);

    // To hide menu
    await menuBtn.trigger('click');
    expect(mainNav.classes('MainNav--closed')).toBe(true);
  });

  it('displays nav on mount at large screens', () => {
    // Provide a large screen width to simulate desktop
    global.innerWidth = 1440;
    const wrapper = mount(Header);
    const mainNav = wrapper.find('[data-test="main-nav"]');

    expect(mainNav.classes('MainNav--closed')).toBe(false);
  });
});
