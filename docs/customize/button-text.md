# Button Texts

The `buttonTexts` prop allows you to customize the text and accessibility labels for various buttons and UI elements throughout the timeline component. This includes navigation buttons, control panel buttons, search interface text, and accessibility labels.

All button text properties are optional and will fall back to their default values if not specified.

## Navigation Button Texts

| Key      | Description                                | Default Value          |
| :------- | :----------------------------------------- | :--------------------- |
| first    | Goes to the first item in the timeline     | "Go to First"          |
| last     | Goes to the last item in the timeline      | "Go to Last"           |
| next     | Goes to the next item in the timeline      | "Next"                 |
| previous | Goes to the previous item in the timeline  | "Previous"             |

## Slideshow Control Texts

| Key  | Description                                | Default Value    |
| :--- | :----------------------------------------- | :--------------- |
| play | Starts a slideshow with the timeline items | "Play Slideshow" |
| stop | Stops a running slideshow                  | "Stop Slideshow" |

## Dark Mode Toggle Texts

| Key   | Description              | Default Value           |
| :---- | :----------------------- | :---------------------- |
| dark  | Switches to Dark Mode    | "Switch to Dark Mode"   |
| light | Switches to Light Mode   | "Switch to Light Mode"  |

## Search Interface Texts

| Key               | Description                               | Default Value          |
| :---------------- | :---------------------------------------- | :--------------------- |
| searchPlaceholder | Placeholder text for the search input    | "Search Timeline"      |
| searchAriaLabel   | Aria label for search input accessibility | "Search timeline content" |
| clearSearch       | Button text to clear search results      | "Clear Search"         |
| nextMatch         | Button text to go to next search match   | "Next Match"           |
| previousMatch     | Button text to go to previous search match | "Previous Match"     |

## Accessibility Labels

| Key           | Description                                | Default Value    |
| :------------ | :----------------------------------------- | :--------------- |
| timelinePoint | Aria label for timeline point elements    | "Timeline point" |

## Advanced Control Texts

| Key           | Description                        | Default Value    |
| :------------ | :--------------------------------- | :--------------- |
| jumpTo        | Quick jump dropdown label          | "Jump to"        |
| changeDensity | Text density control button label | "Change density" |
| changeLayout  | Layout switching button label      | "Change layout"  |

## Control Option Texts

The library also supports customizing the text for control panel options:

### Density Options
| Key                        | Description                    | Default Value             |
| :------------------------- | :----------------------------- | :------------------------ |
| changeDensityOptions.high  | High density option text      | { text: "High", helpText: "Show more items at once" } |
| changeDensityOptions.low   | Low density option text       | { text: "Low", helpText: "Show fewer items at once" } |

### Layout Options
| Key                              | Description                      | Default Value             |
| :------------------------------- | :------------------------------- | :------------------------ |
| changeLayoutOptions.vertical     | Vertical layout option           | { text: "Vertical", helpText: "Show cards in a vertical layout" } |
| changeLayoutOptions.horizontal   | Horizontal layout option         | { text: "Horizontal", helpText: "Show cards in a horizontal layout" } |
| changeLayoutOptions.alternating  | Alternating layout option        | { text: "Alternating", helpText: "Show cards in a vertical layout with alternating fashion" } |
| changeLayoutOptions.horizontal_all | Show all horizontal option      | { text: "Show all cards", helpText: "Show all cards in a horizontal layout" } |

## Basic Usage

```jsx
import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <Chrono
      items={data}
      mode="HORIZONTAL"
      buttonTexts={{
        first: "Jump to First",
        last: "Jump to Last",
        next: "Next Event",
        previous: "Previous Event",
        play: "Start Auto-play",
        stop: "Stop Auto-play",
      }}
    />
  );
};
```

## Advanced Search Customization

```jsx
const Timeline = () => {
  return (
    <Chrono
      items={data}
      buttonTexts={{
        searchPlaceholder: "Search events...",
        searchAriaLabel: "Search through timeline events",
        clearSearch: "Clear search",
        nextMatch: "Next result",
        previousMatch: "Previous result",
      }}
    />
  );
};
```

## Complete Accessibility Setup

```jsx
const Timeline = () => {
  return (
    <Chrono
      items={data}
      buttonTexts={{
        // Navigation
        first: "Go to beginning",
        last: "Go to end",
        next: "Next event",
        previous: "Previous event",
        
        // Slideshow
        play: "Start automatic playback",
        stop: "Stop automatic playback",
        
        // Theme toggle
        dark: "Switch to dark theme",
        light: "Switch to light theme",
        
        // Search
        searchPlaceholder: "Search timeline events",
        searchAriaLabel: "Search input for timeline events",
        clearSearch: "Clear search results",
        nextMatch: "Go to next search result",
        previousMatch: "Go to previous search result",
        
        // Accessibility
        timelinePoint: "Timeline milestone",
        
        // Advanced controls
        jumpTo: "Quick navigation",
        changeDensity: "Adjust content density",
        changeLayout: "Switch timeline layout",
      }}
    />
  );
};
```

## Advanced Layout Option Customization

```jsx
const Timeline = () => {
  return (
    <Chrono
      items={data}
      buttonTexts={{
        changeLayout: "Choose Layout",
        changeLayoutOptions: {
          vertical: {
            text: "Vertical View",
            helpText: "Display timeline items in a vertical column",
          },
          horizontal: {
            text: "Horizontal View", 
            helpText: "Display timeline items in a horizontal row",
          },
          alternating: {
            text: "Alternating View",
            helpText: "Display cards alternating left and right",
          },
          horizontal_all: {
            text: "Show All",
            helpText: "Display all timeline items at once",
          },
        },
      }}
    />
  );
};
```

## Internationalization Example

```jsx
// Spanish localization example
const spanishButtonTexts = {
  first: "Ir al Primero",
  last: "Ir al Último", 
  next: "Siguiente",
  previous: "Anterior",
  play: "Reproducir Presentación",
  stop: "Detener Presentación",
  dark: "Cambiar a Modo Oscuro",
  light: "Cambiar a Modo Claro",
  searchPlaceholder: "Buscar Cronología",
  clearSearch: "Limpiar Búsqueda",
  nextMatch: "Siguiente Resultado",
  previousMatch: "Resultado Anterior",
};

const Timeline = () => {
  return (
    <Chrono
      items={data}
      buttonTexts={spanishButtonTexts}
    />
  );
};
```

## Best Practices

1. **Keep text concise**: Button labels should be short and clear
2. **Consider accessibility**: Provide descriptive aria labels for screen readers
3. **Maintain consistency**: Use consistent terminology throughout your application
4. **Test with internationalization**: Ensure button text works well in different languages
5. **Provide context**: Use help text for complex controls to guide users
