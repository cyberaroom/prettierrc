import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"], 
  outDir: "dist",
  dts: true,
  clean: true,
  target: "esnext",
  sourcemap: false,
  minify: false,
  external: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-organize-imports',
    'prettier-plugin-organize-attributes',
  ],
})
