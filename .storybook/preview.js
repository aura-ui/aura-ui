import { Box } from '../packages/layout';
import { darkTheme } from '../packages/theme';

export const decorators = [
  (Story, context) => {
    let { scheme } = context.globals;

    const html = document.getElementsByTagName('html');

    if (scheme === 'dark') {
      for (const item of html) {
        item.classList.remove('light-theme');
        item.classList.add('dark-theme');
      }
    } else {
      for (const item of html) {
        item.classList.remove('dark-theme');
        item.classList.add('light-theme');
      }
    }

    return (
      <Box
        css={{
          backgroundColor: '$slate1',
          padding: '$3',
          margin: '-$4',
          height: '100vh',
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
    toolbar: {
      icon: 'mirror',
      items: ['light', 'dark'],
      dynamicTitle: true,
    },
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
};
