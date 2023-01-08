module.exports = {
  stories: ['../packages/react/**/stories/*.stories.tsx', '../packages/react/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
};
