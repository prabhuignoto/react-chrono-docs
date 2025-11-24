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

### i18n Config Object

```typescript
i18n?: {
  texts?: TimelineI18nConfig;  // All customizable text elements
  locale?: string;              // Locale code (e.g., 'en', 'es', 'fr')
  direction?: 'ltr' | 'rtl';    // Text direction
}
```

## Text Categories

The `texts` configuration is organized into 11 logical categories:

| Category | Description | Example Elements |
|----------|-------------|------------------|
| `navigation` | Navigation control labels | First, last, next, previous, play/stop |
| `search` | Search functionality text | Placeholder, results, navigation |
| `theme` | Theme switching labels | Dark/light mode toggles |
| `layout` | Layout mode labels | Vertical, horizontal, alternating |
| `fullscreen` | Fullscreen functionality | Enter/exit, error messages |
| `quickJump` | Quick navigation | Jump to item dropdown |
| `content` | Content interaction | Read more, expand/collapse |
| `status` | Loading and error states | Loading, error, empty states |
| `accessibility` | Screen reader labels | ARIA labels and descriptions |
| `view` | View options | Compact/detailed view toggles |
| `keyboard` | Keyboard help | Navigation instructions |

## Complete Text Configuration

### Navigation Texts

```jsx
i18n: {
  texts: {
    navigation: {
      first: 'Go to first item',
      last: 'Go to last item',
      next: 'Next item',
      previous: 'Previous item',
      play: 'Start slideshow',
      stop: 'Stop slideshow'
    }
  }
}
```

### Search Texts

```jsx
i18n: {
  texts: {
    search: {
      placeholder: 'Search Timeline',
      ariaLabel: 'Search timeline content',
      clearLabel: 'Clear Search',
      nextMatch: 'Next Match (Enter)',
      previousMatch: 'Previous Match (Shift+Enter)',
      resultsCount: '{current} of {total}',  // Template with variables
      noResults: 'No results found'
    }
  }
}
```

### Theme Texts

```jsx
i18n: {
  texts: {
    theme: {
      darkMode: 'Switch to dark mode',
      lightMode: 'Switch to light mode',
      toggleTheme: 'Toggle theme'
    }
  }
}
```

### Fullscreen Texts

```jsx
i18n: {
  texts: {
    fullscreen: {
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      notSupported: 'Fullscreen not supported'
    }
  }
}
```

### Content Texts

```jsx
i18n: {
  texts: {
    content: {
      readMore: 'Read More',
      showLess: 'Show Less',
      expand: 'Expand',
      collapse: 'Collapse'
    }
  }
}
```

### Quick Jump Texts

```jsx
i18n: {
  texts: {
    quickJump: {
      placeholder: 'Jump to...',
      ariaLabel: 'Quick jump to timeline item',
      itemTemplate: '{index}: {title}'  // Template for dropdown items
    }
  }
}
```

### Accessibility Texts

```jsx
i18n: {
  texts: {
    accessibility: {
      timeline: 'Interactive timeline',
      timelineItem: 'Timeline item',
      itemPosition: 'Item {current} of {total}',  // Template with variables
      cardTitle: 'Card title',
      cardSubtitle: 'Card subtitle',
      cardContent: 'Card content'
    }
  }
}
```

### View Texts

```jsx
i18n: {
  texts: {
    view: {
      compact: 'Compact view',
      detailed: 'Detailed view',
      toggleView: 'Toggle view density'
    }
  }
}
```

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

## Multi-Language Examples

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

### French (Français)

```jsx
const frenchTexts = {
  navigation: {
    first: 'Premier élément',
    last: 'Dernier élément',
    next: 'Suivant',
    previous: 'Précédent',
    play: 'Démarrer le diaporama',
    stop: 'Arrêter le diaporama'
  },
  search: {
    placeholder: 'Rechercher dans la Chronologie',
    clearLabel: 'Effacer la Recherche',
    resultsCount: '{current} sur {total}',
    noResults: 'Aucun résultat trouvé'
  },
  theme: {
    darkMode: 'Passer en mode sombre',
    lightMode: 'Passer en mode clair',
    toggleTheme: 'Basculer le thème'
  },
  content: {
    readMore: 'Lire la Suite',
    showLess: 'Afficher Moins'
  }
};

<Chrono
  items={items}
  i18n={{
    texts: frenchTexts,
    locale: 'fr'
  }}
/>
```

### German (Deutsch)

