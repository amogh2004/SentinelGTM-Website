/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      colors: {
        primary: "#c1c1ff",
        "primary-vivid": "#5d5fef",
        secondary: "#cebdff",
        amber: "#ffb95f",
        success: "#4ade80",
        bg: "#080808",
        surface: "#111111",
        card: "#161616",
        "border-dim": "rgba(70,69,85,0.25)",
        ink: "#f0eeee",
        "ink-muted": "rgba(240,238,238,0.45)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        stageIn: {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        flowPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
        glowOrb: {
          "0%, 100%": { opacity: "0.12", transform: "scale(1)" },
          "50%": { opacity: "0.2", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "stage-in": "stageIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "flow-pulse": "flowPulse 2s ease-in-out infinite",
        "glow-orb": "glowOrb 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
