# Flip Layout

The flip layout feature provides the ability to reverse the orientation of the timeline in `vertical` and `alternating` modes. This is particularly useful for right-to-left (RTL) language support or when a reversed chronological display is preferred.

By default, timelines are rendered left-to-right (or top-to-bottom for vertical modes). Enabling flip layout reverses this orientation.

## Usage (v3.0 Grouped API)

To flip the timeline layout, use the `layout.positioning.flipLayout` configuration:

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
      mode="vertical"
      layout={{
        positioning: {
          flipLayout: true
        }
      }}
    />
  );
}

export default FlippedTimeline;
```

::: details Using v2.x Syntax (Still Supported)
```jsx
<Chrono
  items={events}
  mode="VERTICAL"
  flipLayout={true}
/>
```
:::

When flip layout is enabled:
- In `vertical` mode, the timeline content (cards) will appear on the right side of the timeline bar (or left, if it was originally right).
- In `alternating` mode, the alternating pattern will be mirrored. For example, if cards normally start on the left, they will start on the right.

## Visual Examples

### Vertical Mode Flipped

In `vertical` mode, if the cards are typically on the left of the central line, flip layout will move them to the right.

![Flipped Vertical Layout](../assets/flip-layout.png)

### Alternating Mode Flipped

In `alternating` mode, the sequence of card placement is reversed. If the first card is usually on the left, flip layout will place it on the right, and subsequent cards will alternate accordingly.

```jsx
<Chrono
  items={events}
  mode="alternating"
  layout={{
    positioning: {
      flipLayout: true
    }
  }}
/>
```

::: details Using v2.x Syntax (Still Supported)
```jsx
<Chrono
  items={events}
  mode="VERTICAL_ALTERNATING"
  flipLayout={true}
/>
```
:::

![Flipped Vertical Alternating Layout](../assets/flip_layout_vertical_alternating.png)

The flip layout feature offers a simple way to adapt the timeline's visual flow to different layout requirements or preferences.
