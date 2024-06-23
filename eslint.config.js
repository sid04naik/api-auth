// eslint.config.mjs

import { ESLint } from "eslint";

// Define your custom ESLint configuration
export default new ESLint({
	baseConfig: {
		env: {
			es2021: true,
			node: true,
		},
		extends: ["airbnb-base", "plugin:jest/recommended", "plugin:prettier/recommended"],
		parserOptions: {
			ecmaVersion: 2021,
			sourceType: "module",
		},
		plugins: ["import", "node", "jest", "security", "prettier"],
		rules: {
			"prettier/prettier": "error",
			"no-console": "error",
			"no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
			"node/no-unpublished-require": "off",
			"node/no-missing-require": "off",
			"import/no-unresolved": "off",
			"import/extensions": [
				"error",
				"ignorePackages",
				{
					js: "never",
					mjs: "never",
				},
			],
		},
	},
	useEslintrc: false,
});