```jsx
const germanTexts = {
  navigation: {
    first: 'Zum ersten Element',
    last: 'Zum letzten Element',
    next: 'Nächstes Element',
    previous: 'Vorheriges Element',
    play: 'Diashow starten',
    stop: 'Diashow stoppen'
  },
  search: {
    placeholder: 'Zeitleiste durchsuchen',
    clearLabel: 'Suche löschen',
    resultsCount: '{current} von {total}',
    noResults: 'Keine Ergebnisse gefunden'
  },
  theme: {
    darkMode: 'Zum Dunkelmodus wechseln',
    lightMode: 'Zum Hellmodus wechseln'
  },
  content: {
    readMore: 'Mehr Lesen',
    showLess: 'Weniger Anzeigen'
  }
};

<Chrono
  items={items}
  i18n={{
    texts: germanTexts,
    locale: 'de'
  }}
/>
```

### Arabic (العربية) - RTL Support

```jsx
const arabicTexts = {
  navigation: {
    first: 'الانتقال إلى العنصر الأول',
    last: 'الانتقال إلى العنصر الأخير',
    next: 'العنصر التالي',
    previous: 'العنصر السابق',
    play: 'بدء العرض',
    stop: 'إيقاف العرض'
  },
  search: {
    placeholder: 'البحث في الخط الزمني',
    clearLabel: 'مسح البحث',
    resultsCount: '{current} من {total}',
    noResults: 'لم يتم العثور على نتائج'
  },
  content: {
    readMore: 'اقرأ المزيد',
    showLess: 'عرض أقل'
  }
};

<Chrono
  items={items}
  i18n={{
    texts: arabicTexts,
    locale: 'ar',
    direction: 'rtl'  // Right-to-left layout
  }}
/>
```

## RTL Language Support

For right-to-left languages (Arabic, Hebrew, etc.), set the `direction` property:

```jsx
<Chrono
  items={items}
  i18n={{
    texts: hebrewTexts,
    locale: 'he',
    direction: 'rtl'
  }}
/>
```

This automatically:
- Reverses the timeline layout
- Adjusts navigation controls
- Mirrors card positioning
- Flips all directional elements

## Complete Example

```jsx
import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "Enero 2024",
    cardTitle: "Lanzamiento del Producto",
    cardSubtitle: "Nuevo Comienzo",
    cardDetailedText: "Iniciamos nuestro nuevo proyecto con gran entusiasmo.",
  },
  {
    title: "Junio 2024",
    cardTitle: "Hito Alcanzado",
    cardSubtitle: "Éxito",
    cardDetailedText: "Alcanzamos nuestro primer hito importante.",
  },
];

const spanishI18n = {
  texts: {
    navigation: {
      first: 'Ir al primer elemento',
      last: 'Ir al último elemento',
      next: 'Siguiente',
      previous: 'Anterior',
      play: 'Iniciar presentación',
      stop: 'Detener presentación'
    },
    search: {
      placeholder: 'Buscar eventos...',
      clearLabel: 'Limpiar búsqueda',
      resultsCount: '{current} de {total}',
      noResults: 'No se encontraron resultados'
    },
    theme: {
      darkMode: 'Modo oscuro',
      lightMode: 'Modo claro',
      toggleTheme: 'Cambiar tema'
    },
    content: {
      readMore: 'Leer más',
      showLess: 'Mostrar menos'
    },
    fullscreen: {
      enterFullscreen: 'Pantalla completa',
      exitFullscreen: 'Salir'
    }
  },
  locale: 'es',
  direction: 'ltr'
};

function SpanishTimeline() {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <Chrono
        items={items}
        mode="vertical"
        i18n={spanishI18n}
        darkMode={{
          showToggle: true
        }}
        display={{
          toolbar: {
            enabled: true,
            sticky: true
          }
        }}
      />
    </div>
  );
}

export default SpanishTimeline;
```

## Complete i18n Text Keys Reference

All 60+ available i18n text keys organized by category with their default English values:

### Navigation Texts (8 keys)

| Key | Default Value | Description |
|-----|---------------|-------------|
| `first` | `'Go to first item'` | First item button label |
| `last` | `'Go to last item'` | Last item button label |
| `next` | `'Next item'` | Next item button label |
| `previous` | `'Previous item'` | Previous item button label |
| `play` | `'Start slideshow'` | Play slideshow button label |
| `stop` | `'Stop slideshow'` | Stop slideshow button label |
| `pause` | `'Pause slideshow'` | Pause slideshow button label |
| `resume` | `'Resume slideshow'` | Resume slideshow button label |

### Search Texts (8 keys)

| Key | Default Value | Description |
|-----|---------------|-------------|
| `placeholder` | `'Search Timeline'` | Search input placeholder text |
| `ariaLabel` | `'Search timeline content'` | ARIA label for search input |
| `clearLabel` | `'Clear Search'` | Clear search button label |
| `nextMatch` | `'Next Match (Enter)'` | Next search match button label |
| `previousMatch` | `'Previous Match (Shift+Enter)'` | Previous search match button label |
| `resultsCount` | `'{current} of {total}'` | Search results count template (uses `{current}` and `{total}`) |
| `noResults` | `'No results found'` | Message when no search results |
| `navigationLabel` | `'Search navigation'` | ARIA label for search navigation controls |

