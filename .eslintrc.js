module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@wemake-services/typescript/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'import'],
  rules: {
    "import/no-unresolved": [2, { "commonjs": true, "amd": true }]
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
}