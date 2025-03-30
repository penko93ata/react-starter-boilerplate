import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
    tseslint.configs.recommended,
    {
        files: ["**/*.{jsx,tsx}"],
        plugins: { react: pluginReact },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
        },
    },
]);
