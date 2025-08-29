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
        d="M13.724,18.913L11.552,18.88C11.264,18.24 11.104,17.6 11.072,16.96L10.816,16.96C10.336,16.96 9.92,16.512 9.92,16C9.92,15.488 10.304,15.04 10.816,15.04L11.264,15.04C11.456,14.4 11.776,13.92 12.16,13.44L12.032,13.408C11.68,13.056 11.68,12.48 12.032,12.128C12.384,11.776 12.96,11.776 13.312,12.128L13.504,12.32C13.984,12.032 14.4,11.84 15.04,11.744L15.04,11.392C15.04,10.912 15.488,10.496 16,10.496C16.512,10.496 16.96,10.88 16.96,11.392L16.96,11.744C17.6,11.84 18.016,12.064 18.528,12.384L18.784,12.032C19.104,11.648 19.68,11.584 20.064,11.904C20.416,12.224 20.48,12.768 20.16,13.152L19.872,13.472C20.288,13.952 20.576,14.432 20.768,15.072L21.216,15.072C21.696,15.072 22.112,15.52 22.112,16.032C22.112,16.544 21.728,16.992 21.216,16.992L20.96,16.992C20.896,17.632 20.736,18.272 20.48,18.912L18.343,18.904C18.882,18.266 19.168,17.501 19.168,16.704C19.168,16.096 18.976,15.424 18.656,14.944L17.44,16.384C17.472,16.48 17.472,16.608 17.472,16.704C17.472,17.504 16.8,18.176 16,18.176C15.2,18.176 14.528,17.504 14.528,16.704C14.528,15.904 15.2,15.232 16,15.232L16.064,15.232L17.28,13.76C16.896,13.6 16.448,13.504 16,13.504C14.272,13.504 12.864,14.944 12.864,16.672C12.864,17.472 13.212,18.273 13.724,18.913Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M16,8.32C20.576,8.32 24.288,12.032 24.288,16.608C24.288,21.184 20.576,24.896 16,24.896C11.424,24.896 7.712,21.184 7.712,16.608C7.712,12.032 11.424,8.32 16,8.32ZM20.48,18.912L22.144,18.912C22.368,17.952 22.496,17.44 22.496,16.704C22.496,13.088 19.584,10.112 16,10.112C12.416,10.112 9.504,13.088 9.536,16.672C9.536,17.44 9.664,17.92 9.888,18.88L11.552,18.88L13.696,18.912L18.336,18.912C18.338,18.909 18.34,18.907 18.343,18.904L20.48,18.912ZM16,23.072C18.112,23.072 20,22.08 21.152,20.48L10.816,20.48C12,22.08 13.888,23.072 16,23.072Z"
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
    classes.push('weather-multi-color', 'weather-barometer')
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
