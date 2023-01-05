/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    backgroundImage: {
      'logo': "url('/images/logo.png')",
      'tag-underline': 'linear-gradient(transparent, transparent, 10px, #cc2a41, 10px, #cc2a41)'
    },
    extend: {
      colors: {
        'gorgeous-green': "#2bbc8a",
        'heading-grey': "#383838",
        'sub-heading-grey': "#8C8C8C",
      }
    },
  },
  plugins: [],
};