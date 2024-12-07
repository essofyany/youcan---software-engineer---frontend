<script setup lang="ts">
import type { Component } from 'vue'

interface Item {
  type: string
  value: string
  icon: Component
}

defineProps<{
  item: Item
}>()
</script>

<template>
  <div class="weather-stat-item">
    <div class="stat-type">
      <i>
        <component :is="item.icon" />
      </i>
      <p class="stat-title">{{ item.type }}</p>
    </div>
    <p class="stat-value">{{ item.value }}</p>
  </div>
</template>

<style scoped>
.weather-stat-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .stat-type {
    display: flex;
    align-items: center;
    gap: 6px;
    i {
      color: var(--color-blue);
    }
    .stat-title {
      font-size: 14px;
      font-weight: 500;
      color: var(--color-black);
    }
  }
  .stat-value {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-black);
  }
}
</style>
