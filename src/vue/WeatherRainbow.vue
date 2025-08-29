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
        d="M7.872,11.552C7.456,11.264 7.36,10.72 7.648,10.304C7.936,9.888 8.48,9.792 8.896,10.08C10.848,11.424 12.352,13.28 13.28,15.488C13.472,15.936 13.248,16.48 12.8,16.672C12.672,16.672 12.544,16.704 12.448,16.704C12.096,16.704 11.776,16.48 11.616,16.16C10.848,14.272 9.536,12.704 7.872,11.552ZM9.408,9.632C8.992,9.344 8.896,8.8 9.184,8.384C9.472,7.968 10.016,7.872 10.432,8.16C12.928,9.92 14.848,12.512 15.84,15.424C16,15.904 15.744,16.416 15.264,16.576C15.232,16.608 15.136,16.608 15.04,16.608C14.656,16.608 14.304,16.384 14.176,16C13.312,13.44 11.616,11.168 9.408,9.632ZM11.104,7.872C10.72,7.584 10.624,7.008 10.912,6.624C11.2,6.24 11.776,6.144 12.16,6.432C14.816,8.416 16.864,11.104 18.016,14.208C18.176,14.688 17.952,15.2 17.472,15.36C17.376,15.392 17.248,15.424 17.152,15.424C16.8,15.424 16.448,15.2 16.32,14.848C15.296,12.064 13.472,9.632 11.104,7.872Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M23.52,15.552L23.52,15.2C23.52,11.904 20.832,9.248 17.568,9.248C17.088,9.248 16.672,9.664 16.672,10.144C16.672,10.624 17.056,11.04 17.568,11.04C19.84,11.04 21.696,12.896 21.696,15.168C21.696,15.392 21.664,15.616 21.632,15.872C21.568,16.256 21.76,16.672 22.144,16.832C22.912,17.184 23.392,17.952 23.392,18.784C23.392,19.968 22.432,20.928 21.248,20.928L11.776,20.928C9.856,20.928 8.256,19.392 8.16,17.472C8.16,17.408 8.192,17.376 8.192,17.312C8.192,16.416 8.512,15.584 9.088,14.912C9.408,14.528 9.376,13.952 8.992,13.632C8.608,13.312 8.032,13.344 7.712,13.728C6.848,14.72 6.368,16 6.368,17.312C6.368,20.32 8.8,22.752 11.808,22.752L21.248,22.752C23.424,22.752 25.184,20.992 25.248,18.784C25.248,17.504 24.576,16.288 23.52,15.552Z"
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
    classes.push('weather-multi-color', 'weather-rainbow')
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
