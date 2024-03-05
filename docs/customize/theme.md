# Theme

React-Chrono provides a simple way to customize the appearance of your timeline cards by using the `theme` object. This object allows you to modify the colors of various elements in the card, such as the title, subtitle, detailed text, and media.

To customize the card's appearance, you can pass the `theme` object as a prop to the React-Chrono component. The `theme` object consists of key-value pairs that map to specific styles. For example, if you want to change the color of the title text, you can use the `titleColor` key and assign it a new color value.

## Theme Object

| Property                    | Description                                                             |
| --------------------------- | ----------------------------------------------------------------------- |
| cardBgColor                 | Specifies the background color of the card.                             |
| cardDetailsBackGround       | Indicates the background color of the card details.                     |
| cardDetailsColor            | Defines the color of the text in the card details.                      |
| cardMediaBgColor            | Specifies the background color of the media in the card.                |
| cardSubtitleColor           | Specifies the color of the card subtitle.                               |
| cardTitleColor              | Determines the color of the card title.                                 |
| detailsColor                | Specifies the color of the text in the details section.                 |
| iconBackgroundColor         | Determines the background color of the icon.                            |
| nestedCardBgColor           | Specifies the background color of a nested card.                        |
| nestedCardDetailsBackGround | Indicates the background color of the details section of a nested card. |
| nestedCardDetailsColor      | Defines the color of the text in the details section of a nested card.  |
| nestedCardSubtitleColor     | Specifies the color of the subtitle in a nested card.                   |
| nestedCardTitleColor        | Determines the color of the title in a nested card.                     |
| primary                     | Specifies the primary color used throughout the UI.                     |
| secondary                   | Specifies the secondary color used throughout the UI.                   |
| titleColor                  | Specifies the color of the title of the card.                           |
| titleColorActive            | Indicates the color of the title of the active card.                    |
| toolbarBgColor              | Specifies the background color of the toolbar.                          |
| toolbarBtnBgColor           | Specifies the background color of the toolbar buttons.                  |
| toolbarTextColor            | Specifies the text color of the toolbar buttons.                        |

## Example Usagef

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
