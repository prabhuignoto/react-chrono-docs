# Slideshow Mode

React Chrono includes a slideshow feature that automatically transitions through timeline cards. This is available in all timeline modes: `VERTICAL`, `VERTICAL_ALTERNATING`, and `HORIZONTAL`.

## Enabling Slideshow

To activate the slideshow, add the `slideShow` boolean prop to the `<Chrono>` component and set it to `true`.

```jsx
<Chrono items={items} slideShow={true} />
```

## Configuring Slide Duration

The `slideItemDuration` prop controls how long each timeline card is displayed before transitioning to the next. This value is specified in milliseconds.

```jsx
<Chrono items={items} slideShow={true} slideItemDuration={3000} /> // Each card shows for 3 seconds
```

## Slideshow Animation Types

React Chrono offers different animation types for slideshow transitions. The component automatically selects a default type based on the active timeline `mode`:

-   **`reveal`**: (Default for `VERTICAL` and `HORIZONTAL` modes)
    Timeline cards are revealed one after another, typically with a fade-in effect.
-   **`slide_from_sides`**: (Default for `VERTICAL_ALTERNATING` mode)
    Timeline cards animate in from alternating sides of the screen, complementing the alternating layout.
-   **`slide_in`**: (Alternative animation type)
    Cards slide into view.

You can override the default animation type by setting the `slideShowType` prop:

```jsx
<Chrono 
  items={items} 
  slideShow={true} 
  slideShowType="slide_from_sides" 
/>
```

## Overall Progress Bar

React Chrono includes an overall progress bar that shows the global progress across all timeline items during slideshow mode. This can be controlled with the `showOverallSlideshowProgress` prop:

```jsx
<Chrono
  items={items}
  slideShow={true}
  slideItemDuration={3000}
  showOverallSlideshowProgress={true} // Default: true when slideShow is enabled
/>
```

The progress bar appears at the top of the screen and can be disabled by setting `showOverallSlideshowProgress={false}`.

## Controlling the Slideshow

Users can typically control the slideshow via the control panel (if enabled):
-   **Play/Pause Button**: Starts or stops the automatic progression of the slideshow.
-   **Escape Key**: Pressing the "Escape" key on the keyboard usually stops/cancels the slideshow.

## Example Usage

Here’s how to set up a basic slideshow:

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const slideshowItems = [
  {
    title: "2020 - The Beginning",
    cardTitle: "Project Inception",
    cardSubtitle: "Ideas and Concepts",
    cardDetailedText: "Initial brainstorming and planning phase for the new project.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://picsum.photos/id/1018/1000/600", // Placeholder image
      },
    },
  },
  {
    title: "2021 - Development",
    cardTitle: "Building the Core",
    cardSubtitle: "Coding and Prototyping",
    cardDetailedText: "Intensive development period, focusing on core features and functionality.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://picsum.photos/id/1015/1000/600", // Placeholder image
      },
    },
  },
  {
    title: "2022 - Launch",
    cardTitle: "Product Release",
    cardSubtitle: "Going Live",
    cardDetailedText: "Successful launch of the product to the market, gathering user feedback.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://picsum.photos/id/1016/1000/600", // Placeholder image
      },
    },
  },
];

function MyTimelineSlideshow() {
  return (
    <Chrono
      items={slideshowItems}
      mode="HORIZONTAL" // Example mode
      slideShow={true}
      slideItemDuration={4000} // Each item displays for 4 seconds
    />
  );
}

export default MyTimelineSlideshow;
```

In this example, the timeline will automatically cycle through `slideshowItems`, displaying each for 4 seconds.

The slideshow feature is excellent for creating automated presentations or guided tours of timeline events, making your content more dynamic and engaging.
