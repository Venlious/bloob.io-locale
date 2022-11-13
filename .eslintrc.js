module.exports = {
	root: true,
	env: {
		node: true
	},
	parser: `@typescript-eslint/parser`,
	extends: [`plugin:@typescript-eslint/recommended`, `prettier`, `plugin:prettier/recommended`],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: `module`
	},
	env: {
		es6: true,
		node: true
	},
	rules: {
		'no-var': `error`,
		'no-multi-spaces': `error`,
		'space-in-parens': `error`,
		'no-multiple-empty-lines': `error`,
		'@typescript-eslint/no-explicit-any': `off`,
		quotes: [`error`, `backtick`],
		'prettier/prettier': `error`
	},
	overrides: [
		{
			files: [`**/__tests__/*.{j,t}s?(x)`, `**/*.spec.{j,t}s?(x)`],
			env: {
				jest: true
			}
		}
	]
}
