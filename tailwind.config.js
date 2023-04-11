/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "360px",
        tablet: "640px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
