module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#141414",
        PrimaryBase: "#665EE0",
        PinkBase: "#B575BD",
        lightgray: "#929497",
        grayMedium: "#282828",
        inkDark: "#1F1F1F",
        RedBase:"#FF5247"
      },
    },
  },
  plugins: [],
};
