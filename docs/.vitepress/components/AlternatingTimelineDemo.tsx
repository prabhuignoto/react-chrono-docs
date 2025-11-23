import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: "2024-01",
    cardTitle: "Event 1",
    cardSubtitle: "First Event",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    title: "2024-06",
    cardTitle: "Event 2",
    cardSubtitle: "Second Event",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "2024-12",
    cardTitle: "Event 3",
    cardSubtitle: "Third Event",
    cardDetailedText: "This is the third event on the timeline.",
  },
];

export default function AlternatingTimelineDemo() {
  return (
    <div style={{ width: '100%', height: '500px', margin: '20px 0' }}>
      <Chrono
        items={items}
        mode="alternating"
        layout={{
          itemWidth: 150
        }}
      />
    </div>
  );
}


