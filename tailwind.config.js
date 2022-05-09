module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // Cores adicionadas além das que já existem no tailwind
      colors: {
        // Cor inserida manualmente, é possível adicionar mais tons
        brand: {
          300: '#996DFF',
          500: '#8257E6'
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
