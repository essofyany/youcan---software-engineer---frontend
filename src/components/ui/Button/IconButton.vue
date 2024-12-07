<template>
  <button class="icon-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.icon-button {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid var(--color-soft-200);
  color: var(--color-black-muted);
  border-radius: var(--radius-8);
  cursor: pointer;

  &:focus {
    border-color: var(--color-black);
  }
}
</style>
