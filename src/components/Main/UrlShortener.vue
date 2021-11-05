<template>
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
</template>
<script setup>
import { ref } from 'vue';

const urlValue = ref('');
</script>
<style scoped>
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
</style>
