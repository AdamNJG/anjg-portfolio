import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import stylisticTs from '@stylistic/eslint-plugin';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    rules: {
      semi: ['error', 'always'],
      '@stylistic/ts/quotes': ['error', 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': 'always'
      }],
      'comma-dangle': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'function-paren-newline': ['error', 'never'],
      allowAllPropertiesOnSameLine: 0,
      'space-before-function-paren': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'keyword-spacing': 'error',
      'space-before-blocks': 'error',
      'indent': ['error', 2, {
        'SwitchCase': 1,
        'ignoredNodes': ['JSXElement *'],
        'flatTernaryExpressions': true
      }]
    } 
  }
]);
