# Customizing Timeline Item Titles

In React Chrono, the title for each timeline item (displayed on the timeline track or near the point) can be set in two primary ways: using the `title` prop directly or by providing a `date` prop, which can then be formatted.

## Using the `title` Prop

The most straightforward way to set a title for a timeline item is by using the `title` string prop within each item object:

```jsx
const items = [
  {
    title: "Q1 Update", // This text will be displayed as the item's title
    cardTitle: "Quarter 1 Review",
    // ... other properties
  },
  {
    title: "Project Milestone",
    cardTitle: "Milestone Achieved",
    // ... other properties
  }
];
```

## Using the `date` Prop for Titles

Alternatively, you can provide a `date` prop for each timeline item. React Chrono uses the [Day.js](https://day.js.org/) library to format this date into a readable title.

-   The `date` prop can accept:
    -   A JavaScript `Date` object.
    -   A string representing a date (parsable by Day.js, e.g., "2023-03-25").
    -   A Unix timestamp (milliseconds).

::: info Note
When both `title` and `date` props are present in an item, the `date` prop (and its formatting via `titleDateFormat`) will take precedence for generating the timeline item's title. The `title` prop will be ignored in this scenario for the on-track title.
:::

### Customizing Date Format (v3.0 Grouped API)

If you use the `date` prop, you can customize the format of the displayed date title using the `content.dateFormat` configuration. This accepts a format string compatible with Day.js.

-   **Default Format**: If not provided, Day.js will use a default format (e.g., `MMM DD, YYYY` like "Mar 25, 2023").

### Example: Using `date` and Custom Date Format

```jsx
import React from "react";
import { Chrono } from "react-chrono";

function TimelineWithDateTitles() {
  const itemsWithDates = [
    {
      date: new Date("2023-03-25T10:00:00Z"), // Using a Date object
      cardTitle: "Spring Festival",
      cardSubtitle: "Community Gathering",
    },
    {
      date: "2023-07-15", // Using a date string
      cardTitle: "Summer Conference",
      cardSubtitle: "Annual Tech Meetup",
    },
  ];

  // Custom format for the timeline item titles
  const customDateFormat = "dddd, MMMM D, YYYY"; // e.g., "Saturday, March 25, 2023"

  return (
    <Chrono
      items={itemsWithDates}
      mode="vertical"
      content={{
        dateFormat: customDateFormat  // Apply the custom date format
      }}
    />
  );
}

export default TimelineWithDateTitles;
```

::: details Using v2.x Syntax (Still Supported)
```jsx
<Chrono
  items={itemsWithDates}
  mode="vertical"
  titleDateFormat={customDateFormat}
/>
```
:::

In this example:
- The first item's title will be formatted from `new Date("2023-03-25T10:00:00Z")`.
- The second item's title will be formatted from the string `"2023-07-15"`.
- Both will use the `dddd, MMMM D, YYYY` format due to the `content.dateFormat` configuration.

Choosing between `title` and `date` for your timeline item titles depends on whether you need simple text labels or formatted date representations. The date format configuration offers fine-grained control when using dates.
