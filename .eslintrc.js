module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'standard',
		'plugin:vue/essential',
		'plugin:prettier/recommended',
		'@vue/typescript'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	}
};
