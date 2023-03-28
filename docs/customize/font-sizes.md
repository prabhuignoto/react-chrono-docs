# Font sizes

The `fontSizes` prop allows you to adjust the size of the different text elements within each card. By specifying the font sizes for the `cardSubtitle`, `cardText`, `cardTitle`, and `title` properties, you can customize the font sizes for each text element within the card.

The fontSizes prop takes an object as its value, with each property corresponding to a specific text element and its associated font size.

## Default font sizes

| Property     | Description                                      | Default |
| :----------- | :----------------------------------------------- | :------ |
| cardSubtitle | The font size of the subtitle in a card          | 0.85rem |
| cardText     | The font size of the text in a card              | 1rem    |
| cardTitle    | The font size of the title in a card             | 1rem    |
| title        | The font size of the main title in the component | 1rem    |

## Usage

```jsx
import React from 'react';
import { Chrono } from 'react-chrono';

const data = [
  {
    title: "January",
    cardTitle: "First month of the year",
    cardSubtitle: "Subtitle for January",
    cardDetailedText: "Some details about January",
  },
  {
    title: "February",
    cardTitle: "Second month of the year",
    cardSubtitle: "Subtitle for February",
    cardDetailedText: "Some details about February",
  },
];

const Timeline = () => {
  return (
    <Chrono
      items={data}
      mode="HORIZONTAL"
      fontSizes={{
        cardSubtitle: '0.85rem',
        cardText: '0.8rem',
        cardTitle: '1rem',
        title: '1rem',
      }}
    />
  );
};

export default Timeline;

```


![font-sizes](../assets/font-sizes.png)
