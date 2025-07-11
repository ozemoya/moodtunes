/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'sky_blue': "#4C8ACC",
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
],
daisyui: {
  themes: ["corporate"],
},

};
