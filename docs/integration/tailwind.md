# Tailwind CSS Integration

React Chrono can be easily integrated with [Tailwind CSS](https://tailwindcss.com/) to create beautiful, responsive timelines. This guide will show you how to set up Tailwind CSS and use it to style your timeline components.

## Setup

First, install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your `tailwind.config.js` to include your content paths:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage with React Chrono

You can use Tailwind classes to style:
1. The container surrounding the timeline
2. Custom content rendered inside the timeline cards
3. Custom icons or markers

### Example

Here is a complete example of a component that uses Tailwind CSS for styling the container and custom content, while using React Chrono for the timeline logic.

<TailwindTimelineDemo />

### Code

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const items = [
    {
        title: "2024",
        cardTitle: "Tailwind Integration",
        cardSubtitle: "Seamlessly works with Tailwind CSS",
        cardDetailedText: "You can use Tailwind classes to style your surrounding components or even custom content within the timeline.",
    },
    {
        title: "2025",
        cardTitle: "Custom Components",
        cardSubtitle: "Full Control",
        cardDetailedText: "Render custom React components inside the timeline cards for maximum flexibility.",
    },
    {
        title: "2026",
        cardTitle: "Future Proof",
        cardSubtitle: "Always Evolving",
        cardDetailedText: "React Chrono continues to evolve with new features and better performance.",
    },
    {
        title: "2027",
        cardTitle: "Community Driven",
        cardSubtitle: "Open Source",
        cardDetailedText: "Built by the community, for the community. Contributions are always welcome.",
    },
];

const TailwindTimeline = () => {
    return (
        <div className="p-8 bg-slate-50 rounded-xl shadow-lg border border-slate-200 w-full max-w-5xl mx-auto">
            <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">
                    Project Roadmap
                </h2>
                <p className="text-slate-500">
                    Powered by <span className="text-blue-600 font-semibold">React Chrono</span> and <span className="text-teal-500 font-semibold">Tailwind CSS</span>
                </p>
            </div>

            <div className="h-[500px] w-full">
                <Chrono
                    items={items}
                    mode="alternating"
                    layout={{
                        cardWidth: 400,
                    }}
                    theme={{
                        primary: "#0f172a", // slate-900
                        secondary: "#3b82f6", // blue-500
                        cardBgColor: "#ffffff",
                        titleColor: "#0f172a",
                        titleColorActive: "#1e293b",
                    }}
                    style={{
                        classNames: {
                            card: 'shadow-md rounded-lg',
                        }
                    }}
                >
                    <div className="chrono-icons">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md">
                             {/* Icon SVG */}
                        </div>
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-md">
                             {/* Icon SVG */}
                        </div>
                         <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-md">
                             {/* Icon SVG */}
                        </div>
                         <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-md">
                             {/* Icon SVG */}
                        </div>
                    </div>
                </Chrono>
            </div>
        </div>
    );
};

export default TailwindTimeline;
```
