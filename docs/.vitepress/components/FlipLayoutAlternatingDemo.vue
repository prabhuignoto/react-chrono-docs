<template>
  <ClientOnly>
    <ReactWrapper :component="FlipLayoutAlternatingComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import FlipLayoutAlternatingModule from './FlipLayoutAlternatingDemo.tsx'

const FlipLayoutAlternatingComponent = computed(() => {
  return FlipLayoutAlternatingModule.default || FlipLayoutAlternatingModule
})
</script>
