<template>
  <Header />
  <Main />
  <Footer />
</template>

<script setup>
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from './components/Footer/index.vue';
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

/* == Utilities == */

.text-color-light {
  color: var(--neutral-600) !important;
}

.desktop-wrapper {
  max-width: 1110px;
  margin: 0 auto;
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
