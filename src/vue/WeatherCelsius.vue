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
        d="M8.992,10.208C7.36,10.208 6.144,11.552 6.144,13.312C6.144,15.136 7.36,16.416 8.992,16.416C10.688,16.416 11.872,15.136 11.872,13.312C11.872,11.552 10.688,10.208 8.992,10.208ZM8.992,15.136C7.936,15.136 7.424,14.208 7.424,13.312C7.424,12.48 7.936,11.52 8.992,11.488C10.08,11.488 10.592,12.448 10.592,13.312C10.592,14.208 10.08,15.136 8.992,15.136Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M24.32,20.576C24.032,20.576 23.84,20.672 23.648,20.928C22.688,22.24 21.472,23.04 19.744,23.04C16.704,23.04 14.88,20.64 14.88,17.504C14.88,14.336 16.704,11.936 19.616,11.936C21.568,11.936 22.72,12.992 23.68,14.144C23.84,14.368 24.096,14.464 24.352,14.464C24.704,14.464 25.216,14.176 25.216,13.6C25.216,13.312 25.088,12.96 24.832,12.576C24.224,11.744 22.496,10.112 19.616,10.112C15.744,10.112 12.96,13.088 12.96,17.504C12.96,21.952 15.712,24.896 19.616,24.896C22.56,24.896 24.192,23.136 24.864,22.24C25.088,21.952 25.12,21.664 25.12,21.44C25.12,21.024 24.768,20.576 24.32,20.576Z"
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
    classes.push('weather-multi-color', 'weather-celsius')
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
