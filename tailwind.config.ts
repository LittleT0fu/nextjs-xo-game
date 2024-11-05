/** @type {import('tailwindcss').Config} */


function generateGridColumns(lastValue: number): { [key: number]: string } { 
  let obj: { [key: number]: string } = {}; 
  for (let i = 13; i < lastValue; i++) { 
    obj[i] = `repeat(${i}, minmax(0, 1fr))`; 
  } 
    return obj; 
  }


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
         ...generateGridColumns(100) // This generates the columns from 12 until 100
      } 
    },
  },
  plugins: [],
}