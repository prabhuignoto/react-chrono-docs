# Getting started

## What is React-Chrono

`React-Chrono` is a versatile timeline component that allows developers to render beautiful timelines with ease. It is designed to be data-driven and  is flexible and straightforward to use, making it ideal for developers who want to create visually stunning timelines quickly. 

Additionally, React-Chrono is fully customizable, allowing developers to tailor the component to their specific needs. It offers four unique modes, including horizontal, vertical, alternating, and horizontal-all, which can adapt to a wide range of project layouts. 

## Installation

Install `react-chrono` using npm or yarn:

```sh
npm install react-chrono
```

Or

```sh
yarn add react-chrono
```

## Timeline object properties

To generate a timeline, you must provide an array of Timeline objects, each of which contains properties that define the Timeline Card. These properties and their corresponding types are outlined in the table below:

| Name             | Description                                                                    | Type                       |
| :--------------- | :----------------------------------------------------------------------------- | :------------------------- |
| title            | The title of the timeline item (often a date or short label).                  | `string` or `ReactNode`        |
| cardTitle        | The title displayed on the timeline card.                                      | `string` or `ReactNode`        |
| cardSubtitle     | The subtitle text displayed on the timeline card.                              | `string` or `ReactNode`        |
| cardDetailedText | Detailed text for the card. An array of strings will render each string as a separate paragraph. | `string`, `string[]`, `ReactNode`, or `ReactNode[]` |
| media            | Object to configure image or video display.                                    | `TimelineMediaModel`         |
| url              | URL associated with the timeline item's title. Clicking the title will navigate to this URL. | `string` |
| date             | Date to be used in the title. If provided, this will override the title property for display purposes. | `Date` or `string` |
| timelineContent  | Custom React content to render inside the card. Overrides cardDetailedText.    | `ReactNode`                  |
| items            | Array of timeline items for creating Nested Timelines.                         | `TimelineItemModel[]`        |
| hasNestedItems   | Automatically set to indicate if this item contains nested sub-items.          | `boolean`                    |
| active           | If true, this item will be initially active (only for the first matching item). | `boolean`                   |
| id               | A unique identifier for the timeline item.                                     | `string`                     |
| visible          | Controls the visibility of the timeline item.                                  | `boolean`                    |

### Media Object Structure

The `media` object within a Timeline Item configures images or videos:

| Property | Type | Description |
| :------- | :--- | :---------- |
| type     | `'IMAGE'` or `'VIDEO'` | Specifies the type of media |
| source   | `{ url: string, type?: string }` | url: URL of the image or video. type (for video): e.g., 'mp4', 'webm' |
| name     | `string` | Alt text for images or a descriptive name for videos |
| active   | `boolean` | (Video only) If true, video will attempt to play when its card becomes active |
| id       | `string` | A unique ID for the media element |

**Image Example:**
```javascript
media: {
  type: "IMAGE",
  name: "dunkirk beach",
  source: {
    url: "http://someurl/image.jpg"
  }
}
```

**Video Example:**
```javascript
media: {
  type: "VIDEO",
  name: "Pearl Harbor",
  source: {
    url: "/pearl-harbor.mp4",
    type: "mp4"
  }
}
```

::: info
It is important to ensure that the array of Timeline objects passed to the component is structured correctly and contains all the necessary properties. The data type of each property must also match the specified type to avoid errors.
:::

## Timeline Modes

React-Chrono offers four distinct timeline modes: `horizontal`, `vertical`, `alternating`, and `horizontal-all`. By default, the component operates in `vertical` mode.

![getting-started-basic](getting-started-basic.png)

::: tip v3.0 Mode Values
In v3.0, mode values are lowercase (`'horizontal'`, `'vertical'`, `'alternating'`). The old uppercase values (`'HORIZONTAL'`, `'VERTICAL'`, `'VERTICAL_ALTERNATING'`) still work for backward compatibility.
:::

## Building the Timeline

To build the timeline, you need to pass in an array of [Timeline](#timeline-object-properties) objects to the `items` prop.

Let's build a simple vertical timeline with 3 items using the v3.0 grouped API:

```jsx
import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <Chrono
      items={[
        {
          title: "May 1940",
          cardTitle: "Dunkirk",
          url: "http://google.com",
          cardSubtitle:
            "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
          cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
        },
        {
          title: "25 July 1940",
          cardTitle: "The Battle of Britain",
          cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
          cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
        The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`,
        },
        {
          title: "June 1941",
          cardTitle: "Operation Barbarossa",
          cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
          cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
        Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
        On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`,
        },
      ]}
      mode="vertical"
    />
  );
};

export default Timeline;
```

::: details Using v2.x Syntax (Still Supported)
The old API also works:
```jsx
<Chrono
  items={items}
  mode="VERTICAL"  // Uppercase still works
/>
```
:::

For more customization options, check out the [Grouped Configuration API](/api/grouped-config).
