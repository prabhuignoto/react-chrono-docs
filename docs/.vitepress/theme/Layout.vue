<template>
  <div>
    <DefaultLayout />
    <a
      v-show="isHomePage"
      href="https://github.com/prabhuignoto/react-chrono"
      target="_blank"
      rel="noopener noreferrer"
      class="star-button"
      aria-label="Star this project on GitHub"
    >
      <svg
        class="star-icon"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
        ></path>
      </svg>
      <span class="star-text">Star</span>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const DefaultLayout = DefaultTheme.Layout
const route = useRoute()

const isHomePage = computed(() => {
  const path = route.path
  return path === '/' || path === '/index.html' || path.endsWith('/index')
})
</script>

<style>
.star-button {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.125rem;
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: 1px solid var(--vp-button-brand-border);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-family: var(--vp-font-family-base);
  line-height: 1;
}

.star-button:hover {
  background: var(--vp-button-brand-hover-bg);
  border-color: var(--vp-button-brand-hover-border);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: var(--vp-button-brand-text);
}

.star-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.star-text {
  white-space: nowrap;
}

@media (max-width: 768px) {
  .star-button {
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 0.875rem;
    font-size: 0.8125rem;
  }
  
  .star-icon {
    width: 14px;
    height: 14px;
  }
}

@media (max-width: 640px) {
  .star-button {
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.5rem 0.75rem;
  }
  
  .star-text {
    display: none;
  }
  
  .star-icon {
    width: 18px;
    height: 18px;
  }
}
</style>

