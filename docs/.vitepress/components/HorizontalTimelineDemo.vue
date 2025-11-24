<template>
  <ClientOnly>
    <ReactWrapper :component="TimelineComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import HorizontalTimelineModule from './HorizontalTimelineDemo.tsx'

const TimelineComponent = computed(() => {
  return HorizontalTimelineModule.default || HorizontalTimelineModule
})
</script>

