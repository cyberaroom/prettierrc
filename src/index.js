/** @type {import('prettier').Config} */
module.exports = {
	plugins: [
		"prettier-plugin-organize-imports",
		"prettier-plugin-organize-attributes",
		"prettier-plugin-jsdoc",
		"prettier-plugin-prisma",
		"prettier-plugin-tailwindcss",
	],

	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			options: { parser: "typescript" },
		},
		{
			files: ["*.js", "*.jsx", "*.mjs", "*.cjs"],
			options: { parser: "babel" },
		},
		{
			files: ["*.json"],
			options: { parser: "json" },
		},
		{
			files: [".env", ".env.*"],
			options: { parser: "ini" },
		},
		{
			files: ["nginx.conf", "nginx/**/*.conf"],
			options: {
				parser: "nginx",
				plugins: ["prettier-plugin-nginx"], // Если требуется
			},
		},
		{
			files: ["*.html"],
			options: { parser: "html" },
		},
		{
			files: ["*.tsx", "*.jsx"],
			options: {
				plugins: ["prettier-plugin-organize-imports", "prettier-plugin-jsdoc", "prettier-plugin-tailwindcss"],
			},
		},
		{
			files: "*.prisma",
			options: {
				plugins: ["prettier-plugin-prisma"],
			},
		},
	],

	// Общие настройки
	printWidth: 120,
	tabWidth: 2,
	semi: true,
	singleQuote: false,
	quoteProps: "as-needed",
	trailingComma: "es5",
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: "always",
	vueIndentScriptAndStyle: true,
	endOfLine: "lf",

	// Настройки плагинов
	attributeGroups: ["^class$", "^(id|name)$", "$DEFAULT", "^aria-"],
	attributeIgnoreCase: true,
}
