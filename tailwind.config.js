/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xs:'320px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('https://4kwallpapers.com/images/wallpapers/ios-13-stock-ipados-dark-green-black-background-amoled-ipad-4480x2520-794.jpg')",
        about: "url('./backgrounds/about.png')",
        services: "url('./backgrounds/services.png')",
        pj1: "url('/sfsff.png')",
        pj2: "url('/Image/projects/chefhoangdung.png')",
        pj3: "url('./Image/projects/spotify_clone.png')",
        pj4: "url('https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148704189.jpg')",
        pj5: "url('https://i.ytimg.com/vi/pMR_3FQxdYo/maxresdefault.jpg')",
        pj6: "url('./Image/projects/portfolio.png')"
      },
    },
  },
  plugins: [],
};