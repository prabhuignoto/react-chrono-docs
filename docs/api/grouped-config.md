# Grouped Configuration API

React Chrono v3.0 introduces a new grouped configuration API that organizes props into logical categories for better discoverability and maintainability.

## Overview

Instead of flat props, configuration is now grouped:

```jsx
<Chrono
  items={items}

  layout={{ cardWidth: 450 }}
  interaction={{ keyboardNavigation: true }}
  display={{ borderless: true }}
  animation={{ slideshow: { enabled: true } }}
/>
```

---

## Layout Configuration

Controls sizing and positioning of timeline elements.

### Interface

```typescript
interface LayoutConfig {
  cardWidth?: number;
  cardHeight?: number;
  pointSize?: number;
  lineWidth?: number;
  itemWidth?: number;
  timelineHeight?: number | string;
  responsive?: {
    breakpoint?: number;
    enabled?: boolean;
  };
  positioning?: {
    cardPosition?: 'top' | 'bottom';
    flipLayout?: boolean;
  };
}
```

### Properties

#### `cardWidth`
- **Type:** `number`
- **Default:** _No default_ (uses auto-calculated width based on container)
- Maximum width of timeline cards in pixels

#### `cardHeight`
- **Type:** `number`
- **Default:** `200`
- Minimum height of timeline cards in pixels

#### `pointSize`
- **Type:** `number`
- **Default:** `16`
- Size of timeline points/circles in pixels

#### `lineWidth`
- **Type:** `number`
- **Default:** `3`
- Width of the timeline track line in pixels

#### `itemWidth`
- **Type:** `number`
- **Default:** `200`
- Width of each timeline section in horizontal mode

#### `timelineHeight`
- **Type:** `number | string`
- Fixed height for the timeline container (number = px, string = CSS length)

#### `responsive.breakpoint`
- **Type:** `number`
- **Default:** `1024`
- Viewport width in pixels for responsive mode switching

#### `responsive.enabled`
- **Type:** `boolean`
- **Default:** `true`
- Enable automatic mode switching at breakpoint

#### `positioning.cardPosition`
- **Type:** `'top' | 'bottom'`
- Card position in horizontal mode

#### `positioning.flipLayout`
- **Type:** `boolean`
- **Default:** `false`
- Flip layout for RTL support

### Example

```jsx
<Chrono
  items={items}
  layout={{
    cardWidth: 500,
    cardHeight: 300,
    pointSize: 20,
    responsive: {
      enabled: true,
      breakpoint: 992
    },
    positioning: {
      flipLayout: false
    }
  }}
/>
```

---

## Interaction Configuration

Controls user interaction and navigation behavior.

### Interface

```typescript
interface InteractionConfig {
  keyboardNavigation?: boolean;
  pointClick?: boolean;
  autoScroll?: boolean;
  focusOnLoad?: boolean;
  cardHover?: boolean;
  disabled?: boolean;
}
```

### Properties

#### `keyboardNavigation`
- **Type:** `boolean`
- **Default:** `true`
- Enable keyboard navigation with arrow keys

#### `pointClick`
- **Type:** `boolean`
- **Default:** `true`
- Enable clicking on timeline points

#### `autoScroll`
- **Type:** `boolean`
- **Default:** `true`
- Auto-scroll to active items when selected

#### `focusOnLoad`
- **Type:** `boolean`
- **Default:** `false`
- Focus active item when component loads

#### `cardHover`
- **Type:** `boolean`
- **Default:** `false`
- Highlight cards on mouse hover

#### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- Disable all user interactions

### Example

```jsx
<Chrono
  items={items}
  interaction={{
    keyboardNavigation: true,
    pointClick: true,
    autoScroll: true,
    cardHover: true
  }}
/>
```

---

## Content Configuration

Controls how content is displayed and formatted.

### Interface

```typescript
interface ContentConfig {
  allowHTML?: boolean;
  readMore?: boolean;
  textOverlay?: boolean;
  dateFormat?: string;
  compactText?: boolean;
  semanticTags?: {
    title?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
    subtitle?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
  };
}
```

### Properties

#### `allowHTML`
- **Type:** `boolean`
- **Default:** `false`
- Parse card content as HTML

#### `readMore`
- **Type:** `boolean`
- **Default:** `true`
- Enable "read more" button for long content

#### `textOverlay`
- **Type:** `boolean`
- **Default:** `false`
- Display text as overlay on media

#### `dateFormat`
- **Type:** `string`
- **Default:** `'MMM DD, YYYY'`
- Date format for timeline titles (Day.js format)

