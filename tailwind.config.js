/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#2196f3",
      yellow: "#ffeb3b",
      green: "#16a34a",
      red: " #C21807",
      blue6: "#2563eb",
      white: "#ffff",
      gray3: "#d1d5db",
      gray4: "#94a3b8",
      gray5: "#6b7280",
      gray6: "#4b5563",
      slate: "#d1d5db",
    },
    fontFamily: {
      roboto: ["Roboto", "Arial", "sans-serif"],
      serif: ["sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
