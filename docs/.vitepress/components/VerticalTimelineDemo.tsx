import React from 'react';
import { Chrono } from 'react-chrono';
import type { ContentConfig, DisplayConfig, InteractionConfig, LayoutConfig } from 'react-chrono';

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

const layoutConfig: LayoutConfig = {
  cardHeight: 180,
  timelineHeight: '700px',
  responsive: {
    enabled: false
  }
};

const interactionConfig: InteractionConfig = {
  focusOnLoad: false,
  keyboardNavigation: true,
  pointClick: true
};

const displayConfig: DisplayConfig = {
  toolbar: {
    enabled: false
  },
  scrollable: true
};

const contentConfig: ContentConfig = {
  compactText: true
};

export default function VerticalTimelineDemo() {
  return (
    <div style={{ width: '100%', minHeight: '700px', margin: '20px 0' }}>
      <Chrono
        items={items}
        mode="vertical"
        layout={layoutConfig}
        interaction={interactionConfig}
        display={displayConfig}
        content={contentConfig}
      />
    </div>
  );
}



