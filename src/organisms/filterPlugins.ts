function logPluginWarning(pluginNames: string[], installCmd: string, language: string) {
  if (!pluginNames.length) return;
  const messages: Record<string, (plugins: string[], cmd: string) => string> = {
    ru: (plugins, cmd) =>
      `\n⚠️  [prettier-config] Необязательные плагины не найдены: ${plugins.map(p => `"${p}"`).join(', ')}.` +
      `\n💡 Для включения дополнительных возможностей форматирования установите их:` +
      `\n   ${cmd} ${plugins.join(' ')}` +
      `\n✨ Prettier будет работать и без них, но некоторые улучшения форматирования будут недоступны.\n`,
    en: (plugins, cmd) =>
      `\n⚠️  [prettier-config] Optional plugins not found: ${plugins.map(p => `"${p}"`).join(', ')}.` +
      `\n💡 To enable additional formatting features, please install them:` +
      `\n   ${cmd} ${plugins.join(' ')}` +
      `\n✨ Prettier will still work without them, but some formatting improvements will be unavailable.\n`,
    zh: (plugins, cmd) =>
      `\n⚠️  [prettier-config] 未找到可选插件: ${plugins.map(p => `"${p}"`).join('，')}` +
      `\n💡 如需启用更多格式化功能，请安装这些插件：` +
      `\n   ${cmd} ${plugins.join(' ')}` +
      `\n✨ 即使没有这些插件，Prettier 仍可正常工作，但某些格式化增强功能将不可用。\n`,
  };

  const langKey = language.split(/[-_]/)[0].toLowerCase();
  const message = messages[langKey] || messages['en'];
  console.log(message(pluginNames, installCmd));
}

export function filterPlugins(pluginNames: string[], context: string = 'unknown'): string[] {
  const missing: string[] = [];
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;

  const packageManager = process.env.npm_config_user_agent?.includes('pnpm')
    ? 'pnpm'
    : process.env.npm_config_user_agent?.includes('yarn')
      ? 'yarn'
      : 'npm';

  const installCmd =
    packageManager === 'npm' ? 'npm install -D' : packageManager === 'yarn' ? 'yarn add -D' : 'pnpm add -D';

  const result = pluginNames.filter(name => {
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
