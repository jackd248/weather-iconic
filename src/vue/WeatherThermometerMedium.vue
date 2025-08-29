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
        d="M16.416,14.08C16.928,14.08 17.312,14.496 17.312,14.976L17.312,22.112C17.312,22.592 16.896,23.008 16.416,23.008C15.904,23.008 15.52,22.592 15.52,22.112L15.52,14.976C15.52,14.464 15.936,14.08 16.416,14.08Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M19.648,19.904C19.872,20.32 20.192,21.056 20.192,21.824C20.224,24.032 18.528,25.728 16.416,25.728C14.304,25.728 12.576,24 12.576,21.888C12.576,21.088 12.768,20.32 13.152,19.744L13.152,9.856C13.12,9.792 13.12,9.696 13.12,9.632C13.12,7.776 14.592,6.272 16.384,6.272C18.176,6.272 19.648,7.776 19.648,9.632L19.648,19.904ZM16.384,23.872C17.504,23.872 18.4,22.976 18.4,21.856C18.4,21.536 18.24,21.056 17.984,20.64C17.856,20.448 17.824,20.224 17.856,20L17.856,9.632C17.856,8.8 17.184,8.064 16.384,8.064C15.584,8.064 14.912,8.768 14.912,9.632L14.912,9.664C14.944,9.728 14.944,9.824 14.944,9.888L14.944,20.064C14.944,20.288 14.848,20.512 14.688,20.672C14.464,20.992 14.368,21.408 14.368,21.856C14.368,22.976 15.264,23.872 16.384,23.872Z"
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
    classes.push('weather-multi-color', 'weather-thermometer-medium')
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
