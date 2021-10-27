<template>
  <Header />
  <main>
    <header class="HeroSection">
      <div class="desktop-wrapper">
        <div class="HeroSection__image">
          <img :src="heroImg" />
        </div>
        <div class="HeroSection__text">
          <h2 class="HeroSection__title">More than just shorter links</h2>
          <p class="HeroSection__statement text-color-light">
            Build your brand's recognition and get detailed insights on how your links are performing.
          </p>
          <a href="#" class="LinkButton LinkButton--solid">Get Started</a>
        </div>
      </div>
    </header>
    <section class="UrlShortenSection">
      <div class="UrlShortenSection__wrapper desktop-wrapper background-pattern">
        <label for="url-shorten" class="sr-hidden">Shorten a link here</label>
        <input
          type="url"
          v-model="urlValue"
          name="url-shorten"
          id="url-shorten"
          placeholder="Shorten a link here..."
          class="UrlShortenSection__input"
        />
        <button type="submit" class="UrlShortenSection__btn">Shorten It!</button>
      </div>
    </section>
    <section class="StatisticsDetailSection">
      <div class="desktop-wrapper">
        <div class="heading-text">
          <h3>
            Advanced Statistics
          </h3>
          <p class="text-color-light">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
        <ul aria-label="statistics features" class="StatisticsDetailSection__list">
          <li class="StatisticsDetailSection__item">
            <div class="StatisticsDetailSection__image">
              <img :src="recognitionImg" alt="" />
            </div>
            <div>
              <h4>Brand Recognition</h4>
              <p class="text-color-light">
                Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help
                instil confidence in your content.
              </p>
            </div>
          </li>
          <li class="StatisticsDetailSection__item">
            <div class="StatisticsDetailSection__image">
              <img :src="recordsImg" alt="" />
            </div>
            <div>
              <h4>Detailed Records</h4>
              <p class="text-color-light">
                Gain insights into who is clicking your links. Knowing when and where people engage with your content
                helps inform better decisions.
              </p>
            </div>
          </li>
          <li class="StatisticsDetailSection__item">
            <div class="StatisticsDetailSection__image">
              <img :src="customizeImg" alt="" />
            </div>
            <div>
              <h4>Fully Customizable</h4>
              <p class="text-color-light">
                Improve brand awareness and content discoverability through customizable links, supercharging audience
                engagement.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="BoostCtaSection background-pattern">
      <h3>Boost your links today</h3>
      <a class="LinkButton LinkButton--solid" href="#">Get Started</a>
    </section>
  </main>
  <footer class="Footer">
    <div class="desktop-wrapper">
      <div class="Footer__logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 33">
          <path
            fill="#fff"
            d="M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34c.476-.227.89-.544 1.24-.952a4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204.43-.136.805-.283 1.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748-.884.181-1.711.272-2.482.272-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506c.454.159.879.272 1.275.34a6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"
          />
        </svg>
      </div>
      <nav class="FooterNav">
        <div class="FooterNav__group">
          <h5 id="feature-links" class="FooterNav__header">Features</h5>
          <ul aria-labelledby="feature-links" class="FooterNav__links text-color-light">
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </div>
        <div class="FooterNav__group">
          <h5 id="resource-links" class="FooterNav__header">Resources</h5>
          <ul aria-labelledby="resource-links" class="FooterNav__links text-color-light">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div class="FooterNav__group">
          <h5 id="company-links" class="FooterNav__header">Resources</h5>
          <ul aria-labelledby="company-links" class="FooterNav__links text-color-light">
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <ul aria-label="social links" class="FooterNav__socials">
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="#FFF"
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  fill="#FFF"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="#FFF"
                  d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="#FFF"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import heroImg from '@/assets/illustration-working.svg';
import recognitionImg from '@/assets/icon-brand-recognition.svg';
import recordsImg from '@/assets/icon-detailed-records.svg';
import customizeImg from '@/assets/icon-fully-customizable.svg';
import Header from '@/components/Header';
import { ref } from 'vue';

const urlValue = ref('');
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

/* == Main == */

main {
  --url-section-margin: 168px;
}

@media (min-width: 764px) {
  main {
    /* Offset spacing with the body element of the fixed header */
    margin-top: 56px;
  }
}

/* == Hero Section == */

.HeroSection {
  padding: 0 var(--base-padding-x) var(--url-section-margin);
}

.HeroSection .desktop-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.HeroSection__image img {
  /* Percentage width allows the overflow while keeping the image within the left-side of the parent */
  width: 146%;
  /* In this instance, defines what would be the set width (see comment about width property value) */
  max-width: 438px;
  margin: 0 auto;
}

.HeroSection__text {
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 565px;
  row-gap: 24px;
  text-align: center;
}

@media (min-width: 1024px) {
  .HeroSection .desktop-wrapper {
    flex-direction: row-reverse;
  }

  .HeroSection__image img {
    width: 160%;
    max-width: 733px;
  }

  .HeroSection__text {
    align-items: flex-start;
    text-align: left;
  }
}

@media (min-width: 1206px) {
  .HeroSection .desktop-wrapper {
    column-gap: 96px;
  }
}

/* == URL Input Section == */

