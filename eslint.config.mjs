// eslint.config.mjs

import { ESLint } from 'eslint';

// Define your custom ESLint configuration
export default new ESLint({
	baseConfig: {
		env: {
			es2021: true,
			node: true,
		},
		extends: [
			'eslint:recommended',
			'plugin:node/recommended',
			'plugin:import/errors',
			'plugin:import/warnings',
			'plugin:import/typescript',
			'prettier',
		],
		parserOptions: {
			ecmaVersion: 12,
			sourceType: 'module',
		},
		plugins: ['import', 'node', 'prettier'],
		rules: {
			'prettier/prettier': 'error',
			'no-console': 'off',
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'node/no-unpublished-require': 'off',
			'node/no-missing-require': 'off',
			'import/no-unresolved': 'off',
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					js: 'never',
					mjs: 'never',
				},
			],
		},
	},
	useEslintrc: false,
});
