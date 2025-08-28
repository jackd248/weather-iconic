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
        d="M15.84,10.287L15.84,21.722C12.684,21.703 10.14,19.198 10.14,16.037C10.14,12.88 12.689,10.314 15.84,10.287ZM16.601,21.678C19.408,21.307 21.568,18.91 21.568,16C21.568,13.408 19.855,11.224 17.497,10.514C19.89,11.211 21.64,13.421 21.64,16.037C21.64,18.965 19.435,21.33 16.601,21.678Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M15.84,8.48C20,8.48 23.36,11.84 23.36,16C23.36,20.16 20,23.52 15.84,23.52C11.712,23.52 8.32,20.16 8.32,16C8.32,11.84 11.68,8.48 15.84,8.48ZM15.84,21.722L15.84,21.728C16.098,21.728 16.352,21.711 16.601,21.678C19.435,21.33 21.64,18.965 21.64,16.037C21.64,13.421 19.89,11.211 17.497,10.514C16.973,10.357 16.416,10.272 15.84,10.272L15.84,10.287C12.689,10.314 10.14,12.88 10.14,16.037C10.14,19.198 12.684,21.703 15.84,21.722Z"
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
    classes.push('weather-multi-color', 'weather-moon-first-quarter')
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
