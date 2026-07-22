// https://docs.expo.dev/guides/using-eslint/
const {defineConfig} = require('eslint/config');
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
    expoConfig,
    {
        ignores: ["dist/*"],
    },
    {
        rules: {
            'no-console': ["warn", {allow: ["warn", "error"]}],
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "react/jsx-no-useless-fragment": "warn",
            "react-hooks/exhaustive-deps": "warn",
            "no-debugger": "error",
            "eqeqeq": ["warn", "always"]
        }
    }
]);
