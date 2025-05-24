import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "lovable-tagger"; // ❌ Commented out to prevent crash

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/niraj-portfolio/", // 👈 This tells GitHub where your app lives
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // mode === 'development' && componentTagger(), // ❌ Commented out this line
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