#### `compactText`
- **Type:** `boolean`
- **Default:** `false`
- Use compact text display mode

#### `semanticTags`
- **Type:** `object`
- Configure semantic HTML tags for accessibility

### Example

```jsx
<Chrono
  items={items}
  content={{
    allowHTML: true,
    readMore: true,
    dateFormat: 'YYYY-MM-DD',
    semanticTags: {
      title: 'h2',
      subtitle: 'h3'
    }
  }}
/>
```

---

## Display Configuration

Controls visual appearance and UI elements.

### Interface

```typescript
interface DisplayConfig {
  borderless?: boolean;
  cardsDisabled?: boolean;
  pointsDisabled?: boolean;
  pointShape?: 'circle' | 'square' | 'diamond';
  allCardsVisible?: boolean;
  toolbar?: {
    enabled?: boolean;
    position?: 'top' | 'bottom';
    sticky?: boolean;
    search?: {
      width?: string;
      maxWidth?: string;
      minWidth?: string;
      inputWidth?: string;
      inputMaxWidth?: string;
    };
  };
  scrollable?: boolean | { scrollbar: boolean };
}
```

### Properties

#### `borderless`
- **Type:** `boolean`
- **Default:** `false`
- Remove borders and shadows from cards

#### `cardsDisabled`
- **Type:** `boolean`
- **Default:** `false`
- Hide timeline cards completely

#### `pointsDisabled`
- **Type:** `boolean`
- **Default:** `false`
- Hide timeline points

#### `pointShape`
- **Type:** `'circle' | 'square' | 'diamond'`
- **Default:** `'circle'`
- Shape of timeline points

#### `allCardsVisible`
- **Type:** `boolean`
- **Default:** `false`
- Show all cards simultaneously in horizontal mode

#### `toolbar.enabled`
- **Type:** `boolean`
- **Default:** `true`
- Show/hide the toolbar

#### `toolbar.position`
- **Type:** `'top' | 'bottom'`
- **Default:** `'top'`
- Toolbar position

#### `toolbar.sticky`
- **Type:** `boolean`
- **Default:** `false`
- Make toolbar sticky during scroll

#### `toolbar.search`
- **Type:** `object`
- Configure search input sizing and layout

**Search Configuration Properties:**

| Property | Type | Description |
|----------|------|-------------|
| `width` | `string` | Default width of entire search section (CSS length) |
| `maxWidth` | `string` | Maximum width of search section (CSS length) |
| `minWidth` | `string` | Minimum width of search section (CSS length) |
| `inputWidth` | `string` | Width of the actual search input field (CSS length) |
| `inputMaxWidth` | `string` | Maximum width of the search input field (CSS length) |

#### `scrollable`
- **Type:** `boolean | { scrollbar: boolean }`
- **Default:** `{ scrollbar: false }`
- Enable scrolling in vertical modes

### Example

```jsx
<Chrono
  items={items}
  display={{
    borderless: true,
    pointShape: 'diamond',
    toolbar: {
      enabled: true,
      position: 'top',
      sticky: true,
      search: {
        width: '250px',
        inputMaxWidth: '200px'
      }
    }
  }}
/>
```

---

## Media Configuration

Controls media content display.

### Interface

```typescript
interface MediaConfig {
  height?: number;
  align?: 'left' | 'center' | 'right';
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}
```

### Properties

#### `height`
- **Type:** `number`
- **Default:** `200`
- Minimum height of media elements in pixels

#### `align`
- **Type:** `'left' | 'center' | 'right'`
- **Default:** `'left'`
- Media alignment within cards

#### `fit`
- **Type:** `'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`
- **Default:** `'cover'`
- CSS object-fit property for images

### Example

```jsx
<Chrono
  items={items}
  media={{
    height: 300,
    align: 'center',
    fit: 'cover'
  }}
/>
```

---

## Animation Configuration

Controls animations and slideshow functionality.

### Interface

```typescript
interface AnimationConfig {
  slideshow?: {
    enabled?: boolean;
    duration?: number;
    type?: 'reveal' | 'slide' | 'fade';
    showProgress?: boolean;
    showOverallProgress?: boolean;
  };
}
```

### Properties

#### `slideshow.enabled`
- **Type:** `boolean`
- **Default:** `false`
- Enable slideshow mode

#### `slideshow.duration`
- **Type:** `number`
- **Default:** `2500`
- Duration each slide is displayed in milliseconds

#### `slideshow.type`
- **Type:** `'reveal' | 'slide' | 'fade'`
- Slideshow transition animation type

