module.exports = {
	env: {
		node: true,
		es6: true,
		browser: true,
	},
	extends: ["airbnb-base", "plugin:react/recommended", "prettier", "plugin:prettier/recommended"],
	plugins: ["react", "prettier"],
	parser: "@babel/eslint-parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"react/display-name": "warn",
		"react/no-unescaped-entities": "warn",
		"no-await-in-loop": "warn",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/prefer-es6-class": ["error", "always"],
		"prettier/prettier": "error",
		"no-undef": 0,
		"no-unused-vars": 0,
		"no-underscore-dangle": 0,
		"no-console": [0],
		"import/no-extraneous-dependencies": 0,
		"lines-around-directive": 0,
		"default-param-last": 0,
		strict: 0,
		"no-param-reassign": 0,
		"consistent-return": 0,
		"prefer-const": 0,
		"no-plusplus": 0,
		"prefer-destructuring": [
			"error",
			{
				array: false,
				object: true,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		"class-methods-use-this": 0,
	},
	settings: {
		react: {
			pragma: "React",
			version: "18.2.0",
		},
		propWrapperFunctions: ["forbidExtraProps"],
	},
};
