<template>
  <ClientOnly>
    <ReactWrapper :component="TimelineComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import VerticalTimelineModule from './VerticalTimelineDemo.tsx'

const TimelineComponent = computed(() => {
  return VerticalTimelineModule.default || VerticalTimelineModule
})
</script>