.UrlShortenSection {
  padding: 0 var(--base-padding-x);
  height: 0;
}

.UrlShortenSection__wrapper {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: var(--base-padding-x);
  row-gap: 16px;

  /* So the content is vertically centered over the "dividing" line where the 0-height parent element is */
  transform: translateY(-50%);
}

.UrlShortenSection__wrapper.background-pattern {
  background-image: url('~@/assets/bg-shorten-mobile.svg');
  background-position: top right;
  background-size: unset;
}

.UrlShortenSection__wrapper > * {
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
  .UrlShortenSection__wrapper {
    flex-direction: row;
    column-gap: 24px;
    padding: 48px;
  }

  .UrlShortenSection__wrapper.background-pattern {
    background-image: url('~@/assets/bg-shorten-desktop.svg');
    background-position: center right;
    background-size: 100% 100%;
  }

  .UrlShortenSection__btn {
    width: 184px;
  }
}

/* == Statistics Detail Section == */

.StatisticsDetailSection {
  background: var(--neutral-500);
  padding: var(--url-section-margin) var(--base-padding-x) 80px;
  text-align: center;
}

.StatisticsDetailSection .desktop-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 96px;
}

.StatisticsDetailSection .heading-text {
  max-width: 540px;
}

.StatisticsDetailSection__list {
  --gap-length: 96px;
  display: flex;
  flex-direction: column;
  gap: var(--gap-length);
  justify-content: center;
  list-style: none;
}

.StatisticsDetailSection__item {
  --local-item-padding-x: 32px;
  align-items: center;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-height: 267px;
  max-width: 560px;
  padding: 0 var(--local-item-padding-x) 32px;
  position: relative;
}

.StatisticsDetailSection__item:not(:first-of-type)::before {
  --bar-width: 5px;
  background: var(--primary-cyan);
  content: '';
  display: block;
  height: var(--gap-length);
  position: absolute;
  top: calc(var(--gap-length) * -1);
  left: calc(50% - (var(--bar-width) / 2));
  width: var(--bar-width);
}

.StatisticsDetailSection__image {
  background: var(--primary-violet);
  border-radius: 50%;
  padding: 24px;
  position: relative;
  top: -44px;
}

.StatisticsDetailSection__item h4 {
  margin-bottom: 24px;
}

.StatisticsDetailSection__item p {
  font-size: 15px;
}

@media (min-width: 1124px) {
  .StatisticsDetailSection__list {
    --gap-length: 32px;
    --vertical-offset: 44px;
    flex-direction: row;
  }

  .StatisticsDetailSection__item {
    --local-item-padding-x: 24px;
    align-items: flex-start;
    text-align: left;
  }

  .StatisticsDetailSection__item:nth-of-type(2) {
    margin-top: var(--vertical-offset);
  }

  .StatisticsDetailSection__item:nth-of-type(3) {
    margin-top: calc(var(--vertical-offset) * 2);
  }

  .StatisticsDetailSection__item:not(:first-of-type)::before {
    top: 50%;
    left: calc(var(--gap-length) * -1);
    width: var(--gap-length);
    height: var(--bar-width);
  }
}

@media (min-width: 1206px) {
  .StatisticsDetailSection__item {
    --local-item-padding-x: 32px;
  }
}

/* == Boost CTA Section == */

.BoostCtaSection {
  color: white;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-items: center;
}

.BoostCtaSection.background-pattern {
  background-image: url('~@/assets/bg-boost-mobile.svg');
  background-position: center right;
  background-size: 100% 100%;
}

@media (min-width: 768px) {
  .BoostCtaSection.background-pattern {
    background-image: url('~@/assets/bg-boost-desktop.svg');
  }
}

/* == Footer == */

.Footer {
  background: var(--neutral-800);
  color: white;
  padding: 54px 0;
}

.Footer .desktop-wrapper {
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
}

.Footer__logo {
  width: 121px;
}

.FooterNav {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.FooterNav__group {
  text-align: center;
}

.FooterNav__header {
  margin-bottom: 16px;
}

.FooterNav__links {
  display: flex;
  font-size: 15px;
  flex-direction: column;
  row-gap: 8px;
}

.FooterNav__links a:hover,
.FooterNav__links a:focus {
  color: var(--primary-cyan);
}

.FooterNav__socials {
  display: flex;
  gap: 24px;
}

.FooterNav__socials a:hover svg path,
.FooterNav__socials a:focus svg path {
  fill: var(--primary-cyan);
}

@media (min-width: 1124px) {
  .Footer {
    padding: 72px var(--base-padding-x);
  }

  .Footer .desktop-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .FooterNav {
    flex-direction: row;
    gap: 96px;
  }

  .FooterNav__group {
    text-align: left;
  }
}

/* == Utilities == */

.text-color-light {
  color: var(--neutral-600) !important;
}

.LinkButton {
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-align: center;
  padding: 12px 40px;
}

.LinkButton:hover,
.LinkButton:focus {
  color: black;
}

.LinkButton--solid {
  background: var(--primary-cyan);
  border-radius: 28px;
  color: white !important;
}

.LinkButton--solid:hover,
.LinkButton--solid:focus {
  text-decoration: none !important;
  filter: brightness(1.1);
  outline: 2px solid white;
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
