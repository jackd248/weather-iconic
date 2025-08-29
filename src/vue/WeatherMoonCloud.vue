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
        d="M7.642,14.735C7.567,14.37 7.52,13.985 7.52,13.6C7.52,11.168 9.152,8.992 11.52,8.352C11.808,8.288 12.096,8.352 12.32,8.512C12.544,8.672 12.672,8.992 12.64,9.28C12.64,9.376 12.608,9.472 12.608,9.6C12.608,10.528 12.96,11.392 13.536,12.032C13.537,12.031 13.538,12.029 13.54,12.028C13.998,12.58 14.462,12.814 15.04,13.024C15.424,13.184 15.84,13.248 16.256,13.248C16.576,13.248 16.896,13.216 17.248,13.12C17.536,13.056 17.824,13.12 18.048,13.28C18.272,13.472 18.4,13.76 18.368,14.048C18.176,16.832 15.776,19.04 12.96,19.04C11.2,19.04 9.632,18.208 8.64,16.896C8.64,16.897 8.639,16.898 8.639,16.899C8.135,16.214 7.845,15.566 7.642,14.735ZM10.912,10.56C9.92,11.232 9.312,12.352 9.312,13.568C9.312,15.584 10.944,17.216 12.96,17.216C14.432,17.216 15.744,16.32 16.32,15.008C13.632,15.04 11.392,13.12 10.912,10.56Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M13.54,12.028C14.628,10.878 16.162,10.208 17.792,10.208C21.056,10.208 23.744,12.864 23.744,16.16L23.744,16.512C24.8,17.248 25.472,18.464 25.472,19.776C25.408,21.92 23.648,23.68 21.472,23.68L12,23.68C8.992,23.68 6.56,21.248 6.56,18.24L6.56,18.208C6.56,17.024 6.944,15.872 7.68,14.912C7.667,14.854 7.654,14.795 7.642,14.735C7.845,15.566 8.135,16.214 8.639,16.899C8.479,17.315 8.38,17.798 8.351,18.236C8.347,18.3 8.352,18.304 8.352,18.368C8.416,20.32 10.016,21.888 12,21.888L21.472,21.888C22.656,21.888 23.616,20.928 23.616,19.744C23.616,18.912 23.136,18.144 22.368,17.792C21.984,17.632 21.792,17.216 21.856,16.832C21.888,16.576 21.92,16.352 21.92,16.128C21.92,13.856 20.064,12 17.792,12C16.768,12 15.808,12.352 15.04,13.024C14.462,12.814 13.998,12.58 13.54,12.028Z"
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
    classes.push('weather-multi-color', 'weather-moon-cloud')
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
