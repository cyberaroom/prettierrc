# 📦 cyberaroom‑prettierrc

Lightweight yet powerful Prettier config to keep your code consistent and professional.

---

## 🚀 Quick Start

1. Install dependencies (Prettier >= 3.6):

   ```bash
   pnpm add -D prettier cyberaroom-prettierrc
   # or yarn add -D prettier cyberaroom-prettierrc
   # or npm install -D prettier cyberaroom-prettierrc
   ```

2. Create `.prettierrc.mjs` in your project root:

   ```js
   import prettierrc from 'cyberaroom-prettierrc';
   export default { ...prettierrc };
   ```

3. Add scripts to `package.json`:

   ```json
   {
     "scripts": {
       "format": "prettier --write .",
       "lint:format": "prettier --check ."
     }
   }
   ```

4. Run the formatter:

   ```bash
   pnpm run format
   # or npm run format
   ```

---

## 🎯 Key Benefits

- **Zero‑config support** for TypeScript, JavaScript, Vue, HTML, CSS/SCSS.
- **Auto‑plugin filter**: detects missing plugins and suggests install commands.
- **TailwindCSS integration** (`prettier-plugin-tailwindcss`) for perfect class ordering.
- **Unified style**: 120‑char line width, single quotes, ES5 trailing commas.
- **Universal compatibility** with pnpm, yarn, and npm out of the box.

---

## ⚙️ Tips

- **Add a new override** by appending a block under `overrides`.
- **Customize rules** by overriding `printWidth`, `tabWidth`, etc.
- **Add custom plugins** to the `atoms/vars` array—the filter will include them automatically.

---
