<template>
  <section class="BoostCtaSection background-pattern">
    <h3>Boost your links today</h3>
    <LinkButton name="Get Started" solidVariant size="large" />
  </section>
</template>
<script setup>
import LinkButton from '../LinkButton.vue';
</script>
<style scoped>
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
