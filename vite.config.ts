/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { URL, fileURLToPath } from "node:url";
import mdx from "@mdx-js/rollup";
import unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 13579,
  },
  plugins: [
    { enforce: "pre", ...mdx(/* jsxImportSource: …, otherOptions… */) },
    react(),
    unocss(),
  ],
  resolve: {
    alias: {
      "~": resolve(fileURLToPath(new URL(".", import.meta.url))),
      "@": resolve(fileURLToPath(new URL("./src", import.meta.url))),
    },
  },
});
