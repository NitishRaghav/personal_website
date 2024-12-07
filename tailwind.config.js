/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Dark theme color palette
          dark: {
            900: '#121212',  // Main background
            800: '#1E1E1E',  // Secondary background
            700: '#2A2A2A',  // Border and separators
          },
          light: {
            100: '#FFFFFF',  // Primary text
            200: '#E0E0E0',  // Secondary text
            300: '#A0A0A0',  // Tertiary text
          },
          purple: {
            300: '#A78BFA',  // Lighter purple for hover states
            400: '#8B5CF6',  // Primary purple 
            600: '#7C3AED',  // Darker purple for buttons
            700: '#6D28D9',  // Darkest purple for button hover
            800: '#5B21B6',  // Deep purple for accents
          }
        },
        fontFamily: {
          sans: ['Manrope', 'sans-serif'],
        },
        boxShadow: {
          'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
        transitionProperty: {
          'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        },
      },
    },
    plugins: [],
  }