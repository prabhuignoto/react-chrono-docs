# Google Fonts Integration

React Chrono v3.0 includes seamless Google Fonts integration with dynamic font loading, per-element styling, and intelligent caching.

## Basic Usage

Load a Google Font and apply it to your timeline:

```jsx
<Chrono
  items={items}
  style={{
    googleFonts: {
      fontFamily: 'Inter'
    }
  }}
/>
```

This automatically:
- Loads the font from Google Fonts
- Applies it to all timeline text elements
- Handles preconnect optimization
- Provides fallback fonts

## Per-Element Font Styling

Customize fonts for different timeline elements with individual weights, styles, and sizes:

```jsx
<Chrono
  items={items}
  style={{
    googleFonts: {
      fontFamily: 'Roboto',
      elements: {
        title: {
          weight: 'bold',
          style: 'normal',
          size: '1rem'
        },
        cardTitle: {
          weight: 'bold',
          style: 'normal',
          size: '1.25rem'
        },
        cardSubtitle: {
          weight: 'medium',
          style: 'italic',
          size: '0.95rem'
        },
        cardText: {
          weight: 'regular',
          style: 'normal',
          size: '0.9rem'
        },
        controls: {
          weight: 'medium',
          style: 'normal',
          size: '0.875rem'
        }
      }
    }
  }}
/>
```

## Font Configuration Properties

### Main Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `fontFamily` | `string` | - | **Required**. Google Fonts family name (e.g., 'Inter', 'Roboto') |
| `elements` | `object` | - | Font configuration for specific elements |
| `weights` | `FontWeight[]` | - | Additional font weights to preload |
| `display` | `FontDisplay` | `'swap'` | Font display strategy |
| `preconnect` | `boolean` | `true` | Preconnect to Google Fonts for faster loading |

### Element Configuration

Each element (`title`, `cardTitle`, `cardSubtitle`, `cardText`, `controls`) accepts:

| Property | Type | Description |
|----------|------|-------------|
| `weight` | `FontWeight` | Font weight (see supported weights below) |
| `style` | `'normal' \| 'italic'` | Font style |
| `size` | `string` | Font size (CSS length: '1rem', '16px', etc.) |

### Supported Font Weights

Named weights:
- `'thin'` (100)
- `'extra-light'` (200)
- `'light'` (300)
- `'regular'` (400)
- `'medium'` (500)
- `'semi-bold'` (600)
- `'bold'` (700)
- `'extra-bold'` (800)
- `'black'` (900)

Numeric weights: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`

### Font Display Strategies

- `'auto'` - Browser default
- `'block'` - Block text rendering until font loads
- `'swap'` - Show fallback immediately, swap when loaded (recommended)
- `'fallback'` - Brief block period, then fallback
- `'optional'` - Use font only if already cached

## Complete Example

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "January 2024",
    cardTitle: "Product Launch",
    cardSubtitle: "Version 1.0 Released",
    cardDetailedText: "Successfully launched our new product to the market with great reception from early adopters.",
  },
  {
    title: "June 2024",
    cardTitle: "Growth Milestone",
    cardSubtitle: "10,000 Users",
    cardDetailedText: "Reached our first major milestone of 10,000 active users.",
  },
];

function GoogleFontsTimeline() {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <Chrono
        items={items}
        mode="vertical"
        style={{
          googleFonts: {
            fontFamily: 'Inter',
            elements: {
              title: {
                weight: 'semi-bold',
                size: '1rem'
              },
              cardTitle: {
                weight: 'bold',
                size: '1.5rem'
              },
              cardSubtitle: {
                weight: 'medium',
                style: 'italic',
                size: '1rem'
              },
              cardText: {
                weight: 'regular',
                size: '0.95rem'
              },
              controls: {
                weight: 'medium',
                size: '0.875rem'
              }
            },
            weights: ['300', 'regular', 'medium', 'semi-bold', 'bold'],
            display: 'swap',
            preconnect: true
          }
        }}
        theme={{
          primary: '#0070f3',
          cardBgColor: '#ffffff'
        }}
      />
    </div>
  );
}

export default GoogleFontsTimeline;
```

## Loading Additional Weights

Preload specific font weights for better performance:

```jsx
<Chrono
  items={items}
  style={{
    googleFonts: {
      fontFamily: 'Poppins',
      weights: ['300', 'regular', 'medium', 'semi-bold', 'bold'],
      display: 'swap'
    }
  }}
/>
```

## Popular Font Combinations

### Modern & Clean
```jsx
googleFonts: {
  fontFamily: 'Inter',
  elements: {
    cardTitle: { weight: 'bold' },
    cardSubtitle: { weight: 'medium' },
    cardText: { weight: 'regular' }
  }
}
```

### Professional
```jsx
googleFonts: {
  fontFamily: 'Roboto',
  elements: {
    cardTitle: { weight: 'bold', size: '1.25rem' },
    cardSubtitle: { weight: 'medium', size: '1rem' },
    cardText: { weight: 'regular', size: '0.95rem' }
  }
}
```

### Elegant
```jsx
googleFonts: {
  fontFamily: 'Playfair Display',
  elements: {
    cardTitle: { weight: 'bold', size: '1.5rem' },
    cardSubtitle: { weight: 'regular', style: 'italic' },
    cardText: { weight: 'regular', size: '1rem' }
  }
}
```

### Modern Sans-Serif
```jsx
googleFonts: {
  fontFamily: 'Montserrat',
  elements: {
    cardTitle: { weight: 'semi-bold' },
    cardSubtitle: { weight: 'medium' },
    cardText: { weight: 'regular' }
  }
}
```

## Performance Optimization

### Preconnect
Enable preconnect (default: `true`) for faster font loading:

```jsx
googleFonts: {
  fontFamily: 'Inter',
  preconnect: true  // Establishes early connection to fonts.googleapis.com
}
```

### Font Display Strategy
Use `'swap'` for the best user experience:

```jsx
googleFonts: {
  fontFamily: 'Roboto',
  display: 'swap'  // Shows text immediately with fallback font
}
```

### Limit Font Weights
Only load the weights you need:

```jsx
googleFonts: {
  fontFamily: 'Open Sans',
  weights: ['regular', 'semi-bold', 'bold']  // Don't load unused weights
}
```

## Combining with Custom Font Sizes

You can combine Google Fonts with the `fontSizes` configuration:

```jsx
<Chrono
  items={items}
  style={{
    googleFonts: {
      fontFamily: 'Inter',
      elements: {
        cardTitle: { weight: 'bold' }
      }
    },
    fontSizes: {
      title: '1rem',
      cardTitle: '1.5rem',
      cardSubtitle: '1rem',
      cardText: '0.95rem'
    }
  }}
/>
```

## Fallback Fonts

React Chrono automatically provides fallback fonts:

- Sans-serif: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- Serif: `Georgia, "Times New Roman", serif`

Your Google Font is prepended to this list for optimal loading.

## Best Practices

1. **Choose Web-Safe Fonts** - Select fonts optimized for screen readability
2. **Limit Font Weights** - Only load weights you actually use
3. **Use Font Display Swap** - Prevents invisible text during loading
4. **Enable Preconnect** - Reduces latency for font loading
5. **Test Performance** - Check loading time with slow connections
6. **Maintain Readability** - Ensure sufficient contrast and appropriate sizes

::: tip
Google Fonts integration handles all the complexity of font loading, optimization, and caching automatically. Just specify your font family and let React Chrono handle the rest!
:::

## Browser Support

Google Fonts integration works in all modern browsers:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

Older browsers automatically fall back to system fonts.
