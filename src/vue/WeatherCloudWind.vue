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
        d="M17.472,19.424C17.472,20.544 16.544,21.472 15.424,21.472L4.544,21.472C4.032,21.472 3.648,21.056 3.648,20.576C3.648,20.064 4.064,19.68 4.544,19.68L15.424,19.68C15.552,19.68 15.68,19.584 15.68,19.424C15.68,19.296 15.584,19.168 15.424,19.168C14.912,19.168 14.528,18.752 14.528,18.272C14.528,17.792 14.944,17.376 15.424,17.376C16.544,17.376 17.472,18.304 17.472,19.424ZM18.144,21.92C19.264,21.92 20.192,22.848 20.192,23.968C20.192,25.12 19.264,26.016 18.144,26.016C17.632,26.016 17.248,25.6 17.248,25.12C17.248,24.64 17.664,24.224 18.144,24.224C18.272,24.224 18.4,24.128 18.4,23.968C18.4,23.872 18.336,23.776 18.24,23.744L7.264,23.744C6.752,23.744 6.368,23.328 6.368,22.848C6.368,22.336 6.784,21.952 7.264,21.952L17.92,21.952C17.984,21.92 18.08,21.92 18.144,21.92Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M24.832,16.64L24.832,16.256C24.832,12.96 22.144,10.304 18.88,10.304C16.896,10.304 15.04,11.264 13.952,12.928C13.664,12.864 13.376,12.832 13.088,12.832C10.08,12.832 7.648,15.264 7.648,18.272C7.648,18.4 7.68,18.528 7.744,18.656C7.872,19.008 8.192,19.264 8.576,19.264C9.056,19.264 9.472,18.88 9.472,18.368C9.472,16.352 11.104,14.72 13.12,14.72C13.344,14.72 13.6,14.752 13.824,14.784C14.304,14.944 14.784,15.232 15.136,15.456C15.552,15.712 16.096,15.616 16.384,15.2C16.64,14.784 16.544,14.24 16.128,13.952C15.968,13.856 15.808,13.728 15.648,13.632C16.416,12.64 17.6,12.064 18.88,12.064C21.152,12.064 23.008,13.92 23.008,16.192C23.008,16.416 22.976,16.64 22.944,16.896C22.88,17.28 23.072,17.696 23.456,17.856C24.224,18.208 24.704,18.976 24.704,19.808C24.704,20.992 23.744,21.952 22.56,21.952L21.536,21.952C21.056,21.952 20.64,22.336 20.64,22.848C20.64,23.328 21.024,23.744 21.536,23.744L22.56,23.744C24.736,23.744 26.496,21.952 26.56,19.904C26.56,18.592 25.888,17.376 24.832,16.64Z"
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
    classes.push('weather-multi-color', 'weather-cloud-wind')
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
