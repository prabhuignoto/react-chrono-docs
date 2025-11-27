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

            <div className="h-[700px] w-full">
                <Chrono
                    items={items}
                    mode="alternating"
                    layout={{
                        cardWidth: 100,
                        cardHeight: 100,
                        pointSize: 35
                    }}
                    theme={{
                        primary: "#fff", // slate-900
                        secondary: "#3b82f6", // blue-500
                        cardBgColor: "#ffffff",
                        titleColor: "#0f172a",
                        titleColorActive: "#1e293b",
                        iconColor: "#fff",
                    }}
                    style={{
                        classNames: {
                            card: 'shadow-md rounded-lg',
                        }
                    }}
                >
                    <div className="chrono-icons">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" fill="#fff" />
                            </svg>
                        </div>
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" fill="#fff" />
                            </svg>
                        </div>
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" fill="#fff" />
                            </svg>
                        </div>
                        <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" fill="#fff" />
                            </svg>
                        </div>
                    </div>
                </Chrono>
            </div>


        </div>
    );
};

export default TailwindTimeline;
