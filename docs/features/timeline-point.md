# Timeline Point

The Timeline Point is an interactive point in the timeline track that represents an event or a moment in time.

## Supported Shapes

Three different shapes are supported for the timeline points: `circle` (default), `diamond`, or `square`. You can choose any of these shapes by setting the `timelinePointShape` property in the configuration object.

## Dimension

The size of the timeline point can be changed by setting the `timelinePointDimension` property to a numerical value representing the width and height of the point in pixels. By default, the dimensions are set to 10.

## Custom Icons

If you are not satisfied with the default shapes, you can also use custom icons to represent your timeline points. Please refer to the [Icons](./icons) documentation to learn how to use custom icons instead of default shapes.

## Example

```jsx
import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: 'Item 1',
    cardTitle: 'Card 1',
    cardSubtitle: 'Subtitle 1',
    cardDetailedText: 'Detailed text 1',
  },
  {
    title: 'Item 2',
    cardTitle: 'Card 2',
    cardSubtitle: 'Subtitle 2',
    cardDetailedText: 'Detailed text 2',
  },
  {
    title: 'Item 3',
    cardTitle: 'Card 3',
    cardSubtitle: 'Subtitle 3',
    cardDetailedText: 'Detailed text 3',
  },
];

function MyTimeline() {
  return (
    <Chrono items={items} timelinePointShape="square"  timelinePointDimension={30} />
  );
}
```

The `timelinePointShape` prop is set to "square", which specifies that the timeline points should be rendered as squares instead of the default circles.

Additionally, the `timelinePointDimension` prop is set to 30, which specifies the dimensions of the timeline points in pixels. By default, the dimensions of the timeline points are `16px`.
