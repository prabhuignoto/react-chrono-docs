# Migrating to v3.0

Welcome to React Chrono v3.0! This guide will help you upgrade from v2.x to v3.0 smoothly.

## 100% Backward Compatible

**Your existing v2.x code will continue to work without any changes.** React Chrono v3.0 includes a comprehensive migration system that automatically converts legacy props to the new grouped API.

```jsx
// ✅ This v2.x code still works perfectly in v3.0
<Chrono
  items={items}
  mode="VERTICAL_ALTERNATING"
  cardWidth={450}
  disableNavOnKey={false}
  borderLessCards={true}
/>
```

However, we recommend migrating to the new grouped API for better organization and improved IDE support.

---

## What's New in v3.0?

### Grouped Configuration API

Props are now organized into logical groups:

```jsx
<Chrono
  items={items}
  mode="alternating"

  layout={{ cardWidth: 450 }}
  interaction={{ keyboardNavigation: true }}
  display={{ borderless: true }}
/>
```

### New Features

- **Google Fonts Integration** - Dynamic font loading
- **Comprehensive Internationalization** - Configurable text elements
- **Fullscreen Mode** - Cross-browser fullscreen support
- **Sticky Toolbar** - Optional toolbar sticky positioning
- **Advanced Search Configuration** - Customizable search input sizing

### Technical Improvements

- **Vanilla Extract CSS** - Zero-runtime CSS-in-TypeScript
- **Unified Context System** - Better performance
- **Playwright Testing** - Modern E2E testing

---

## Migration Steps

### Step 1: Update Package

```bash
npm install react-chrono@latest
# or
pnpm add react-chrono@latest
```

**Requirements:**
- React 18.2+ or React 19+
- Node.js 18+

### Step 2: Choose Migration Approach

**Option A:** Continue using v2.x syntax (no changes needed)

**Option B:** Migrate to grouped API (recommended)

---

## Prop Migration Reference

### Mode Values

Mode values are now lowercase:

| v2.x | v3.0 |
|------|------|
| `'HORIZONTAL'` | `'horizontal'` |
| `'VERTICAL'` | `'vertical'` |
| `'VERTICAL_ALTERNATING'` | `'alternating'` |
| `'HORIZONTAL_ALL'` | `'horizontal-all'` |

Note: Old uppercase values still work.

### Layout Configuration

| v2.x Prop | v3.0 Grouped API |
|-----------|------------------|
| `cardWidth` | `layout.cardWidth` |
| `cardHeight` | `layout.cardHeight` |
| `timelinePointDimension` | `layout.pointSize` |
| `lineWidth` | `layout.lineWidth` |
| `itemWidth` | `layout.itemWidth` |
| `responsiveBreakPoint` | `layout.responsive.breakpoint` |
| `enableBreakPoint` | `layout.responsive.enabled` |
| `cardPositionHorizontal` | `layout.positioning.cardPosition` |
| `flipLayout` | `layout.positioning.flipLayout` |

**Example:**

```jsx
// v2.x
<Chrono
  cardWidth={450}
  cardHeight={250}
  timelinePointDimension={18}
/>

// v3.0
<Chrono
  layout={{
    cardWidth: 450,
    cardHeight: 250,
    pointSize: 18
  }}
/>
```

### Interaction Configuration

| v2.x Prop | v3.0 Grouped API |
|-----------|------------------|
| `disableNavOnKey` | `interaction.keyboardNavigation` (inverted) |
| `disableClickOnCircle` | `interaction.pointClick` (inverted) |
| `disableAutoScrollOnClick` | `interaction.autoScroll` (inverted) |
| `focusActiveItemOnLoad` | `interaction.focusOnLoad` |
| `highlightCardsOnHover` | `interaction.cardHover` |
| `disableInteraction` | `interaction.disabled` |

**Important:** `disable*` props become positive boolean flags in v3.0.

**Example:**

```jsx
// v2.x
<Chrono
  disableNavOnKey={false}
  focusActiveItemOnLoad={true}
/>

// v3.0
<Chrono
  interaction={{
    keyboardNavigation: true,
    focusOnLoad: true
  }}
/>
```

### Content Configuration

| v2.x Prop | v3.0 Grouped API |
|-----------|------------------|
| `parseDetailsAsHTML` | `content.allowHTML` |
| `useReadMore` | `content.readMore` |
| `textOverlay` | `content.textOverlay` |
| `titleDateFormat` | `content.dateFormat` |
| `textDensity` | `content.compactText` |
| `semanticTags` | `content.semanticTags` |

### Display Configuration