#### `slideshow.showProgress`
- **Type:** `boolean`
- Show progress indicator on individual cards

#### `slideshow.showOverallProgress`
- **Type:** `boolean`
- Show overall progress bar

### Example

```jsx
<Chrono
  items={items}
  animation={{
    slideshow: {
      enabled: true,
      duration: 3000,
      type: 'fade',
      showProgress: true
    }
  }}
/>
```

---

## Style Configuration

Controls styling and fonts.

### Interface

```typescript
interface StyleConfig {
  classNames?: {
    card?: string;
    cardMedia?: string;
    cardSubTitle?: string;
    cardText?: string;
    cardTitle?: string;
    controls?: string;
    title?: string;
  };
  fontSizes?: {
    cardSubtitle?: string;
    cardText?: string;
    cardTitle?: string;
    title?: string;
  };
  googleFonts?: {
    fontFamily: string;
    weights?: number[];
    elements?: {
      title?: { weight?: number; style?: string; size?: string };
      cardTitle?: { weight?: number; style?: string; size?: string };
      cardSubtitle?: { weight?: number; style?: string; size?: string };
      cardText?: { weight?: number; style?: string; size?: string };
      controls?: { weight?: number; style?: string; size?: string };
    };
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
    preconnect?: boolean;
  };
}
```

### Properties

#### `classNames`
- **Type:** `object`
- Custom CSS class names for elements

#### `fontSizes`
- **Type:** `object`
- Custom font sizes (CSS length strings)

#### `googleFonts`
- **Type:** `object`
- Google Fonts configuration

### Example

```jsx
<Chrono
  items={items}
  style={{
    classNames: {
      card: 'custom-card',
      cardTitle: 'custom-title'
    },
    fontSizes: {
      cardTitle: '1.5rem',
      cardText: '1rem'
    },
    googleFonts: {
      fontFamily: 'Roboto',
      weights: [400, 500, 700],
      elements: {
        cardTitle: { weight: 700, size: '1.2rem' },
        cardText: { weight: 400 }
      }
    }
  }}
/>
```

---

## Accessibility Configuration

Controls accessibility features.

### Interface

```typescript
interface AccessibilityConfig {
  buttonTexts?: {
    first?: string;
    last?: string;
    next?: string;
    previous?: string;
    play?: string;
    stop?: string;
  };
}
```

### Example

```jsx
<Chrono
  items={items}
  accessibility={{
    buttonTexts: {
      first: 'First Item',
      last: 'Last Item',
      next: 'Next Item',
      previous: 'Previous Item'
    }
  }}
/>
```

---

## Internationalization Configuration

Controls text localization.

### Interface

```typescript
interface I18nConfig {
  texts?: TimelineI18nConfig;
  locale?: string;
  direction?: 'ltr' | 'rtl';
}
```

### Example

```jsx
<Chrono
  items={items}
  i18n={{
    texts: {
      navigation: {
        first: 'Primero',
        next: 'Siguiente',
        previous: 'Anterior',
        last: 'Último'
      }
    },
    locale: 'es',
    direction: 'ltr'
  }}
/>
```

---

## Dark Mode Configuration

Controls dark mode behavior.

### Interface

```typescript
interface DarkModeConfig {
  enabled?: boolean;
  showToggle?: boolean;
}
```

### Example

```jsx
<Chrono
  items={items}
  darkMode={{
    enabled: true,
    showToggle: true
  }}
/>
```

---

## Complete Example

```jsx
<Chrono
  items={items}
  mode="alternating"

  layout={{
    cardWidth: 450,
    cardHeight: 250,
    pointSize: 18,
    responsive: {
      enabled: true,
      breakpoint: 768
    }
  }}

  interaction={{
    keyboardNavigation: true,
    pointClick: true,
    autoScroll: true
  }}

  content={{
    allowHTML: true,
    readMore: true,
    dateFormat: 'MMM DD, YYYY'
  }}

  display={{
    borderless: false,
    pointShape: 'circle',
    toolbar: {
      enabled: true,
      sticky: true,
      position: 'top'
    }
  }}

  media={{
    height: 300,
    align: 'center',
    fit: 'cover'
  }}

  animation={{
    slideshow: {
      enabled: true,
      duration: 3000,
      type: 'fade'
    }
  }}

  style={{
    googleFonts: {
      fontFamily: 'Roboto',
      weights: [400, 700]
    }
  }}

  darkMode={{
    enabled: false,
    showToggle: true
  }}
/>
```
