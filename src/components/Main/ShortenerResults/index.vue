<template>
  <section
    v-if="generatedUrls"
    style="background: var(--neutral-500);"
    :style="`padding: ${hasApiErr ? '108px' : '72px'} var(--base-padding-x) 0;`"
  >
    <DesktopWrapper>
      <ul style="width: 100%;">
        <SingleResult v-for="(urlPair, index) in generatedUrls" :key="index" v-bind="urlPair" />
      </ul>
    </DesktopWrapper>
  </section>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import DesktopWrapper from '../../DesktopWrapper.vue';
import SingleResult from './SingleResult.vue';

const { state } = useStore();

const generatedUrls = computed(() => state.generatedUrls);
const hasApiErr = computed(() => state.hasServerErr);
</script>
