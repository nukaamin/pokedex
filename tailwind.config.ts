import { Config } from 'tailwindcss'
// tailwind.config.js for Nuxt users
const formKitTailwind = require('@formkit/themes/tailwindcss');

export default <Config> {
  darkMode: 'class',
  content: ['./formkit.config.ts'],
  plugins: [formKitTailwind]
}