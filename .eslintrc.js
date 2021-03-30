module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': ['eslint:recommended', 'google'],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'rules': {
    'new-cap': 0,
    'require-jsdoc': 0,
    'indent': ['error', 2],
    'max-len': ['error', {'code': 150}],
  },
};
