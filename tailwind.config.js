/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-fixed-variant": "#54348c",
        "outline": "#958e9c",
        "on-error-container": "#ffdad6",
        "surface-variant": "#343150",
        "on-tertiary-fixed-variant": "#004f53",
        "on-secondary-fixed-variant": "#544600",
        "secondary-fixed": "#ffe16d",
        "primary": "#d4bbff",
        "surface-container-lowest": "#0d0a27",
        "on-surface-variant": "#ccc3d2",
        "inverse-surface": "#e4dfff",
        "inverse-on-surface": "#302d4b",
        "primary-fixed-dim": "#d4bbff",
        "on-surface": "#e4dfff",
        "surface-container-low": "#1b1835",
        "on-secondary-fixed": "#221b00",
        "on-tertiary": "#003739",
        "surface": "#120f2c",
        "surface-container": "#1f1c39",
        "surface-container-highest": "#343150",
        "primary-container": "#b392f0",
        "inverse-primary": "#6c4da5",
        "surface-container-high": "#292644",
        "surface-bright": "#383654",
        "tertiary-container": "#00b4bc",
        "error": "#ffb4ab",
        "on-secondary": "#3a3000",
        "on-background": "#e4dfff",
        "tertiary-fixed-dim": "#00dce5",
        "secondary": "#fff9ef",
        "primary-fixed": "#ebdcff",
        "on-primary-fixed": "#260059",
        "background": "#120f2c",
        "error-container": "#93000a",
        "on-primary": "#3d1a74",
        "surface-tint": "#d4bbff",
        "on-primary-container": "#46257d",
        "on-tertiary-fixed": "#002021",
        "surface-dim": "#120f2c",
        "outline-variant": "#4a4551",
        "secondary-container": "#ffdb3c",
        "on-secondary-container": "#725f00",
        "tertiary": "#00dce5",
        "tertiary-fixed": "#63f7ff",
        "on-error": "#690005",
        "on-tertiary-container": "#004043",
        "secondary-fixed-dim": "#e9c400"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "16px",
        "gutter": "24px",
        "container-max": "1280px",
        "margin-desktop": "64px",
        "unit": "8px"
      },
      fontFamily: {
        "body-lg": ["Manrope"],
        "label-sm": ["Space Grotesk"],
        "headline-lg": ["Cinzel"],
        "headline-lg-mobile": ["Cinzel"],
        "display-lg": ["Cinzel"],
        "body-md": ["Manrope"]
      },
      fontSize: {
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "500" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "0.05em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}
