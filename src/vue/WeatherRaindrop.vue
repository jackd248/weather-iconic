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
        d="M14.976,16.032C14.976,16.032 13.216,17.472 13.216,19.104C13.216,20.064 14.016,20.864 14.976,20.864C15.936,20.864 16.736,20.064 16.736,19.104C16.736,17.472 14.976,16.032 14.976,16.032Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M16.736,8.096C16.384,7.808 15.904,7.808 15.584,8.096C15.36,8.288 9.568,13.12 9.568,18.752C9.568,22.368 12.512,25.344 16.16,25.344C19.808,25.344 22.752,22.4 22.752,18.752C22.752,13.12 16.992,8.288 16.736,8.096ZM16.16,23.552C13.504,23.552 11.36,21.408 11.36,18.752C11.36,14.912 14.784,11.296 16.16,9.984C17.536,11.296 20.96,14.912 20.96,18.752C20.96,21.408 18.816,23.552 16.16,23.552Z"
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
    classes.push('weather-multi-color', 'weather-raindrop')
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
