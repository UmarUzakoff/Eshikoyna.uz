/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        header: "#f2f0f0",
        instagram: "#c13584",
        facebook: "#1877f2",
        telegram: "#0088cc",
        vk: "#45668e",
        normtext: "#062a4d",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
