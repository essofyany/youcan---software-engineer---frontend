<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { FORECAST_DATA } from '@/data'
import Tabs from '@/components/ui/tabs/Tabs.vue'
import ForecastItem from './ForecastItem.vue'

const scrollContainer = ref<HTMLElement | null>(null)
const activeTab = ref(0)
const tabs = ref(['Hourly Forecast', '7-Day Forecast'])
const data = computed(() => (activeTab.value === 1 ? FORECAST_DATA.daily : FORECAST_DATA.hourly))

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault()
      if (scrollContainer.value) {
        scrollContainer.value.scrollLeft += event.deltaY // Convert vertical scroll to horizontal
      }
    })
  }
})
</script>

<template>
  <section class="weather-forecast">
    <Tabs :active-tab="activeTab" :tabs="tabs" @set-tab-index="activeTab = $event">
      <div class="forecast-items" ref="scrollContainer">
        <ForecastItem v-for="(item, index) in data" :key="index" :item="item" />
      </div>
      <div class="right-fade"></div>
    </Tabs>
  </section>
</template>

<style scoped>
.forecast-items {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  gap: 32px;
  isolation: isolate;
  overflow: auto;
  scrollbar-width: none;
  white-space: nowrap;
  position: relative;
}

.forecast-items::-webkit-scrollbar {
  display: none;
}

.right-fade {
  width: 60px;
  height: 100%;
  position: absolute;
  z-index: 10;
  bottom: 0px;
  right: 0px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
}
</style>
