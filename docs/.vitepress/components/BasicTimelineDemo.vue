<template>
  <ClientOnly>
    <ReactWrapper :component="TimelineComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import BasicTimelineModule from './BasicTimeline.tsx'

const TimelineComponent = computed(() => {
  return BasicTimelineModule.default || BasicTimelineModule
})
</script>

