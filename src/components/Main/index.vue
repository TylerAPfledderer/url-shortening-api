<template>
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
          <LinkButton name="Get Started" solidVariant size="large" />
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
      <LinkButton name="Get Started" solidVariant size="large" />
    </section>
  </main>
</template>
<script setup>
import heroImg from '@/assets/illustration-working.svg';
import recognitionImg from '@/assets/icon-brand-recognition.svg';
import recordsImg from '@/assets/icon-detailed-records.svg';
import customizeImg from '@/assets/icon-fully-customizable.svg';
import { ref } from 'vue';
import LinkButton from '@/components/LinkButton.vue';

const urlValue = ref('');
</script>
<style scoped>
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
</style>
