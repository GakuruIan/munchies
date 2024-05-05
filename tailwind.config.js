/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}", 
  "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        splash:"#FFF",
        primaryBtn:"#2A6E4F"
      },
      fontFamily:{
        'intro':['LobsterTwo-Bold','sans-serif'],
        'header':['SairaCondensed-Regular','sans-serif'],
        'text':['BarlowCondensed-Bold','sans-serif'],
        'text-sm':['BarlowCondensed-Regular','sans-serif']
      }
    },
  },
  plugins: [],
}
