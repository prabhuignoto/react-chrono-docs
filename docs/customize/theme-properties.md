# Complete Theme Properties Reference

React Chrono v3.0 provides 25+ theme properties for comprehensive visual customization, including enhanced dark mode support with button states, shadows, and glow effects.

## Theme Configuration

Apply a theme using the `theme` prop:

```jsx
<Chrono
  items={items}
  theme={{
    primary: '#0070f3',
    cardBgColor: '#ffffff',
    cardTitleColor: '#1f2937'
  }}
/>
```

## Base Theme Properties

These are the foundational colors that affect the overall appearance:

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| `primary` | `string` | Primary accent color | `'#0070f3'` |
| `secondary` | `string` | Secondary accent color | `'#666666'` |
| `textColor` | `string` | Default text color | `'#333333'` |

## Card Theme Properties

Control the appearance of timeline cards:

| Property | Type | Description |
|----------|------|-------------|
| `cardBgColor` | `string` | Background color for timeline cards |
| `cardDetailsBackGround` | `string` | Background color for card details section |
| `cardDetailsColor` | `string` | Text color for card details |
| `cardMediaBgColor` | `string` | Background color for media section |
| `cardSubtitleColor` | `string` | Color for card subtitles |
| `cardTitleColor` | `string` | Color for card titles |
| `detailsColor` | `string` | Color for detailed content text |

### Example: Card Theming

```jsx
<Chrono
  items={items}
  theme={{
    cardBgColor: '#ffffff',
    cardTitleColor: '#1f2937',
    cardSubtitleColor: '#6b7280',
    cardDetailsColor: '#374151',
    cardMediaBgColor: '#f3f4f6'
  }}
/>
```

## Timeline Theme Properties

Customize the timeline structure elements:

| Property | Type | Description |
|----------|------|-------------|
| `titleColor` | `string` | Color for timeline item titles |
| `titleColorActive` | `string` | Color for active timeline titles |
| `timelineBgColor` | `string` | Background color for the timeline |
| `iconBackgroundColor` | `string` | Background color for timeline icons |

### Example: Timeline Structure

```jsx
<Chrono
  items={items}
  theme={{
    timelineBgColor: '#f9fafb',
    titleColor: '#6b7280',
    titleColorActive: '#0070f3',
    iconBackgroundColor: '#ffffff'
  }}
/>
```

## Toolbar Theme Properties

Style the control panel and toolbar:

| Property | Type | Description |
|----------|------|-------------|
| `toolbarBgColor` | `string` | Background color for the toolbar |
| `toolbarBtnBgColor` | `string` | Background color for toolbar buttons |
| `toolbarTextColor` | `string` | Text color for toolbar elements |

### Example: Toolbar Theming

```jsx
<Chrono
  items={items}
  theme={{
    toolbarBgColor: '#1f2937',
    toolbarBtnBgColor: '#374151',
    toolbarTextColor: '#f9fafb'
  }}
/>
```

## Nested Timeline Properties

Style nested timelines separately:

| Property | Type | Description |
|----------|------|-------------|
| `nestedCardBgColor` | `string` | Background for nested timeline cards |
| `nestedCardDetailsBackGround` | `string` | Background for nested card details |
| `nestedCardDetailsColor` | `string` | Text color for nested card details |
| `nestedCardSubtitleColor` | `string` | Subtitle color for nested cards |
| `nestedCardTitleColor` | `string` | Title color for nested cards |

### Example: Nested Timeline Theming

```jsx
<Chrono
  items={itemsWithNestedTimelines}
  theme={{
    // Main timeline
    cardBgColor: '#ffffff',
    cardTitleColor: '#1f2937',

    // Nested timelines (slightly different)
    nestedCardBgColor: '#f9fafb',
    nestedCardTitleColor: '#374151'
  }}
/>
```

## Enhanced Dark Mode Properties (v3.0)

These properties provide fine-grained control over dark mode appearance:

### Button State Colors

