import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      "work-sans": ["Work Sans", "sans-serif"]
    },
    extend: {
      colors: {
        // Using CSS Variables for colors
        background: "var(--background)",
        foreground: "var(--foreground)",

        primaryText: "var(--primary-text)",
        secondaryText: "var(--secondary-text)",

        link: "var(--link)",
        linkHover: "var(--link-hover)",

        primaryBtn: "var(--primary-btn)",
        primaryBtnText: "var(--primary-btn-text)",
        primaryBtnHover: "var(--primary-btn-hover)",
        primaryBtnHoverText: "var(--primary-btn-hover-text)",

        secondaryBtn: "var(--secondary-btn)",
        secondaryBtnText: "var(--secondary-btn-text)",
        secondaryBtnHover: "var(--secondary-btn-hover)",
        secondaryBtnHoverText: "var(--secondary-btn-hover-text)",

        // Color Shades
        silver: {
          50: "var(--silver-50)",
          100: "var(--silver-100)",
          200: "var(--silver-200)",
          300: "var(--silver-300)",
          400: "var(--silver-400)",
          500: "var(--silver-500)",
          600: "var(--silver-600)",
          700: "var(--silver-700)",
          800: "var(--silver-800)",
          900: "var(--silver-900)",
          950: "var(--silver-950)",
        },

        slateGray: {
          50: "var(--slate-gray-50)",
          100: "var(--slate-gray-100)",
          200: "var(--slate-gray-200)",
          300: "var(--slate-gray-300)",
          400: "var(--slate-gray-400)",
          500: "var(--slate-gray-500)",
          600: "var(--slate-gray-600)",
          700: "var(--slate-gray-700)",
          800: "var(--slate-gray-800)",
          900: "var(--slate-gray-900)",
          950: "var(--slate-gray-950)",
        },

        deepBlue: {
          50: "var(--deep-blue-50)",
          100: "var(--deep-blue-100)",
          200: "var(--deep-blue-200)",
          300: "var(--deep-blue-300)",
          400: "var(--deep-blue-400)",
          500: "var(--deep-blue-500)",
          600: "var(--deep-blue-600)",
          700: "var(--deep-blue-700)",
          800: "var(--deep-blue-800)",
          900: "var(--deep-blue-900)",
          950: "var(--deep-blue-950)",
        },

        accent: {
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          950: "var(--accent-950)",
        },

        success: {
          50: "var(--success-50)",
          100: "var(--success-100)",
          200: "var(--success-200)",
          300: "var(--success-300)",
          400: "var(--success-400)",
          500: "var(--success-500)",
          600: "var(--success-600)",
          700: "var(--success-700)",
          800: "var(--success-800)",
          900: "var(--success-900)",
          950: "var(--success-950)",
        },

        error: {
          50: "var(--error-50)",
          100: "var(--error-100)",
          200: "var(--error-200)",
          300: "var(--error-300)",
          400: "var(--error-400)",
          500: "var(--error-500)",
          600: "var(--error-600)",
          700: "var(--error-700)",
          800: "var(--error-800)",
          900: "var(--error-900)",
          950: "var(--error-950)",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
} satisfies Config;
