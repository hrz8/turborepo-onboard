import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["esm", "cjs"],
  splitting: false,
  dts: true,
  sourcemap: true,
  clean: true,
  silent: true,
});
