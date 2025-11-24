# Nested Timelines

React Chrono supports creating nested timelines, allowing you to embed a timeline within a card of a parent timeline. This feature is available in all timeline modes (`vertical`, `alternating`, `horizontal`, `horizontal-all`) and is ideal for organizing and displaying complex, hierarchical data.

## Data-Driven Nesting

Nested timelines are configured directly within your data. To create a nested timeline, include an `items` array property within a specific timeline item object of the parent timeline. This inner `items` array will define the events for the nested timeline, which will then be rendered inside the corresponding parent card.

### Interactive Demo

<NestedTimelineDemo />


## Example Usage

Here's how to implement a nested timeline:

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const mainTimelineItems = [
  {
    title: "Main Event - Q1 2023",
    cardTitle: "Project Alpha Kickoff",
    cardSubtitle: "Start of a major initiative",
    // Nested timeline items for this main event
    items: [
      {
        title: "Jan 2023",
        cardTitle: "Phase 1: Planning",
        cardSubtitle: "Initial planning and team formation",
        cardDetailedText: "Detailed planning sessions, resource allocation, and defining project scope.",
        media: {
          type: "IMAGE",
          source: {
            url: "https://picsum.photos/seed/phase1/800/400", // Placeholder image
          },
        },
      },
      {
        title: "Feb 2023",
        cardTitle: "Phase 2: Prototyping",
        cardSubtitle: "Development of initial prototypes",
        cardDetailedText: "Building and testing proof-of-concept models.",
        media: {
          type: "IMAGE",
          source: {
            url: "https://picsum.photos/seed/phase2/800/400", // Placeholder image
          },
        },
      },
    ],
  },
  {
    title: "Main Event - Q2 2023",
    cardTitle: "Project Beta Launch",
    // This item does not have a nested timeline
  }
];

function MyNestedTimeline() {
  return (
    <Chrono
      items={mainTimelineItems}
      mode="vertical"
      nestedCardHeight={250} // Optional: Adjust height of cards within the nested timeline
    />
  );
}

export default MyNestedTimeline;
```

::: details Using v2.x Syntax (Still Supported)
```jsx
<Chrono
  items={mainTimelineItems}
  mode="vertical"
  nestedCardHeight={250}
/>
```
:::

In this example:
- The "Project Alpha Kickoff" card in the main timeline will contain a nested timeline defined by its `items` property.
- The "Project Beta Launch" card will render as a standard card since it does not have an `items` property.



## Derived Attributes

Certain visual attributes for the nested timeline, such as `mediaHeight` and `contentDetailsHeight`, are automatically derived from the parent timeline's configuration. This helps maintain a consistent look and feel between the parent and nested timelines.

Nested timelines offer a powerful way to present detailed sub-events or related information within the context of a larger event, making complex datasets more manageable and understandable.
