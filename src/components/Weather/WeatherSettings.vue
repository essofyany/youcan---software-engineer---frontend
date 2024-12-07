<script setup lang="ts">
import { computed, ref } from 'vue'
import Tabs from '@/components/ui/tabs/Tabs.vue'
import { weatherStore } from '@/stores/weather'

const temperatureTabs = ref(['°C', '°F'])
const measurementsTabs = ref(['Metric', 'Imperial'])

const selectedTemperature = computed({
  get: () => weatherStore.temperature,
  set: (value) => {
    weatherStore.temperature = value
  },
})
const selectedTemperatureIndex = computed(() =>
  temperatureTabs.value.findIndex((v) => v === selectedTemperature.value),
)

const selectedMeasurements = computed({
  get: () => weatherStore.measurements,
  set: (value) => {
    weatherStore.measurements = value
  },
})
const selectedMeasurementsIndex = computed(() =>
  measurementsTabs.value.findIndex((v) => v === selectedMeasurements.value),
)
</script>

<template>
  <div class="weather-settings">
    <!-- temperature -->
    <div class="setting-block">
      <p class="setting-label">Temperature</p>
      <Tabs
        :active-tab="selectedTemperatureIndex"
        :tabs="temperatureTabs"
        @set-tab-index="(index) => (selectedTemperature = temperatureTabs[index])"
      />
    </div>
    <!-- measurements -->
    <div class="setting-block">
      <p class="setting-label">Measurements</p>
      <Tabs
        :active-tab="selectedMeasurementsIndex"
        :tabs="measurementsTabs"
        @set-tab-index="selectedMeasurements = measurementsTabs[$event]"
      />
    </div>
  </div>
</template>

<style scoped>
.weather-settings {
  width: 262px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  border-radius: var(--radius-8);
  border: 1px solid var(--color-soft-200);
  background: white;
  box-shadow: 0px 16px 32px -12px rgba(14, 18, 27, 0.1);
}

.setting-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.setting-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-black);
}
</style>
