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
        d="M16.064,13.92C14.912,13.92 14.016,14.816 14.016,15.968C14.016,17.824 16.064,20.192 16.064,20.192C16.064,20.192 18.112,17.824 18.112,15.968C18.112,14.848 17.216,13.92 16.064,13.92ZM16.064,16.544C15.744,16.544 15.456,16.256 15.456,15.936C15.456,15.616 15.712,15.328 16.064,15.328C16.416,15.328 16.672,15.616 16.672,15.936C16.672,16.256 16.384,16.544 16.064,16.544Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M16.032,7.68C13.824,7.68 11.744,8.544 10.176,10.112C8.608,11.68 7.776,13.76 7.776,16C7.776,20.576 11.488,24.288 16.064,24.288C18.272,24.288 20.352,23.424 21.92,21.856C23.488,20.288 24.352,18.208 24.352,16C24.352,11.424 20.64,7.68 16.032,7.68ZM20.64,20.576C19.424,21.824 17.792,22.496 16.032,22.464C12.448,22.464 9.536,19.552 9.536,15.968C9.536,14.208 10.176,12.576 11.424,11.36C12.672,10.144 14.304,9.472 16.032,9.472C19.616,9.472 22.528,12.384 22.528,15.968C22.528,17.728 21.856,19.36 20.64,20.576Z"
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
    classes.push('weather-multi-color', 'weather-compass-south')
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
