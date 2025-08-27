<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    :fill="color"
    :class="className"
    :style="style"
    :role="title ? 'img' : 'presentation'"
    :aria-hidden="title ? 'false' : 'true'"
    :aria-label="title"
    v-bind="$attrs"
  >
    <title v-if="title">{{ title }}</title>
    <path d="M16.384 7.744a8.29 8.29 0 0 1 8.288 8.288c.032 4.576-3.68 8.288-8.256 8.288s-8.32-3.712-8.32-8.288a8.29 8.29 0 0 1 8.288-8.288m.032 14.784a6.5 6.5 0 0 0 6.496-6.496 6.5 6.5 0 0 0-6.496-6.496 6.5 6.5 0 0 0-6.496 6.496 6.5 6.5 0 0 0 6.496 6.496m-2.048-6.432c0-1.888 2.048-4.256 2.048-4.256s2.016 2.336 2.048 4.256a2.02 2.02 0 0 1-2.048 2.048 2.04 2.04 0 0 1-2.048-2.048m2.656 0a.63.63 0 0 0-.608-.608.63.63 0 0 0-.608.608c0 .32.256.608.608.608a.63.63 0 0 0 .608-.608"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number | string
  color?: string
  className?: string
  style?: Record<string, any>
  title?: string
}

withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor'
})
</script>
