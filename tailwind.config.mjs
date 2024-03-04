/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "lgray-300": "rgba(66,67,77,50%)",
      },
    },
  },
  plugins: [],
};
