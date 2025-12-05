import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
    {
        title: "1",
        cardTitle: "Event 1",
        cardSubtitle: "First Event",
        cardDetailedText: "This is the first event on the timeline.",
    },
    {
        title: "2",
        cardTitle: "Event 2",
        cardSubtitle: "Second Event",
        cardDetailedText: "This is the second event on the timeline.",
    },
    {
        title: "3",
        cardTitle: "Event 3",
        cardSubtitle: "Third Event",
        cardDetailedText: "This is the third event on the timeline.",
    },
];

export default function FlipLayoutVerticalDemo() {
    return (
        <div style={{ width: '100%', minHeight: '600px', margin: '20px 0 40px 0' }}>
            <Chrono
                items={items}
                mode="vertical"
                interaction={{
                    focusOnLoad: false
                }}
                style={{
                    googleFonts: {
                        fontFamily: 'Inter',
                        weights: [400, 500, 600, 700],
                        elements: {
                            title: {
                                weight: 'regular',
                                size: '1rem'
                            },
                            cardTitle: {
                                weight: 'bold',
                                size: '4rem'
                            },
                            cardSubtitle: {
                                weight: 'medium',
                                size: '1rem'
                            },
                            cardText: {
                                weight: 'regular',
                                size: '0.9rem'
                            }
                        },
                        display: 'swap',
                        preconnect: true
                    },
                    fontSizes: {
                        cardTitle: '1.25rem',
                        cardSubtitle: '1rem',
                        cardText: '0.9rem',
                        title: '1.1rem',
                    }
                }}
                layout={{
                    positioning: {
                        flipLayout: true
                    }
                }}
            />
        </div>
    );
}
