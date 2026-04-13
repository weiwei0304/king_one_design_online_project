<template>
  <div class="product-info">
    <p class="product-id">產品型號{{ product.id }}</p>
    <h1 class="product-name">產品名稱 {{ product.name }}</h1>
    <div class="product-desc">
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  product: { id: string; name: string; description: string }
}>()
</script>

<style scoped>
.product-info {
  flex: 1;
  min-height: 0;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  padding: var(--space-8) var(--space-10);
  overflow-y: auto;
  scrollbar-width: none;
}

.product-info::-webkit-scrollbar {
  display: none;
}

.product-id {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
  margin-bottom: var(--space-5);
}

.product-name {
  font-family: 'Roboto', sans-serif;
  font-size: 27px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  color: var(--color-sand);
  margin-bottom: var(--space-8);
}

.product-desc {
  font-family: 'Roboto', sans-serif;
  font-size: 22.5px;
  font-weight: 400;
  line-height: 40.5px;
  letter-spacing: 0.04em;
  color: var(--color-text);
}

.product-desc p { margin: 0; }
</style>
