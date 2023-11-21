/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        normal: "0 35px 60px -15px rgba(0, 0, 0, 0.15)",
        "normal-cover": "0px 0px 11px 4px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
