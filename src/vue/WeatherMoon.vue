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
        d="M22.496 16.128c.224.16.32.448.288.704-.256 3.328-3.104 5.952-6.464 5.952a6.5 6.5 0 0 1-6.496-6.496c0-2.912 1.952-5.472 4.768-6.272a.86.86 0 0 1 .736.16c.224.16.32.448.288.704 0 .128-.032.256-.032.416a4.86 4.86 0 0 0 4.864 4.864c.416 0 .864-.064 1.312-.192a.86.86 0 0 1 .736.16M16.32 21.12c2.112 0 3.968-1.408 4.608-3.36-3.52.288-6.56-2.336-6.944-5.728a4.85 4.85 0 0 0-2.528 4.256c0 2.656 2.176 4.832 4.864 4.832"
        :fill="multiColor ? (primaryColor || 'currentColor') : color"
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
    classes.push('weather-multi-color', 'weather-moon')
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
