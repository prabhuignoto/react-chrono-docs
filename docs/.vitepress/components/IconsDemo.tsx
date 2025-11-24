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

export default function IconsDemo() {
  return (
    <div style={{ width: '100%', minHeight: '600px', margin: '20px 0 40px 0' }}>
      <Chrono
        items={items}
        mode="alternating"
        interaction={{
          focusOnLoad: false
        }}
      >
        <div className="chrono-icons">
          <img src="https://img.icons8.com/ios-filled/100/000000/rocket.png" alt="Rocket" />
          <img src="https://img.icons8.com/ios-filled/100/000000/code.png" alt="Code" />
          <img src="https://img.icons8.com/ios-filled/100/000000/checkmark.png" alt="Checkmark" />
        </div>
      </Chrono>
    </div>
  );
}



