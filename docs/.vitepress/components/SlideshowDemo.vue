<template>
  <ClientOnly>
    <ReactWrapper :component="SlideshowComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import SlideshowModule from './SlideshowDemo.tsx'

const SlideshowComponent = computed(() => {
  return SlideshowModule.default || SlideshowModule
})
</script>

