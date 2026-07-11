# Card resize

## When to use

Tweening a container's width or height when its layout state changes.

## HTML usage

```html
<div class="t-resize">…</div>
```

## CSS

```css
.t-resize {
  transition: width var(--resize-dur) var(--resize-ease), height var(--resize-dur) var(--resize-ease);
  will-change: width, height;
}

@media (prefers-reduced-motion: reduce) {
  .t-resize { transition: none !important; }
}
```
