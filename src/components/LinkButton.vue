<template lang="">
  <a href="#" class="LinkButton" :class="[solidVariant && 'LinkButton--solid', `LinkButton--${size}`]">{{ name }}</a>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  /** The visible text of the link */
  name: {
    type: String,
    required: true,
  },
  /** Generates the LinkButton variant class with the solid Cyan background */
  solidVariant: {
    type: Boolean,
    default: false,
  },
  /** Generate specific padding and connect this to the  */
  size: {
    type: String,
    validator: (v) => ['small', 'large'].includes(v),
    default: 'small',
  },
});
</script>
<style scoped>
.LinkButton {
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-align: center;
}

.LinkButton:hover,
.LinkButton:focus {
  color: var(--primary-cyan);
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

.LinkButton--large {
  padding: 12px 40px;
}

.LinkButton--small {
  padding: 8px 24px;
}

@media (min-width: 768px) {
  .LinkButton:hover,
  .LinkButton:focus {
    color: black;
  }
  .LinkButton:not(.LinkButton--solid) {
    padding: 0;
  }
}
</style>
