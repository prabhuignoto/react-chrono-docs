# Flip Layout

The `flipLayout` prop provides the ability to reverse the orientation of the timeline in `VERTICAL` and `VERTICAL_ALTERNATING` modes. This is particularly useful for right-to-left (RTL) language support or when a reversed chronological display is preferred.

By default, timelines are rendered left-to-right (or top-to-bottom for vertical modes). Enabling `flipLayout` reverses this orientation.

## Usage

To flip the timeline layout, add the `flipLayout` boolean prop to the `<Chrono>` component and set it to `true`.

```jsx
import React from 'react';
import { Chrono } from 'react-chrono';

const events = [
  {
    title: 'Event 1',
    cardTitle: 'First Event',
    // other event data
  },
  {
    title: 'Event 2',
    cardTitle: 'Second Event',
  },
  {
    title: 'Event 3',
    cardTitle: 'Third Event',
  },
];

function FlippedTimeline() {
  return (
    <Chrono
      items={events}
      mode="VERTICAL" // Or VERTICAL_ALTERNATING
      flipLayout={true} // Enable flipped layout
    />
  );
}

export default FlippedTimeline;
```

When `flipLayout` is `true`:
- In `VERTICAL` mode, the timeline content (cards) will appear on the right side of the timeline bar (or left, if it was originally right).
- In `VERTICAL_ALTERNATING` mode, the alternating pattern will be mirrored. For example, if cards normally start on the left, they will start on the right.

## Visual Examples

### Vertical Mode Flipped

In `VERTICAL` mode, if the cards are typically on the left of the central line, `flipLayout` will move them to the right.

![Flipped Vertical Layout](../assets/flip-layout.png)

### Vertical Alternating Mode Flipped

In `VERTICAL_ALTERNATING` mode, the sequence of card placement is reversed. If the first card is usually on the left, `flipLayout` will place it on the right, and subsequent cards will alternate accordingly.

![Flipped Vertical Alternating Layout](../assets/flip_layout_vertical_alternating.png)

The `flipLayout` prop offers a simple way to adapt the timeline's visual flow to different layout requirements or preferences.
