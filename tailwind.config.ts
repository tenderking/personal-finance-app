import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Public Sans',
        ],
      },
        colors: {
        'beige': {
          100: '#F8F4F0',
          500: '#98908B',
        },
        'grey': {
          100: '#F2F2F2',
          300: '#B3B3B3',
          500: '#696868',
          900: '#201F24',
        },
        'yellow': '#F2CDAC',
        'green': '#277C78',
        'cyan': '#82C9D7',
        'navy': '#626070',
        'red': '#C94736',
        'purple': '#826CB0',
        'turquoise': '#597C7C',
        'brown': '#93674F',
        'magenta': '#934F6F',
        'blue': '#3F82B2',
        'navy-grey': '#97A0AC',
        'army-green': '#7F9161',
        'pink': '#AF81BA',
        'gold': '#CAB361',
        'orange': '#BE6C49',
      }
    },
  },
  plugins: [],
} satisfies Config;
