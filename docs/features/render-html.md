# Rendering HTML in Card Details

React Chrono provides the ability to render HTML content directly within the `cardDetailedText` section of timeline cards. This allows for rich text formatting, embedding links, lists, and other HTML elements.

## Enabling HTML Rendering (v3.0 Grouped API)

To enable this feature, use the `content.allowHTML` configuration:

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const eventsWithHTML = [
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk Evacuation',
    url: 'https://www.historic-uk.com/HistoryUK/HistoryofBritain/The-Evacuation-of-Dunkirk/', // Example URL for the card
    media: {
      name: 'Dunkirk beach',
      source: {
        url: 'https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to a destroyer.',
    // cardDetailedText can be a string or an array of strings with HTML
    cardDetailedText: [
      `On 10 May 1940, <a href="https://www.britannica.com/biography/Adolf-Hitler" target="_blank" rel="noopener noreferrer">Hitler</a> began his <strong>long-awaited</strong> offensive in the west. <br>`,
      `Key points:
      <ul>
        <li>Holland capitulated after only five days.</li>
        <li>Belgians surrendered on 28 May.</li>
        <li>British and French troops were in danger of being cut off.</li>
        <li>The evacuation, codenamed 'Operation Dynamo', began.</li>
      </ul>
      `,
      `<p>Read more about <a href="https://www.iwm.org.uk/history/the-evacuation-of-dunkirk" target="_blank" rel="noopener noreferrer">Operation Dynamo</a>.</p>`
    ],
  },
  // ... more events
];

function TimelineWithHTMLContent() {
  return (
    <Chrono
      items={eventsWithHTML}
      mode="vertical"
      content={{
        allowHTML: true  // Enable HTML parsing
      }}
      enableOutline // Example of combining with other features
    />
  );
}

export default TimelineWithHTMLContent;
```

::: details Using v2.x Syntax (Still Supported)
```jsx
<Chrono
  items={eventsWithHTML}
  mode="vertical"
  parseDetailsAsHTML={true}
/>
```
:::

## How It Works

When `content.allowHTML` is `true`:
- The content of `cardDetailedText` (whether a single string or an array of strings) is parsed as HTML.
- You can use various HTML tags like `<a>`, `<strong>`, `<em>`, `<ul>`, `<li>`, `<br>`, `<p>`, etc.

::: tip Security Note
React Chrono uses the `xss` library to sanitize the HTML content before rendering it. This helps protect against cross-site scripting (XSS) attacks by filtering out potentially malicious code. However, always be mindful of the source of your HTML content.
:::

## Important Considerations

-   **Default Behavior**: By default, `content.allowHTML` is `false`. If not enabled, HTML tags in `cardDetailedText` will be rendered as plain text.
-   **Content Source**: Ensure that the HTML content you provide is well-formed.
-   **Styling**: You might need to add custom CSS to style the rendered HTML elements to match your timeline's design.

![Timeline Card with Rendered HTML Content](../assets/render-html.png)

## Complete Example with v3.0 Syntax

```jsx
<Chrono
  items={eventsWithHTML}
  mode="vertical"
  content={{
    allowHTML: true
  }}
/>
```

::: details Using v2.x Syntax (Still Supported)
```jsx
<Chrono
  items={eventsWithHTML}
  mode="vertical"
  parseDetailsAsHTML={true}
/>
```
:::

This feature offers a flexible way to include richly formatted descriptions, links to external resources, or any other HTML-based information directly within your timeline cards.
