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
        d="M16,8.736C16.512,8.736 16.896,9.152 16.896,9.632L16.896,22.144C16.896,22.624 16.512,23.04 16,23.04C15.488,23.04 15.104,22.624 15.104,22.144L15.104,9.632C15.104,9.12 15.52,8.736 16,8.736Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M19.264,19.968C19.488,20.384 19.776,21.088 19.776,21.824C19.84,24.032 18.112,25.728 16,25.728C13.888,25.728 12.16,24 12.16,21.888C12.16,21.088 12.352,20.32 12.736,19.744L12.736,9.632C12.736,7.776 14.208,6.272 16,6.272C17.792,6.272 19.264,7.776 19.264,9.632L19.264,19.968ZM15.968,23.872C17.088,23.872 17.984,22.976 17.984,21.856C17.984,21.536 17.824,21.056 17.568,20.64C17.408,20.416 17.408,20.128 17.472,19.872L17.472,9.632C17.472,8.8 16.8,8.064 16,8.064C15.2,8.064 14.528,8.768 14.528,9.632L14.528,20.064C14.528,20.32 14.4,20.544 14.24,20.704C14.048,21.024 13.952,21.408 13.952,21.856C13.952,22.976 14.848,23.872 15.968,23.872Z"
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
    classes.push('weather-multi-color', 'weather-thermometer-hot')
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
