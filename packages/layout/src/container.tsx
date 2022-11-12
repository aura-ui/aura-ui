import { styled, ComponentProps, VariantProps } from '@aura-ui/theme';
import * as React from 'react';

/**
 * Container is a component intended for wrapping around other components and content alike.
 * It renders a HTML div element by default.
 */
export const Container = styled('div', {
  variants: {
    size: {
      '60ch': {
        maxW: '60ch',
      },
      1: {
        maxW: '$32',
      },
      2: {
        maxW: '$40',
      },
      3: {
        maxW: '$64',
      },
      4: {
        maxW: '$96',
      },
      fullWidth: {
        maxW: '100%',
      },
    },
    centerContent: {
      true: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
});
