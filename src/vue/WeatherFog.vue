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
    <path d="M21.984 18.88c.512 0 .896.416.896.896.032.48-.384.896-.864.896H10.592a.894.894 0 0 1-.896-.896c0-.512.416-.896.896-.896zM9.216 13.76a.894.894 0 0 1-.896-.896c0-.512.416-.896.896-.896h11.392c.512 0 .896.416.896.896.032.512-.384.896-.864.896zm14.912 2.848c.512 0 .896.416.896.896-.032.48-.416.896-.928.896H7.936a.894.894 0 0 1-.896-.896c0-.512.416-.896.896-.896zm-6.944-1.376c.032.512-.384.896-.896.896H6.752a.894.894 0 0 1-.896-.896c0-.512.416-.896.896-.896h9.536c.512 0 .896.416.896.896m8.128-.896c.512 0 .896.416.896.896a.875.875 0 0 1-.896.896h-6.944a.894.894 0 0 1-.896-.896c0-.512.416-.896.896-.896z"/>
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
