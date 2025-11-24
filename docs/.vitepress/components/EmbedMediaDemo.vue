<template>
  <ClientOnly>
    <ReactWrapper :component="MediaComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import EmbedMediaModule from './EmbedMediaDemo.tsx'

const MediaComponent = computed(() => {
  return EmbedMediaModule.default || EmbedMediaModule
})
</script>

