<template>
  <li class="GeneratedUrlGroup" data-test="single-result-item">
    <div style="overflow-x: auto;">
      <span data-test="input-url">{{ inputUrl }}</span>
    </div>
    <div>
      <span data-test="generated-url">{{ generatedUrl }}</span>
      <button
        type="button"
        class="GeneratedUrlGroup__copy"
        :class="{ 'is-copied': isCopied }"
        @click="handleCopyUrl(generatedUrl)"
        data-test="url-copy-button"
      >
        <span :aria-hidden="isCopied"> Copy </span>
        <span class="sr-hidden"> {{ inputUrl }} shortened URL</span>
      </button>
    </div>
  </li>
</template>
<script setup>
import { ref, defineProps } from 'vue';

defineProps({
  inputUrl: {
    type: String,
    required: true,
  },
  generatedUrl: {
    type: String,
    required: true,
  },
});

const isCopied = ref(false);

async function handleCopyUrl(url) {
  isCopied.value = false;
  const clipboard = navigator.clipboard;

  await clipboard.writeText(url).then(() => (isCopied.value = true));
}
</script>
<style scoped>
.GeneratedUrlGroup,
.GeneratedUrlGroup > *:last-child {
  display: flex;
  flex-direction: column;
}

.GeneratedUrlGroup {
  background: white;
  border-radius: 5px;
  margin-top: 24px;
}

.GeneratedUrlGroup > * {
  /* Initialize flex-basis primarily for larger screens */
  flex-basis: 100%;
  padding: 16px 14px;
  margin: 0 2px;
}

.GeneratedUrlGroup > *:first-child {
  border-bottom: 2px solid var(--neutral-500);
}

.GeneratedUrlGroup > *:last-child {
  gap: 12px 24px;
}

.GeneratedUrlGroup > *:last-child > span {
  color: var(--primary-cyan);
}

.GeneratedUrlGroup__copy {
  border-radius: 5px;
  border: none;
  height: 40px;
  background: var(--primary-cyan);
  color: white;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: var(--font-weight-bold);
}

.GeneratedUrlGroup__copy:hover,
.GeneratedUrlGroup__copy:focus {
  filter: brightness(1.1);
  outline: 2px solid white;
}

.GeneratedUrlGroup__copy.is-copied {
  background: var(--primary-violet);
  color: transparent;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
}

.GeneratedUrlGroup__copy.is-copied::before {
  content: 'Copied!';
  color: white;
  position: absolute;
  left: 0;
  text-align: center;
  width: 100%;
}

@media (min-width: 1024px) {
  .GeneratedUrlGroup,
  .GeneratedUrlGroup > *:last-child {
    flex-direction: row;
    align-items: center;
  }

  .GeneratedUrlGroup > *:first-child {
    border-bottom: 0;
  }

  .GeneratedUrlGroup > *:last-child {
    justify-content: flex-end;
  }

  .GeneratedUrlGroup__copy {
    width: 96px;
  }
}
</style>
