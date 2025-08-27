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
    <path d="M15.84 8.064c4.16 0 7.52 3.36 7.52 7.52 0 4.128-3.36 7.52-7.52 7.52s-7.52-3.36-7.52-7.52 3.36-7.52 7.52-7.52m.448 13.216c2.944-.224 5.28-2.688 5.28-5.696S19.2 10.08 16.224 9.888c-1.184 1.024-1.984 3.168-1.984 5.664 0 2.56.768 4.736 2.048 5.728"/>
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
