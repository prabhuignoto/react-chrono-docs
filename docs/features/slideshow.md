# Slideshow

With the `slideShow` prop we can enable the slideshow mode on all timeline modes (`HORIZONTAL`, `VERTICAL`, `VERTICAL_ALTERNATING`).

::: info
Slideshows can be started only manually using the timeline controls.
:::

## Horizontal

```jsx
  <Chrono items={items} slideShow mode="HORIZONTAL" showAllCardsHorizontal />
```

![horizontal-slideshow-demo](../assets/horizontal-demo.gif)

## Vertical

```jsx
  <Chrono items={items} slideShow mode="VERTICAL" />
```

![vertical-slideshow-demo](../assets/vertical-slideshow-demo.gif)