### Theme Texts (3 keys)

| Key | Default Value | Description |
|-----|---------------|-------------|
| `darkMode` | `'Switch to dark mode'` | Dark mode button label |
| `lightMode` | `'Switch to light mode'` | Light mode button label |
| `toggleTheme` | `'Toggle theme'` | Theme toggle button label |

### Layout Texts (6 keys)

| Key | Default Value | Description |
|-----|---------------|-------------|
| `vertical` | `'Vertical layout'` | Vertical layout mode label |
| `horizontal` | `'Horizontal layout'` | Horizontal layout mode label |
| `alternating` | `'Alternating layout'` | Alternating layout mode label |
| `horizontalAll` | `'Horizontal all layout'` | Horizontal-all layout mode label |
| `switchLayout` | `'Switch layout'` | Layout switcher button label |
| `layoutSelection` | `'Layout selection'` | ARIA label for layout selection |

### Fullscreen Texts (4 keys)

| Key | Default Value | Description |
|-----|---------------|-------------|
| `enterFullscreen` | `'Enter fullscreen'` | Enter fullscreen button label |
| `exitFullscreen` | `'Exit fullscreen'` | Exit fullscreen button label |
| `notSupported` | `'Fullscreen not supported'` | Error when fullscreen unsupported |
| `errorMessage` | `'Failed to enter fullscreen mode'` | Generic fullscreen error message |

### Quick Jump Texts (3 keys)

| Key | Default Value | Description |
|-----|---------------|-------------|
| `jumpTo` | `'Jump to item'` | Quick jump dropdown label |
| `jumpToAriaLabel` | `'Quick navigation to timeline items'` | ARIA label for quick jump |
| `itemTemplate` | `'{index}: {title}'` | Template for dropdown items (uses `{index}` and `{title}`) |

### Content Texts (5 keys)

| Key | Default Value | Description |
|-----|---------------|-------------|
| `readMore` | `'Read More'` | Read more button label |
| `showLess` | `'Show Less'` | Show less button label |
| `expand` | `'Expand'` | Expand content button label |
| `collapse` | `'Collapse'` | Collapse content button label |
| `cardInteraction` | `'Timeline card content'` | ARIA label for card interactions |

### Status Texts (4 keys)

| Key | Default Value | Description |
|-----|---------------|-------------|
| `loading` | `'Loading timeline...'` | Loading state message |
| `error` | `'Error loading timeline'` | Error state message |
| `noItems` | `'No timeline items available'` | Message when no items provided |
| `empty` | `'Timeline is empty'` | Message when timeline is empty |

### Accessibility Texts (8 keys)

| Key | Default Value | Description |
|-----|---------------|-------------|
| `timelineNavigation` | `'Timeline Navigation'` | ARIA label for navigation group |
| `timelineContainer` | `'Timeline Container'` | ARIA label for timeline container |
| `timelineItem` | `'Timeline Item'` | ARIA label for timeline items |
| `activeItem` | `'Active Timeline Item'` | ARIA label for active item |
| `timelinePoint` | `'Timeline Point'` | ARIA label for timeline points |
| `timelineCard` | `'Timeline Card'` | ARIA label for timeline cards |
| `nestedItems` | `'Nested Timeline Items'` | ARIA label for nested items |
| `itemPosition` | `'Item {current} of {total}'` | Position template (uses `{current}` and `{total}`) |

### View Texts (4 keys)

| Key | Default Value | Description |
|-----|---------------|-------------|
| `compact` | `'Compact view'` | Compact view mode label |
| `detailed` | `'Detailed view'` | Detailed view mode label |
| `toggleDensity` | `'Toggle view density'` | View density toggle label |
| `densitySelection` | `'View density selection'` | ARIA label for density selection |

### Keyboard Texts (7 keys)

| Key | Default Value | Description |
|-----|---------------|-------------|
| `arrowKeys` | `'Use arrow keys to navigate between items'` | Arrow key navigation help |
| `homeKey` | `'Press Home to go to first item'` | Home key help text |
| `endKey` | `'Press End to go to last item'` | End key help text |
| `enterKey` | `'Press Enter to select item'` | Enter key help text |
| `escapeKey` | `'Press Escape to exit fullscreen or pause slideshow'` | Escape key help text |
| `tabNavigation` | `'Use Tab to navigate controls'` | Tab navigation help text |
| `keyboardHelp` | `'Keyboard navigation available'` | General keyboard help message |

### Template String Variables

Some text keys support template variables that are automatically replaced:

**Available Variables:**
- `{current}` - Current index or position
- `{total}` - Total count
- `{index}` - Item index number
- `{title}` - Item title text

**Example Usage:**

