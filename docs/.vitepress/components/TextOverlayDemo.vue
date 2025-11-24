<template>
  <ClientOnly>
    <ReactWrapper :component="TextOverlayComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import TextOverlayModule from './TextOverlayDemo.tsx'

const TextOverlayComponent = computed(() => {
  return TextOverlayModule.default || TextOverlayModule
})
</script>
