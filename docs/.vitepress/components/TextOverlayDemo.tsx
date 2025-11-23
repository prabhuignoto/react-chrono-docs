import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
    {
        title: "2021",
        cardTitle: "Exploring New Horizons",
        cardSubtitle: "A journey into the unknown",
        cardDetailedText: "This phase involved extensive research and exploration, uncovering new possibilities and challenges.",
        media: {
            type: "IMAGE",
            name: "Discovery",
            source: {
                url: "https://picsum.photos/seed/discovery/800/400",
            },
        },
    },
    {
        title: "2022",
        cardTitle: "Breakthrough Ideas",
        cardSubtitle: "Transforming concepts into reality",
        cardDetailedText: "Key innovations were developed during this period, leading to significant advancements.",
        media: {
            type: "IMAGE",
            name: "Innovation",
            source: {
                url: "https://picsum.photos/seed/innovation/800/400",
            },
        },
    },
    {
        title: "2023",
        cardTitle: "Implementation",
        cardSubtitle: "Bringing ideas to life",
        cardDetailedText: "Successfully implemented breakthrough solutions and delivered results.",
        media: {
            type: "IMAGE",
            name: "Implementation",
            source: {
                url: "https://picsum.photos/seed/implement/800/400",
            },
        },
    },
];

export default function TextOverlayDemo() {
    return (
        <div style={{ width: '100%', height: '700px', margin: '20px 0 40px 0' }}>
            <Chrono
                items={items}
                mode="vertical"
                content={{
                    textOverlay: true
                }}
            />
        </div>
    );
}
