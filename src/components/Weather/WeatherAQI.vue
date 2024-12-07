<script setup lang="ts">
import IconAide from '@/components/icons/IconAide.vue'
import Tooltip from '@/components/ui/tooltip/Tooltip.vue'
</script>

<template>
  <section class="weather-aqi-container">
    <div class="aqi-info">
      <p class="aqi-label">AQI</p>
      <div class="aqi-value-box">
        <p class="aqi-value">300</p>
        <Tooltip text="300+ AQI is considered hazardous">
          <i>
            <IconAide />
          </i>
        </Tooltip>
      </div>
    </div>
    <div class="aqi-progress">
      <div class="aqi-progress-active" />
    </div>
  </section>
</template>

<style scoped>
.weather-aqi-container {
  display: flex;
  flex-direction: column;
  gap: 6px;

  .aqi-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-black);
    .aqi-label {
      font-size: 14px;
      font-weight: 500;
    }
    .aqi-value-box {
      display: flex;
      align-items: center;
      gap: 4px;

      i {
        color: var(--color-disabled-300);
        display: flex;
        align-items: center;
      }
      i:hover {
        color: var(--color-soft-400);
      }
      .aqi-value {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  .aqi-progress {
    width: 100%;
    height: 6px;
    position: relative;
    border-radius: var(--radius-full);
    background: var(--color-soft-200);
    overflow: hidden;

    .aqi-progress-active {
      width: 60%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--radius-full);
      background: var(--color-red);
    }
  }
}
</style>
