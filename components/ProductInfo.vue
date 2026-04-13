<template>
  <div class="product-info">
    <div ref="descEl" class="product-desc" @wheel="onWheel">
      <p class="product-id">產品型號{{ product.id }}</p>
      <h1 class="product-name">產品名稱 {{ product.name }}</h1>
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  product: { id: string; name: string; description: string }
}>()

const descEl = ref<HTMLElement | null>(null)

function onWheel(e: WheelEvent) {
  const el = descEl.value
  if (!el) return

  const atTop    = el.scrollTop === 0
  const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1

  if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
    e.preventDefault()
  }
}
</script>

<style scoped>
.product-info {
  flex: 1;
  min-height: 0;
  background: var(--color-white);
  overflow: hidden;
}

.product-desc {
  height: 100%;
  overflow-y: auto;
  overscroll-behavior: none;
  scrollbar-width: none;
  padding: var(--space-8) var(--space-14);
  font-family: 'Roboto', sans-serif;
  font-size: 22.5px;
  font-weight: 400;
  line-height: 40.5px;
  letter-spacing: 0.04em;
  color: var(--color-text);
}

.product-desc::-webkit-scrollbar {
  display: none;
}

.product-id {
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
  margin-bottom: var(--space-5);
}

.product-name {
  font-size: 27px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  color: var(--color-sand);
  margin-bottom: var(--space-8);
}

.product-desc > p:last-child { margin: 0; }
</style>
