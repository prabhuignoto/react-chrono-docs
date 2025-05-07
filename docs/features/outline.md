# Timeline Outline Navigation

React Chrono includes an outline feature that allows users to quickly navigate to specific items within the timeline. This is particularly useful for long timelines with many events.

The outline functionality is supported in `VERTICAL` and `VERTICAL_ALTERNATING` modes. When enabled, an outline button appears in the top-left corner of the timeline (or top-right if the layout is [flipped](./flip-layout.md)). Clicking this button reveals a popover menu listing all timeline items.

## Enabling the Outline

To activate the outline feature, add the `enableOutline` prop to your `<Chrono>` component and set it to `true`.

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const events = [
  {
    title: "Event 1 - January",
    cardTitle: "Planning Phase",
    cardSubtitle: "January 1, 2023",
  },
  {
    title: "Event 2 - February",
    cardTitle: "Development Start",
    cardSubtitle: "February 1, 2023",
  },
  {
    title: "Event 3 - March",
    cardTitle: "Alpha Release",
    cardSubtitle: "March 1, 2023",
  },
  // ... more events
];

function TimelineWithOutline() {
  return (
    <Chrono
      items={events}
      mode="VERTICAL" // Or VERTICAL_ALTERNATING
      enableOutline={true} // Enable the outline feature
    />
  );
}

export default TimelineWithOutline;
```

::: warning Note
The outline functionality is **only** supported in `VERTICAL` and `VERTICAL_ALTERNATING` modes. If `enableOutline` is used with the `HORIZONTAL` mode, it will be ignored, and no outline button will be displayed.
:::

## Using the Popover Menu

Once enabled, the outline button (often a hamburger icon or similar) will be visible.
-   **Clicking the button**: Opens a popover menu.
-   **Popover Content**: The menu lists all timeline items, typically using their `title` property. The currently active/visible item in the timeline is usually highlighted in the popover.
-   **Navigation**: Clicking on an item in the popover menu will smoothly scroll the timeline to that specific item.

![Timeline Outline Popover Menu](../assets/outline.png)

The outline feature significantly improves navigation for extensive timelines, providing users with a quick overview and direct access to any event.
