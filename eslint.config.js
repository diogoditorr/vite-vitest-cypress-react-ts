/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        languageOptions: {
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        rules: {
            semi: "error",
        },
        settings: {},
    },
];
