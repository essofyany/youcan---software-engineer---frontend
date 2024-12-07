<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
type Tabs = string[]
defineProps<{
  activeTab: number
  tabs: Tabs
}>()

const emits = defineEmits<{
  setTabIndex: [value: number]
}>()
</script>

<template>
  <div class="tabs" role="tablist" aria-orientation="horizontal" tabindex="0">
    <!-- Tab Headers -->
    <div class="tab-headers">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-header', { active: index === activeTab }]"
        @click="emits('setTabIndex', index)"
      >
        {{ tab }}
      </div>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tabs {
  width: 100%;
  height: 36px;
  display: flex;
  flex-direction: column;
  background: var(--color-weak-50);
  border-radius: var(--radius-10);
  padding: 4px;
  gap: 24px;
}

.tab-headers {
  display: flex;
  align-items: center;
  gap: 6px;
}

.tab-header {
  flex: 1;
  height: 28px;
  padding: 4px;
  text-align: center;
  color: var(--color-soft-400);
  border-radius: var(--radius-6);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.tab-header.active {
  transition:
    background-color 0.3s,
    color 0.3s;
  background: white;
  color: var(--color-black);
  box-shadow: 0px 6px 10px 0px rgba(14, 18, 27, 0.06);
}

.tab-content {
  position: relative;
}
</style>