| Property | Type | Description |
|----------|------|-------------|
| `iconColor` | `string` | Color for icons in dark mode |
| `buttonHoverBgColor` | `string` | Button background on hover |
| `buttonActiveBgColor` | `string` | Button background when active |
| `buttonActiveIconColor` | `string` | Icon color for active buttons |
| `buttonBorderColor` | `string` | Border color for buttons |
| `buttonHoverBorderColor` | `string` | Border color on hover |
| `buttonActiveBorderColor` | `string` | Border color when active |

### Visual Effects

| Property | Type | Description |
|----------|------|-------------|
| `shadowColor` | `string` | Color for shadows and depth effects |
| `glowColor` | `string` | Color for glow effects and focus states |
| `searchHighlightColor` | `string` | Color for search result highlighting |

### Dark Mode Toggle Specific

| Property | Type | Description |
|----------|------|-------------|
| `darkToggleActiveBgColor` | `string` | Background when dark mode toggle is active |
| `darkToggleActiveIconColor` | `string` | Icon color when dark mode toggle is active |
| `darkToggleActiveBorderColor` | `string` | Border color when dark mode toggle is active |
| `darkToggleGlowColor` | `string` | Glow effect color for dark mode toggle |

### Example: Enhanced Dark Mode Theme

```jsx
<Chrono
  items={items}
  darkMode={{
    enabled: true,
    showToggle: true
  }}
  theme={{
    // Base dark colors
    primary: '#60a5fa',
    cardBgColor: '#1f2937',
    cardTitleColor: '#f9fafb',
    textColor: '#e5e7eb',
    timelineBgColor: '#111827',

    // Button states
    iconColor: '#60a5fa',
    buttonHoverBgColor: '#374151',
    buttonActiveBgColor: '#60a5fa',
    buttonActiveIconColor: '#ffffff',
    buttonBorderColor: '#4b5563',
    buttonHoverBorderColor: '#6b7280',
    buttonActiveBorderColor: '#60a5fa',

    // Visual effects
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    glowColor: 'rgba(96, 165, 250, 0.5)',
    searchHighlightColor: '#fbbf24',

    // Dark toggle
    darkToggleActiveBgColor: '#60a5fa',
    darkToggleActiveIconColor: '#ffffff',
    darkToggleActiveBorderColor: '#60a5fa',
    darkToggleGlowColor: 'rgba(96, 165, 250, 0.4)'
  }}
/>
```

## Complete Theme Example

A comprehensive example combining all theme properties:

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "2024-01",
    cardTitle: "Q1 Launch",
    cardSubtitle: "First Quarter",
    cardDetailedText: "Major product launch in Q1 2024.",
  },
  // ... more items
];

function ThemedTimeline() {
  return (
    <Chrono
      items={items}
      mode="vertical"
      darkMode={{
        enabled: true,
        showToggle: true
      }}
      theme={{
        // Base colors
        primary: '#0070f3',
        secondary: '#6b7280',
        textColor: '#e5e7eb',

        // Card colors
        cardBgColor: '#1f2937',
        cardTitleColor: '#f9fafb',
        cardSubtitleColor: '#d1d5db',
        cardDetailsColor: '#e5e7eb',
        cardMediaBgColor: '#111827',

        // Timeline structure
        titleColor: '#9ca3af',
        titleColorActive: '#60a5fa',
        timelineBgColor: '#111827',
        iconBackgroundColor: '#374151',

        // Toolbar
        toolbarBgColor: '#1f2937',
        toolbarBtnBgColor: '#374151',
        toolbarTextColor: '#f9fafb',

        // Enhanced dark mode
        iconColor: '#60a5fa',
        buttonHoverBgColor: '#374151',
        buttonActiveBgColor: '#0070f3',
        buttonActiveIconColor: '#ffffff',
        buttonBorderColor: '#4b5563',
        buttonHoverBorderColor: '#6b7280',
        buttonActiveBorderColor: '#0070f3',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        glowColor: 'rgba(0, 112, 243, 0.4)',
        searchHighlightColor: '#fbbf24',
        darkToggleActiveBgColor: '#0070f3',
        darkToggleActiveIconColor: '#ffffff',
        darkToggleActiveBorderColor: '#0070f3',
        darkToggleGlowColor: 'rgba(0, 112, 243, 0.3)'
      }}
    />
  );
}

