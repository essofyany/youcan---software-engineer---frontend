<script setup lang="ts">
import IconDrop from '@/components/icons/IconDrop.vue'
import IconRain from '@/components/icons/IconRain.vue'
import IconSpeed from '@/components/icons/IconSpeed.vue'
import IconWindy from '@/components/icons/IconWindy.vue'
import WeatherStatItem from './WeatherStatItem.vue'
const weatherStatData = [
  {
    type: 'Humidity',
    value: '40%',
    icon: IconDrop,
  },
  {
    type: 'Precipitation',
    value: '15%',
    icon: IconRain,
  },
  {
    type: 'Wind',
    value: '1 km/h',
    icon: IconWindy,
  },
  {
    type: 'AQI',
    value: '141',
    icon: IconSpeed,
  },
]
</script>

<template>
  <section class="weather-stat">
    <WeatherStatItem v-for="(item, index) in weatherStatData" :key="index" :item="item" />
  </section>
</template>

<style scoped>
.weather-stat {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 56px;
  grid-row-gap: 4px;
}
</style>
