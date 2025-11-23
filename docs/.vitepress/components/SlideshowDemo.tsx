import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: "2024-01",
    cardTitle: "Project Start",
    cardSubtitle: "Initial Phase",
    cardDetailedText: "Project kickoff and planning.",
  },
  {
    title: "2024-06",
    cardTitle: "Development",
    cardSubtitle: "Building Features",
    cardDetailedText: "Core development phase.",
  },
  {
    title: "2024-12",
    cardTitle: "Launch",
    cardSubtitle: "Product Release",
    cardDetailedText: "Successful launch to market.",
  },
];

export default function SlideshowDemo() {
  return (
    <div style={{ width: '100%', minHeight: '400px', margin: '20px 0' }}>
      <Chrono
        items={items}
        mode="horizontal"
        animation={{
          slideshow: {
            enabled: true,
            duration: 3000,
            type: 'fade'
          }
        }}
        interaction={{
          focusOnLoad: false
        }}
      />
    </div>
  );
}



