/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        customgray:'#f3f5f7',
        customgray1:'#222222',
        customred:'#ee2a24',
        customgray2:'#6d787d',
      },
    },
  },
  plugins: [],
};
