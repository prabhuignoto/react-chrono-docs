# Theme

React-Chrono provides a simple way to customize the appearance of your timeline cards by using the `theme` object. This object allows you to modify the colors of various elements in the card, such as the title, subtitle, detailed text, and media.

To customize the card's appearance, you can pass the `theme` object as a prop to the React-Chrono component. The `theme` object consists of key-value pairs that map to specific styles. For example, if you want to change the color of the title text, you can use the `titleColor` key and assign it a new color value.

## Theme Object

| Key                           | Description                                                   |
| :---------------------------- | :------------------------------------------------------------ |
| `cardBgColor`                 | The background color of the card                              |
| `cardDetailsBackGround`       | The background color of the card details                      |
| `cardDetailsColor`            | The color of the text in the card details                     |
| `cardMediaBgColor`            | The background color of the media in the card                 |
| `cardSubtitleColor`           | The color of the card subtitle                                |
| `cardTitleColor`              | The color of the card title                                   |
| `detailsColor`                | The color of the text in the details section                  |
| `nestedCardBgColor`           | The background color of a nested card                         |
| `nestedCardDetailsBackGround` | The background color of the details section of a nested card  |
| `nestedCardDetailsColor`      | The color of the text in the details section of a nested card |
| `nestedCardSubtitleColor`     | The color of the subtitle in a nested card                    |
| `nestedCardTitleColor`        | The color of the title in a nested card                       |
| `primary`                     | The primary color used throughout the UI                      |
| `secondary`                   | The secondary color used throughout the UI                    |
| `titleColorActive`            | The color of the title of the active card                     |
| `titleColor`                  | The color of the title of the card                            |

## Example Usage

> Note: library provides a default theme for both light as well as dark mode.

```jsx
<Chrono
  items={items}
  theme={{
    primary: "red",
    secondary: "blue",
    cardBgColor: "yellow",
    cardForeColor: "violet",
    titleColor: "black",
    titleColorActive: "red",
  }}
/>
```

By using the `theme` object, you can easily tailor the look and feel of your timeline to match the style of your project or brand.
