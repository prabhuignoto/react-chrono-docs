<template>
  <ClientOnly>
    <ReactWrapper :component="FlipLayoutVerticalComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import FlipLayoutVerticalModule from './FlipLayoutVerticalDemo.tsx'

const FlipLayoutVerticalComponent = computed(() => {
  return FlipLayoutVerticalModule.default || FlipLayoutVerticalModule
})
</script>
