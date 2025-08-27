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
    <path d="M15.84 13.728a.894.894 0 0 1-.896-.896V11.52c0-.512.416-.896.896-.896.512 0 .896.416.896.896v1.28c0 .512-.416.928-.896.928m-5.888 1.92-.928-.928a.91.91 0 0 1 0-1.28.91.91 0 0 1 1.28 0l.928.928a.91.91 0 0 1 0 1.28c-.192.16-.416.256-.64.256s-.448-.096-.64-.256m11.136.256c-.224 0-.448-.096-.64-.256a.91.91 0 0 1 0-1.28l.928-.928a.91.91 0 0 1 1.28 0 .91.91 0 0 1 0 1.28l-.928.928c-.192.16-.416.256-.64.256m3.84 3.584c.512 0 .896.416.896.896s-.416.896-.928.896H7.104a.894.894 0 0 1-.896-.896c0-.48.416-.896.896-.896h3.488a5.31 5.31 0 0 1 5.248-4.544c2.688 0 4.864 1.984 5.248 4.544zm-9.088-2.752a3.5 3.5 0 0 0-3.424 2.752h6.848a3.5 3.5 0 0 0-3.424-2.752m6.944 5.408c.512 0 .896.416.896.896s-.384.896-.864.896H9.152a.894.894 0 0 1-.896-.896c0-.48.416-.896.896-.896z"/>
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
