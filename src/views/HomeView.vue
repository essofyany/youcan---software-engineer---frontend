<script setup lang="ts">
import WeatherApp from '@/components/Weather/WeatherApp.vue'
</script>

<template>
  <main>
    <WeatherApp />
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%),
    var(--color-black);
}
</style>
