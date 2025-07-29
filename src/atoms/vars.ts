import { filterPlugins } from '../organisms/filterPlugins';

export const basePlugins = ['prettier-plugin-tailwindcss'];
export const jstsPlugins = [
  ...basePlugins,
  'prettier-plugin-organize-imports',
  //   "prettier-plugin-jsdoc",
];
export const htmlPlugins = [...basePlugins, 'prettier-plugin-organize-attributes'];
export const templatePlugins = jstsPlugins;
export const availableBasePlugins = filterPlugins(basePlugins, 'BASE');
export const availableJsTsPlugins = filterPlugins(jstsPlugins, 'JS/TS');
export const availableHtmlPlugins = filterPlugins(htmlPlugins, 'HTML');
export const availableTemplatePlugins = filterPlugins(templatePlugins, 'TEMPLATES');
