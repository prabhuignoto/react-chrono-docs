<template>
  <ClientOnly>
    <ReactWrapper :component="IconsComponent" />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
import ClientOnly from './ClientOnly.vue'
import ReactWrapper from './ReactWrapper.vue'
import IconsModule from './IconsDemo.tsx'

const IconsComponent = computed(() => {
  return IconsModule.default || IconsModule
})
</script>

