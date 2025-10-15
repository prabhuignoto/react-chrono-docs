# Dark Mode

React Chrono v3.0 includes built-in dark mode support with automatic theme switching and a user-friendly toggle button.

## Enabling Dark Mode

Use the `darkMode` configuration to enable dark mode functionality:

```jsx
<Chrono
  items={items}
  darkMode={{
    enabled: true,
    showToggle: true  // Shows toggle button in toolbar
  }}
/>
```

## Configuration Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `boolean` | `false` | Enable dark mode functionality |
| `showToggle` | `boolean` | `false` | Show dark mode toggle button in toolbar |

## Dark Mode Features

### Automatic Theme Switching

When dark mode is enabled, React Chrono automatically applies dark theme colors to all timeline elements:

- Timeline cards get darker backgrounds
- Text colors adjust for readability
- Timeline points and lines use dark theme colors
- Toolbar and controls adapt to dark theme

### Toggle Button

When `showToggle` is set to `true`, a toggle button appears in the toolbar allowing users to switch between light and dark themes dynamically.

```jsx
<Chrono
  items={items}
  darkMode={{
    enabled: false,      // Start in light mode
    showToggle: true     // Allow users to switch
  }}
/>
```

## Customizing Dark Mode Theme

You can customize the dark mode appearance using enhanced theme properties:

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

    // Dark mode specific
    iconColor: '#60a5fa',
    buttonHoverBgColor: '#374151',
    buttonActiveBgColor: '#60a5fa',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    glowColor: 'rgba(96, 165, 250, 0.5)',

    // Dark toggle specific
    darkToggleActiveBgColor: '#60a5fa',
    darkToggleActiveIconColor: '#ffffff',
    darkToggleGlowColor: 'rgba(96, 165, 250, 0.4)'
  }}
/>
```

## Enhanced Dark Mode Theme Properties

React Chrono v3.0 provides 25+ theme properties specifically designed for dark mode:

### Button States
- `buttonHoverBgColor` - Button background on hover
- `buttonActiveBgColor` - Button background when active
- `buttonActiveIconColor` - Icon color for active buttons
- `buttonBorderColor` - Border color for buttons
- `buttonHoverBorderColor` - Border color on hover
- `buttonActiveBorderColor` - Border color when active

### Visual Effects
- `iconColor` - Color for icons in dark mode
- `shadowColor` - Color for shadows and depth effects
- `glowColor` - Color for glow effects and focus states
- `searchHighlightColor` - Color for search result highlighting

### Dark Toggle Specific
- `darkToggleActiveBgColor` - Background when toggle is active
- `darkToggleActiveIconColor` - Icon color when toggle is active
- `darkToggleActiveBorderColor` - Border color when toggle is active
- `darkToggleGlowColor` - Glow effect color for dark mode toggle

## Example: Complete Dark Mode Setup

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "2024-01",
    cardTitle: "Project Launch",
    cardSubtitle: "New Beginning",
    cardDetailedText: "Started our exciting new project with the team.",
  },
  {
    title: "2024-06",
    cardTitle: "Milestone Reached",
    cardSubtitle: "Success",
    cardDetailedText: "Achieved our first major milestone ahead of schedule.",
  },
];

function DarkModeTimeline() {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <Chrono
        items={items}
        mode="vertical"
        darkMode={{
          enabled: true,
          showToggle: true
        }}
        theme={{
          primary: '#60a5fa',
          cardBgColor: '#1f2937',
          cardTitleColor: '#f9fafb',
          cardSubtitleColor: '#d1d5db',
          textColor: '#e5e7eb',
          timelineBgColor: '#111827',
          iconColor: '#60a5fa',
          buttonActiveBgColor: '#60a5fa',
          glowColor: 'rgba(96, 165, 250, 0.5)'
        }}
      />
    </div>
  );
}

export default DarkModeTimeline;
```

::: details Using v2.x Syntax (Still Supported)
```jsx
<Chrono
  items={items}
  mode="VERTICAL"
  enableDarkToggle={true}
  theme={{ /* dark theme colors */ }}
/>
```
:::

## Responding to Theme Changes

You can listen to theme changes using the `onThemeChange` callback:

```jsx
<Chrono
  items={items}
  darkMode={{
    enabled: true,
    showToggle: true
  }}
  onThemeChange={(theme) => {
    console.log('Theme changed:', theme);
    // Save user preference to localStorage
    localStorage.setItem('timeline-theme', JSON.stringify(theme));
  }}
/>
```

## Best Practices

1. **Provide Toggle Control** - Always enable `showToggle: true` to let users choose their preferred mode
2. **Test Both Modes** - Ensure your timeline looks good in both light and dark modes
3. **Respect User Preference** - Save the user's theme choice and restore it on subsequent visits
4. **High Contrast** - Ensure sufficient contrast ratios (WCAG AA: 4.5:1 for text)
5. **Consistent Theming** - Use the enhanced dark mode theme properties for a polished look

::: tip
Dark mode is not just about inverting colors - use the enhanced theme properties to create a beautiful dark experience with proper shadows, glows, and visual hierarchy.
:::
