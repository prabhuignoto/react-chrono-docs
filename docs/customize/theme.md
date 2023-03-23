# Theme

The following is a default theme object used for styling a card UI. The object contains various key-value pairs that define the colors used for different parts of the card.

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
      primary: 'red',
      secondary: 'blue',
      cardBgColor: 'yellow',
      cardForeColor: 'violet',
      titleColor: 'black',
      titleColorActive: 'red',
    }}
  />
```
