<template>
  <ClientOnly>
    <ReactWrapper :component="TimelineComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import NextJsTimelineModule from './NextJsTimeline.tsx'

const TimelineComponent = computed(() => {
  return NextJsTimelineModule.default || NextJsTimelineModule
})
</script>
