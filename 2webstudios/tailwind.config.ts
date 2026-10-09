import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#050505", surface: "#0B0B0B", fg: "#F5F5F5", mute: "#929292", line: "#222222", gold: "#E6A900" },
      fontFamily: { sans: ["var(--font-geist)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
