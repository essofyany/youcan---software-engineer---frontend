<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, type StyleValue } from 'vue'
import { usePopover } from './usePopover'
const { isOpen, popover, positionStyles, togglePopover, trigger } = usePopover()
// State for toggling the popover
const content = ref<HTMLElement | null>(null)

// Close popover when clicking outside
const closePopover = (event: MouseEvent) => {
  if (isOpen.value && popover.value && !popover.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

// Add event listener for clicking outside
onMounted(() => {
  document.addEventListener('click', closePopover)
})

onUnmounted(() => {
  document.removeEventListener('click', closePopover)
})
</script>

<template>
  <div class="popover" ref="popover">
    <div class="popover-trigger" @click="togglePopover" ref="trigger">
      <slot name="trigger"></slot>
    </div>
    <div v-if="isOpen" :style="positionStyles as StyleValue" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.popover {
  position: relative;
  display: inline-block;
}

.popover-trigger {
  cursor: pointer;
}

.popover-content {
  position: absolute;
  z-index: 1000;
  top: 100%; /* Default position */
  left: 0;
}
</style>
