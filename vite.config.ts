import { defineConfig } from "vite";

export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  plugins: [
    {
      name: "pre",
      enforce: "pre",
      transform(_src, id) {
        console.log("pre", id);
      },
    },
  ],
});
