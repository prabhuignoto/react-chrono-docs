# Card Dimensions

React Chrono allows you to modify the dimensions of timeline cards to suit your specific needs. You can adjust the height of different elements within the card using various configuration options.

## v3.0 Grouped API

### Layout Configuration

`layout.cardHeight` - Adjust the overall minimum height of timeline cards (in pixels)

### Media Configuration

`media.height` - Adjust the height of media elements (video or image) within timeline cards (in pixels)

### Content Configuration

`content.readMore` - Enable a "read more" button that allows users to expand or collapse larger chunks of text within the card

> Note: The `contentDetailsHeight` prop from v2.x has been removed in v3.0. Card content now auto-adjusts based on the content and uses the `readMore` feature when needed.

## Examples

### Basic Card Dimensions (v3.0)

```jsx
import { Chrono } from "react-chrono";

const Timeline1 = () => {
  return (
    <Chrono
      items={items}
      mode="vertical"
      layout={{
        cardHeight: 200  // Minimum height of timeline cards
      }}
      media={{
        height: 100  // Height of media elements
      }}
      content={{
        readMore: true  // Enable read more for long content
      }}
    />
  );
};

export default Timeline1;
```

::: details Using v2.x Syntax (Still Supported)
```jsx
<Chrono
  items={items}
  mode="VERTICAL"
  cardHeight={200}
  mediaHeight={100}
  useReadMore={true}
/>
```
:::

### Nested Timeline Card Heights

For nested timeline cards, you can use the `nestedCardHeight` prop:

```jsx
const Timeline2 = () => {
  return (
    <Chrono
      cardTitle="Nested Timeline"
      cardSubtitle="Nested Timeline Card"
      items={nestedItems}
      mode="vertical"
      nestedCardHeight={150}  // Height of nested timeline cards
    />
  );
};

export default Timeline2;
```

::: tip
The `nestedCardHeight` prop remains a top-level prop in v3.0 and is not part of the grouped API, as it's specific to nested timeline functionality.
:::

### Complete Card Configuration Example

```jsx
const CustomizedTimeline = () => {
  return (
    <Chrono
      items={items}
      mode="vertical"

      // Layout - card dimensions
      layout={{
        cardHeight: 250,
        cardWidth: 450
      }}

      // Media - media dimensions
      media={{
        height: 150,
        align: 'center',
        fit: 'cover'
      }}

      // Content - text handling
      content={{
        readMore: true,
        allowHTML: false
      }}
    />
  );
};
```

## Best Practices

1. **cardHeight** - Set a minimum height that accommodates your typical content. Cards will expand if content is larger.

2. **media.height** - Balance between visibility and card size. 150-300px works well for most use cases.

3. **content.readMore** - Enable this for timelines with varying content lengths to maintain consistent card sizes.

4. **Responsive design** - Consider using `layout.responsive` to adjust dimensions at different breakpoints.

By utilizing these configuration options, you can ensure that your timeline cards fit your specific design and content needs.
