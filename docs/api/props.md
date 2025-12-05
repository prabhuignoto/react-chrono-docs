# Properties

:::tip New in v3.0
React Chrono v3.0 introduces a new **[Grouped Configuration API](/api/grouped-config)** for better organization. All v2.x props listed below still work, but we recommend using the new grouped API for new projects.

[See Migration Guide →](/introduction/migration-v3)
:::

## Core Props

### activeItemIndex

**Type:** `number`  
**Default:** `0`

This property sets the default active timeline item that should be displayed when the component loads.

### allowDynamicUpdate

**Type:** `boolean`  
**Default:** `false`

This property allows timeline items to be updated dynamically. If true, changes to the items prop will re-render the timeline.

### items

**Type:** `TimelineItemModel[]`  
**Default:** `[]`

An array of Timeline Item objects to display. Each item can contain properties like `title`, `cardTitle`, `cardSubtitle`, `cardDetailedText`, `media`, `url`, `date`, `timelineContent`, `items` (for nested timelines), and more.

### mode

**Type:** `'HORIZONTAL' | 'VERTICAL' | 'VERTICAL_ALTERNATING' | 'HORIZONTAL_ALL'`
**Default:** `'VERTICAL_ALTERNATING'`

Sets the layout mode of the timeline. In v3.0, use lowercase values: `'horizontal'`, `'vertical'`, `'alternating'`, `'horizontal-all'`. The old uppercase values still work for backward compatibility.

### theme

**Type:** `Theme`  
**Default:** `{...}`

Enhanced theming with 15+ new dark mode properties for complete visual customization. See Theming & Styling for details.

## Layout & Sizing

### cardHeight

**Type:** `number`  
**Default:** `200`

Minimum height (in pixels) of timeline cards.

### cardWidth

**Type:** `number`  
**Default:** `450`

Maximum width (in pixels) of timeline cards.

### itemWidth

**Type:** `number`  
**Default:** `200`

Width (in pixels) of each timeline section in HORIZONTAL mode.

### contentDetailsHeight

**Type:** `number`  
**Default:** `150`

Height (in pixels) of the detailed content area within a card if cardDetailedText is used.

### lineWidth

**Type:** `number`  
**Default:** `3`

Width (in pixels) of the main timeline track line.

### timelinePointDimension

**Type:** `number`  
**Default:** `16`

Diameter (in pixels) of the circular points on the timeline.

### nestedCardHeight

**Type:** `number`  
**Default:** `150`

Height (in pixels) of cards within a nested timeline.

### scrollable

**Type:** `boolean | { scrollbar: boolean }`  
**Default:** `{ scrollbar: false }`

Makes VERTICAL and VERTICAL_ALTERNATING modes scrollable. Set to `{ scrollbar: true }` to show the scrollbar.

### enableBreakPoint

**Type:** `boolean`  
**Default:** `true`

If true, VERTICAL_ALTERNATING mode automatically switches to VERTICAL mode when responsiveBreakPoint is reached.

### responsiveBreakPoint

**Type:** `number`  
**Default:** `768`

Viewport width (in pixels) at which VERTICAL_ALTERNATING mode switches to VERTICAL if enableBreakPoint is true.

### cardPositionHorizontal

**Type:** `'TOP' | 'BOTTOM'`

Positions the card above or below the timeline in HORIZONTAL mode.

### flipLayout

**Type:** `boolean`  
**Default:** `false`

Reverses the layout direction (e.g., Right-to-Left for horizontal, or swaps sides for vertical alternating).

### showAllCardsHorizontal

**Type:** `boolean`  
**Default:** `false`

In HORIZONTAL mode, displays all cards simultaneously instead of only the active one.

## Navigation & Interaction

### disableNavOnKey

**Type:** `boolean`  
**Default:** `false`

Disables keyboard navigation (LEFT/RIGHT for Horizontal, UP/DOWN for Vertical).

### disableClickOnCircle

**Type:** `boolean`  
**Default:** `false`

Disables click action on timeline points/circles.

### disableAutoScrollOnClick

**Type:** `boolean`  
**Default:** `false`

Prevents auto-scrolling to the active card when a timeline card or point is clicked.

### onItemSelected

**Type:** `function`

Callback function invoked when a timeline item is selected. Passes item data and index.

### onScrollEnd

**Type:** `function`

Callback function invoked when the end of the timeline is reached during scrolling.

### focusActiveItemOnLoad

**Type:** `boolean`  
**Default:** `false`

Automatically scrolls to and focuses on the activeItemIndex when the timeline loads.

### disableInteraction

**Type:** `boolean`  
**Default:** `false`

Disables all user interactions with the timeline (clicks, keyboard navigation).

### enableQuickJump

**Type:** `boolean`  
**Default:** `true`

Allows quick jumping to a timeline item via controls (if toolbar is enabled).

### useReadMore

**Type:** `boolean`  
**Default:** `true`

Enables a "read more" button if card content exceeds available space. Set to false to always show all text.

