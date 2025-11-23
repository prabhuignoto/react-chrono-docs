import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: "2024-01",
    cardTitle: "Project Launch",
    cardSubtitle: "New Beginning",
    cardDetailedText: "Started our exciting new project with the team.",
  },
  {
    title: "2024-06",
    cardTitle: "Milestone Reached",
    cardSubtitle: "Success",
    cardDetailedText: "Achieved our first major milestone ahead of schedule.",
  },
];

export default function DarkModeDemo() {
  return (
    <div style={{ width: '100%', height: '600px', margin: '20px 0 40px 0' }}>
      <Chrono
        items={items}
        mode="vertical"
        darkMode={{
          enabled: true,
          showToggle: true
        }}
      />
    </div>
  );
}


