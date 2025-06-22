# Card Dimensions

Users can modify the dimensions of timeline cards to cater to their specific needs. To achieve this, there are various props available that can be used to adjust the height of different elements present in the card.

`cardHeight`: Use this prop to adjust the overall height of the timeline card.

`mediaHeight`: Use this prop to adjust the height of the media element (video or image) within the timeline card.

`contentDetailsHeight`: Use this prop to adjust the height of the detailed text within the timeline card.

> Note that React-Chrono also provides a readMore function that allows users to expand or collapse larger chunks of text within the card.

For nested timeline cards, the nestedCardHeight prop can be used to adjust the height of the nested card.

Examples:

```jsx
import { Chrono } from "react-chrono";

const Timeline1 = () => {
  return (
    <Chrono
      items={items}
      cardHeight={200} // sets the height of the timeline card to 200px
      mediaHeight={100} // sets the height of the media element to 100px
      contentDetailsHeight={80} // sets the height of the detailed text to 80px
      useReadMore={true} // enables the readMore function for larger chunks of text
    />
  );
};

const Timeline2 = () => {
  return (
    <Chrono
      cardTitle="Nested Timeline"
      cardSubtitle="Nested Timeline Card"
      items={nestedItems}
      nestedCardHeight={150} // sets the height of the nested timeline card to 150px
    />
  );
};

export { Timeline1, Timeline2 };

```

By utilizing these customizable props, users can ensure that their timeline cards fit their specific design and content needs.
