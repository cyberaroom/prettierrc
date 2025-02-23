import { Config } from "prettier"

declare const config: Config & {
	plugins: string[]
	overrides: Array<{
		files: string | string[]
		options: {
			parser?: "typescript" | "babel" | "json" | "ini" | "nginx" | "html" | string
			plugins?: string[]
		}
	}>
	printWidth: number
	tabWidth: number
	semi: boolean
	singleQuote: boolean
	quoteProps: "as-needed"
	trailingComma: "es5"
	bracketSpacing: boolean
	bracketSameLine: boolean
	arrowParens: "always"
	vueIndentScriptAndStyle: boolean
	endOfLine: "lf"
	attributeGroups?: string[]
	attributeIgnoreCase?: boolean
}

export = config
