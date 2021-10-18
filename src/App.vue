<template>
  <div class="wrapper">
    <header class="StickyHeader">
      <a href="#">
        <h1>
          <img :src="siteLogo" alt="" />
          <span class="sr-hidden">Shortly</span>
        </h1>
      </a>
      <div>
        <button type="button" :aria-expanded="isMenuOpen" class="MenuBtn" @click="toggleMenuOpen">
          <svg
            v-if="!isMenuOpen"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="MenuIcon"
          >
            <!--Icon for Closed Menu-->
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
          <svg
            v-else
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
            class="MenuIcon"
          >
            <!--Icon for Open Menu-->
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
        </button>
      </div>
      <nav class="MainNav" :class="isMenuOpen ? 'MainNav--opened' : 'MainNav--closed'" @click="closeMenuOnLinkClick">
        <ul aria-label="page links" class="MainNav__links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <hr class="MainNav__divider" />
        <ul aria-label="account links" class="MainNav__links">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#" class="link-button">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
import siteLogo from '@/assets/logo.svg';
import { ref } from 'vue';

const isMenuOpen = ref(false);

/**
 * Toggle the menu open/closed state
 */
const toggleMenuOpen = () => (isMenuOpen.value = !isMenuOpen.value);

/**
 * Close the menu when a link is clicked
 */
const closeMenuOnLinkClick = (event) => event.target.tagName === 'A' && (isMenuOpen.value = false);
</script>

<style>
:root {
  --primary-cyan: hsla(180, 66%, 49%, 1);
  --primary-violet: hsla(258, 27%, 26%, 1);
  --secondary-red: hsla(0, 87%, 67%, 1);
  --neutral-500: hsla(0, 0%, 75%, 1);
  --neutral-600: hsla(258, 7%, 63%, 1);
  --neutral-700: hsla(255, 11%, 22%, 1);
  --neutral-800: hsla(260, 8%, 14%, 1);
  --base-font-size: 18px;
  --base-font-family: Poppins, Arial, Helvetica, sans-serif;
  --font-weight-normal: 500;
  --font-weight-bold: 700;
}

/* == Reset == */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--base-font-family);
  font-size: var(--base-font-size);
}

h1 img {
  display: block;
}

.StickyHeader {
  --spacing-x: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px var(--spacing-x) 24px;

  /* position declared for the nav menu on mobile */
  position: relative;
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
  height: 100%;
}

.MenuIcon path {
  fill: #aaa;
}

.MainNav {
  background: var(--primary-violet);
  border-radius: 10px;
  padding: 20px 24px;
  position: absolute;
  width: calc(100% - (var(--spacing-x) * 2));

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

.MainNav--opened {
  opacity: 1;
  z-index: 1000;
}

.MainNav__links {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  padding: 20px 0;
  row-gap: 12px;
}

.MainNav__divider {
  background: var(--neutral-600);
  height: 1px;
  opacity: 0.25;
}

.MainNav__links li,
.MainNav__links a {
  width: 100%;
}

.MainNav__links a {
  color: white;
  display: block;
  font-weight: var(--font-weight-bold);
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding: 12px 0;
}

.MainNav__links a:hover,
.MainNav__links a:focus {
  text-decoration: underline;
}

.link-button {
  background: var(--primary-cyan);
  border-radius: 8% / 50%;
}

.link-button:hover,
.link-button:focus {
  text-decoration: none !important;
  filter: brightness(1.1);
  outline: 2px solid white;
}

/* == Utilities == */

.sr-hidden {
  position: absolute;
  top: -9999px;
  opacity: 0;
}
</style>
