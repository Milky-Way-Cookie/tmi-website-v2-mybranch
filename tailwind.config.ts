import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: "#FF5E38",
          hover: "#E65230",
        },
        secondary: {
          DEFAULT: "#0AABBE",
          hover: "#0892A5",
        },
        
        // Background Colors
        background: "#FBFAF9",
        card: "#FBFBF9",
        white: "#FFFFFF",
        
        // Text Colors
        text: {
          primary: "#000000",
          muted: "rgba(0, 0, 0, 0.7)",
        },
        
        // Semantic Aliases
        onAccent: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;

