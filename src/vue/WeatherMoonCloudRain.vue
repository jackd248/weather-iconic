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
        d="M17.344,22.176C17.824,22.176 18.24,22.592 18.24,23.072L18.24,26.784C18.24,27.264 17.824,27.68 17.344,27.68C16.832,27.68 16.448,27.264 16.448,26.784L16.448,23.072C16.448,22.56 16.864,22.176 17.344,22.176ZM19.744,22.176C20.224,22.176 20.64,22.592 20.64,23.072L20.64,24.608C20.64,25.12 20.224,25.504 19.744,25.504C19.232,25.504 18.848,25.088 18.848,24.608L18.848,23.072C18.848,22.56 19.264,22.176 19.744,22.176ZM14.944,22.176C15.424,22.176 15.84,22.592 15.84,23.072L15.84,24.608C15.84,25.12 15.424,25.504 14.944,25.504C14.432,25.504 14.048,25.088 14.048,24.608L14.048,23.072C14.048,22.56 14.464,22.176 14.944,22.176Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M24.352,16.672L24.352,16.288C24.352,12.992 21.664,10.336 18.4,10.336C16.768,10.336 15.264,11.008 14.144,12.128C13.568,11.488 13.248,10.656 13.248,9.728C13.248,9.6 13.28,9.504 13.28,9.408C13.312,9.12 13.184,8.832 12.96,8.64C12.736,8.48 12.448,8.416 12.16,8.48C9.792,9.12 8.16,11.296 8.16,13.728C8.16,14.176 8.224,14.624 8.32,15.04C7.648,15.936 7.264,16.992 7.2,18.112C7.168,18.208 7.168,18.272 7.168,18.368C7.168,21.376 9.6,23.808 12.608,23.808C13.12,23.808 13.504,23.392 13.504,22.912C13.504,22.432 13.12,22.016 12.608,22.016C10.656,22.016 9.088,20.48 8.96,18.592C8.992,18.528 8.992,18.432 9.024,18.336C9.024,17.888 9.12,17.44 9.28,17.024C10.272,18.336 11.84,19.168 13.6,19.168C16.416,19.168 18.784,16.96 19.008,14.176C19.04,13.888 18.912,13.6 18.688,13.408C18.464,13.248 18.176,13.184 17.888,13.248C17.536,13.344 17.216,13.376 16.896,13.376C16.448,13.376 16.064,13.312 15.68,13.152C16.448,12.48 17.408,12.128 18.4,12.128C20.672,12.128 22.528,13.984 22.528,16.256C22.528,16.48 22.496,16.704 22.464,16.96C22.4,17.344 22.592,17.76 22.976,17.92C23.744,18.272 24.224,19.04 24.224,19.872C24.224,21.056 23.264,22.016 22.08,22.016C21.6,22.016 21.184,22.432 21.184,22.912C21.184,23.392 21.568,23.808 22.08,23.808C24.256,23.808 26.048,22.016 26.08,19.936C26.08,18.624 25.408,17.408 24.352,16.672ZM16.928,15.136C16.384,16.448 15.072,17.344 13.6,17.344C11.584,17.344 9.952,15.712 9.952,13.696C9.952,12.48 10.56,11.36 11.552,10.688C12,13.248 14.24,15.168 16.928,15.136Z"
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
    classes.push('weather-multi-color', 'weather-moon-cloud-rain')
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
