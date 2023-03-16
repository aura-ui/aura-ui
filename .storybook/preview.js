import { Box, slate, slateDark, violet, violetDark } from '../packages/react';
import { darkTheme } from '../packages/react';
import { themes } from '@storybook/theming';

// const slateDark1 = 'hsl(200, 7.0%, 8.8%)'
// const slateDark3 = 'hsl(197, 6.8%, 13.6%)'
// const slateDark6 = 'hsl(201, 6.2%, 20.5%)'
// const slateDark11 = 'hsl(206, 6.0%, 63.0%)'
// const slateDark12 = 'hsl(210, 6.0%, 93.0%)'

export const decorators = [
  (Story, context) => {
    let { scheme } = context.globals;

    // const html = document.getElementsByTagName('html');

    // if (scheme === 'dark') {
    //   for (const item of html) {
    //     item.classList.remove('light-theme');
    //     item.classList.add('dark-theme');
    //   }
    // } else {
    //   for (const item of html) {
    //     item.classList.remove('dark-theme');
    //     item.classList.add('light-theme');
    //   }
    // }

    return (
      <Box
        css={{
          // backgroundColor: '$slate1',
          padding: '$3',
          margin: '-$4',
          // height: '100%',
          // maxHeight: '100dvh',
          color: '$slate12',
        }}
        className={scheme === 'dark' && darkTheme}
      >
        <Story />
      </Box>
    );
  },
];

export const globalTypes = {
  scheme: {
    name: 'Scheme',
    description: 'Select light or dark theme',
    defaultValue: 'light',
    // toolbar: {
    //   icon: 'mirror',
    //   items: ['light', 'dark'],
    //   dynamicTitle: true,
    // },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: 'hsl(200, 7.0%, 6.8%)',
      appContentBg: slateDark.slate1,
      barBg: slateDark.slate3,
      barSelectedColor: violetDark.violet11,
      barTextColor: slateDark.slate11,
      colorSecondary: violetDark.violet10,
      textColor: slateDark.slate11,
      fontBase: '"Inter", sans-serif',
      fontCode: 'Fira Code, monaco, monospace',
      brandTitle: 'Aura UI',
      brandUrl: 'https://github.com/aura-ui/aura-ui',
      brandImage: 'https://arweave.net/LlWwk7FievnOp7WU1lBcJcsad3o1t9fho7w1nxjAJz8',
      brandTarget: '_self',
    },
    light: {
      ...themes.normal,
      appBg: slate.slate1,
      appContentBg: slate.slate1,
      barBg: slate.slate2,
      barSelectedColor: violet.violet11,
      barTextColor: slate.slate11,
      colorSecondary: violet.violet9,
      textColor: slate.slate12,
      fontBase: '"Inter", sans-serif',
      fontCode: 'Fira Code, monaco, monospace',
      brandTitle: 'Aura UI',
      brandUrl: 'https://github.com/aura-ui/aura-ui',
      brandImage: 'https://arweave.net/LlWwk7FievnOp7WU1lBcJcsad3o1t9fho7w1nxjAJz8',
      brandTarget: '_self',
    },
    current: 'light',
    darkClass: 'dark-theme',
    lightClass: 'light-theme',
    classTarget: 'html',
    stylePreview: true,
  },
};
