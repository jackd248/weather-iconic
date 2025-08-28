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
        d="M14.016,16C14.016,17.12 14.912,18.048 16.064,18.048C17.216,18.048 18.112,17.152 18.112,16C18.08,14.144 16.064,11.776 16.064,11.776C16.064,11.776 14.016,14.144 14.016,16ZM16.672,16.032C16.672,16.352 16.384,16.64 16.064,16.64C15.712,16.64 15.456,16.352 15.456,16.032C15.456,15.712 15.744,15.424 16.064,15.424C16.384,15.424 16.672,15.712 16.672,16.032Z"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
      />
    <path 
        d="M16.064,7.68C13.824,7.68 11.776,8.576 10.208,10.144C8.64,11.712 7.776,13.792 7.776,16C7.776,20.576 11.488,24.288 16.064,24.288C18.272,24.288 20.352,23.424 21.92,21.856C23.488,20.288 24.352,18.208 24.352,16C24.352,11.424 20.64,7.68 16.064,7.68ZM20.672,20.608C19.424,21.824 17.792,22.496 16.064,22.496C12.48,22.496 9.568,19.584 9.568,16C9.568,14.24 10.24,12.608 11.456,11.392C12.704,10.176 14.336,9.504 16.064,9.504C19.648,9.504 22.56,12.416 22.56,16C22.56,17.76 21.92,19.392 20.672,20.608Z"
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
    classes.push('weather-multi-color', 'weather-compass-north')
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
