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
        d="M10.592,19.488C10.976,16.896 13.184,14.944 15.84,14.944C18.528,14.944 20.704,16.928 21.088,19.488L19.264,19.488C18.912,17.92 17.536,16.736 15.84,16.736C14.144,16.736 12.768,17.92 12.416,19.488L10.592,19.488ZM15.84,13.728C15.328,13.728 14.944,13.312 14.944,12.832L14.944,11.52C14.944,11.008 15.36,10.624 15.84,10.624C16.352,10.624 16.736,11.04 16.736,11.52L16.736,12.8C16.736,13.312 16.32,13.728 15.84,13.728ZM9.952,15.648L9.024,14.72C8.672,14.368 8.672,13.792 9.024,13.44C9.376,13.088 9.952,13.088 10.304,13.44L11.232,14.368C11.584,14.72 11.584,15.296 11.232,15.648C11.04,15.808 10.816,15.904 10.592,15.904C10.368,15.904 10.144,15.808 9.952,15.648ZM21.088,15.904C20.864,15.904 20.64,15.808 20.448,15.648C20.096,15.296 20.096,14.72 20.448,14.368L21.376,13.44C21.728,13.088 22.304,13.088 22.656,13.44C23.008,13.792 23.008,14.368 22.656,14.72L21.728,15.648C21.536,15.808 21.312,15.904 21.088,15.904Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M7.104,19.488L24.928,19.488C25.44,19.488 25.824,19.904 25.824,20.384C25.824,20.864 25.408,21.28 24.896,21.28L7.104,21.28C6.592,21.28 6.208,20.864 6.208,20.384C6.208,19.904 6.624,19.488 7.104,19.488ZM22.784,22.144C23.296,22.144 23.68,22.56 23.68,23.04C23.68,23.52 23.296,23.936 22.816,23.936L9.152,23.936C8.64,23.936 8.256,23.52 8.256,23.04C8.256,22.56 8.672,22.144 9.152,22.144L22.784,22.144Z"
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
    classes.push('weather-multi-color', 'weather-sun-low')
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
