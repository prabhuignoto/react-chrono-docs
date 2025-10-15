import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "React Chrono",
  description: "Smart timeline component for React",

  lastUpdated: true,

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
            text: "Font sizes",
            link: "/customize/font-sizes",
          },
          {
            text: "Theme",
            link: "/customize/theme",
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
            text: "Props",
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
