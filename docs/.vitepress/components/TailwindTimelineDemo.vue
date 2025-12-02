<template>
  <ClientOnly>
    <ReactWrapper :component="TimelineComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import TailwindTimelineModule from './TailwindTimeline.tsx'

const TimelineComponent = computed(() => {
  return TailwindTimelineModule.default || TailwindTimelineModule
})
</script>
