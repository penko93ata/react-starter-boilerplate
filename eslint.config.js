import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
    tseslint.configs.recommended,
    {
        files: ["**/*.{jsx,tsx}"],
        plugins: {
            react: pluginReact,
            "simple-import-sort": simpleImportSort,
        },
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
            "@typescript-eslint/no-unused-vars": "off",
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        // 1. Side effect imports at the start. For me this is important because I want to import reset.css and global styles at the top of my main file.
                        ["^\\u0000"],
                        // 2. `react` and packages: Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                        ["^react$", "^@?\\w"],
                        // 3. Absolute imports and other imports such as Vue-style `@/foo`.
                        // Anything not matched in another group. (also relative imports starting with "../")
                        ["^@", "^"],
                        // 4. relative imports from same folder "./" (I like to have them grouped together)
                        ["^\\./"],
                        // 5. style module imports always come last, this helps to avoid CSS order issues
                        ["^.+\\.(module.css|module.scss)$"],
                        // 6. media imports
                        ["^.+\\.(gif|png|svg|jpg)$"],
                    ],
                },
            ],
        },
    },
]);