### semanticTags

**Type:** `SemanticTagsConfig`

Configure semantic HTML tags for card elements to improve accessibility and SEO.

```typescript
interface SemanticTagsConfig {
  cardTitle?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
  cardSubtitle?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
}
```

## Media Handling

### mediaSettings

**Type:** `{ align?: 'left' | 'right' | 'center'; fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' }`  
**Default:** `{ align: 'left', fit: 'cover' }`

Controls global media display alignment and CSS object-fit property for images.

## Content & Display

### borderLessCards

**Type:** `boolean`  
**Default:** `false`

Removes borders and shadows from timeline cards for a flatter look.

### cardLess

**Type:** `boolean`  
**Default:** `false`

Hides timeline cards, showing only titles/points. Useful for a very compact timeline.

### disableTimelinePoint

**Type:** `boolean`  
**Default:** `false`

Hides the circular points on the timeline track.

### timelinePointShape

**Type:** `'circle' | 'square' | 'diamond'`  
**Default:** `'circle'`

Configures the shape of the points on the timeline.

### textOverlay

**Type:** `boolean`  
**Default:** `false`

Displays text content as an overlay on top of media elements. Requires text property in timeline items.

### parseDetailsAsHTML

**Type:** `boolean`  
**Default:** `false`

If true, cardDetailedText will be parsed as HTML. Use with caution due to XSS risks if content is user-supplied.

### titleDateFormat

**Type:** `string`  
**Default:** `'MMM DD, YYYY'`

Date format for item titles when using the date property in items. Supports all day.js formats.

### textDensity

**Type:** `'LOW' | 'HIGH'`  
**Default:** `'HIGH'`

Configures the amount of text displayed in cards. 'LOW' might truncate more aggressively.

## Slideshow

### slideShow

**Type:** `boolean`  
**Default:** `false`

Enables slideshow mode and shows play/pause controls in the toolbar.

### slideItemDuration

**Type:** `number`  
**Default:** `2500`

Duration (in milliseconds) each timeline item remains active during a slideshow.

### slideShowType

**Type:** `'reveal' | 'slide_from_sides' | 'slide_in'`

Type of animation for slideshow transitions. Defaults: VERTICAL -> 'reveal', VERTICAL_ALTERNATING -> 'slide_from_sides', HORIZONTAL -> 'slide_in'.

### showOverallSlideshowProgress

**Type:** `boolean`  
**Default:** `true` (when slideShow is enabled)

Shows a line-based progress bar at the top of the screen during slideshow mode, indicating overall progress across all timeline items.

## Search

### searchPlaceholder

**Type:** `string`  
**Default:** `"Search..."`

Placeholder text for the search input in the toolbar.

### searchAriaLabel

**Type:** `string`  
**Default:** `"Search timeline"`

ARIA label for the search input for accessibility.

### clearSearch

**Type:** `string`  
**Default:** `"Clear search"`

Text/ARIA label for the clear search button.

## Theming & Styling

### enableDarkToggle

**Type:** `boolean`  
**Default:** `false`

Adds a toggle switch to the toolbar for enabling dark mode (if dark theme is configured).

### onThemeChange

**Type:** `function`

Callback invoked when the theme changes, e.g., via the dark mode toggle. Note: This callback does not receive any parameters.

### fontSizes

**Type:** `{ cardSubtitle?: string; cardText?: string; cardTitle?: string; title?: string; }`

Adjust font sizes for card elements.

### buttonTexts

**Type:** `ButtonTexts`

Customize button text and accessibility labels for all interactive elements.

### classNames

**Type:** `{ card?: string; cardMedia?: string; cardSubTitle?: string; cardText?: string; cardTitle?: string; controls?: string; title?: string; }`

Apply custom CSS classes to various parts of the timeline.

### highlightCardsOnHover

**Type:** `boolean`  
**Default:** `false`

Highlights timeline cards on mouse hover.

## Miscellaneous

### noUniqueId

**Type:** `boolean`  
**Default:** `false`

Prevents generating a unique ID for the timeline wrapper. Use with uniqueId if you need to set a specific ID.

### uniqueId

**Type:** `string`

Sets a custom unique ID for the timeline wrapper. Useful with noUniqueId={true}.

### disableToolbar

**Type:** `boolean`  
**Default:** `false`

Hides the entire toolbar/control panel.

### toolbarPosition

**Type:** `'top' | 'bottom'`  
**Default:** `'top'`

Positions the toolbar at the top or bottom of the timeline.

### enableLayoutSwitch

**Type:** `boolean`  
**Default:** `true`

Enables the layout switcher for the timeline. Switches the vertical timeline to vertical_alternating and vice versa. Switches the horizontal timeline to horizontal_all and vice versa.

---

:::tip Migrating to v3.0?
For a complete reference of all props including the new grouped API, see the [Complete Props Reference](/api/props-reference) or the [Migration Guide](/introduction/migration-v3).
:::
