/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        base: ["var(--font-base)", "sans-serif"],
      },
      colors: {
        primary: "#8c8c8c",
        slate: "#333366",
        slate2: "#5b5b84",
        gray40: "#666666",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      backgroundImage: (theme) => ({
        space: "url('/assets/images/theme/bg-hero-1920-480.png')",
        hMerhaba: "url('/assets/images/merhaba/home.jpg')",
        rMerhaba: "url('/assets/images/merhaba/reyhan.jpg')",
        fMerhaba: "url('/assets/images/merhaba/felsefe.jpg')",
        yMerhaba: "url('/assets/images/merhaba/yol.jpg')",
        cMerhaba: "url('/assets/images/merhaba/calisma.jpg')",
        aMerhaba: "url('/assets/images/merhaba/arkadas.jpg')",
        iMerhaba: "url('/assets/images/merhaba/iletisim.jpg')",
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};
