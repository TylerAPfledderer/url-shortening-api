<template>
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
              Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil
              confidence in your content.
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
</template>
<script setup>
import recognitionImg from '@/assets/icon-brand-recognition.svg';
import recordsImg from '@/assets/icon-detailed-records.svg';
import customizeImg from '@/assets/icon-fully-customizable.svg';
</script>
<style scoped>
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
</style>
