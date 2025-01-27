import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#BF2550",
          secondary: "#2C354D",
          accent: "#FFFFFF",
          "card-background": "#D9D9D9",
        },
      },
      borderRadius: {
        "common": "20px",
      },
    },
  },
} satisfies Config;
