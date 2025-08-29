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
        d="M16.8,19.168C17.28,19.168 17.696,19.584 17.696,20.064L17.696,22.016C17.696,22.496 17.312,22.912 16.8,22.912C16.288,22.912 15.904,22.496 15.904,22.016L15.904,20.064C15.904,19.552 16.32,19.168 16.8,19.168Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M20.064,19.968C20.288,20.384 20.576,21.088 20.576,21.824C20.64,24.032 18.912,25.728 16.8,25.728C14.688,25.728 12.96,24 12.96,21.888C12.96,21.088 13.152,20.288 13.568,19.712L13.568,9.632C13.568,7.776 15.04,6.272 16.832,6.272C18.624,6.272 20.096,7.776 20.096,9.632C20.096,9.696 20.096,9.76 20.064,9.824L20.064,19.968ZM16.768,23.872C17.888,23.872 18.784,22.976 18.784,21.856C18.784,21.536 18.624,21.056 18.368,20.64C18.208,20.416 18.208,20.128 18.272,19.872L18.272,9.632C18.272,8.8 17.6,8.064 16.8,8.064C16,8.064 15.36,8.768 15.36,9.632L15.36,20.064C15.36,20.32 15.232,20.576 15.04,20.736C14.848,21.056 14.752,21.44 14.752,21.856C14.752,22.976 15.648,23.872 16.768,23.872Z"
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
    classes.push('weather-multi-color', 'weather-thermometer-cold')
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
