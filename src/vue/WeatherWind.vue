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
    <path d="M17.504 16.576c0 1.12-.928 2.048-2.048 2.048H4.576a.894.894 0 0 1-.896-.896c0-.512.416-.896.896-.896h10.88a.25.25 0 0 0 .256-.256.25.25 0 0 0-.256-.256.894.894 0 0 1-.896-.896c0-.48.416-.896.896-.896 1.12 0 2.048.928 2.048 2.048m1.824 5.12c1.12 0 2.048.928 2.048 2.048s-.896 2.048-2.048 2.048a.894.894 0 0 1-.896-.896c0-.48.416-.896.896-.896a.25.25 0 0 0 .256-.256c0-.16-.096-.256-.256-.256h-8.16a.894.894 0 0 1-.896-.896c0-.48.416-.896.896-.896zm3.328-8.448a3.865 3.865 0 0 1 3.872 3.872 3.865 3.865 0 0 1-3.872 3.872H8.192a.894.894 0 0 1-.896-.896c0-.512.416-.896.896-.896h14.464c1.152 0 2.08-.928 2.08-2.08s-.928-2.08-2.08-2.08-2.08.928-2.08 2.08a.894.894 0 0 1-.896.896.894.894 0 0 1-.896-.896 3.865 3.865 0 0 1 3.872-3.872"/>
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
