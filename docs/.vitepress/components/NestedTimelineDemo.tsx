import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
    {
        title: "1",
        cardTitle: "Project Alpha",
        cardSubtitle: "Major Initiative",
        cardDetailedText: "Launched our flagship project with multiple phases.",
        items: [
            {
                title: "January",
                cardTitle: "Planning Phase",
                cardDetailedText: "Assembled team and defined project scope.",
            },
            {
                title: "February",
                cardTitle: "Development",
                cardDetailedText: "Started core development and prototyping.",
            },
        ],
    },
    {
        title: "2",
        cardTitle: "Project Beta",
        cardSubtitle: "Product Launch",
        cardDetailedText: "Successfully launched to market.",
    },
];

export default function NestedTimelineDemo() {
    return (
        <div style={{ width: '100%', minHeight: '600px', margin: '20px 0 40px 0' }}>
            <Chrono
                items={items}
                mode="vertical"
                interaction={{
                    focusOnLoad: false
                }}
                nestedCardHeight={150}
            />
        </div>
    );
}
