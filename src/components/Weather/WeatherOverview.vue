<script setup lang="ts">
import IconCloud from '@/components/icons/IconCloud.vue'
</script>

<template>
  <section class="weather-overview">
    <div class="weather-value">
      <i>
        <IconCloud width="74" height="74" />
      </i>
      <h2 class="temperature-info">19°</h2>
    </div>
    <div class="weather-description">
      <p class="weather-description-text">Partially Cloudy</p>
      <p class="feels-like-text">Feels like 21°</p>
    </div>
  </section>
</template>

<style scoped>
.weather-overview {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .weather-value {
    display: flex;
    gap: 16px;
    align-items: center;
    i {
      color: var(--color-soft-400);
    }
    .temperature-info {
      font-size: 56px;
      font-weight: 700;
      color: var(--color-black);
    }
  }

  .weather-description {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: end;
    .weather-description-text {
      font-size: 20px;
      font-weight: 700;
      color: var(--color-black);
    }
    .feels-like-text {
      font-size: 16px;
      font-weight: 500;
      color: var(--color-black-muted);
    }
  }
}
</style>
