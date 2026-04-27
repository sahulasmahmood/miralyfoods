/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D32F2F",
          light: "#E53935",
          dark: "#B71C1C",
        },
        secondary: {
          DEFAULT: "#F5F5F5",
          dark: "#FFCDD2",
        },
        accent: {
          DEFAULT: "#2E7D32",
          hover: "#388E3C",
        },
        "brand-bg": "#F5F5F5",
        "text-body": "#555555",
        "text-heading": "#1A1A1A",
        brown: {
          DEFAULT: "#5D4037",
          light: "#795548",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        mono: ["var(--font-inter)", "monospace"],
      },
    },
  },
  plugins: [],
};