| v2.x Prop | v3.0 Grouped API |
|-----------|------------------|
| `borderLessCards` | `display.borderless` |
| `cardLess` | `display.cardsDisabled` |
| `disableTimelinePoint` | `display.pointsDisabled` |
| `timelinePointShape` | `display.pointShape` |
| `showAllCardsHorizontal` | `display.allCardsVisible` |
| `disableToolbar` | `display.toolbar.enabled` (inverted) |
| `toolbarPosition` | `display.toolbar.position` |
| `stickyToolbar` | `display.toolbar.sticky` |
| `scrollable` | `display.scrollable` |

**Example:**

```jsx
// v2.x
<Chrono
  borderLessCards={true}
  timelinePointShape="diamond"
  stickyToolbar={true}
/>

// v3.0
<Chrono
  display={{
    borderless: true,
    pointShape: "diamond",
    toolbar: { sticky: true }
  }}
/>
```

### Media Configuration

| v2.x Prop | v3.0 Grouped API |
|-----------|------------------|
| `mediaHeight` | `media.height` |
| `mediaSettings.align` | `media.align` |
| `mediaSettings.fit` | `media.fit` |

### Animation Configuration

| v2.x Prop | v3.0 Grouped API |
|-----------|------------------|
| `slideShow` | `animation.slideshow.enabled` |
| `slideItemDuration` | `animation.slideshow.duration` |
| `slideShowType` | `animation.slideshow.type` |
| `showProgressOnSlideshow` | `animation.slideshow.showOverallProgress` |
| `showOverallSlideshowProgress` | `animation.slideshow.showOverallProgress` |

**Note:** `slideShowType` values changed:
- `'slide_in'` → `'slide'`
- `'slide_from_sides'` → `'fade'`
- `'reveal'` → `'reveal'` (unchanged)

### Style Configuration

| v2.x Prop | v3.0 Grouped API |
|-----------|------------------|
| `classNames` | `style.classNames` |
| `fontSizes` | `style.fontSizes` |

**New:** `style.googleFonts` for Google Fonts integration

### Accessibility Configuration

| v2.x Prop | v3.0 Grouped API |
|-----------|------------------|
| `buttonTexts` | `accessibility.buttonTexts` |

### Dark Mode Configuration

| v2.x Prop | v3.0 Grouped API |
|-----------|------------------|
| `darkMode` | `darkMode.enabled` |
| `enableDarkToggle` | `darkMode.showToggle` |

---

## Complete Migration Example

### v2.x Code

```jsx
import { Chrono } from 'react-chrono';

function App() {
  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      cardWidth={450}
      disableNavOnKey={false}
      borderLessCards={false}
      slideShow={true}
      slideItemDuration={3000}
    />
  );
}
```

### v3.0 Code

```jsx
import { Chrono } from 'react-chrono';

function App() {
  return (
    <Chrono
      items={items}
      mode="alternating"

      layout={{ cardWidth: 450 }}
      interaction={{ keyboardNavigation: true }}
      display={{ borderless: false }}

      animation={{
        slideshow: {
          enabled: true,
          duration: 3000
        }
      }}
    />
  );
}
```

---

## New Features

### Google Fonts

```jsx
<Chrono
  items={items}
  style={{
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

### Internationalization

```jsx
<Chrono
  items={items}
  i18n={{
    texts: {
      navigation: {
        first: 'First',
        next: 'Next',
        previous: 'Previous',
        last: 'Last'
      }
    }
  }}
/>
```

### Sticky Toolbar

```jsx
<Chrono
  items={items}
  display={{
    toolbar: {
      sticky: true,
      position: 'top'
    }
  }}
/>
```

---

## Development Warnings

In development mode, you'll see helpful warnings when using deprecated props:

```
React Chrono: Deprecated props detected. Please migrate to the new grouped prop structure:
  • timelinePointDimension is deprecated. Use layout.pointSize instead.
  • disableNavOnKey is deprecated. Use interaction.keyboardNavigation instead.
```

These warnings only appear in development.

---

## TypeScript Support

### Type Imports

```typescript
import {
  Chrono,
  TimelineItem,
  TimelineProps,
  LayoutConfig,
  InteractionConfig,
  DisplayConfig
} from 'react-chrono';
```

### Typed Configurations

```typescript
import { LayoutConfig } from 'react-chrono';

const layout: LayoutConfig = {
  cardWidth: 450,
  cardHeight: 250,
  responsive: {
    enabled: true,
    breakpoint: 768
  }
};
```

---

## Troubleshooting

### Component not working after upgrade

1. Check React version (18.2+ or 19+)
2. Check Node.js version (18+)
3. Clear `node_modules`: `rm -rf node_modules && npm install`

### TypeScript errors

1. Update TypeScript to 4.0+
2. Use lowercase mode values (`'horizontal'` not `'HORIZONTAL'`)

---

## Summary

- All v2.x code continues to work
- New grouped API is cleaner and more intuitive
- New features: Google Fonts, i18n, sticky toolbar
- Better TypeScript support
- Improved performance

Take your time with migration - v2.x syntax is fully supported!
