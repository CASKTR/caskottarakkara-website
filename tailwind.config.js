/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
       // Sans-serif
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        harvard: ['"EB Garamond"', 'serif'], // close to Harvard style


        // Serif
        merriweather: ['Merriweather', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        librebaskerville: ['Libre Baskerville', 'serif'],
        crimson: ['Crimson Text', 'serif'],
        sourceserif: ['Source Serif Pro', 'serif'],
      },
      
    extend: {},
  
  },
  plugins: [],
};
