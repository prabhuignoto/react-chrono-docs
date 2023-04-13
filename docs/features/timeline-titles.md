# Timeline Titles

As you create a timeline using the React-Chrono library, it's essential to understand how to label each timeline item. Typically, the `title` prop of the timeline item is utilized to achieve this. However, an alternative approach is to use the `date` prop to generate date labels. This prop accepts a date object and utilizes the powerful [Day.js](https://day.js.org/) library to format and render an appropriate title.

If you wish to customize the date format of your timeline item titles, the `titleDateFormat` prop allows you to pass a custom format string. By doing so, you can tailor the date presentation to suit your needs. Here is an example of how to use `titleDateFormat` to format the date in a way that highlights the day of the week and the month:

::: info
  when `date` prop is used, the `title` prop is ignored.
:::

```jsx
import { Chrono } from "react-chrono";

function Timeline() {
  const items = [
    {
      date: new Date("2022-03-25T10:00:00Z"),
      cardTitle: "Card Title 1",
      cardSubTitle: "Card Subtitle 1",
    },
    {
      date: new Date("2022-03-28T14:00:00Z"),
      cardTitle: "Card Title 2",
      cardSubTitle: "Card Subtitle 2",
    },
  ];

  const titleDateFormat = "YYYY-MM-DD";

  return (
    <Chrono items={items} titleDateFormat={titleDateFormat} mode="VERTICAL" />
  );
}
```

::: info
The `titleDateFormat` prop is optional. If you do not pass a value to this prop, the default date format will be used `MMM DD, YYYY`.
:::

In this example, we pass a custom date format string to the `titleDateFormat` prop, which uses the [Day.js](https://day.js.org/) library to format the date object for each timeline item.
