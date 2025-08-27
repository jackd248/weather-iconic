<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    :fill="color"
    :class="className"
    :style="style"
    :role="title ? 'img' : 'presentation'"
    :aria-hidden="title ? 'false' : 'true'"
    :aria-label="title"
    v-bind="$attrs"
  >
    <title v-if="title">{{ title }}</title>
    <path d="M24.32 20.576c.448 0 .8.448.8.864 0 .224-.032.512-.256.8-.672.896-2.304 2.656-5.248 2.656-3.904 0-6.656-2.944-6.656-7.392 0-4.416 2.784-7.392 6.656-7.392 2.88 0 4.608 1.632 5.216 2.464.256.384.384.736.384 1.024 0 .576-.512.864-.864.864-.256 0-.512-.096-.672-.32-.96-1.152-2.112-2.208-4.064-2.208-2.912 0-4.736 2.4-4.736 5.568 0 3.136 1.824 5.536 4.864 5.536 1.728 0 2.944-.8 3.904-2.112.192-.256.384-.352.672-.352M8.992 10.208c1.696 0 2.88 1.344 2.88 3.104 0 1.824-1.184 3.104-2.88 3.104-1.632 0-2.848-1.28-2.848-3.104 0-1.76 1.216-3.104 2.848-3.104m0 4.928c1.088 0 1.6-.928 1.6-1.824 0-.864-.512-1.824-1.6-1.824-1.056.032-1.568.992-1.568 1.824 0 .896.512 1.824 1.568 1.824"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number | string
  color?: string
  className?: string
  style?: Record<string, any>
  title?: string
}

withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor'
})
</script>
