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
    <path d="M15.84 8.48c4.16 0 7.52 3.36 7.52 7.52s-3.36 7.52-7.52 7.52c-4.128 0-7.52-3.36-7.52-7.52s3.36-7.52 7.52-7.52m0 13.248A5.72 5.72 0 0 0 21.568 16a5.72 5.72 0 0 0-5.728-5.728z"/>
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
