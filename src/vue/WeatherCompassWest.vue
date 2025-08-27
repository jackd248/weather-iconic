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
    <path d="M21.92 10.112a8.23 8.23 0 0 1 2.432 5.856 8.29 8.29 0 0 1-8.288 8.288 8.23 8.23 0 0 1-5.856-2.432C8.64 20.256 7.776 18.208 7.776 16c0-4.576 3.712-8.32 8.288-8.32 2.208 0 4.288.864 5.856 2.432m-5.856 12.352a6.5 6.5 0 0 0 6.496-6.496c0-1.728-.672-3.36-1.888-4.608s-2.848-1.888-4.608-1.888C12.48 9.504 9.568 12.416 9.568 16c0 1.728.672 3.36 1.888 4.576s2.848 1.888 4.608 1.888m0-8.512c1.152 0 2.048.896 2.048 2.048a2.04 2.04 0 0 1-2.048 2.048C14.208 18.048 11.84 16 11.84 16s2.368-2.048 4.224-2.048m.032 2.656c.32 0 .608-.256.608-.608s-.32-.608-.64-.608a.63.63 0 0 0-.608.608c0 .32.32.608.64.608"/>
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
