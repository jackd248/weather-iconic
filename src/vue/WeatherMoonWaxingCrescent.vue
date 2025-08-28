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
        d="M18.329,10.514C20.722,11.211 22.472,13.421 22.472,16.037C22.472,19.21 19.882,21.722 16.709,21.722C13.535,21.722 10.972,19.21 10.972,16.037C10.972,12.88 13.521,10.314 16.672,10.287L16.672,10.272C17.248,10.272 17.805,10.357 18.329,10.514ZM17.568,21.632C20.288,21.184 22.4,18.816 22.4,16C22.4,13.152 20.32,10.816 17.568,10.368C18.592,11.68 19.232,13.696 19.232,16C19.232,18.304 18.592,20.32 17.568,21.632Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M16.672,8.48C20.832,8.48 24.192,11.872 24.192,16C24.192,20.128 20.832,23.52 16.672,23.52C12.544,23.52 9.152,20.16 9.152,16C9.152,11.84 12.512,8.48 16.672,8.48ZM18.329,10.514C17.805,10.357 17.248,10.272 16.672,10.272L16.672,10.287C13.521,10.314 10.972,12.88 10.972,16.037C10.972,19.21 13.535,21.722 16.709,21.722C19.882,21.722 22.472,19.21 22.472,16.037C22.472,13.421 20.722,11.211 18.329,10.514Z"
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
    classes.push('weather-multi-color', 'weather-moon-waxing-crescent')
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
