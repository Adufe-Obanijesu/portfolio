/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   safelist: [
    "bg-red-400",
    "bg-red-400/80",
    "bg-blue-400",
    "bg-pink-500",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-black",
    "bg-green-400",
    "bg-slate-100",
    "bg-purple-500",
    "bg-blue-600",
    "bg-orange-600",
    "text-white",
    "text-slate-900",
    "text-black",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["quicksand", "sans-serif"],
        playfair: ["playfair", "sans"],
      }
    },
  },
  plugins: [],
}

