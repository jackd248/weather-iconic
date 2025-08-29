<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    :fill="multiColor ? 'none' : color"
    :class="combinedClassName"
    :style="combinedStyle"
    :role="title ? 'img' : 'presentation'"
    :aria-hidden="title ? 'false' : 'true'"
    :aria-label="title"
    v-bind="$attrs"
  >
    <title v-if="title">{{ title }}</title>
    <path 
        d="M16 11.008c2.944 0 5.312 2.4 5.312 5.312A5.3 5.3 0 0 1 16 21.632c-2.944 0-5.312-2.4-5.312-5.312 0-2.944 2.4-5.312 5.312-5.312m0 8.832a3.51 3.51 0 0 0 3.52-3.52A3.51 3.51 0 0 0 16 12.8a3.51 3.51 0 0 0-3.52 3.52A3.51 3.51 0 0 0 16 19.84m0-10.048a.894.894 0 0 1-.896-.896V7.584c0-.512.416-.896.896-.896.512 0 .896.416.896.896v1.312a.875.875 0 0 1-.896.896m-5.888 1.92-.928-.928a.91.91 0 0 1 0-1.28.91.91 0 0 1 1.28 0l.928.928a.91.91 0 0 1 0 1.28c-.192.16-.416.256-.64.256s-.448-.096-.64-.256m-.64 4.608a.875.875 0 0 1-.896.896H7.264a.894.894 0 0 1-.896-.896c0-.512.416-.896.896-.896h1.312c.512 0 .896.416.896.896m.64 4.608a.91.91 0 0 1 1.28 0 .91.91 0 0 1 0 1.28l-.928.928c-.192.16-.416.256-.64.256s-.448-.096-.64-.256a.91.91 0 0 1 0-1.28zM16 22.848c.512 0 .896.416.896.896v1.312a.875.875 0 0 1-.896.896.894.894 0 0 1-.896-.896v-1.312c0-.512.416-.896.896-.896m5.888-1.92.928.928a.91.91 0 0 1 0 1.28c-.192.16-.416.256-.64.256s-.448-.096-.64-.256l-.928-.928a.91.91 0 0 1 0-1.28.91.91 0 0 1 1.28 0m2.848-5.504c.512 0 .896.416.896.896a.875.875 0 0 1-.896.896h-1.312a.894.894 0 0 1-.896-.896c0-.512.416-.896.896-.896zm-3.488-3.456c-.224 0-.448-.096-.64-.256a.91.91 0 0 1 0-1.28l.928-.928a.91.91 0 0 1 1.28 0 .91.91 0 0 1 0 1.28l-.928.928c-.192.16-.416.256-.64.256"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: number | string
  color?: string
  multiColor?: boolean
  primaryColor?: string
  secondaryColor?: string
  className?: string
  style?: Record<string, any>
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor',
  multiColor: false
})

const combinedClassName = computed(() => {
  const classes = [props.className]
  if (props.multiColor) {
    classes.push('weather-multi-color', 'weather-sun')
  }
  return classes.filter(Boolean).join(' ')
})

const combinedStyle = computed(() => {
  if (!props.multiColor) return props.style
  
  return {
    ...props.style,
    ...(props.primaryColor && { '--weather-primary-fill': props.primaryColor }),
    ...(props.secondaryColor && { '--weather-secondary-fill': props.secondaryColor })
  }
})
</script>
