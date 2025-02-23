# cyberaroom-prettierrc

Advanced Prettier configuration with multi-filetype support and plugin ecosystem integration.

## ✨ Features

- 🎨 **Tailwind CSS** class sorting and formatting
- 📦 **Automatic import organization** for JS/TS
- 🏷 **HTML/JSX attribute ordering** with custom groups
- 📝 **JSDoc documentation formatting**
- 🗄 **Prisma schema** auto-formatting
- 🌐 **Nginx config** syntax support
- 📄 **Multi-parser support** for 10+ file types
- 🔧 **Consistent code style** across entire project

## 📦 Installation

```bash
npm install --save-dev cyberaroom-prettierrc prettier
```

Plugins will be installed automatically (for npm 7+). For legacy package managers:

```bash
npm install --save-dev \
  prettier-plugin-tailwindcss \
  prettier-plugin-organize-imports \
  prettier-plugin-organize-attributes \
  prettier-plugin-jsdoc \
  prettier-plugin-prisma \
  prettier-plugin-nginx
```

## ⚙️ Configuration

1. **Basic setup** (package.json):

```json
{
	"prettier": "cyberaroom-prettierrc"
}
```

2. **Advanced setup** (.prettierrc.js):

```javascript
module.exports = {
	extends: "cyberaroom-prettierrc",
	// Optional plugin-specific configs
	tailwindConfig: "./tailwind.config.js",
	prisma: {
		schema: "./prisma/schema.prisma",
	},
}
```

## 📋 Supported File Types

| File Patterns               | Parser     | Plugins                         |
| --------------------------- | ---------- | ------------------------------- |
| `*.ts`, `*.tsx`             | TypeScript | Import sorting, JSDoc, Tailwind |
| `*.js`, `*.jsx`, `*.mjs`    | Babel      | Import sorting, JSDoc           |
| `*.json`                    | JSON       | -                               |
| `.npmrc`, `.env*`           | INI        | -                               |
| `nginx*.conf`               | Nginx      | Nginx syntax support            |
| `*.html`                    | HTML       | Attribute sorting               |
| `*.prisma`                  | Prisma     | Schema formatting               |
| `*.css`, `*.scss`, `*.sass` | CSS/SCSS   | Tailwind class sorting          |

## 🛠 Plugin Configuration

### Tailwind CSS

Add Tailwind config path in your project's Prettier config:

```javascript
// .prettierrc.js
module.exports = {
	tailwindConfig: "./tailwind.config.js",
}
```

### HTML/JSX Attribute Ordering

Attributes are sorted in this order:

1. `class`
2. `id`, `name`
3. Default group
4. `aria-*` attributes

Enable case-insensitive sorting:

```javascript
// .prettierrc.js
module.exports = {
	attributeIgnoreCase: false, // default: true
}
```

## 🚀 Usage

Format all supported files:

```bash
npx prettier --write .
```

Check formatting:

```bash
npx prettier --check .
```

Format specific file types:

```bash
npx prettier --write '**/*.tsx'
```

## ⚠️ Troubleshooting

**Common issues:**

1. **Plugins not working**:

   - Ensure all plugins are in `devDependencies`
   - Clear Prettier cache: `npx prettier --clear-cache`

2. **Tailwind class sorting**:

   - Verify `tailwind.config.js` exists
   - Restart IDE after configuration changes

3. **Nginx config support**:
   - Install `prettier-plugin-nginx` separately if using npm <7

## 🔄 Version Policy

- Compatible with Prettier 3.x
- Tested with Node.js 18+
- Semantic versioning (breaking changes in major versions)

## 📄 License

MIT © [cyberaroom](https://github.com/cyberaroom)
