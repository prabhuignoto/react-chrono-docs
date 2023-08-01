# Slideshow

The `slideShow` prop enables the slideshow function on all modes - VERTICAL, VERTICAL_ALTERNATING, and HORIZONTAL. With the `slideShow` prop, you can create an automated timeline presentation that transitions between timeline cards at a set interval.

## Slide Item Duration

The `slideItemDuration` prop allows you to configure how long each timeline card is shown before moving to the next one. This prop accepts a number value in milliseconds.

## Slide Show Types

The React-Chrono component supports three slide show types: `reveal`, `slide_id`, and `slide_from_sides`. The component automatically sets the slide show type depending on the mode.

For the VERTICAL and HORIZONTAL modes, the default slide show type is `reveal`. This means that the timeline cards are revealed one after the other in a sequential order.

For the VERTICAL_ALTERNATING mode, the default slide show type is `slide_from_sides`. This means that the timeline cards are animated from both sides of the screen.

## Starting and Stopping the Slideshow

You can start the slideshow by clicking the "Start" button, and stop it by clicking the "Stop" button in the control panel. If you want to cancel the slideshow, you can press the "Escape" key on your keyboard.

## Example Usage

To enable the slideshow feature on your timeline, simply add the `slideShow` prop to the Chrono component and configure the `slideItemDuration` prop to your desired value.

```jsx
import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: "Event 1",
    cardTitle: "Card Title 1",
    cardSubtitle: "Card Subtitle 1",
    cardDetailedText: "Card Detailed Text 1",
    media: {
      type: "IMAGE",
      source: {
        url: "https://picsum.photos/id/1018/1000"
      }
    }
  },
  {
    title: "Event 2",
    cardTitle: "Card Title 2",
    cardSubtitle: "Card Subtitle 2",
    cardDetailedText: "Card Detailed Text 2",
    media: {
      type: "IMAGE",
      source: {
        url: "https://picsum.photos/id/1015/1000"
      }
    }
  }
];

const MyTimeline = () => {
  return (
    <Chrono
      items={items}
      slideItemDuration={5000}
      slideShow
    />
  );
};

export default MyTimeline;
```

In the example above, the Chrono component is configured to show each timeline card for 5 seconds before moving on to the next one. The `slideShow` prop is also set to true, enabling the automated slideshow feature.

The `slideShow` prop is a useful feature for creating automated timeline presentations. With the ability to configure the `slideItemDuration` prop and choose from three different slide show types, you can easily customize the slideshow to fit your needs.
