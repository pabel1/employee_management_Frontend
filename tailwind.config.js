/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "576px",
      md: "764px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1750px",
      "3xl": "2265px",
    },
    container: {
      center: true,
      padding: "25px",
      screens: {
        xs: "360px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        // primaryColor: "#11998E",
        // secondary: "#EC6A4B",
        // bgColor: "#CCEEFB",
        lightText: "#B0B7C3",
        textColor: "#344054",
      },
    },
  },
  plugins: [],
};
