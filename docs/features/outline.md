# Outline

The outline functionality  allows you to quickly jump to a specific timeline item. It's supported on the `VERTICAL` and `VERTICAL_ALTERNATING` modes, and when enabled, it displays a button in the top left (or right) corner of the timeline. Clicking on the button opens a popover that allows you to select a specific timeline item.

## Usage

To use the outline functionality, add the `enableOutline` prop to your React-Chrono component and set it to true. Here's an example:

```jsx
import React from 'react';
import { Chrono } from 'react-chrono';

const events = [
  {
    title: 'Event 1',
    cardTitle: 'Event 1',
    cardSubtitle: 'January 1, 2022',
  },
  {
    title: 'Event 2',
    cardTitle: 'Event 2',
    cardSubtitle: 'February 1, 2022',
  },
  {
    title: 'Event 3',
    cardTitle: 'Event 3',
    cardSubtitle: 'March 1, 2022',
  },
];

function MyComponent() {
  return (
    <Chrono items={events} mode="VERTICAL" enableOutline />
  );
}

export default MyComponent;
```

In this example, the outline functionality is enabled for a vertical timeline.

::: info
It's important to note that the outline functionality is only supported on the vertical and vertical_alternating modes. If you use the enableOutline prop with the horizontal mode, it will be ignored.
:::

## Popover menu

When the outline functionality is enabled, a button is displayed in the `top left` (or `right` if its [flipped](./flip-layout)) corner of the timeline. Clicking on the button opens a `popover` menu that allows you to select a specific timeline item. The popover lists all of the timeline items, with the current item highlighted. Clicking on a different item in the popover will scroll the timeline to that item.

![outline](../assets/outline.png)

The outline functionality is a useful feature that allows users to quickly navigate to specific timeline items.
