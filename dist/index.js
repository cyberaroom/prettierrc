var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/organisms/filterPlugins.ts
function logPluginWarning(pluginNames, installCmd, language) {
  if (!pluginNames.length) return;
  const messages = {
    ru: /* @__PURE__ */ __name((plugins, cmd) => `
\u26A0\uFE0F  [prettier-config] \u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B: ${plugins.map((p) => `"${p}"`).join(", ")}.
\u{1F4A1} \u0414\u043B\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439 \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0438\u0445:
   ${cmd} ${plugins.join(" ")}
\u2728 Prettier \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0438 \u0431\u0435\u0437 \u043D\u0438\u0445, \u043D\u043E \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u0443\u0434\u0443\u0442 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B.
`, "ru"),
    en: /* @__PURE__ */ __name((plugins, cmd) => `
\u26A0\uFE0F  [prettier-config] Optional plugins not found: ${plugins.map((p) => `"${p}"`).join(", ")}.
\u{1F4A1} To enable additional formatting features, please install them:
   ${cmd} ${plugins.join(" ")}
\u2728 Prettier will still work without them, but some formatting improvements will be unavailable.
`, "en"),
    zh: /* @__PURE__ */ __name((plugins, cmd) => `
\u26A0\uFE0F  [prettier-config] \u672A\u627E\u5230\u53EF\u9009\u63D2\u4EF6: ${plugins.map((p) => `"${p}"`).join("\uFF0C")}
\u{1F4A1} \u5982\u9700\u542F\u7528\u66F4\u591A\u683C\u5F0F\u5316\u529F\u80FD\uFF0C\u8BF7\u5B89\u88C5\u8FD9\u4E9B\u63D2\u4EF6\uFF1A
   ${cmd} ${plugins.join(" ")}
\u2728 \u5373\u4F7F\u6CA1\u6709\u8FD9\u4E9B\u63D2\u4EF6\uFF0CPrettier \u4ECD\u53EF\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u4F46\u67D0\u4E9B\u683C\u5F0F\u5316\u589E\u5F3A\u529F\u80FD\u5C06\u4E0D\u53EF\u7528\u3002
`, "zh")
  };
  const langKey = language.split(/[-_]/)[0].toLowerCase();
  const message = messages[langKey] || messages["en"];
  console.log(message(pluginNames, installCmd));
}
__name(logPluginWarning, "logPluginWarning");
function filterPlugins(pluginNames, context = "unknown") {
  const missing = [];
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  const packageManager = process.env.npm_config_user_agent?.includes("pnpm") ? "pnpm" : process.env.npm_config_user_agent?.includes("yarn") ? "yarn" : "npm";
  const installCmd = packageManager === "npm" ? "npm install -D" : packageManager === "yarn" ? "yarn add -D" : "pnpm add -D";
  const result = pluginNames.filter((name) => {
    try {
      require.resolve(name);
      return true;
    } catch {
      missing.push(name);
      return false;
    }
  });
  logPluginWarning(missing, installCmd, locale);
  return result;
}
__name(filterPlugins, "filterPlugins");

// src/atoms/vars.ts
var basePlugins = [
  "prettier-plugin-tailwindcss"
];
var jstsPlugins = [
  ...basePlugins,
  "prettier-plugin-organize-imports"
];
var htmlPlugins = [
  ...basePlugins,
  "prettier-plugin-organize-attributes"
];
var templatePlugins = jstsPlugins;
var availableBasePlugins = filterPlugins(basePlugins, "BASE");
var availableJsTsPlugins = filterPlugins(jstsPlugins, "JS/TS");
var availableHtmlPlugins = filterPlugins(htmlPlugins, "HTML");
var availableTemplatePlugins = filterPlugins(templatePlugins, "TEMPLATES");

// src/index.ts
var allPlugins = [
  ...availableBasePlugins,
  ...availableHtmlPlugins,
  ...availableJsTsPlugins,
  ...availableTemplatePlugins
];
var prettierrc = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  plugins: filterPlugins(allPlugins),
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: "as-needed",
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "avoid",
  endOfLine: "lf",
  overrides: [
    {
      files: [
        "*.ts",
        "*.tsx"
      ],
      options: {
        parser: "typescript",
        plugins: availableJsTsPlugins
      }
    },
    {
      files: [
        "*.js",
        "*.jsx",
        "*.mjs",
        "*.cjs"
      ],
      options: {
        parser: "babel",
        plugins: availableJsTsPlugins
      }
    },
    {
      files: [
        "*.html",
        "*.htm"
      ],
      options: {
        parser: "html",
        plugins: availableHtmlPlugins,
        attributeGroups: [
          "^class$",
          "^(id|name)$",
          "$DEFAULT",
          "^aria-"
        ],
        attributeIgnoreCase: true
      }
    },
    {
      files: [
        "*.vue"
      ],
      options: {
        parser: "vue",
        plugins: availableTemplatePlugins
      }
    },
    {
      files: [
        "*.css",
        "*.scss"
      ],
      options: {
        parser: "css",
        plugins: availableBasePlugins
      }
    }
  ],
  pluginSearchDirs: false
};
module.exports = prettierrc;
