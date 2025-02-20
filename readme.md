# Enhanced Prettier Configuration

This is an advanced Prettier configuration that includes multiple plugins and specific formatting rules for different file types.

## Features

- 📌 **Tailwind CSS class sorting** (via `prettier-plugin-tailwindcss`)
- 🔄 **Automatic import organization** (via `prettier-plugin-organize-imports`)
- 🏗 **HTML attribute organization** (via `prettier-plugin-organize-attributes`)
- 📝 **JSDoc formatting** (via `prettier-plugin-jsdoc`)
- 🛠 **Prisma schema formatting** (via `prettier-plugin-prisma`)
- 🗂 **Consistent formatting for multiple file types**

## Installation

1. Install Prettier and the required plugins:

```bash
npm install --save-dev prettier cyberaroom-prettierrc
```

2. If your project requires additional Prettier plugins (e.g., Tailwind, Prisma, etc.), install them separately:

```bash
npm install --save-dev prettier-plugin-tailwindcss prettier-plugin-organize-imports prettier-plugin-organize-attributes prettier-plugin-jsdoc prettier-plugin-prisma
```

3. Add the configuration to your project:

- **In `package.json`:**

```json
{
	"prettier": "cyberaroom-prettierrc"
}
```

- **Or create a `.prettierrc` file:**

```json
"cyberaroom-prettierrc"
```

## Usage

### Format all files in the project:

```bash
npx prettier --write .
```

### Check formatting without making changes:

```bash
npx prettier --check .
```

## Supported File Types

This configuration applies formatting to multiple file types:

| File Type                                                        | Parser     |
| ---------------------------------------------------------------- | ---------- |
| `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs`, `.cjs`, `.json`, `.prisma` | TypeScript |
| `.npmrc`, `.env`, `.env.*`                                       | INI        |
| `nginx.conf`, `nginx/**/*.conf`                                  | Nginx      |
| `.html`                                                          | HTML       |

## Updating the Configuration

To update this Prettier configuration package in your project:

```bash
npm update cyberaroom-prettierrc
```
