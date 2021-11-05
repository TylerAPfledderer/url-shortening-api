<template>
  <main>
    <Hero />
    <UrlShortener />
    <StatisticDetails />
    <BoostCta />
  </main>
</template>
<script setup>
import Hero from './Hero.vue';
import UrlShortener from './UrlShortener.vue';
import StatisticDetails from './StatisticDetails.vue';
import BoostCta from './BoostCta.vue';
</script>
<style scoped>
main {
  --url-section-margin: 168px;
}

@media (min-width: 764px) {
  main {
    /* Offset spacing with the body element of the fixed header */
    margin-top: 56px;
  }
}
</style>
