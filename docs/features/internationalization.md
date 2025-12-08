# Internationalization (i18n)

React Chrono v3.0 includes comprehensive internationalization support, allowing you to customize every piece of user-facing text for any language or locale.

> [!NOTE]
> The comprehensive i18n system with 60+ customizable text elements is a **v3.0+ feature**. v2.x supported basic text customization through `buttonTexts` prop with limited keys.

## Overview

The i18n system provides:
- **60+ customizable text elements** across 11 categories
- **Template string support** with variable interpolation
- **Intelligent fallbacks** - configure only what you need
- **Type-safe configuration** with full TypeScript support
- **RTL language support** with automatic layout adjustment

## Basic Usage

```jsx
<Chrono
  items={items}
  i18n={{
    texts: {
      navigation: {
        first: 'Premier élément',
        last: 'Dernier élément',
        next: 'Suivant',
        previous: 'Précédent'
      },
      search: {
        placeholder: 'Rechercher dans la chronologie',
        noResults: 'Aucun résultat trouvé'
      }
    },
    locale: 'fr',
    direction: 'ltr'
  }}
/>
```

## Configuration Structure

```typescript
i18n?: {
  texts?: TimelineI18nConfig;  // All customizable text elements (all keys optional)
  locale?: string;              // Locale code (e.g., 'en', 'es', 'fr') - informational only
  direction?: 'ltr' | 'rtl';    // Text direction for RTL language support
}
```

All properties in the `i18n` config are optional. The `texts` object uses intelligent fallbacks - you only need to configure the text keys you want to customize. All text keys within each category are also optional.

## Text Categories

The `texts` configuration is organized into 11 logical categories:

| Category | Description | Key Count |
|----------|-------------|-----------|
| `navigation` | Navigation control labels | 8 |
| `search` | Search functionality text | 8 |
| `theme` | Theme switching labels | 3 |
| `layout` | Layout mode labels | 6 |
| `fullscreen` | Fullscreen functionality | 4 |
| `quickJump` | Quick navigation | 3 |
| `content` | Content interaction | 5 |
| `status` | Loading and error states | 4 |
| `accessibility` | Screen reader labels | 8 |
| `view` | View options | 4 |
| `keyboard` | Keyboard help | 7 |

## Template String Support

Some text properties support template variables using `{variable}` syntax:

```jsx
i18n: {
  texts: {
    search: {
      resultsCount: '{current} of {total}'  // "1 of 5"
    },
    accessibility: {
      itemPosition: 'Item {current} of {total}'  // "Item 3 of 10"
    },
    quickJump: {
      itemTemplate: '{index}: {title}'  // "1: My Title"
    }
  }
}
```

**Available Variables:**
- `{current}` - Current index or position
- `{total}` - Total count
- `{index}` - Item index number
- `{title}` - Item title text

## Examples

### Spanish (Español)

```jsx
const spanishTexts = {
  navigation: {
    first: 'Ir al primer elemento',
    last: 'Ir al último elemento',
    next: 'Siguiente elemento',
    previous: 'Elemento anterior',
    play: 'Iniciar presentación',
    stop: 'Detener presentación'
  },
  search: {
    placeholder: 'Buscar en la Línea de Tiempo',
    clearLabel: 'Limpiar Búsqueda',
    resultsCount: '{current} de {total}',
    noResults: 'No se encontraron resultados'
  },
  theme: {
    darkMode: 'Cambiar a modo oscuro',
    lightMode: 'Cambiar a modo claro',
    toggleTheme: 'Alternar tema'
  },
  content: {
    readMore: 'Leer Más',
    showLess: 'Mostrar Menos'
  },
  fullscreen: {
    enterFullscreen: 'Pantalla completa',
    exitFullscreen: 'Salir de pantalla completa'
  }
};

<Chrono
  items={items}
  i18n={{
    texts: spanishTexts,
    locale: 'es',
    direction: 'ltr'
  }}
/>
```

### RTL Language Support

For right-to-left languages (Arabic, Hebrew, etc.), set `direction: 'rtl'` in the i18n config. This automatically reverses the timeline layout, adjusts navigation controls, mirrors card positioning, and flips all directional elements.

```jsx
<Chrono
  items={items}
  i18n={{
    texts: arabicTexts,
    locale: 'ar',
    direction: 'rtl'  // Right-to-left layout
  }}
/>
```

### Dynamic Language Switching

```jsx
import React, { useState } from "react";
import { Chrono } from "react-chrono";

const translations = {
  en: {
    navigation: {
      first: 'Go to first item',
      next: 'Next item',
      previous: 'Previous item'
    },
    search: {
      placeholder: 'Search Timeline'
    }
  },
  es: {
    navigation: {
      first: 'Ir al primer elemento',
      next: 'Siguiente elemento',
      previous: 'Elemento anterior'
    },
    search: {
      placeholder: 'Buscar en la Línea de Tiempo'
    }
  }
};

function MultiLanguageTimeline() {
  const [locale, setLocale] = useState('en');

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setLocale('en')}>English</button>
        <button onClick={() => setLocale('es')}>Español</button>
      </div>
      <Chrono
        items={items}
        i18n={{
          texts: translations[locale],
          locale: locale
        }}
      />
    </div>
  );
}
```

