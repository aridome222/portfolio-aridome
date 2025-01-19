import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        'custom-shape': 'polygon(50% 0%, 87% 17%, 100% 100%, 0 100%, 13% 17%)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};
export default config;
