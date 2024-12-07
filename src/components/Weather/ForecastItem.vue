<script setup lang="ts">
import { weatherStore } from '@/stores/weather'
import { convertCToF, convertFToC } from '@/lib/utils'
import IconCloud from '@/components/icons/IconCloud.vue'
import IconRain from '@/components/icons/IconRain.vue'
import IconSun from '@/components/icons/IconSun.vue'

interface ForecastItem {
  date: string
  highTemperature: number
  lowTemperature?: number
  condition: string
}
defineProps<{
  item: ForecastItem
}>()

const convertTemperature = (value: number) => {
  if (weatherStore.temperature === '°C') return convertFToC(value)
  if (weatherStore.temperature === '°F') return convertCToF(value)
  return value
}
</script>
<template>
  <div class="forecast-item">
    <p class="date">{{ item.date }}</p>
    <i class="weather-icon" style="color: var(--color-blue)">
      <IconCloud
        v-show="item.condition === 'cloudy'"
        width="24"
        height="24"
        style="color: var(--color-soft-400)"
      />
      <IconRain
        v-show="item.condition === 'rainy'"
        width="24"
        height="24"
        style="color: var(--color-blue)"
      />
      <IconSun
        v-show="item.condition === 'sunny'"
        width="24"
        height="24"
        style="color: var(--color-yellow)"
      />
    </i>
    <p class="temperature-value">{{ convertTemperature(item.highTemperature) }}°</p>
    <p v-show="item?.lowTemperature" class="temperature-value muted">
      {{ item?.lowTemperature && convertTemperature(item?.lowTemperature) }}°
    </p>
  </div>
</template>

<style scoped>
.forecast-item {
  flex-shrink: 0;
  width: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 2px;

  .date {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-black);
  }
  .temperature-value {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-black);
  }
  .temperature-value.muted {
    color: var(--color-soft-400);
  }
}
</style>
