/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.jsx",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans'],
      },
      maxWidth: {
        '1080': '1080px',
      },
      colors : {
        'black-1' : '#111315',
        'black-2' : '#1B1D1F',
        'text-white' : '#FEF7EE',
        'text-gray' : '#6F757C'
      }
    },
  },
  plugins: [],
}

