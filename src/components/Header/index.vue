<template>
  <header class="StickyHeader">
    <div class="desktop-wrapper">
      <a href="#">
        <h1>
          <img :src="siteLogo" alt="" />
          <span class="sr-hidden">Shortly</span>
        </h1>
      </a>
      <button
        v-show="!isLargerThan768Screen"
        type="button"
        :aria-expanded="isMenuOpen"
        class="MenuBtn"
        @click="toggleMenuOpen"
      >
        <InlineSvg v-if="!isMenuOpen" :src="hamIcon" class="MenuIcon" />
        <InlineSvg v-else :src="closeIcon" class="MenuIcon" />
      </button>
      <nav
        class="MainNav"
        :class="[!isMenuOpen && 'MainNav--closed', isLargerThan768Screen && 'text-color-light']"
        @click="closeMenuOnLinkClick"
      >
        <ul aria-label="page links" class="MainNav__links">
          <li>
            <LinkButton name="Features" />
          </li>
          <li>
            <LinkButton name="Pricing" />
          </li>
          <li>
            <LinkButton name="Resources" />
          </li>
        </ul>
        <hr v-show="!isLargerThan768Screen" class="MainNav__divider" />
        <ul aria-label="account links" class="MainNav__links">
          <li>
            <LinkButton name="Login" />
          </li>
          <li>
            <LinkButton name="Sign Up" solid-variant />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import InlineSvg from 'vue-inline-svg';
import siteLogo from '@/assets/logo.svg';
import closeIcon from '@/assets/close.svg';
import hamIcon from '@/assets/menu-bars.svg';
import LinkButton from '../LinkButton.vue';

const isMenuOpen = ref(null);
const isLargerThan768Screen = ref(null);

/**
 * Toggle the menu open/closed state
 */
const toggleMenuOpen = () => (isMenuOpen.value = !isMenuOpen.value);

/**
 * Close the menu when a link is clicked
 */
const closeMenuOnLinkClick = (event) =>
  event.target.tagName === 'A' && !isLargerThan768Screen.value && (isMenuOpen.value = false);

/**
 * Function to set whether or not the window is equal or greater than 768px
 */
const checkScreenWidthAt768 = () => (isLargerThan768Screen.value = window.innerWidth >= 768);

watchEffect(() => {
  // Run initial check of the screen width at 1260px on mount
  checkScreenWidthAt768();

  // Update check as screen width changes.
  window.addEventListener('resize', () => {
    checkScreenWidthAt768();
  });

  // Menu needs to be visible when the screen is equal or greater than 768px
  //  as the menu button will not be displayed
  isMenuOpen.value = isLargerThan768Screen.value;
});
</script>
<style scoped>
.StickyHeader {
  background: white;
  padding: 40px var(--base-padding-x) 24px;

  /* position declared for the nav menu on mobile */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
}

.StickyHeader .desktop-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.MenuBtn {
  --square-size: 44px;

  background: transparent;
  border: none;
  border-radius: 5px;
  height: var(--square-size);
  width: var(--square-size);
  padding: 8px;
}

.MenuBtn:focus {
  outline: 1px solid black;
}

.MenuIcon {
  color: #aaa;
}

/* == Navigation == */

.MainNav {
  background: var(--primary-violet);
  border-radius: 10px;
  color: white;
  padding: 20px 24px;
  position: absolute;
  width: calc(100% - (var(--base-padding-x) * 2));

  /* top value equal to the height of the sticky header */
  top: 108px;

  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.MainNav--closed {
  max-height: 0;
  opacity: 0;
  padding: 0;
  overflow: hidden;
}

.MainNav__links {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  row-gap: 12px;
}

.MainNav__divider {
  background: var(--neutral-600);
  height: 1px;
  opacity: 0.25;
}

.MainNav__links li {
  width: 100%;
}

@media (min-width: 768px) {
  .StickyHeader {
    padding-top: 48px;
  }

  .MainNav {
    background: transparent;
    display: flex;
    justify-content: space-between;
    margin-left: 48px;
    padding: 0;
    position: unset;
  }

  .MainNav__links {
    flex-direction: row;
    column-gap: 32px;
  }

  .MainNav__links li {
    width: auto;
  }
}
</style>