```jsx
i18n: {
  texts: {
    search: {
      resultsCount: '{current} de {total}'  // Spanish: "1 de 5"
    },
    accessibility: {
      itemPosition: 'Élément {current} sur {total}'  // French: "Élément 1 sur 5"
    },
    quickJump: {
      itemTemplate: '#{index} - {title}'  // "#1 - My Title"
    }
  }
}
```

### Complete Configuration Example

```jsx
<Chrono
  items={items}
  i18n={{
    texts: {
      navigation: {
        first: 'Go to first item',
        last: 'Go to last item',
        next: 'Next item',
        previous: 'Previous item',
        play: 'Start slideshow',
        stop: 'Stop slideshow',
        pause: 'Pause slideshow',
        resume: 'Resume slideshow'
      },
      search: {
        placeholder: 'Search Timeline',
        ariaLabel: 'Search timeline content',
        clearLabel: 'Clear Search',
        nextMatch: 'Next Match (Enter)',
        previousMatch: 'Previous Match (Shift+Enter)',
        resultsCount: '{current} of {total}',
        noResults: 'No results found',
        navigationLabel: 'Search navigation'
      },
      theme: {
        darkMode: 'Switch to dark mode',
        lightMode: 'Switch to light mode',
        toggleTheme: 'Toggle theme'
      },
      layout: {
        vertical: 'Vertical layout',
        horizontal: 'Horizontal layout',
        alternating: 'Alternating layout',
        horizontalAll: 'Horizontal all layout',
        switchLayout: 'Switch layout',
        layoutSelection: 'Layout selection'
      },
      fullscreen: {
        enterFullscreen: 'Enter fullscreen',
        exitFullscreen: 'Exit fullscreen',
        notSupported: 'Fullscreen not supported',
        errorMessage: 'Failed to enter fullscreen mode'
      },
      quickJump: {
        jumpTo: 'Jump to item',
        jumpToAriaLabel: 'Quick navigation to timeline items',
        itemTemplate: '{index}: {title}'
      },
      content: {
        readMore: 'Read More',
        showLess: 'Show Less',
        expand: 'Expand',
        collapse: 'Collapse',
        cardInteraction: 'Timeline card content'
      },
      status: {
        loading: 'Loading timeline...',
        error: 'Error loading timeline',
        noItems: 'No timeline items available',
        empty: 'Timeline is empty'
      },
      accessibility: {
        timelineNavigation: 'Timeline Navigation',
        timelineContainer: 'Timeline Container',
        timelineItem: 'Timeline Item',
        activeItem: 'Active Timeline Item',
        timelinePoint: 'Timeline Point',
        timelineCard: 'Timeline Card',
        nestedItems: 'Nested Timeline Items',
        itemPosition: 'Item {current} of {total}'
      },
      view: {
        compact: 'Compact view',
        detailed: 'Detailed view',
        toggleDensity: 'Toggle view density',
        densitySelection: 'View density selection'
      },
      keyboard: {
        arrowKeys: 'Use arrow keys to navigate between items',
        homeKey: 'Press Home to go to first item',
        endKey: 'Press End to go to last item',
        enterKey: 'Press Enter to select item',
        escapeKey: 'Press Escape to exit fullscreen or pause slideshow',
        tabNavigation: 'Use Tab to navigate controls',
        keyboardHelp: 'Keyboard navigation available'
      }
    },
    locale: 'en',
    direction: 'ltr'
  }}
/>
```

---

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

## Dynamic Language Switching

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

## Best Practices

1. **Configure Only What You Need** - The i18n system uses intelligent fallbacks, so you only need to customize texts that matter for your application

2. **Use Consistent Terminology** - Maintain consistent translations across all text categories

3. **Test All Text Elements** - Verify that all customized texts appear correctly in the UI

4. **Consider Text Length** - Ensure translated text fits in UI elements (some languages are more verbose)

5. **Provide Context** - Use clear, descriptive text that makes sense in the UI context

6. **Test RTL Layouts** - For RTL languages, verify that the entire layout mirrors correctly

7. **Save User Preference** - Store the selected locale in localStorage or user preferences

::: tip
The i18n system replaces and extends the older `accessibility.buttonTexts` pattern. Use `i18n.texts` for all new projects for comprehensive control over every text element in the timeline.
:::

## Supported Locales

React Chrono supports any locale string you provide. Common examples:

- `'en'` - English
- `'es'` - Spanish
- `'fr'` - French
- `'de'` - German
- `'it'` - Italian
- `'pt'` - Portuguese
- `'ru'` - Russian
- `'zh'` - Chinese
- `'ja'` - Japanese
- `'ko'` - Korean
- `'ar'` - Arabic (RTL)
- `'he'` - Hebrew (RTL)

The locale is informational and doesn't affect functionality - it's provided for future locale-specific features and for consistency with your application's i18n approach.
