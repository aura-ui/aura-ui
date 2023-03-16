module.exports = {
  stories: [
    '../packages/react/**/stories/*.stories.mdx',
    '../packages/react/**/stories/*.stories.@(jsx|tsx)',
    '../packages/react/**/*.stories.mdx',
    '../packages/react/**/*.stories.@(jsx|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
};
