/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#000000',
        rebecca: '#663399',
        'violet-smoke': '#4B3A67',
        'deep-amethyst': '#2E1A47',
        'dim-lilac': '#8A6FAE',
        ash: '#3A3A3A'
      },
      fontFamily: {
        heading: ['Poppins', 'Inter Tight', 'sans-serif'],
        body: ['IBM Plex Sans', 'Nunito', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
}
