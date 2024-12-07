<script setup lang="ts">
import IconButton from '@/components/ui/Button/IconButton.vue'
import Popover from '@/components/ui/popover/Popover.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import WeatherSettings from './WeatherSettings.vue'
</script>

<template>
  <header class="city-info">
    <div class="city-details">
      <h1 class="city-name">Casablanca</h1>
      <div class="datetime-info">
        <p class="date-text">Friday, November 8, 2024</p>
        <p class="time-text">9:09 PM</p>
      </div>
    </div>

    <Popover>
      <template #trigger>
        <IconButton>
          <IconSettings />
        </IconButton>
      </template>
      <WeatherSettings />
    </Popover>
  </header>
</template>

<style scoped>
.city-info {
  display: flex;
  justify-content: space-between;

  .city-details {
    display: flex;
    flex-direction: column;
    gap: 2;
    .city-name {
      font-size: 40px;
      font-weight: 700;
      color: var(--color-black);
    }

    .datetime-info {
      display: flex;
      flex-direction: column;
      gap: 4;
      font-weight: 500;
      color: var(--color-black-muted);

      .date-text {
        font-size: 16px;
      }
      .time-text {
        font-size: 14px;
      }
    }
  }
}
</style>
