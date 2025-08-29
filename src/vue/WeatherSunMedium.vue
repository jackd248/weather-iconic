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
        d="M11.104,19.52C10.848,18.88 10.688,18.144 10.688,17.408C10.688,14.464 13.056,12.064 16,12.064C18.912,12.064 21.312,14.464 21.312,17.408C21.312,18.112 21.184,18.88 20.896,19.52L18.816,19.52C19.296,18.88 19.52,18.176 19.52,17.408C19.52,15.456 17.952,13.856 16,13.856C14.048,13.856 12.48,15.424 12.48,17.376C12.48,18.144 12.704,18.88 13.152,19.488L13.152,19.52L11.104,19.52ZM16,10.848C15.488,10.848 15.04,10.432 15.04,9.952L15.04,8.64C15.04,8.16 15.488,7.744 16,7.744C16.512,7.744 16.96,8.128 16.96,8.64L16.96,9.952C16.96,10.432 16.512,10.848 16,10.848ZM10.112,12.768L9.184,11.84C8.832,11.488 8.832,10.912 9.184,10.56C9.536,10.208 10.112,10.208 10.464,10.56L11.392,11.488C11.744,11.84 11.744,12.416 11.392,12.768C11.2,12.928 10.976,13.024 10.752,13.024C10.528,13.024 10.272,12.928 10.112,12.768ZM7.264,18.24C6.752,18.24 6.368,17.792 6.368,17.28C6.368,16.768 6.752,16.32 7.264,16.32L8.576,16.32C9.056,16.32 9.472,16.768 9.472,17.28C9.472,17.792 9.088,18.24 8.576,18.24L7.264,18.24ZM22.528,17.28C22.528,16.768 22.944,16.32 23.424,16.32L24.736,16.32C25.216,16.32 25.632,16.768 25.632,17.28C25.632,17.792 25.248,18.24 24.736,18.24L23.424,18.24C22.944,18.24 22.528,17.792 22.528,17.28ZM21.248,13.024C21.024,13.024 20.8,12.928 20.608,12.768C20.256,12.416 20.256,11.84 20.608,11.488L21.536,10.56C21.888,10.208 22.464,10.208 22.816,10.56C23.168,10.912 23.168,11.488 22.816,11.84L21.888,12.768C21.696,12.928 21.472,13.024 21.248,13.024Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M7.264,19.52L25.056,19.52C25.568,19.52 25.984,19.808 25.984,20.32C25.984,20.832 25.6,21.12 25.088,21.12L7.264,21.12C6.784,21.12 6.368,20.832 6.368,20.32C6.368,19.808 6.752,19.52 7.264,19.52ZM22.976,22.08C23.456,22.08 23.84,22.528 23.84,23.04C23.84,23.552 23.456,24 22.944,24L9.312,24C8.832,24 8.416,23.552 8.416,23.04C8.416,22.528 8.8,22.08 9.312,22.08L22.976,22.08Z"
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
    classes.push('weather-multi-color', 'weather-sun-medium')
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
