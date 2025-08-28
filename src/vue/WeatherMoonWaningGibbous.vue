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
        d="M10.506,15.767C10.499,15.876 10.496,15.986 10.496,16.096C10.496,19.072 12.832,21.536 15.776,21.76C16.992,20.768 17.696,18.624 17.728,16.128C17.728,13.603 16.994,11.429 15.748,10.435C15.895,10.423 16.043,10.416 16.192,10.415L16.192,10.4C16.768,10.4 17.325,10.485 17.849,10.642C20.242,11.339 21.992,13.549 21.992,16.165C21.992,19.338 19.402,21.85 16.229,21.85C13.055,21.85 10.492,19.338 10.492,16.165C10.492,16.031 10.497,15.898 10.506,15.767Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M16.192,8.64C20.32,8.64 23.68,11.968 23.68,16.128C23.68,20.256 20.32,23.616 16.192,23.616C12.064,23.616 8.704,20.256 8.704,16.128C8.704,12 12.064,8.64 16.192,8.64ZM15.748,10.435C15.747,10.434 15.745,10.433 15.744,10.432C12.94,10.648 10.67,12.94 10.506,15.767C10.497,15.898 10.492,16.031 10.492,16.165C10.492,19.338 13.055,21.85 16.229,21.85C19.402,21.85 21.992,19.338 21.992,16.165C21.992,13.549 20.242,11.339 17.849,10.642C17.325,10.485 16.768,10.4 16.192,10.4L16.192,10.415C16.043,10.416 15.895,10.423 15.748,10.435Z"
        :fill="multiColor ? (secondaryColor || '#666666') : color"
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
    classes.push('weather-multi-color', 'weather-moon-waning-gibbous')
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
