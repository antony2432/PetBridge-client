/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important:true,
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "DarkBrown": {
          50: "#F9F1EC",
          100: "#F2E0D4",
          200: "#E5C3AE",
          300: "#D8A483",
          400: "#CB875C",
          500: "#B6693A",
          600: "#8F532D",
          700: "#653A20",
          800: "#3C2313",
          900: "#1F120A",
          950: "#0F0905"
        },
        "GoldenYellow": {
          50: "#FEF7EC",
          100: "#FCEED9",
          200: "#F9DDB3",
          300: "#F6CC8D",
          400: "#F3B963",
          500: "#F0A83E",
          600: "#DE8C11",
          700: "#AA6C0D",
          800: "#724809",
          900: "#392404",
          950: "#1C1202"
        },
        "SkyBlue": {
          50: "#E8F3F8",
          100: "#D4E8F2",
          200: "#A9D2E4",
          300: "#7FBBD7",
          400: "#54A4CA",
          500: "#3688AE",
          600: "#2C6E8C",
          700: "#215269",
          800: "#163746",
          900: "#0B1B23",
          950: "#050C10"
        },
        "LightOlive": {
          50: "#FBFBF4",
          100: "#F6F6E9",
          200: "#EDEED3",
          300: "#E4E5BD",
          400: "#DCDCA7",
          500: "#D2D38F",
          600: "#BEC05E",
          700: "#989A3C",
          800: "#656728",
          900: "#333314",
          950: "#191A0A"
        },
        "OffWhite": {
          50: "#FFFDFA",
          100: "#FFFDFA",
          200: "#FFFBF5",
          300: "#FFF9F0",
          400: "#FFF7EB",
          500: "#FFF4E5",
          600: "#FFCC85",
          700: "#FFA424",
          800: "#C27100",
          900: "#613900",
          950: "#2E1B00"
        },
        "Tan": {
          50: "#F4F2F0",
          100: "#EBE8E5",
          200: "#D8D1CA",
          300: "#C4BAB0",
          400: "#AFA192",
          500: "#9C8B79",
          600: "#7E6E5D",
          700: "#615548",
          800: "#413830",
          900: "#201C18",
          950: "#0F0D0B"
        }
      }
    },
  },
  plugins: [],
}
)