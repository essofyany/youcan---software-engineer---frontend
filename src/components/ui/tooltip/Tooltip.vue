<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ text: string }>()
const isVisible = ref(false)

const showTooltip = () => {
  isVisible.value = true
}
const hideTooltip = () => {
  isVisible.value = false
}
</script>

<template>
  <div class="tooltip-container" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <!-- This slot for the trigger element -->
    <slot></slot>
    <!-- The tooltip content -->
    <div class="tooltip-content" :class="{ visible: isVisible }" role="tooltip">
      {{ props.text }}
    </div>
  </div>
</template>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  background-color: white;
  padding: 5px 10px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-soft-200);
  box-shadow: 0px 1px 2px 0px #0e121b08;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
  z-index: 10;
  bottom: 80%; /* Position the tooltip above trigger */
  right: 0px;
  transform: translateY(-50%);
}

.tooltip-content.visible {
  visibility: visible;
  opacity: 1;
}

/* Optional: Adjust tooltip arrow styles */
.tooltip-content::after {
  content: '';
  position: absolute;
  top: 100%;
  right: 10px;
  transform: translateX(-50%);
  rotate: 180deg;
  border-width: 7px;
  border-style: solid;
  border-color: transparent transparent var(--color-soft-200) transparent;
}
</style>
