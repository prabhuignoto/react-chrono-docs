<template>
  <ClientOnly>
    <ReactWrapper :component="TimelineComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import AlternatingTimelineModule from './AlternatingTimelineDemo.tsx'

const TimelineComponent = computed(() => {
  return AlternatingTimelineModule.default || AlternatingTimelineModule
})
</script>

