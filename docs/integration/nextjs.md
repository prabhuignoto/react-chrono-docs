# Next.js Integration

React Chrono works seamlessly with Next.js, but because it relies on browser-specific APIs (like `window` and `ResizeObserver`), it must be rendered on the client side.

## Setup

To use React Chrono in Next.js, you need to use [Dynamic Imports](https://nextjs.org/docs/advanced-features/dynamic-import) with SSR disabled.

### App Router (Next.js 13+)

In the App Router, you can create a client component wrapper or import it dynamically in your page.

```tsx
// components/Timeline.tsx
'use client'

import dynamic from 'next/dynamic'

const Chrono = dynamic(() => import('react-chrono').then((mod) => mod.Chrono), {
  ssr: false,
})

const Timeline = () => {
  const items = [{ title: "2024", cardTitle: "Hello Next.js" }]

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Chrono items={items} mode="vertical" />
    </div>
  )
}

export default Timeline
```

### Pages Router

For the Pages Router, the approach is similar:

```jsx
// pages/index.js
import dynamic from 'next/dynamic'

const Chrono = dynamic(() => import('react-chrono').then((mod) => mod.Chrono), {
  ssr: false,
})

export default function Home() {
  const items = [{ title: "2024", cardTitle: "Hello Next.js" }]

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Chrono items={items} mode="vertical" />
    </div>
  )
}
```

## Example

Here is a demo of how the component looks when integrated.

<NextJsTimelineDemo />

### Code

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const items = [
    {
        title: "1",
        cardTitle: "Install Package",
        cardSubtitle: "npm install react-chrono",
        cardDetailedText: "Start by installing the package in your Next.js project.",
    },
    {
        title: "2",
        cardTitle: "Dynamic Import",
        cardSubtitle: "next/dynamic",
        cardDetailedText: "Use dynamic imports with ssr: false to load the component on the client side only.",
    },
    {
        title: "3",
        cardTitle: "Render",
        cardSubtitle: "<Chrono />",
        cardDetailedText: "Render the component in your page or component. It will now work seamlessly without hydration errors.",
    },
    {
        title: "4",
        cardTitle: "Customize",
        cardSubtitle: "Props & Theme",
        cardDetailedText: "Pass props and theme objects to customize the look and feel of your timeline.",
    },
    {
        title: "5",
        cardTitle: "Deploy",
        cardSubtitle: "Vercel / Netlify",
        cardDetailedText: "Deploy your Next.js application with confidence, knowing your timeline works perfectly.",
    },
];

const NextJsTimeline = () => {
    return (
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200 w-full max-w-5xl mx-auto">
            <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                    Next.js Integration
                </h2>
                <p className="text-gray-400">
                    Client-side rendering with <span className="text-white font-semibold">next/dynamic</span>
                </p>
            </div>

            <div className="h-[700px] w-full font-sans">
                <Chrono
                    items={items}
                    mode="vertical"
                    layout={{
                        cardWidth: 200,
                        cardHeight: 400
                    }}
                    theme={{
                        primary: "#22c55e", // bright green - used for timeline line
                        secondary: "#16a34a", // darker green
                        cardBgColor: "#ffffff", // white cards
                        titleColor: "#22c55e",
                        titleColorActive: "#16a34a",
                        cardTitleColor: "#0f172a", // dark slate
                        cardSubtitleColor: "#475569", // slate-600
                        cardDetailsColor: "#64748b", // slate-500
                    }}
                    style={{
                        classNames: {
                            card: 'border border-gray-800',
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default NextJsTimeline;
```
