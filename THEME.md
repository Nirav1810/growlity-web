# Growlity Web Theme System

This project uses a comprehensive light/dark theme system built with `tailwindcss` and `shadcn/ui`-style tokens.

## Overview

- **Theme Provider**: `components/ui/theme-provider.jsx` manages the theme state (light, dark, system).
- **Theme Toggle**: `components/ui/theme-toggle.jsx` allows users to switch themes.
- **CSS Variables**: `app/globals.css` defines the color palette using CSS variables (e.g., `--background`, `--primary`).
- **Tailwind Config**: `tailwind.config.js` maps Tailwind utility classes (e.g., `bg-background`, `text-primary`) to these CSS variables.

## Customizing Colors

To customize the theme colors, edit the CSS variables in `app/globals.css`.

### Light Mode Palette
Update the `:root` variables:
```css
:root {
  --background: 0 0% 100%;       /* White */
  --foreground: 222.2 84% 4.9%;  /* Dark Slate */
  --primary: 201 96% 32%;        /* Sky-600 */
  /* ... */
}
```

### Dark Mode Palette
Update the `.dark` variables:
```css
.dark {
  --background: 222.2 84% 4.9%;   /* Slate-950 */
  --foreground: 210 40% 98%;      /* Slate-50 */
  --card: 217.2 32.6% 12%;        /* Slate-900 */
  --card-foreground: 210 40% 98%; /* Slate-50 */
  --muted: 217.2 32.6% 17.5%;     /* Slate-800 */
  --muted-foreground: 215 20.2% 65.1%;
  --border: 215 25% 22%;          /* Slate-700 */
  --primary: 201 96% 32%;         /* Sky-600 */
  --primary-foreground: 210 40% 98%;
}
```

## Adding New Components

When creating new components, **always use the theme semantic classes** instead of hardcoded colors. This ensures your component adapts to dark mode automatically.

| Property | Theme Class | Description |
|----------|-------------|-------------|
| **Background** | `bg-background` | Page background |
| | `bg-card` | Card/Container background |
| | `bg-muted` | Secondary/Subtle background |
| | `bg-primary` | Primary action background (buttons) |
| | `bg-secondary` | Secondary action background |
| | `bg-accent` | Hover/Active state background |
| **Text** | `text-foreground` | Primary text color |
| | `text-muted-foreground` | Secondary/Subtle text color |
| | `text-primary` | Brand color text |
| | `text-primary-foreground` | Text on top of primary background |
| **Border** | `border-border` | Default border color |
| | `border-input` | Input field border color |

### Example

**Don't do this:**
```jsx
<div className="bg-white text-slate-900 border border-slate-200">
  <h2 className="text-sky-600">Title</h2>
  <p className="text-slate-600">Content</p>
</div>
```

**Do this instead:**
```jsx
<div className="bg-card text-card-foreground border border-border">
  <h2 className="text-primary">Title</h2>
  <p className="text-muted-foreground">Content</p>
</div>
```

## Troubleshooting

- **Text is invisible in dark mode**: Check if you are using `text-slate-900` or `text-black` on a dark background. Switch to `text-foreground`.
- **Background is white in dark mode**: Check if you are using `bg-white`. Switch to `bg-background` or `bg-card`.
- **Components don't switch**: Ensure the component is within the `ThemeProvider` hierarchy (usually `app/layout.jsx`).
