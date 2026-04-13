<template>
  <div class="app-wrapper">
    <div class="product-window">
      <button class="close-btn" aria-label="close">
        <img src="/images/close.png" alt="close" class="close-icon" />
      </button>
      <AppNav
        :active-tab="activeTab"
        @change="activeTab = $event"
      />
      <div class="product-body">
        <ProductViewer />
        <ProductInfo :product="currentProduct" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('product')

const currentProduct = {
  id: '12345678',
  name: 'TMA-2 STUDIO',
  description: '產品介紹 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 產品介紹 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text.'
}
</script>

<style scoped>
.app-wrapper {
  width: 100vw;
  height: 100vh;
  background: var(--color-bg);
  position: relative;
  overflow: hidden;
}

.product-window {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 0 var(--window-padding-x) var(--window-padding-b);
  overflow: hidden;
}

.close-btn {
  position: absolute;
  top: calc(var(--nav-margin-top) + var(--nav-height) / 2);
  right: 16px;
  transform: translateY(-50%);
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity var(--transition-base);
  z-index: 10;
}

.close-btn:hover { opacity: 1; }

.close-icon {
  width: 90px;
  height: 90px;
  object-fit: contain;
}

.product-body {
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
  margin-top: var(--body-gap);
}

@media (min-width: 1920px) {
  :root {
    --nav-margin-top:   60px;
    --body-gap:         60px;
    --window-padding-x: 140px;
    --window-padding-b: 60px;
  }
}

@media (max-width: 1400px) {
  :root {
    --nav-margin-top:   24px;
    --body-gap:         24px;
    --window-padding-x: 60px;
    --window-padding-b: 24px;
  }
}
</style>
