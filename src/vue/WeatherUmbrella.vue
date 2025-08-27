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
    <path d="M23.744 14.08c.768 1.792.768 3.616-.032 5.152a.88.88 0 0 1-.8.48 1 1 0 0 1-.416-.096l-5.28-2.72-2.08 4-.032.032c-.096.256-.128.512-.032.736.096.256.288.48.512.608a1.1 1.1 0 0 0 1.44-.448c.224-.448.768-.608 1.216-.384s.608.768.384 1.216c-.512 1.024-1.504 1.568-2.56 1.568-.448 0-.896-.096-1.312-.32a2.865 2.865 0 0 1-1.216-3.872c.032-.032.064-.096.096-.128l1.984-3.808-5.344-2.752c-.448-.224-.608-.768-.384-1.216.8-1.568 2.304-2.656 4.224-3.04 1.824-.384 3.84-.064 5.664.864s3.232 2.4 3.968 4.128m-1.312 3.488c.192-.864.096-1.824-.32-2.816a6.4 6.4 0 0 0-.704-1.184c-.032.96-.256 2.016-.704 3.104zm-7.968-6.72c-1.024.224-1.888.672-2.464 1.376l1.76.896c.608-.992 1.312-1.792 2.08-2.368-.48-.032-.928 0-1.376.096m2.784 4.064 1.824.96c.832-2.08.704-3.936-.128-4.32-.8-.416-2.4.544-3.584 2.4z"/>
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
