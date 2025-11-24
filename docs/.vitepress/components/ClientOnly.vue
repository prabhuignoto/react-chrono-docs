<template>
  <div v-if="mounted">
    <slot />
  </div>
  <div v-else>
    <!-- Placeholder while loading -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>




