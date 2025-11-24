<template>
  <ClientOnly>
    <ReactWrapper :component="TimelineComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import SearchDemoModule from './SearchDemo.tsx'

const TimelineComponent = computed(() => {
  return SearchDemoModule.default || SearchDemoModule
})
</script>
