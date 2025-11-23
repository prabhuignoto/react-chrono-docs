<template>
  <ClientOnly>
    <ReactWrapper :component="NestedTimelineComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import NestedTimelineModule from './NestedTimelineDemo.tsx'

const NestedTimelineComponent = computed(() => {
  return NestedTimelineModule.default || NestedTimelineModule
})
</script>
