<template>
  <header class="HeroSection">
    <div class="desktop-wrapper">
      <div class="HeroSection__image">
        <img :src="heroImg" />
      </div>
      <div class="HeroSection__text">
        <h2>More than just shorter links</h2>
        <p class="text-color-light">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <LinkButton name="Get Started" solidVariant size="large" />
      </div>
    </div>
  </header>
</template>
<script setup>
import heroImg from '@/assets/illustration-working.svg';
import LinkButton from '../LinkButton.vue';
</script>
<style scoped>
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
</style>
