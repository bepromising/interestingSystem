module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: ['standard', 'plugin:prettier/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		parser: 'babel-eslint'
	},
	plugins: ['vue', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	}
};
