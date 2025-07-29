import type { Config } from 'prettier';
import {
  availableBasePlugins,
  availableHtmlPlugins,
  availableJsTsPlugins,
  availableTemplatePlugins,
} from './atoms/vars';
import { filterPlugins } from './organisms/filterPlugins';
const allPlugins = [
  ...availableBasePlugins,
  ...availableHtmlPlugins,
  ...availableJsTsPlugins,
  ...availableTemplatePlugins,
];

const prettierrc: Config = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  plugins: filterPlugins(allPlugins),
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
        plugins: availableJsTsPlugins,
      },
    },
    {
      files: ['*.js', '*.jsx', '*.mjs', '*.cjs'],
      options: {
        parser: 'babel',
        plugins: availableJsTsPlugins,
      },
    },

    {
      files: ['*.html', '*.htm'],
      options: {
        parser: 'html',
        plugins: availableHtmlPlugins,
        attributeGroups: ['^class$', '^(id|name)$', '$DEFAULT', '^aria-'],
        attributeIgnoreCase: true,
      },
    },

    {
      files: ['*.vue'],
      options: {
        parser: 'vue',
        plugins: availableTemplatePlugins,
      },
    },

    {
      files: ['*.css', '*.scss'],
      options: {
        parser: 'css',
        plugins: availableBasePlugins,
      },
    },
  ],

  pluginSearchDirs: false,
};

export = prettierrc;
