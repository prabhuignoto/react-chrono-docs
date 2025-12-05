<template>
  <div ref="containerRef" style="width: 100%;"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { createRoot } from 'react-dom/client'
import React, { createElement } from 'react'
// Styles are imported globally in theme/index.js, no need to import here
// import chronoStyles from 'react-chrono/dist/style.css?raw'

const props = defineProps({
  component: {
    type: [Object, Function, Promise],
    required: true
  }
})

const containerRef = ref(null)
let root = null
let mountNode = null
// Shadow DOM removed to fix popover event handling
// let shadowRoot = null
let Component = null

const renderComponent = () => {
  if (!root || !containerRef.value || !Component) return
  
  try {
    root.render(createElement(Component))
  } catch (error) {
    console.error('Error rendering React component:', error)
    if (containerRef.value) {
      containerRef.value.innerHTML = `<div style="padding: 20px; color: red; border: 1px solid red; border-radius: 4px;">Error rendering component: ${error.message}</div>`
    }
  }
}

// Styles are now handled globally via theme/index.js, so this function is no longer needed
// const ensureChronoStyles = (targetRoot) => {
//   if (!targetRoot || targetRoot.querySelector('[data-react-chrono-shadow-style]')) return
//   const styleEl = document.createElement('style')
//   styleEl.setAttribute('data-react-chrono-shadow-style', '')
//   styleEl.textContent = chronoStyles
//   targetRoot.appendChild(styleEl)
// }

const ensureReactRoot = () => {
  if (!containerRef.value) return

  const host = containerRef.value
  // Disable Shadow DOM to fix popover menu click-outside detection
  // Shadow DOM isolates events and prevents document-level event listeners from working
  // const supportsShadowDom = typeof host.attachShadow === 'function'

  // Always use regular DOM mounting instead of Shadow DOM
  if (!mountNode) {
    mountNode = host
  }

  if (!root && mountNode) {
    root = createRoot(mountNode)
  }
}

const loadComponent = async () => {
  try {
    let resolvedComponent = props.component
    
    // Handle computed ref (from Vue)
    if (resolvedComponent && typeof resolvedComponent.value !== 'undefined') {
      resolvedComponent = resolvedComponent.value
    }
    
    // Handle Promise (dynamic import)
    if (resolvedComponent && typeof resolvedComponent.then === 'function') {
      const module = await resolvedComponent
      resolvedComponent = module.default || module
    }
    
    // Ensure we have a valid React component
    if (resolvedComponent && typeof resolvedComponent === 'function') {
      Component = resolvedComponent
    } else if (resolvedComponent && resolvedComponent.default) {
      Component = resolvedComponent.default
    } else if (resolvedComponent) {
      Component = resolvedComponent
    }
    
    ensureReactRoot()

    if (Component) {
      renderComponent()
    } else {
      console.warn('ReactWrapper: No valid component found', props.component)
    }
  } catch (error) {
    console.error('Error loading React component:', error)
    if (containerRef.value) {
      containerRef.value.innerHTML = `<div style="padding: 20px; color: red; border: 1px solid red; border-radius: 4px;">Error loading component: ${error.message}</div>`
    }
  }
}

onMounted(async () => {
  await loadComponent()
})

onUnmounted(() => {
  if (root) {
    root.unmount()
    root = null
  }
})

watch(() => props.component, async () => {
  await loadComponent()
}, { deep: true })
</script>

