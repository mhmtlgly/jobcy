import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fit: "repeat(auto-fit, minmax(0,1fr))",
      },
      colors: {
        brand: colors.blue,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
