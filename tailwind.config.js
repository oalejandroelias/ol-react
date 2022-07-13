/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.htl", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
