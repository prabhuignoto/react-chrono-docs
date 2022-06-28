import { defineConfig } from "vitepress";

export default defineConfig({
  title: "React Chrono",
  description: "Smart timeline component for React",
  lang: "en-US",
  lastUpdated: true,
  layout: "home",
  search: true,
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/prabhuignoto/react-chrono",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2020-present Prabhu Murthy",
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
            link: "/customize/button-texts",
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
        ],
      },
    ],
    carbonAds: {
      code: "CEAI427Y",
      placement: "react-chronovercelapp",
    },
  },
});
