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
        d="M24.16,20.384L14.496,20.384C13.984,20.384 13.6,19.968 13.6,19.488C13.6,18.976 14.016,18.592 14.496,18.592L24.16,18.592C24.672,18.592 25.056,19.008 25.056,19.488C25.056,19.968 24.64,20.384 24.16,20.384ZM14.496,17.632L5.984,17.632C5.472,17.632 5.088,17.216 5.088,16.736C5.088,16.256 5.504,15.84 5.984,15.84L14.496,15.84C15.008,15.84 15.392,16.256 15.392,16.736C15.392,17.216 14.976,17.632 14.496,17.632ZM20.032,14.624L8.257,14.622C7.777,14.589 7.424,14.188 7.424,13.728C7.424,13.216 7.84,12.832 8.32,12.832L20,12.832C20.512,12.832 20.896,13.248 20.896,13.728C20.928,14.208 20.512,14.624 20.032,14.624Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M8.544,15.84C8.544,15.424 8.608,15.008 8.672,14.624L8.32,14.624C8.299,14.624 8.278,14.623 8.257,14.622L16.864,14.624C17.76,15.328 18.88,15.744 20.096,15.744C20.576,15.744 21.024,15.68 21.504,15.552C21.792,15.488 22.08,15.552 22.304,15.712C22.528,15.904 22.656,16.192 22.624,16.48C22.56,17.216 22.368,17.92 22.112,18.592L20.128,18.592C20.32,18.272 20.48,17.92 20.608,17.536C18.048,17.728 15.744,16.544 14.368,14.624L10.464,14.624C10.368,15.008 10.304,15.424 10.304,15.84L8.544,15.84ZM9.248,12.832C10.144,11.04 11.744,9.664 13.728,9.088C14.016,9.024 14.304,9.088 14.528,9.248C14.752,9.44 14.88,9.728 14.848,10.016C14.848,10.176 14.816,10.304 14.816,10.464C14.816,11.328 15.04,12.128 15.392,12.832L13.408,12.832C13.248,12.352 13.12,11.84 13.056,11.296C12.352,11.68 11.776,12.192 11.296,12.832L9.248,12.832ZM21.056,20.384C19.744,21.952 17.792,22.976 15.616,22.976C12.32,22.976 9.536,20.704 8.768,17.632L10.592,17.632C11.328,19.712 13.28,21.184 15.584,21.184C16.576,21.184 17.536,20.896 18.368,20.384L21.056,20.384Z"
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
    classes.push('weather-multi-color', 'weather-moon-fog')
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
