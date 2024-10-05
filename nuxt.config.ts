// nuxt.config.ts
export default defineNuxtConfig({
  target: "static", // Specify static target for GitHub Pages
  devtools: { enabled: true },
  app: {
    baseURL: "/Joke/", // Replace with your repository name
  },
  generate: {
    fallback: true, // Optional: Helps with SPA fallback
  },
  css: ["./assets/css/main.css"], // Include main CSS file
  postcss: {
    plugins: {
      tailwindcss: {}, // Enable Tailwind CSS
      autoprefixer: {}, // Ensure CSS compatibility across browsers
    },
  },
  compatibilityDate: "2024-10-05", // Compatibility date
});
