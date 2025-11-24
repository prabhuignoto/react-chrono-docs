import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: "Jan 2024",
    cardTitle: "Event 1",
    cardSubtitle: "First Event",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    title: "Feb 2024",
    cardTitle: "Event 2",
    cardSubtitle: "Second Event",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "Mar 2024",
    cardTitle: "Event 3",
    cardSubtitle: "Third Event",
    cardDetailedText: "This is the third event on the timeline.",
  },
];

export default function HorizontalTimelineDemo() {
  return (
    <div style={{ width: '100%', height: '350px', margin: '20px 0' }}>
      <Chrono
        items={items}
        mode="horizontal"
        layout={{
          itemWidth: 150
        }}
        interaction={{
          focusOnLoad: false
        }}
      />
    </div>
  );
}



