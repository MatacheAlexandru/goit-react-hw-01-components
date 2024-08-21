import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/goit-react-hw-01-components/", // Înlocuiește cu numele repo-ului tău
  plugins: [react()],
});
