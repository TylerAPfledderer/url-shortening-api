<template>
  <div @click="handleDumbyLinkToast">
    <Header />
    <Main />
    <Footer />
  </div>
  <div class="toast" :class="toastClass">
    {{ toastMsg }}
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from './components/Footer/index.vue';

const { commit, state } = useStore();

const localUrls = localStorage.getItem('generatedUrls');

if (localUrls) {
  commit('SET_URLS', JSON.parse(localUrls));
}

const toastClass = ref(null);
const toastMsg = ref('');

/** Store state based on if the url shortener is taking to long to return a response upon submission */
const isStillLoading = computed(() => state.isStillLoading);

watchEffect(() => {
  // Reveal the toast with a related message if the url shortener api is taking too long to return
  // Else, immediately remove the toast and text without animation
  if (isStillLoading.value) {
    toastMsg.value = 'This is taking longer than expected. Please wait...';
    toastClass.value = 'show-toast';
  } else {
    toastMsg.value = '';
    toastClass.value = null;
  }
});

function handleDumbyLinkToast(event) {
  const { target } = event;
  if (target.tagName === 'A' && target.attributes.href.value === '#') {
    // Don't have the anchor force the user back to the top of the page
    event.preventDefault();

    toastClass.value = 'show-toast';
    toastMsg.value = 'Thank you for trying out the link, but unfortunately it leads to nowhere in this demo. :(';
    setTimeout(() => {
      toastClass.value = 'hide-toast';
      toastMsg.value = '';
    }, 3000);
    return;
  }
  return;
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
:root {
  --primary-cyan: hsla(180, 66%, 49%, 1);
  --primary-violet: hsla(258, 27%, 26%, 1);
  --secondary-red: hsla(0, 87%, 67%, 1);
  --neutral-500: hsl(225, 33%, 95%, 1);
  --neutral-600: hsla(258, 7%, 63%, 1);
  --neutral-700: hsla(255, 11%, 22%, 1);
  --neutral-800: hsla(260, 8%, 14%, 1);
  --base-font-size: 18px;
  --base-font-family: Poppins, Arial, Helvetica, sans-serif;
  --font-weight-normal: 500;
  --font-weight-bold: 700;

  /* Clamp between Minor Third and Perfect Fourth */
  --font-size-h2: clamp(2.448rem, 3.8vw + 1.5rem, 4.209rem);
  --font-size-h3: clamp(1.563rem, 0.5vw + 1.5rem, 1.777rem);
  --font-size-h4: clamp(1.25rem, 0.2vw + 1.2rem, 1.333rem);
  --line-height-h2: clamp(2.667rem, 5.9vw + 1.3rem, 5.333rem);
  --line-height-h3: 2.667rem;
  --line-height-h4: 1.333rem;
}

/* == Reset == */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* == Base == */

html,
body {
  overflow-x: hidden;
}

html {
  font-size: var(--base-font-size);
}

body {
  --base-padding-x: 24px;
  font-family: var(--base-font-family);
  /*  Offset the fixed position header by the height of the header */
  padding-top: 108px;
}

h3,
h4,
h5 {
  margin-bottom: 24px;
}

h2 {
  font-size: var(--font-size-h2);
  line-height: var(--line-height-h2);
}

h3 {
  font-size: var(--font-size-h3);
  line-height: var(--line-height-h3);
}

h4 {
  font-size: var(--font-size-h4);
  line-height: var(--line-height-h4);
}

h5 {
  font-size: 16px;
}

svg {
  display: block;
  height: 100%;
  width: 100%;
}

img {
  display: block;
}

nav ul {
  list-style: none;
}

nav a {
  color: inherit;
  display: block;
  text-decoration: none;
}

@media (min-width: 768px) {
  body {
    padding-top: 155px;
  }
}

@media (min-width: 1024px) {
  body {
    --base-padding-x: 48px;
  }
}

@keyframes showToast {
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 16px;
  }
}

@keyframes hideToast {
  0% {
    bottom: 16px;
  }
  100% {
    bottom: -200px;
  }
}

.show-toast {
  animation: showToast forwards 0.5s cubic-bezier(0.76, 0.05, 0.86, 0.06);
}

.hide-toast {
  animation: hideToast forwards 0.1s cubic-bezier(0.76, 0.05, 0.86, 0.06);
}

.toast {
  background: #eb0000;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: white;
  padding: 16px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
}

/* == Utilities == */

.text-color-light {
  color: var(--neutral-600) !important;
}

.background-pattern {
  background-color: var(--primary-violet);
  background-repeat: no-repeat;
}

.sr-hidden {
  position: absolute;
  top: -9999px;
  opacity: 0;
}
</style>
