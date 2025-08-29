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
        d="M16.608,20.96C17.088,20.96 17.504,21.376 17.504,21.856L17.504,25.568C17.504,26.048 17.088,26.464 16.608,26.464C16.096,26.464 15.712,26.048 15.712,25.568L15.712,21.856C15.712,21.344 16.128,20.96 16.608,20.96ZM19.008,20.96C19.488,20.96 19.904,21.376 19.904,21.856L19.904,23.392C19.904,23.904 19.488,24.288 19.008,24.288C18.496,24.288 18.112,23.872 18.112,23.392L18.112,21.856C18.112,21.344 18.528,20.96 19.008,20.96ZM14.208,20.96C14.688,20.96 15.104,21.376 15.104,21.856L15.104,23.392C15.104,23.904 14.688,24.288 14.208,24.288C13.696,24.288 13.312,23.872 13.312,23.392L13.312,21.856C13.312,21.344 13.728,20.96 14.208,20.96Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M23.744,15.648L23.744,15.264C23.744,11.968 21.056,9.312 17.792,9.312C15.808,9.312 13.984,10.272 12.864,11.936C12.608,11.872 12.32,11.84 12.032,11.84C9.024,11.84 6.592,14.272 6.592,17.28L6.592,17.376C6.592,20.384 9.024,22.816 12.032,22.816C12.512,22.816 12.928,22.4 12.928,21.92C12.928,21.44 12.544,21.024 12.032,21.024C10.048,21.024 8.448,19.456 8.384,17.472C8.384,17.408 8.416,17.376 8.416,17.312C8.416,16.704 8.576,16.128 8.832,15.616C9.44,14.496 10.656,13.728 12.032,13.728C12.288,13.728 12.608,13.76 12.864,13.824C13.312,13.984 13.76,14.24 14.08,14.464C14.496,14.72 15.04,14.624 15.328,14.208C15.584,13.792 15.488,13.248 15.072,12.96C14.912,12.864 14.752,12.736 14.56,12.64C15.328,11.68 16.512,11.072 17.792,11.072C20.064,11.072 21.92,12.928 21.92,15.2C21.92,15.424 21.888,15.648 21.856,15.904C21.792,16.288 21.984,16.704 22.368,16.864C23.136,17.216 23.616,17.984 23.616,18.816C23.616,20 22.656,20.96 21.472,20.96C20.992,20.96 20.576,21.376 20.576,21.856C20.576,22.336 20.96,22.752 21.472,22.752C23.648,22.752 25.44,20.992 25.472,18.912C25.472,17.6 24.8,16.384 23.744,15.648Z"
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
    classes.push('weather-multi-color', 'weather-cloud-rain')
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
