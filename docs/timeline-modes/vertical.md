# Vertical Modes

## Vertical Timeline

In VERTICAL mode, events are displayed in a vertical orientation. Each event is represented by a card that contains a title, subtitle, and content. The cards are stacked on top of each other, with the latest event at the top.

Example:

```jsx
import { Chrono } from 'react-chrono';

const items = [
  {
    title: "January 2022",
    cardTitle: "Event 1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
  }
];

const VerticalTimeline = () => {
  return (
    <Chrono
      items={items}
      mode="VERTICAL"
    >
<img
        src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
        alt="chennai-super-kings"
      />
      <div>
        <h1>Mumbai Indians</h1>
        <p>IPL Team winner for the year 2019 is Mumbai Indians.</p>
      </div>
</Chrono>
  );
};

export default VerticalTimeline;
```

![vertical](vertical.png)

## Vertically Alternating Timeline

In VERTICAL_ALTERNATING mode, events are displayed in a vertical orientation, but with alternating positions. This creates a zigzag pattern that can be visually appealing. Each event is represented by a card that contains a title, subtitle, and content. The cards are stacked on top of each other, with the latest event at the top.

Example:

```jsx
import { Chrono } from "react-chrono";

const items = [
  {
    title: "January 2022",
    cardTitle: "Event 1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
  }
];

const VerticalAlternatingTimeline = () => {
  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      itemWidth={150}
    />
  );
};

export default VerticalAlternatingTimeline;
```

![vertical_alternating](vertical_alternating.png)
