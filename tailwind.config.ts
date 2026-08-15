import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14161B",
        navy: "#10233F",
        navydeep: "#0A1830",
        paper: "#F6F5F1",
        paperdim: "#EEEBE3",
        copper: "#B5652D",
        coppersoft: "#D98A54",
        teal: "#3B6B63",
        tealsoft: "#5C8880",
        line: "#DAD6CC",
        linedark: "#2A3B54",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
