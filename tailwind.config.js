// Import Tailwind's default color palette
const colors = require('tailwindcss/colors');

module.exports = {
  // Configure how Tailwind scans your files for classes
  content: [
    './index.html',        // Include your HTML file (for Vite or basic HTML setups)
    './src/**/*.{js,jsx}', // Include all JS/JSX files in the src directory
  ],

  theme: {
    // Override or extend default colors
    colors: {
      gray: colors.coolGray,       // Cooler neutral tones for a modern, muted base
      blue: colors.lightBlue,      // Nice light blues, good for UI highlights
      red: colors.rose,            // Rose tone for alerts/errors
      pink: colors.fuchsia,        // Fuchsia for accent colors

      // You can also define custom ones:
      primary: '#0f172a',          // Custom primary (deep slate-like blue)
      accent: '#22d3ee',           // Accent color (cyan-ish)
      white: '#ffffff',
      black: '#000000',
    },

    // Customize fonts for headings and text
    fontFamily: {
      sans: ['Inter', 'sans-serif'],        // Clean, modern body font
      serif: ['Merriweather', 'serif'],     // Optional for stylized headers
    },

    // Extend the default design tokens (spacing, border radius, etc.)
    extend: {
      spacing: {
        '128': '32rem',   // Useful for large sections (e.g. hero banner height)
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',    // Super rounded corners for cards/buttons
      },
    },
  },

  // Variants: Add pseudo-class behavior
  variants: {
    extend: {
      borderColor: ['focus-visible'],  // Show borders on keyboard focus
      opacity: ['disabled'],           // Lower opacity when a button is disabled
    },
  },

  // Optionally add plugins (like forms, typography, aspect-ratio, etc.)
  plugins: [],
};
