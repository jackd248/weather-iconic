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
    <path d="M15.36 12.448c-.512 0-.96-.416-.96-.896V10.24c0-.48.448-.896.96-.896s.96.384.96.896v1.312c0 .48-.448.896-.96.896m5.344 2.176c-.224 0-.448-.096-.64-.256a.91.91 0 0 1 0-1.28l.928-.928a.91.91 0 0 1 1.28 0 .91.91 0 0 1 0 1.28l-.928.928c-.192.16-.416.256-.64.256m3.808 3.616c.512 0 .896.288.896.8s-.384.8-.896.8H6.72c-.48 0-.896-.288-.896-.8s.384-.8.896-.8h3.488c.384-2.56 2.592-4.544 5.248-4.544s4.864 1.984 5.248 4.544zm-12.48 0h6.848a3.5 3.5 0 0 0-3.424-2.752 3.5 3.5 0 0 0-3.424 2.752m10.4 2.56c.48 0 .896.448.864.96 0 .512-.384.96-.896.96H8.768c-.48 0-.896-.448-.896-.96s.384-.96.896-.96zm-14.08-7.68-.32-.256a.91.91 0 0 1 0-1.28.91.91 0 0 1 1.28 0l.288.288a1 1 0 0 1 .672-.288c.512 0 .928.384.928.896v1.312c0 .48-.416.928-.928.928H8.96c-.48 0-.896-.416-.896-.928 0-.256.096-.512.288-.672"/>
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
