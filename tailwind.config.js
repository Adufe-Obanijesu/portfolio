/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   safelist: [
    'text-red-400', 'text-red-500', "bg-red-400", 'border-red-400',
    'text-purple-400', 'border-purple-400',
    'text-blue-400', 'text-blue-600', 'border-blue-400',
    'text-green-400', 'text-green-500', 'border-green-500',
    'text-yellow-400', 'border-yellow-400',
    'text-black', 'border-black',
    'bg-blue-400', 'bg-orange-400', 'bg-yellow-400',
    'bg-green-400', 'bg-slate-100', 'text-slate-900',
    'bg-purple-500', 'bg-orange-600'
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

