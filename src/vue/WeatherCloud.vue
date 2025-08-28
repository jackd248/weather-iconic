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
        d="M23.392 15.584c1.056.736 1.728 1.952 1.728 3.264a3.975 3.975 0 0 1-3.968 3.904H11.68a5.435 5.435 0 0 1-5.44-5.44v-.032a5.435 5.435 0 0 1 5.44-5.44c.288 0 .544.032.8.096 1.088-1.696 2.944-2.688 4.96-2.688 3.264 0 5.952 2.656 5.952 5.952zm-2.24 5.408c1.184 0 2.144-.96 2.144-2.144 0-.832-.48-1.6-1.248-1.952-.384-.16-.576-.576-.512-.96.032-.256.064-.48.064-.704a4.14 4.14 0 0 0-4.128-4.128 4.13 4.13 0 0 0-3.232 1.536c.16.128.352.224.48.32a.92.92 0 0 1 .256 1.248.92.92 0 0 1-1.248.256c-.288-.192-.704-.448-1.12-.608-.032 0-.064-.032-.096-.032s-.064-.032-.096-.032a3 3 0 0 0-.736-.096c-.992 0-1.888.416-2.56 1.056a3.66 3.66 0 0 0-1.056 2.56c0 .064-.032.096-.032.16a3.64 3.64 0 0 0 3.648 3.52z"
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
    classes.push('weather-multi-color', 'weather-cloud')
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
