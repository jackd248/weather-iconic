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
        d="M22.656,13.248C20.512,13.248 18.784,14.976 18.784,17.12C18.784,17.6 19.168,18.016 19.68,18.016C20.16,18.016 20.576,17.632 20.576,17.12C20.576,15.968 21.504,15.04 22.656,15.04C23.808,15.04 24.736,15.968 24.736,17.12C24.736,18.272 23.808,19.2 22.656,19.2L8.192,19.2C7.712,19.2 7.296,19.584 7.296,20.096C7.296,20.576 7.68,20.992 8.192,20.992L22.656,20.992C24.8,20.992 26.528,19.264 26.528,17.12C26.528,14.976 24.8,13.248 22.656,13.248Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M17.504,16.576C17.504,17.696 16.576,18.624 15.456,18.624L4.576,18.624C4.064,18.624 3.68,18.208 3.68,17.728C3.68,17.216 4.096,16.832 4.576,16.832L15.456,16.832C15.584,16.832 15.712,16.736 15.712,16.576C15.712,16.448 15.616,16.32 15.456,16.32C14.944,16.32 14.56,15.904 14.56,15.424C14.56,14.944 14.976,14.528 15.456,14.528C16.576,14.528 17.504,15.456 17.504,16.576ZM19.328,21.696C20.448,21.696 21.376,22.624 21.376,23.744C21.376,24.864 20.48,25.792 19.328,25.792C18.816,25.792 18.432,25.376 18.432,24.896C18.432,24.416 18.848,24 19.328,24C19.456,24 19.584,23.904 19.584,23.744C19.584,23.584 19.488,23.488 19.328,23.488L11.168,23.488C10.656,23.488 10.272,23.072 10.272,22.592C10.272,22.112 10.688,21.696 11.168,21.696L19.328,21.696Z"
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
    classes.push('weather-multi-color', 'weather-wind')
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
