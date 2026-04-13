<template>
  <div class="product-viewer">
    <div class="image-wrap">
      <img src="/images/head_phone.png" alt="TMA-2 STUDIO" class="product-image" />
      <div class="view-controls">
        <button
          v-for="btn in viewBtns"
          :key="btn.id"
          :class="['view-btn', activeView === btn.id ? 'is-active' : 'is-inactive']"
          @click="activeView = btn.id"
        >
          <img :src="btn.icon" :alt="btn.label" class="btn-icon" />
          <span class="btn-label">{{ btn.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeView = ref('photo')

const viewBtns = [
  { id: 'photo', label: 'Photo', icon: '/images/images-outline.png' },
  { id: '360',   label: '360',   icon: '/images/Frame.png' },
  { id: '3d',    label: '3D',    icon: '/images/Group.png' }
]
</script>

<style scoped>
.product-viewer {
  width: 50%;
  flex-shrink: 0;
  background: var(--color-viewer);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.view-controls {
  position: absolute;
  bottom: var(--space-6);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: min(471px, 48%);
  height: var(--view-btn-height);
}

.view-btn {
  flex: 1;
  height: var(--view-btn-height);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: 0 var(--space-4);
  border: 1.5px solid var(--color-sand);
  cursor: pointer;
  transition: background var(--transition-base);
  font-family: 'Roboto', sans-serif;
  font-size: var(--text-sm);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.view-btn.is-inactive {
  background: rgba(255, 255, 255, 0.15);
  color: var(--color-sand);
}

.view-btn.is-inactive:hover {
  background: rgba(255, 255, 255, 0.28);
}

.view-btn.is-active {
  background: var(--color-sand);
  color: #ffffff;
  border-color: var(--color-sand);
}

.btn-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  flex-shrink: 0;
}

.view-btn.is-inactive .btn-icon {
  filter: brightness(0) saturate(100%) invert(75%) sepia(20%) saturate(400%) hue-rotate(5deg);
}

.view-btn.is-active .btn-icon {
  filter: brightness(0) invert(1);
}

@media (max-width: 1400px) {
  .view-controls {
    width: min(471px, 58%);
  }
}
</style>
