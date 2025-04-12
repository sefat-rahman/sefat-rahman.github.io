# Sefat E Rahman - Portfolio Website

A modern, responsive portfolio website for Sefat E Rahman, showcasing his academic background, research, and professional experience.

## Features

- Responsive design across all devices
- Light/dark theme toggle with user preference detection
- Smooth animations and transitions
- Sections for:
  - About
  - Experience
  - Publications
  - Skills
  - Contact
- Modern UI with CSS Grid and Flexbox
- Built with semantic HTML5, SCSS, and vanilla JavaScript

## Development

### Prerequisites

- Node.js installed on your machine

### Setup

1. Clone the repository:
```
git clone https://github.com/yourusername/sefat-portfolio.git
cd sefat-portfolio
```

2. Install dependencies:
```
npm install
```

3. Run development server:
```
npm run dev
```

This will compile the SCSS files to CSS and watch for changes.

### Structure

- `/scss/` - SCSS source files
  - `_variables.scss` - Color schemes, typography, and spacing variables
  - `_typography.scss` - Text styles
  - `_layout.scss` - Layout and grid styles
  - `_components.scss` - UI components like buttons, cards, badges
  - `_theme.scss` - Light and dark theme styles
  - `_animations.scss` - Keyframe animations and transitions
  - `main.scss` - Main file that imports all partials
- `/css/` - Compiled CSS files
- `/js/` - JavaScript files
  - `theme.js` - Light/dark theme toggling
  - `ui.js` - UI interactions, animations, and form handling
- `/assets/` - Images, icons, and other static assets

## Customization

To customize the theme colors, edit the variables in `scss/_variables.scss`.

## Deployment

For production, use a minified CSS build:

```
sass scss/main.scss css/main.css --style compressed
```

Then deploy the entire project directory to your web hosting service.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 