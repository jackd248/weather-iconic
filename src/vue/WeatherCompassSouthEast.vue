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
        d="M14.592,14.528C13.792,15.328 13.792,16.608 14.592,17.408C15.936,18.72 19.04,18.976 19.04,18.976C19.04,18.976 18.816,15.872 17.472,14.528C16.672,13.728 15.392,13.728 14.592,14.528ZM16.48,16.416C16.224,16.672 15.84,16.672 15.584,16.416C15.36,16.16 15.36,15.776 15.584,15.52C15.84,15.264 16.224,15.264 16.48,15.52C16.736,15.776 16.736,16.16 16.48,16.416Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M21.952,10.144C18.72,6.912 13.44,6.912 10.208,10.144C8.64,11.712 7.776,13.792 7.776,16C7.776,18.208 8.608,20.288 10.208,21.856C13.44,25.088 18.72,25.088 21.952,21.856C23.52,20.288 24.384,18.208 24.384,16C24.384,13.792 23.52,11.712 21.952,10.144ZM20.672,20.608C18.144,23.136 14.016,23.136 11.488,20.608C10.272,19.36 9.6,17.76 9.6,16C9.6,14.24 10.272,12.608 11.488,11.392C14.016,8.864 18.144,8.864 20.672,11.392C21.888,12.64 22.56,14.272 22.56,16C22.56,17.728 21.888,19.36 20.672,20.608Z"
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
    classes.push('weather-multi-color', 'weather-compass-south-east')
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
