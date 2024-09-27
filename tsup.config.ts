import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  external: ['react'],
  clean: true,
});
