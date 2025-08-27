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
    <path d="M16.864 8.512c4.16 0 7.52 3.36 7.52 7.52-.032 4.128-3.392 7.52-7.52 7.52-4.16 0-7.52-3.36-7.52-7.52s3.36-7.52 7.52-7.52m-5.728 7.52a5.72 5.72 0 0 0 5.728 5.728V10.304a5.72 5.72 0 0 0-5.728 5.728"/>
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
