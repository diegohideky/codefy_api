module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'transform-class-properties',
    [
      'module-resolver', {
        alias: {
          '@controllers': './src/api/controllers',
          '@models': './src/api/models',
          '@routes': './src/api/routes',
          '@services': './src/api/services',
          '@config': './src/config',
        },
      },
    ],
  ],
  ignore: [
    '**/*.http',
    '**/*.spec.ts',
  ],
};