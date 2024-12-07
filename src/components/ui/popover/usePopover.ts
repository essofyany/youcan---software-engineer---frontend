import { ref, computed, onMounted, onUnmounted } from 'vue'

export function usePopover() {
  const isOpen = ref(false)
  const popover = ref<HTMLElement | null>(null)
  const trigger = ref<HTMLElement | null>(null)

  const togglePopover = () => {
    isOpen.value = !isOpen.value
  }

  const closePopover = (event: MouseEvent) => {
    if (isOpen.value && popover.value && !popover.value.contains(event.target as Node)) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', closePopover)
  })

  onUnmounted(() => {
    document.removeEventListener('click', closePopover)
  })

  const positionStyles = computed(() => ({
    top: `${(trigger.value?.offsetHeight || 0) + 5}px`,
    right: '0',
    position: 'absolute',
  }))

  return {
    isOpen,
    togglePopover,
    positionStyles,
    popover,
    trigger,
  }
}
