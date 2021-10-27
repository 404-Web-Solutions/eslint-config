module.exports = {
	extends: [
		'airbnb',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['simple-import-sort', '@typescript-eslint'],
	rules: {
		'class-methods-use-this': 'off',
		'import/prefer-default-export': 'off',
		'no-plusplus': 'off',
		'no-restricted-globals': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				trailingComma: 'all',
				useTabs: true,
				bracketSpacing: true,
				tabWidth: 2,
				semi: false,
				jsxSingleQuote: true,
				printWidth: 120,
			},
		],
		radix: 'off',
		'no-unused-vars': 'warn',
		'class-methods-use-this': 'off',
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'no-use-before-define': 'off',
		quotes: ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-single'],
	},
}