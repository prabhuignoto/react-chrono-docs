import { defineConfig } from "vitepress";
import react from "@vitejs/plugin-react";

export default defineConfig({
  lang: "en-US",
  title: "React Chrono",
  description: "Smart timeline component for React",

  lastUpdated: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],

  vite: {
    plugins: [
      react({
        include: /\.(jsx|tsx|vue)$/,
        babel: {
          plugins: []
        }
      })
    ],
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-chrono']
    }
  },

  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/prabhuignoto/react-chrono",
      },
      {
        icon: "twitter",
        link: "https://twitter.com/prabhumurthy2",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © " + new Date().getFullYear() + " Prabhu Murthy",
    },
    editLink: {
      text: "Edit this page on GitHub",
      pattern:
        "https://github.com/prabhuignoto/react-chrono-docs/edit/main/docs/:path",
    },
    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "Getting Started",
            link: "/introduction/getting-started",
          },
          {
            text: "Migrating to v3.0",
            link: "/introduction/migration-v3",
          },
        ],
      },
      {
        text: "Modes",
        items: [
          {
            text: "Horizontal",
            link: "/timeline-modes/horizontal",
          },
          {
            text: "Vertical",
            link: "/timeline-modes/vertical",
          },
        ],
      },
      {
        text: "Features",
        items: [
          {
            text: "Custom content",
            link: "/features/custom-content",
          },
          {
            text: "Icons",
            link: "/features/icons",
          },
          {
            text: "Slideshow",
            link: "/features/slideshow",
          },
          {
            text: "Embedding Media",
            link: "/features/embed-media",
          },
          {
            text: "Dark Mode",
            link: "/features/dark-mode",
          },
          {
            text: "Google Fonts",
            link: "/features/google-fonts",
          },
          {
            text: "Internationalization (i18n)",
            link: "/features/internationalization",
          },
          {
            text: "Outline",
            link: "/features/outline",
          },
          {
            text: "Flip layout",
            link: "/features/flip-layout",
          },
          {
            text: "Nested Timelines",
            link: "/features/nested-timelines",
          },
          {
            text: "Text Overlay",
            link: "/features/text-overlay",
          },
          {
            text: "Control Panel",
            link: "/features/control-panel",
          },
          {
            text: "Timeline Point",
            link: "/features/timeline-point",
          },
          {
            text: "Timeline Titles",
            link: "/features/timeline-titles",
          },
          {
            text: "Render HTML",
            link: "/features/render-html",
          },
          {
            text: "Search",
            link: "/features/search",
          },
        ],
      },
      {
        text: "Customize",
        items: [
          {
            text: "Theme",
            link: "/customize/theme",
          },
          {
            text: "Complete Theme Properties",
            link: "/customize/theme-properties",
          },
          {
            text: "Font sizes",
            link: "/customize/font-sizes",
          },
          {
            text: "Button Texts",
            link: "/customize/button-text",
          },
          {
            text: "Card dimensions",
            link: "/customize/card-dimensions",
          },
        ],
      },
      {
        text: "API",
        items: [
          {
            text: "Complete Props Reference",
            link: "/api/props-reference",
          },
          {
            text: "Props (Legacy)",
            link: "/api/props",
          },
          {
            text: "Grouped Configuration",
            link: "/api/grouped-config",
          },
        ],
      },
    ],
    carbonAds: {
      code: "CEAI427Y",
      placement: "react-chronovercelapp",
    },
    algolia: {
      apiKey: "d785f8f9320a9690616ca9c8f12ca159",
      indexName: "react-chrono",
      appId: "LPXS8A6ILH",
    },
  },
});
