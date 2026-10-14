/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2b1a15",
          dark: "#0d0301",
          container: "#2b1a15",
          fixed: "#fcdcd3"
        },
        secondary: {
          DEFAULT: "#8e4c3f",
          rose: "#b56b5d",
          soft: "#D99587",
          container: "#fea898",
          fixed: "#ffdad3"
        },
        gold: {
          DEFAULT: "#DFC286",
          antique: "#DFC286",
          warm: "#e0a93b",
          light: "#fcedbd"
        },
        linen: {
          DEFAULT: "#F3EDE2",
          warm: "#F3EDE2"
        },
        ivory: {
          DEFAULT: "#FCFBF7",
          chiffon: "#FCFBF7"
        },
        espresso: {
          DEFAULT: "#1F130F",
          noir: "#1F130F"
        },
        surface: {
          DEFAULT: "#fcf9f3",
          low: "#f6f3ed",
          container: "#f0eee8",
          high: "#ebe8e2",
          highest: "#e5e2dc",
          dim: "#dcdad4"
        },
        pay: {
          yape: "#742384",
          plin: "#00D4B2",
          bcp: "#002A66",
          whatsapp: "#25D366",
          whatsappDark: "#15803d"
        }
      },
      fontFamily: {
        serif: ['"Bodoni Moda"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Marck Script"', 'cursive']
      },
      boxShadow: {
        'atelier': '0 8px 30px -10px rgba(43, 26, 21, 0.08)',
        'atelier-lift': '0 16px 40px -12px rgba(43, 26, 21, 0.12)',
        'modal': '0 24px 64px -16px rgba(43, 26, 21, 0.25)'
      }
    },
  },
  plugins: [],
}
