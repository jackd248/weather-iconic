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
    <path d="M16.736 8.096c.256.192 6.016 5.024 6.016 10.656a6.583 6.583 0 0 1-6.592 6.592c-3.648 0-6.592-2.976-6.592-6.592 0-5.632 5.792-10.464 6.016-10.656.32-.288.8-.288 1.152 0m-.576 15.456c2.656 0 4.8-2.144 4.8-4.8 0-3.84-3.424-7.456-4.8-8.768-1.376 1.312-4.8 4.928-4.8 8.768 0 2.656 2.144 4.8 4.8 4.8m-1.184-7.52s1.76 1.44 1.76 3.072c0 .96-.8 1.76-1.76 1.76s-1.76-.8-1.76-1.76c0-1.632 1.76-3.072 1.76-3.072"/>
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
