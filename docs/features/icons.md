# Custom Timeline Icons

React Chrono allows you to replace the default CSS-generated shapes on the timeline track with custom icons for each timeline item. This feature enhances the visual appeal and thematic consistency of your timeline.

## How to Use Custom Icons

To use custom icons, you need to provide them as child elements to the `<Chrono>` component, wrapped within a `<div>` (or any other suitable element) that has the class name `chrono-icons`.

The icons (e.g., `<img>` tags, SVG components, or font icons) will be embedded onto the corresponding timeline points in the order they appear in your JSX.

- The first icon in the `chrono-icons` container will correspond to the first timeline item.
- The second icon to the second item, and so on.

If there are more timeline items than custom icons, the remaining items will use the default timeline point shape.

## Example

Here’s how you can implement custom icons:

```jsx
import React from "react";
import { Chrono } from "react-chrono";
// Assuming 'data' is an array of your timeline items
import data from "./data"; // Example: const data = [{ title: "Event 1" }, { title: "Event 2" }, ...];

// Import your icons or use URLs
import twitterIcon from "./path/to/twitter.png"; // Example local import
import aboutIcon from "./path/to/about.png";
import contactsIcon from "./path/to/contacts.png";
// Or use direct URLs

function TimelineWithCustomIcons() {
  return (
    <Chrono items={data} mode="VERTICAL_ALTERNATING">
      <div className="chrono-icons">
        {/* Ensure the number of icons matches the number of items for full customization */}
        <img src={twitterIcon} alt="Twitter" />
        <img src={aboutIcon} alt="About" />
        <img src={contactsIcon} alt="Contacts" />
        <img src="https://img.icons8.com/ios-filled/100/000000/briefcase.png" alt="Briefcase" />
        <img src="https://img.icons8.com/ios-filled/100/000000/idea.png" alt="Idea" />
        <img src="https://img.icons8.com/ios-filled/100/000000/sun.png" alt="Sun" />
        <img src="https://img.icons8.com/ios-filled/100/000000/info.png" alt="Info" />
        {/* Add more icons as needed */}
      </div>
    </Chrono>
  );
}

export default TimelineWithCustomIcons;
```

### Key Points:

-   **Wrapper Class**: The `chrono-icons` class on the wrapping `div` is crucial for React Chrono to identify and use the custom icons.
-   **Icon Order**: The order of icon elements within the wrapper directly maps to the order of timeline items.
-   **Icon Types**: You can use `<img>` tags for image files, inline SVGs, or even React components that render icons.
-   **Accessibility**: Always include `alt` text for `<img>` tags for better accessibility.

## Visual Result

Using custom icons can significantly personalize your timeline:

![Timeline with Custom Icons](../assets/icons.png)

[![Edit react-chrono-custom-icons](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-chrono-custom-icons-x9s2k?fontsize=14&hidenavigation=1&theme=dark)

This feature provides a flexible way to integrate branded or contextually relevant visuals directly into the timeline track.
