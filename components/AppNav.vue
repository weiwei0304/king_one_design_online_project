<template>
  <nav class="app-nav">
    <div class="nav-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['nav-tab', activeTab === tab.id ? 'is-active' : 'is-inactive']"
        @click="$emit('change', tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps<{ activeTab: string }>()
defineEmits<{ change: [tab: string] }>()

const tabs = [
  { id: 'product', label: 'PRODUCT' },
  { id: 'video',   label: 'VIDEO' },
  { id: 'catalog', label: 'CATALOG' },
  { id: 'explore', label: 'EXPLORE MORE' }
]
</script>

<style scoped>
.app-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--nav-height);
  margin-top: var(--nav-margin-top);
  padding: 0 var(--space-6);
  background: transparent;
  flex-shrink: 0;
}

.nav-tabs {
  display: flex;
  align-items: stretch;
  height: 100%;
}

.nav-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--space-6);
  height: 100%;
  font-family: var(--font-nav);
  font-size: var(--text-nav);
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
  background: transparent;
  border: none;
  color: var(--color-nav-tab);
  border-bottom: 2px solid transparent;
  transition: border-color var(--transition-base);
}

.nav-tab.is-active {
  font-weight: 800;
  border-bottom-color: #ffffff;
}

.nav-tab.is-inactive:hover {
  border-bottom-color: var(--color-nav-tab);
}
</style>
