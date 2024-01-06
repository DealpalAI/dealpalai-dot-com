// tailwind.config.js
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      // Enable backdrop-filter utility
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(50px)',
      },
    },
  },
  // No need to add '@tailwindcss/filters' plugin here
}
