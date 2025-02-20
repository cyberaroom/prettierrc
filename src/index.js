/** @type {import('prettier').Config} */
module.exports = {
	plugins: [
		"prettier-plugin-tailwindcss",
		"prettier-plugin-organize-imports",
		"prettier-plugin-organize-attributes",
		"prettier-plugin-jsdoc",
		"prettier-plugin-prisma",
	],

	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.js", "*.jsx", "*.mjs", "*.cjs", "*.json", "*.prisma"],
			options: { parser: "typescript" },
		},
		{
			files: [".npmrc", ".env", ".env.*"],
			options: { parser: "ini" },
		},
		{
			files: ["nginx.conf", "nginx/**/*.conf"],
			options: { parser: "nginx" },
		},
		{
			files: ["*.html"],
			options: { parser: "html" },
		},
	],

	printWidth: 120,
	tabWidth: 2,
	semi: true,
	singleQuote: false,
	quoteProps: "as-needed",
	trailingComma: "es5",
	bracketSpacing: true,
	bracketSameLine: false, // ⬅️ Правильный параметр (замена jsxBracketSameLine)
	arrowParens: "always",
	vueIndentScriptAndStyle: true,
	endOfLine: "lf",
}
