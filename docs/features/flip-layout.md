# Flip Layout

The `flipLayout` prop allows you to flip the layout of the timeline in both `vertical` and `vertical_alternating` modes. By default, the timeline is displayed in a left-to-right format, with the timeline events displayed from left to right. However, in some cases, it may be necessary to display the timeline from right to left, such as in right-to-left (RTL) layouts.

## Usage

```jsx
Copy code
import React from 'react';
import { Chrono } from 'react-chrono';

const events = [
  {
    title: 'Event 1',
    date: 'January 1, 2022',
  },
  {
    title: 'Event 2',
    date: 'February 1, 2022',
  },
  {
    title: 'Event 3',
    date: 'March 1, 2022',
  },
];

function MyComponent() {
  return (
    <Chrono items={events} flipLayout />
  );
}
```

In this example, the timeline is displayed in reverse order, with Event 3 displayed first, followed by Event 2, and then Event 1.

## Vertical flipped

![flip-layout](../assets/flip-layout.png)

## Vertical alternating flipped

![flip_layout_vertical_alternating](../assets/flip_layout_vertical_alternating.png)
