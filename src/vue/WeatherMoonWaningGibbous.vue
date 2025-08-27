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
    <path d="M16.192 8.64a7.477 7.477 0 0 1 7.488 7.488c0 4.128-3.36 7.488-7.488 7.488s-7.488-3.36-7.488-7.488 3.36-7.488 7.488-7.488m-5.696 7.456c0 2.976 2.336 5.44 5.28 5.664 1.216-.992 1.92-3.136 1.952-5.632 0-2.528-.736-4.704-1.984-5.696-2.912.224-5.248 2.688-5.248 5.664"/>
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
