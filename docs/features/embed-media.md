# Embedding Media

React Chrono supports embedding various media types like images and videos directly into timeline cards using the `media` property within each timeline item object.

## Media Object Properties

The `media` object has the following structure:

| Property | Type   | Description                                   |
| :------- | :----- | :-------------------------------------------- |
| `name`   | string | A descriptive name or alt text for the media. |
| `source` | object | An object containing the URL of the media.    |
| `type`   | string | The type of media: `IMAGE` or `VIDEO`.        |

### `source` Object

| Property | Type   | Description              |
| :------- | :----- | :----------------------- |
| `url`    | string | The URL of the media file. |

## Embedding Images

To display an image in a timeline card, provide a valid image URL within the `media.source.url` property and set `media.type` to `IMAGE`.

### Example: Image Embedding

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const itemsWithImages = [
  {
    title: "May 1940",
    cardTitle: "Dunkirk Evacuation",
    media: {
      name: "Dunkirk beach during evacuation",
      source: {
        url: "https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
      },
      type: "IMAGE",
    },
    cardSubtitle: "British Expeditionary Force (BEF) evacuating from Dunkirk.",
    cardDetailedText: "On 10 May 1940, Germany launched an offensive in the west. Allied forces, including the BEF, were pushed back to Dunkirk, leading to a massive sea evacuation.",
  },
  {
    title: "July 1940",
    cardTitle: "The Battle of Britain Begins",
    media: {
      name: "RAF Spitfires during the Battle of Britain",
      source: {
        url: "https://thumbs-prod.si-cdn.com/NbOmrVrVAO-uSo0O8kVNdpqVyCk=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/c6/b0/c6b0f904-ae9c-47e5-86a9-493dfaefd43c/spitfire_1.jpg",
      },
      type: "IMAGE",
    },
    cardSubtitle: "RAF Spitfire pilots scramble for their planes.",
    cardDetailedText: "After France's surrender, Britain stood alone. The Luftwaffe aimed to achieve air superiority for an invasion. The RAF defended British skies in what became known as the Battle of Britain.",
  },
];

function ImageTimeline() {
  return <Chrono items={itemsWithImages} mode="VERTICAL" />;
}

export default ImageTimeline;
```

![Timeline with Embedded Images](../assets/media-images.png)

## Embedding Videos

React Chrono allows embedding videos from YouTube or local video files. To embed a video, provide the video URL (e.g., a YouTube embed URL or a direct link to a video file) in `media.source.url` and set `media.type` to `VIDEO`.

### Example: Video Embedding (YouTube)

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const itemsWithVideo = [
  {
    title: "July 1940",
    cardTitle: "The Battle of Britain",
    media: {
      name: "Battle of Britain documentary excerpt",
      source: {
        url: "https://www.youtube.com/embed/gPMgYC0sXos", // YouTube embed URL
      },
      type: "VIDEO",
    },
    cardSubtitle: "Documentary footage of the Battle of Britain.",
    cardDetailedText: "The Battle of Britain was a pivotal air campaign fought between the Royal Air Force (RAF) and the German Luftwaffe. This video provides insights into the conflict.",
  },
];

function VideoTimeline() {
  return <Chrono items={itemsWithVideo} mode="VERTICAL" />;
}

export default VideoTimeline;
```

![Timeline with Embedded Video](../assets/media-video.png)

By utilizing the `media` property, you can enrich your timelines with relevant images and videos, making them more engaging and informative.
