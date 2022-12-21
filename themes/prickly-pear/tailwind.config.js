/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    backgroundImage: {
      'logo': "url('/images/logo.png')",
    },
    extend: {
      colors: {
        'gorgeous-green': "#2bbc8a",
        'heading-grey': "#383838"
      }
    },
  },
  plugins: [],
};