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
       height: {
        '108': '26rem',
      },
      backgroundImage: {
        site: "url('https://4kwallpapers.com/images/wallpapers/ios-13-stock-ipados-dark-green-black-background-amoled-ipad-4480x2520-794.jpg')",
        about: "url('./backgrounds/about.png')",
        services: "url('./backgrounds/services.png')",
        project:"url('https://c4.wallpaperflare.com/wallpaper/726/764/940/dark-green-minimalism-geometry-abstraction-wallpaper-preview.jpg')",
        pj1: "url('/sfsff.png')",
        pj2: "url('/Image/projects/chefhoangdung.png')",
        pj3: "url('https://th.bing.com/th/id/R.b0a44a66d9d41a4693dbf4488b69f0c5?rik=IOtIhpHRfjj6JQ&riu=http%3a%2f%2fmedia.idownloadblog.com%2fwp-content%2fuploads%2f2016%2f02%2fapple-music-android-release-date-app.jpg&ehk=u%2fy1ACVRpUByEfmM%2bHg5U%2fPXiQWWpw9EbRhRwjYsMcM%3d&risl=&pid=ImgRaw&r=0')",
        pj4: "url('https://th.bing.com/th/id/R.61b4d55bfdbe25dec856a394715eb957?rik=aPskHXS42xfkyA&pid=ImgRaw&r=0')",
        pj5: "url('https://th.bing.com/th/id/OIP.LtR8rD05CLZrCJpGQy23DQHaEK?pid=ImgDet&rs=1')",
        pj6: "url('https://th.bing.com/th/id/R.f43e1ac565de3c3260a5aa724c57b202?rik=Rlw7bAUfF5C5lA&pid=ImgRaw&r=0')"
      },
    },
  },
  plugins: [],
};