# Text Overlay

The `textOverlay` mode is a new feature added to react-chrono library. It allows the timeline cards to be rendered with a new user experience that enhances the presentation of media content.

![text-overlay](./assets/text-overlay.png)  

## Features

- When the textOverlay prop is enabled, the text associated with each timeline card will be overlaid on top of the media content. This results in a visually appealing presentation that allows the user to quickly and easily view both the media and associated text.
- For example, let's say you have a timeline item that displays an image of a scenic view with some text describing the location. In the past, you might have had to place the text below the image or in a separate column, which could make the timeline card look cluttered or unbalanced. With textOverlay mode, the text can be overlaid on top of the image, creating a more visually appealing and balanced presentation.
- In addition, the textOverlay mode includes new UI controls that allow the user to maximize or minimize the text display. This is useful when the media content is particularly engaging or distracting, and the user wants to focus on viewing the media content. The new controls allow the user to easily toggle the text display on and off, giving them full control over the timeline card's presentation.
- Overall, the textOverlay mode completely overhauls how timeline cards with media content are rendered, resulting in a more modern and engaging user experience. With the textOverlay prop, you can create visually stunning timelines that highlight your media content and provide your users with an engaging and immersive experience.

## Usage

To enable the textOverlay mode, simply pass the textOverlay prop to your Chrono component. This prop only applies when the timeline items contain media content.

```jsx
import { Chrono } from 'react-chrono';

const items = [
  {
    title: 'Item 1',
    cardSubtitle: 'September 2019',
    media: {
      type: 'IMAGE',
      source: {
        url: "https://picsum.photos/800/400",
      },
    },
  },
  {
    title: 'Item 2',
    cardSubtitle: 'October 2019',
    media: {
      type: 'IMAGE',
      source: {
        url: "https://picsum.photos/800/400",
      },
      },
    },
  },
  {
    title: 'Item 3',
    cardSubtitle: 'November 2019',
    media: {
      type: 'IMAGE',
      source: {
        url: "https://picsum.photos/800/400",
      },
    },
  },
];

<Chrono items={items} textOverlay />
```

![text-overlay-2](./assets/text-overlay-2.png)
