# TMI Color System Documentation

This document describes the color system for the Trustworthy Machine Intelligence (TMI) website.

## Color Palette

### Brand Colors
- **Primary (Orange)**: `#FF5E38`
- **Secondary (Teal)**: `#0AABBE`

### Background Colors
- **Background**: `#FBFAF9`
- **Card/Container**: `#FBFBF9`
- **White**: `#FFFFFF`

### Text Colors
- **Text Primary**: `#000000`
- **Text Muted**: `rgba(0, 0, 0, 0.7)`

### Hover States
- **Hover Orange**: `#E65230`
- **Hover Teal**: `#0892A5`

---

## Implementation

### Tailwind CSS Usage

The color system is configured in `tailwind.config.ts`. You can use colors like this:

```tsx
// Primary button
<button className="bg-primary text-onAccent hover:bg-primary-hover">
  Click me
</button>

// Secondary button
<button className="bg-secondary text-onAccent hover:bg-secondary-hover">
  Learn more
</button>

// Card with background
<div className="bg-card text-text-primary">
  <h2 className="text-text-primary">Title</h2>
  <p className="text-text-muted">Description</p>
</div>

// Page background
<div className="bg-background">
  Content here
</div>
```

### Plain CSS Variables Usage

CSS variables are defined in `src/app/globals.css` and can be used directly:

```css
/* Primary button */
.my-button {
  background-color: var(--color-primary);
  color: var(--color-on-accent);
}

.my-button:hover {
  background-color: var(--color-hover-orange);
}

/* Card component */
.my-card {
  background-color: var(--color-card);
  color: var(--color-text-primary);
  padding: 1rem;
}

/* Muted text */
.muted-text {
  color: var(--color-text-muted);
}
```

### Example Components

#### Button Primary
```tsx
// Tailwind
<button className="bg-primary text-onAccent px-4 py-2 rounded hover:bg-primary-hover transition-colors">
  Primary Action
</button>

// CSS Variables
<button className="btn-primary px-4 py-2 rounded">
  Primary Action
</button>
```

#### Header
```tsx
// Tailwind
<header className="bg-background text-text-primary border-b border-black/10">
  <nav>...</nav>
</header>

// CSS Variables
<header className="header">
  <nav>...</nav>
</header>
```

---

## Future Extensions

The color system is designed to be easily extended for:
- **Dark Mode**: Add `:root[data-theme="dark"]` or `.dark` class variants
- **Additional Semantic Colors**: Add success, error, warning colors as needed
- **Opacity Variants**: Use Tailwind's opacity modifiers or CSS `rgba()` functions

### Dark Mode Example (Future)

```css
:root[data-theme="dark"] {
  --color-background: #1a1a1a;
  --color-card: #2a2a2a;
  --color-text-primary: #ffffff;
  --color-text-muted: rgba(255, 255, 255, 0.7);
}
```

