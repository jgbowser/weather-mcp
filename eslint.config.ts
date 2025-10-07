import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS rules
  js.configs.recommended,

  // TypeScript rules (type-aware)
  tseslint.configs.recommendedTypeChecked,

  // Enable type-aware parsing via project service
  {
    files: ["src/**/*.{ts,mts,cts}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Node.js globals for this project
  {
    languageOptions: { globals: globals.node },
  },

  // Prettier last
  eslintPluginPrettierRecommended,

  // Flat config ignores
  {
    ignores: [
      "node_modules",
      "build",
      "package-lock.json",
      "package.json",
      "tsconfig.json",
      "eslint.config.ts",
    ],
  },
]);
