<template>
  <footer class="Footer">
    <DesktopWrapper>
      <div class="Footer__logo">
        <InlineSvg :src="siteLogoSvg" />
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
              <span class="sr-hidden">Facebook</span>
              <InlineSvg :src="facebookSvg" />
            </a>
          </li>
          <li>
            <a href="#">
              <span class="sr-hidden">Twitter</span>
              <InlineSvg :src="twitterSvg" />
            </a>
          </li>
          <li>
            <a href="#">
              <span class="sr-hidden">Pinterest</span>
              <InlineSvg :src="pinterestSvg" />
            </a>
          </li>
          <li>
            <a href="#">
              <span class="sr-hidden">Instagram</span>
              <InlineSvg :src="instagramSvg" />
            </a>
          </li>
        </ul>
      </nav>
    </DesktopWrapper>
  </footer>
</template>
<script setup>
import InlineSvg from 'vue-inline-svg';
import siteLogoSvg from '@/assets/logo.svg';
import facebookSvg from '@/assets/icon-facebook.svg';
import twitterSvg from '@/assets/icon-twitter.svg';
import pinterestSvg from '@/assets/icon-pinterest.svg';
import instagramSvg from '@/assets/icon-instagram.svg';
import DesktopWrapper from '../DesktopWrapper.vue';
</script>
<style scoped>
a:hover,
a:focus {
  color: var(--primary-cyan);
}

.Footer {
  background: var(--neutral-800);
  color: white;
  padding: 54px 0;
}

.Footer .DesktopWrapper {
  gap: 48px;
}

.Footer__logo {
  color: white;
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

.FooterNav__socials {
  display: flex;
  gap: 24px;
}

@media (min-width: 1124px) {
  .Footer {
    padding: 72px var(--base-padding-x);
  }

  .Footer .DesktopWrapper {
    flex-direction: row;
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
</style>
