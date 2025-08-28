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
        d="M17.664,20.256L16.896,20.256L18.4,18.08C18.688,17.664 18.592,17.12 18.176,16.832C17.76,16.544 17.216,16.64 16.928,17.056L14.432,20.64C14.24,20.928 14.208,21.28 14.368,21.568C14.528,21.856 14.848,22.048 15.168,22.048L16.032,22.048L14.4,24.608C14.144,25.024 14.272,25.6 14.688,25.856C14.848,25.952 15.008,25.984 15.168,25.984C15.456,25.984 15.744,25.824 15.936,25.6L18.432,21.664C18.624,21.376 18.624,21.024 18.464,20.736C18.304,20.448 17.984,20.256 17.664,20.256Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M23.52,14.688L23.52,14.336C23.52,11.04 20.832,8.384 17.568,8.384C15.968,8.384 14.4,9.056 13.312,10.24C12.736,9.6 12.384,8.736 12.384,7.808C12.384,7.68 12.416,7.584 12.416,7.488C12.448,7.2 12.32,6.912 12.096,6.72C11.872,6.56 11.584,6.496 11.296,6.56C8.928,7.232 7.296,9.376 7.296,11.808C7.296,12.256 7.36,12.704 7.456,13.12C6.72,14.08 6.336,15.232 6.336,16.416C6.336,19.424 8.768,21.856 11.776,21.856C12.256,21.856 12.672,21.472 12.64,20.928C12.64,20.448 12.256,20.032 11.744,20.032C9.824,20.032 8.224,18.496 8.128,16.576C8.128,16.512 8.16,16.48 8.16,16.416C8.16,15.968 8.256,15.52 8.416,15.104C9.408,16.416 10.976,17.248 12.736,17.248C15.552,17.248 17.952,15.04 18.144,12.256C18.176,11.968 18.048,11.68 17.824,11.488C17.6,11.328 17.312,11.264 17.024,11.328C16.672,11.424 16.352,11.456 16.032,11.456C15.616,11.456 15.2,11.392 14.816,11.232C15.552,10.56 16.544,10.176 17.568,10.176C19.84,10.176 21.696,12.032 21.696,14.304C21.696,14.528 21.664,14.752 21.632,15.008C21.568,15.392 21.76,15.808 22.144,15.968C22.912,16.32 23.392,17.088 23.392,17.92C23.392,19.104 22.432,20.064 21.248,20.064C20.768,20.064 20.352,20.448 20.352,20.96C20.352,21.44 20.736,21.856 21.248,21.856C23.424,21.856 25.184,20.096 25.248,17.92C25.248,16.64 24.576,15.424 23.52,14.688ZM16.032,13.216C15.52,14.528 14.208,15.424 12.736,15.424C10.72,15.424 9.088,13.792 9.088,11.776C9.088,10.56 9.696,9.44 10.688,8.768C11.168,11.296 13.376,13.248 16.032,13.216Z"
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
    classes.push('weather-multi-color', 'weather-moon-cloud-lightning')
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
