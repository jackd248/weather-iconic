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
        d="M15.84,23.104C11.68,23.104 8.32,19.744 8.32,15.584C8.32,19.744 11.712,23.104 15.84,23.104ZM17.497,10.098C19.89,10.795 21.64,13.005 21.64,15.621C21.64,18.794 19.05,21.306 15.877,21.306C12.703,21.306 10.14,18.794 10.14,15.621C10.14,12.464 12.689,9.898 15.84,9.871L15.84,9.856C16.416,9.856 16.973,9.941 17.497,10.098ZM16.288,21.28C19.232,21.056 21.568,18.592 21.568,15.584C21.568,12.576 19.2,10.08 16.224,9.888C15.04,10.912 14.24,13.056 14.24,15.552C14.24,18.112 15.008,20.288 16.288,21.28Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M8.32,15.584C8.32,11.424 11.68,8.064 15.84,8.064C20,8.064 23.36,11.424 23.36,15.584C23.36,19.712 20,23.104 15.84,23.104C11.712,23.104 8.32,19.744 8.32,15.584ZM17.497,10.098C16.973,9.941 16.416,9.856 15.84,9.856L15.84,9.871C12.689,9.898 10.14,12.464 10.14,15.621C10.14,18.794 12.703,21.306 15.877,21.306C19.05,21.306 21.64,18.794 21.64,15.621C21.64,13.005 19.89,10.795 17.497,10.098Z"
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
    classes.push('weather-multi-color', 'weather-moon-waxing-gibbous')
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