export default ThemedTimeline;
```

## Theme Presets

### Light Mode (Default)

```jsx
const lightTheme = {
  primary: '#0070f3',
  cardBgColor: '#ffffff',
  cardTitleColor: '#1f2937',
  cardSubtitleColor: '#6b7280',
  textColor: '#374151',
  timelineBgColor: '#f9fafb',
  titleColor: '#6b7280',
  titleColorActive: '#0070f3'
};
```

### Dark Mode (Recommended)

```jsx
const darkTheme = {
  primary: '#60a5fa',
  cardBgColor: '#1f2937',
  cardTitleColor: '#f9fafb',
  cardSubtitleColor: '#d1d5db',
  textColor: '#e5e7eb',
  timelineBgColor: '#111827',
  titleColor: '#9ca3af',
  titleColorActive: '#60a5fa',
  iconColor: '#60a5fa',
  buttonHoverBgColor: '#374151',
  buttonActiveBgColor: '#60a5fa',
  shadowColor: 'rgba(0, 0, 0, 0.3)',
  glowColor: 'rgba(96, 165, 250, 0.5)'
};
```

### High Contrast

```jsx
const highContrastTheme = {
  primary: '#000000',
  cardBgColor: '#ffffff',
  cardTitleColor: '#000000',
  cardSubtitleColor: '#333333',
  textColor: '#000000',
  timelineBgColor: '#ffffff',
  titleColor: '#333333',
  titleColorActive: '#000000',
  buttonBorderColor: '#000000',
  buttonHoverBorderColor: '#333333'
};
```

### Ocean Blue

```jsx
const oceanTheme = {
  primary: '#0891b2',
  cardBgColor: '#ecfeff',
  cardTitleColor: '#164e63',
  cardSubtitleColor: '#0e7490',
  textColor: '#155e75',
  timelineBgColor: '#cffafe',
  titleColor: '#06b6d4',
  titleColorActive: '#0891b2'
};
```

### Sunset

```jsx
const sunsetTheme = {
  primary: '#f97316',
  cardBgColor: '#fff7ed',
  cardTitleColor: '#7c2d12',
  cardSubtitleColor: '#c2410c',
  textColor: '#9a3412',
  timelineBgColor: '#ffedd5',
  titleColor: '#fb923c',
  titleColorActive: '#f97316'
};
```

## Dynamic Theme Switching

```jsx
import React, { useState } from "react";
import { Chrono } from "react-chrono";

const themes = {
  light: {
    primary: '#0070f3',
    cardBgColor: '#ffffff',
    cardTitleColor: '#1f2937',
    textColor: '#374151'
  },
  dark: {
    primary: '#60a5fa',
    cardBgColor: '#1f2937',
    cardTitleColor: '#f9fafb',
    textColor: '#e5e7eb'
  },
  ocean: {
    primary: '#0891b2',
    cardBgColor: '#ecfeff',
    cardTitleColor: '#164e63',
    textColor: '#155e75'
  }
};

function DynamicThemedTimeline() {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setCurrentTheme('light')}>Light</button>
        <button onClick={() => setCurrentTheme('dark')}>Dark</button>
        <button onClick={() => setCurrentTheme('ocean')}>Ocean</button>
      </div>
      <Chrono
        items={items}
        theme={themes[currentTheme]}
        onThemeChange={(theme) => {
          console.log('Theme changed:', theme);
        }}
      />
    </div>
  );
}
```

## Best Practices

1. **Maintain Contrast** - Ensure sufficient contrast ratios (WCAG AA: 4.5:1 for text)
2. **Test Both Modes** - If supporting dark mode toggle, test both themes thoroughly
3. **Use Semantic Colors** - Choose colors that convey meaning (e.g., primary for emphasis)
4. **Consistent Palette** - Use related colors for a cohesive appearance
5. **Consider Accessibility** - Test with color blindness simulators
6. **Leverage Enhanced Properties** - Use v3.0 button states and effects for polished UI
7. **Save User Preference** - Store selected theme in localStorage

::: tip
Use the enhanced dark mode properties to create professional, polished interfaces with proper button states, shadows, and visual feedback.
:::
