import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: "2024-01",
    cardTitle: "Project Start",
    cardSubtitle: "Initial Phase",
    cardDetailedText: "Project kickoff and planning phase.",
    media: {
      type: "IMAGE",
      name: "Project start",
      source: {
        url: "https://picsum.photos/id/1018/1000/600",
      },
    },
  },
  {
    title: "2024-06",
    cardTitle: "Development",
    cardSubtitle: "Building Features",
    cardDetailedText: "Core development phase with team collaboration.",
    media: {
      type: "IMAGE",
      name: "Development",
      source: {
        url: "https://picsum.photos/id/1015/1000/600",
      },
    },
  },
];

export default function EmbedMediaDemo() {
  return (
    <div style={{ width: '100%', height: '700px', margin: '20px 0 40px 0' }}>
      <Chrono items={items} mode="vertical" />
    </div>
  );
}


