module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error', { semi: false }],
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
}
