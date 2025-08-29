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
        d="M13.984,16C13.984,17.152 14.88,18.048 16.032,18.048C17.888,18.016 20.256,16 20.256,16C20.256,16 17.888,13.952 16.032,13.952C14.912,13.952 13.984,14.848 13.984,16ZM16.64,16C16.64,16.352 16.352,16.608 16.032,16.608C15.712,16.608 15.392,16.32 15.392,16C15.392,15.648 15.68,15.392 16,15.392C16.32,15.392 16.64,15.648 16.64,16Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M21.92,10.112C20.352,8.544 18.272,7.68 16.064,7.68C11.488,7.68 7.776,11.424 7.744,16C7.744,18.208 8.608,20.288 10.176,21.856C11.744,23.424 13.824,24.288 16.064,24.288C20.64,24.288 24.352,20.576 24.352,16C24.352,13.76 23.488,11.68 21.92,10.112ZM16.064,22.496C14.304,22.496 12.672,21.856 11.456,20.608C10.24,19.36 9.568,17.728 9.568,16C9.568,12.416 12.48,9.504 16.032,9.504C17.792,9.504 19.424,10.176 20.64,11.392C21.888,12.608 22.56,14.24 22.56,16C22.56,19.584 19.648,22.496 16.064,22.496Z"
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
    classes.push('weather-multi-color', 'weather-compass-east')
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
