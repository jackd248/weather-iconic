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
        d="M14.368,16.096C14.368,17.216 15.264,18.144 16.416,18.144C17.568,18.144 18.464,17.248 18.464,16.096C18.432,14.176 16.416,11.84 16.416,11.84C16.416,11.84 14.368,14.208 14.368,16.096ZM17.024,16.096C17.024,16.416 16.736,16.704 16.416,16.704C16.064,16.704 15.808,16.416 15.808,16.096C15.808,15.776 16.096,15.488 16.416,15.488C16.736,15.488 17.024,15.776 17.024,16.096Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M16.384,7.744C11.808,7.744 8.096,11.456 8.096,16.032C8.096,20.608 11.84,24.32 16.416,24.32C20.992,24.32 24.704,20.608 24.672,16.032C24.672,11.456 20.96,7.744 16.384,7.744ZM16.416,22.528C12.832,22.528 9.92,19.616 9.92,16.032C9.92,12.448 12.832,9.536 16.416,9.536C20,9.536 22.912,12.448 22.912,16.032C22.912,19.616 20,22.528 16.416,22.528Z"
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
    classes.push('weather-multi-color', 'weather-compass')
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
