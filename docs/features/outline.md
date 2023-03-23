# Outline

The outline functionality is a feature of React-Chrono that allows you to quickly jump to a specific timeline item. It's supported on the vertical and vertical_alternating modes, and when enabled, it displays a button in the top left corner of the timeline. Clicking on the button opens a popout that allows you to select a specific timeline item.

## Usage

To use the outline functionality, add the outline prop to your React-Chrono component and set it to true. Here's an example:

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
    <Chrono items={events} mode="vertical" outline={true} />
  );
}
```

In this example, the outline functionality is enabled for a vertical timeline.

::: info
It's important to note that the outline functionality is only supported on the vertical and vertical_alternating modes. If you use the outline prop with the horizontal mode, it will be ignored.
:::

## Popout

When the outline functionality is enabled, a button is displayed in the `top left` (or `right` if its [flipped](./flip-layout)) corner of the timeline. Clicking on the button opens a `popout` that allows you to select a specific timeline item. The popout lists all of the timeline items, with the current item highlighted. Clicking on a different item in the popout will scroll the timeline to that item.

![outline](../assets/outline.png)

The outline functionality is a useful feature that allows users to quickly navigate to specific timeline items. By adding the outline prop to your React-Chrono component, you can provide an easy-to-use interface for your users to explore your timeline.
