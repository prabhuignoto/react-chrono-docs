<template>
  <ClientOnly>
    <ReactWrapper :component="DarkModeComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import DarkModeModule from './DarkModeDemo.tsx'

// Ensure we get the default export from the React component
const DarkModeComponent = computed(() => {
  return DarkModeModule.default || DarkModeModule
})
</script>