## Complete Text Keys Reference

All 60+ available i18n text keys with their default English values:

### Navigation (8 keys)
- `first` - `'Go to first item'`
- `last` - `'Go to last item'`
- `next` - `'Next item'`
- `previous` - `'Previous item'`
- `play` - `'Start slideshow'`
- `stop` - `'Stop slideshow'`
- `pause` - `'Pause slideshow'`
- `resume` - `'Resume slideshow'`

### Search (8 keys)
- `placeholder` - `'Search Timeline'`
- `ariaLabel` - `'Search timeline content'`
- `clearLabel` - `'Clear Search'`
- `nextMatch` - `'Next Match (Enter)'`
- `previousMatch` - `'Previous Match (Shift+Enter)'`
- `resultsCount` - `'{current} of {total}'` (template)
- `noResults` - `'No results found'`
- `navigationLabel` - `'Search navigation'`

### Theme (3 keys)
- `darkMode` - `'Switch to dark mode'`
- `lightMode` - `'Switch to light mode'`
- `toggleTheme` - `'Toggle theme'`

### Layout (6 keys)
- `vertical` - `'Vertical layout'`
- `horizontal` - `'Horizontal layout'`
- `alternating` - `'Alternating layout'`
- `horizontalAll` - `'Horizontal all layout'`
- `switchLayout` - `'Switch layout'`
- `layoutSelection` - `'Layout selection'`

### Fullscreen (4 keys)
- `enterFullscreen` - `'Enter fullscreen'`
- `exitFullscreen` - `'Exit fullscreen'`
- `notSupported` - `'Fullscreen not supported'`
- `errorMessage` - `'Failed to enter fullscreen mode'`

### Quick Jump (3 keys)
- `jumpTo` - `'Jump to item'`
- `jumpToAriaLabel` - `'Quick navigation to timeline items'`
- `itemTemplate` - `'{index}: {title}'` (template)

### Content (5 keys)
- `readMore` - `'Read More'`
- `showLess` - `'Show Less'`
- `expand` - `'Expand'`
- `collapse` - `'Collapse'`
- `cardInteraction` - `'Timeline card content'`

### Status (4 keys)
- `loading` - `'Loading timeline...'`
- `error` - `'Error loading timeline'`
- `noItems` - `'No timeline items available'`
- `empty` - `'Timeline is empty'`

### Accessibility (8 keys)
- `timelineNavigation` - `'Timeline Navigation'`
- `timelineContainer` - `'Timeline Container'`
- `timelineItem` - `'Timeline Item'`
- `activeItem` - `'Active Timeline Item'`
- `timelinePoint` - `'Timeline Point'`
- `timelineCard` - `'Timeline Card'`
- `nestedItems` - `'Nested Timeline Items'`
- `itemPosition` - `'Item {current} of {total}'` (template)

### View (4 keys)
- `compact` - `'Compact view'`
- `detailed` - `'Detailed view'`
- `toggleDensity` - `'Toggle view density'`
- `densitySelection` - `'View density selection'`

### Keyboard (7 keys)
- `arrowKeys` - `'Use arrow keys to navigate between items'`
- `homeKey` - `'Press Home to go to first item'`
- `endKey` - `'Press End to go to last item'`
- `enterKey` - `'Press Enter to select item'`
- `escapeKey` - `'Press Escape to exit fullscreen or pause slideshow'`
- `tabNavigation` - `'Use Tab to navigate controls'`
- `keyboardHelp` - `'Keyboard navigation available'`

## Legacy Compatibility

The new i18n system is fully compatible with the older `accessibility.buttonTexts` configuration:

```jsx
// ❌ Old API (still works but deprecated)
<Chrono
  items={items}
  accessibility={{
    buttonTexts: {
      first: 'First',
      next: 'Next'
    }
  }}
/>

// ✅ New i18n API (recommended)
<Chrono
  items={items}
  i18n={{
    texts: {
      navigation: {
        first: 'First',
        next: 'Next'
      }
    }
  }}
/>
```

When both are provided, i18n texts take precedence.

## Best Practices

1. **Configure Only What You Need** - The i18n system uses intelligent fallbacks, so you only need to customize texts that matter for your application

2. **Use Consistent Terminology** - Maintain consistent translations across all text categories

3. **Test All Text Elements** - Verify that all customized texts appear correctly in the UI

4. **Consider Text Length** - Ensure translated text fits in UI elements (some languages are more verbose)

5. **Test RTL Layouts** - For RTL languages, verify that the entire layout mirrors correctly

6. **Save User Preference** - Store the selected locale in localStorage or user preferences

::: tip
The i18n system replaces and extends the older `accessibility.buttonTexts` pattern. Use `i18n.texts` for all new projects for comprehensive control over every text element in the timeline.
:::

## Supported Locales

React Chrono supports any locale string you provide. Common examples: `'en'`, `'es'`, `'fr'`, `'de'`, `'it'`, `'pt'`, `'ru'`, `'zh'`, `'ja'`, `'ko'`, `'ar'` (RTL), `'he'` (RTL).

The locale is informational and doesn't affect functionality - it's provided for future locale-specific features and for consistency with your application's i18n approach.
