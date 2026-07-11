# Modal open / close

## When to use

Modal dialogs and full-overlay surfaces that scale up from center.

## HTML usage

```html
<div class="t-modal" role="dialog">…</div>
```

State: `.is-open` to open, `.is-closing` on close.

## CSS

```css
.t-modal {
  transform-origin: center;
  transform: scale(var(--modal-scale));
  opacity: 0;
  pointer-events: none;
  transition: transform var(--modal-open-dur) var(--modal-ease), opacity var(--modal-open-dur) var(--modal-ease);
  will-change: transform, opacity;
}
.t-modal.is-open {
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}
.t-modal.is-closing {
  transform: scale(var(--modal-scale-close));
  opacity: 0;
  pointer-events: none;
  transition: transform var(--modal-close-dur) var(--modal-ease), opacity var(--modal-close-dur) var(--modal-ease);
}

@media (prefers-reduced-motion: reduce) {
  .t-modal { transition: none !important; }
}
```

## JavaScript orchestration

```js
const modal = document.querySelector(".t-modal");
const closeMs = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--modal-close-dur")) || 150;

function openModal() {
  modal.classList.remove("is-closing", "is-open");
  void modal.offsetWidth;
  modal.classList.add("is-open");
}
function closeModal() {
  modal.classList.remove("is-open");
  modal.classList.add("is-closing");
  setTimeout(() => modal.classList.remove("is-closing"), closeMs);
}
```
