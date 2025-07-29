import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3DBE9E",
          hover: "#37ab8f",
          light: "#eef9f6",
        },
        accent: {
          DEFAULT: "#FFC75F",
          hover: "#f7bd59",
          light: "#fff8e5",
        },
        gray: {
          900: "#1F2937",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        "bounce-subtle": "bounce-subtle 3s infinite",
      },
      keyframes: {
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(-2%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
} satisfies Config;
