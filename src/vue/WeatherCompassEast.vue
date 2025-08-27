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
    <path d="M21.92 10.112A8.25 8.25 0 0 1 24.352 16a8.29 8.29 0 0 1-8.288 8.288 8.25 8.25 0 0 1-5.888-2.432A8.23 8.23 0 0 1 7.744 16c.032-4.576 3.744-8.32 8.32-8.32 2.208 0 4.288.864 5.856 2.432m-5.856 12.384A6.5 6.5 0 0 0 22.56 16c0-1.76-.672-3.392-1.92-4.608-1.216-1.216-2.848-1.888-4.608-1.888-3.552 0-6.464 2.912-6.464 6.496 0 1.728.672 3.36 1.888 4.608s2.848 1.888 4.608 1.888M13.984 16c0-1.152.928-2.048 2.048-2.048 1.856 0 4.224 2.048 4.224 2.048s-2.368 2.016-4.224 2.048A2.02 2.02 0 0 1 13.984 16m2.656 0c0-.352-.32-.608-.64-.608a.61.61 0 0 0-.608.608c0 .32.32.608.64.608s.608-.256.608-.608"/>
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
