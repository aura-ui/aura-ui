import { Box } from '../packages/layout';
import { darkTheme } from '../packages/theme';

export const decorators = [
  (Story, context) => {
    let { scheme } = context.globals;
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
