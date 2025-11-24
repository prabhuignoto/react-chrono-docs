import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: "2024-01",
    cardTitle: "Project Start",
    cardSubtitle: "Initial Planning",
    cardDetailedText: "Project kickoff and initial planning phase.",
  },
  {
    title: "2024-06",
    cardTitle: "Development",
    cardSubtitle: "Core Features",
    cardDetailedText: "Development of core features and functionality.",
  },
  {
    title: "2024-12",
    cardTitle: "Launch",
    cardSubtitle: "Product Release",
    cardDetailedText: "Successful product launch to the market.",
  },
];

export default function BasicTimeline() {
  return (
    <div style={{ width: '100%', minHeight: '600px', margin: '20px 0' }}>
      <Chrono
        items={items}
        mode="vertical"
        interaction={{
          focusOnLoad: false
        }}
      />
    </div>
  );
}



