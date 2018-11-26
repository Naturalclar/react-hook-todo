module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  env: {
    node: true,
    commonjs: true,
    es6: true,
    browser: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': 0,
  },
}
