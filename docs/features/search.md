# Search Functionality

React Chrono includes a built-in search feature, allowing users to quickly find specific content within the timeline. This functionality is part of the default toolbar and enhances the usability of timelines with extensive data.

## How Search Works

The search feature scans through the textual content of all timeline items, including:
- `title`
- `cardTitle`
- `cardSubtitle`
- `cardDetailedText`

When a search query matches content in one or more items, users can navigate through the results. The timeline will automatically scroll to and highlight the matching items.

## Customizing the Search Interface

Several props are available to customize the appearance and accessibility of the search input field and related controls:

-   **`searchPlaceholder`**: (string) Sets the placeholder text displayed in the search input field.
    *   Default: `"Search"`
-   **`searchAriaLabel`**: (string) Provides an ARIA label for the search input, improving accessibility for screen readers.
    *   Default: `"Search"`
-   **`clearSearch`**: (string) Sets the text or label for the button that clears the current search query.
    *   Default: `"Clear Search"`

## Disabling the Toolbar (and Search)

If you need to hide the search functionality along with the entire toolbar (which also includes navigation controls), you can use the `display.toolbar.enabled` configuration.

### v3.0 Syntax (Recommended)

```jsx
<Chrono
  items={items}
  mode="vertical"
  display={{
    toolbar: {
      enabled: false  // Hides the entire toolbar
    }
  }}
/>
```

::: details Using v2.x Syntax (Still Supported)
-   **`disableToolbar`**: (boolean) When set to `true`, the entire toolbar, including the search input and navigation buttons, will be hidden.
    *   Default: `false`

```jsx
<Chrono items={items} mode="vertical" disableToolbar={true} />
```
:::

## Example: Customizing Search

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "Event Alpha",
    cardTitle: "The First Card",
    cardSubtitle: "An important subtitle",
    cardDetailedText: "This card contains detailed information about Event Alpha, including keywords like 'innovation' and 'strategy'.",
  },
  {
    title: "Event Beta",
    cardTitle: "The Second Card",
    cardSubtitle: "Another key subtitle",
    cardDetailedText: "Event Beta focuses on 'development' and 'execution'. Search for these terms to find this card.",
  },
  // ... more items
];

function SearchableTimeline() {
  return (
    <Chrono
      items={items}
      mode="vertical"
      searchPlaceholder="Find events..."
      searchAriaLabel="Search through timeline events and details"
      clearSearch="Reset"
    />
  );
}

export default SearchableTimeline;
```

::: details Using v2.x Syntax (Still Supported)
```jsx
<Chrono
  items={items}
  mode="vertical"
  searchPlaceholder="Find events..."
  searchAriaLabel="Search through timeline events and details"
  clearSearch="Reset"
/>
```
:::

### Example: Disabling the Toolbar

To hide the search input and all other toolbar controls:

#### v3.0 Syntax (Recommended)

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const items = [ /* ... your items ... */ ];

function TimelineWithoutToolbar() {
  return (
    <Chrono
      items={items}
      mode="vertical"
      display={{
        toolbar: {
          enabled: false  // Hides the entire toolbar
        }
      }}
    />
  );
}

export default TimelineWithoutToolbar;
```

::: details Using v2.x Syntax (Still Supported)
```jsx
<Chrono
  items={items}
  mode="vertical"
  disableToolbar={true}
/>
```
:::

The search functionality provides a powerful way for users to interact with and navigate through the information presented in your React Chrono timelines.
