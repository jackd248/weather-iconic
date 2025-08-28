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
        d="M14.656,14.528C13.312,15.84 13.088,18.976 13.088,18.976C13.088,18.976 16.192,18.752 17.536,17.408C18.336,16.608 18.336,15.328 17.536,14.528C16.736,13.728 15.456,13.728 14.656,14.528ZM16.512,16.416C16.256,16.672 15.872,16.672 15.616,16.416C15.36,16.16 15.36,15.776 15.616,15.52C15.872,15.264 16.288,15.296 16.512,15.52C16.768,15.776 16.768,16.16 16.512,16.416Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M21.92,10.112C20.352,8.544 18.272,7.68 16.064,7.68C13.824,7.68 11.744,8.544 10.208,10.112C6.976,13.344 6.976,18.624 10.208,21.856C11.776,23.424 13.856,24.288 16.064,24.288C18.272,24.288 20.352,23.424 21.92,21.856C25.152,18.624 25.152,13.344 21.92,10.112ZM20.672,20.608C19.424,21.824 17.792,22.496 16.064,22.496C14.336,22.496 12.704,21.824 11.456,20.608C8.928,18.08 8.928,13.952 11.456,11.424C12.704,10.208 14.304,9.536 16.064,9.536C17.824,9.536 19.456,10.208 20.672,11.424C23.2,13.952 23.2,18.08 20.672,20.608Z"
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
    classes.push('weather-multi-color', 'weather-compass-south-west')
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
