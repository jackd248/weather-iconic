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
        d="M13.088,13.024C13.088,13.024 13.312,16.128 14.656,17.472C15.456,18.272 16.736,18.272 17.536,17.472C18.336,16.672 18.336,15.392 17.536,14.592C16.192,13.248 13.088,13.024 13.088,13.024ZM16.512,16.448C16.256,16.704 15.872,16.704 15.616,16.448C15.36,16.192 15.36,15.808 15.616,15.552C15.872,15.296 16.256,15.296 16.512,15.552C16.768,15.808 16.768,16.224 16.512,16.448Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M21.92,10.144C18.688,6.912 13.408,6.912 10.176,10.144C8.608,11.712 7.744,13.792 7.744,16C7.744,18.208 8.608,20.288 10.176,21.856C13.408,25.088 18.688,25.088 21.92,21.856C23.488,20.288 24.352,18.208 24.352,16C24.352,13.76 23.488,11.68 21.92,10.144ZM20.64,20.608C18.112,23.136 13.984,23.136 11.456,20.608C10.24,19.36 9.568,17.728 9.568,16C9.568,14.24 10.24,12.608 11.456,11.392C13.984,8.864 18.112,8.864 20.64,11.392C21.856,12.64 22.528,14.24 22.528,16C22.528,17.76 21.856,19.392 20.64,20.608Z"
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
    classes.push('weather-multi-color', 'weather-compass-north-west')
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
