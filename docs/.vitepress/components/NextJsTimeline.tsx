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
            <div className="h-[700px] w-full font-sans">
                <Chrono
                    items={items}
                    mode="vertical"
                    layout={{
                        cardWidth: 400,
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
