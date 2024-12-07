<script setup lang="ts">
import CityInfo from './CityInfo.vue'
import WeatherAQI from './WeatherAQI.vue'
import WeatherForecast from './WeatherForecast.vue'
import WeatherOverview from './WeatherOverview.vue'
import WeatherStat from './WeatherStat.vue'
</script>

<template>
  <div class="weather-card">
    <CityInfo />
    <WeatherOverview />
    <WeatherStat />
    <WeatherAQI />
    <WeatherForecast />
  </div>
</template>

<style scoped>
.weather-card {
  position: absolute;
  flex-shrink: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: var(--radius-24);
  min-height: 60%;
  max-height: 90%;
  width: 75%;
  max-width: 90%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (max-width: 600px) {
  .weather-card {
    width: 90%;
  }
}

@media (min-width: 1024px) {
  .weather-card {
    width: 40%;
  }
}
</style>
