import { styled, ComponentProps, VariantProps } from '@aura-ui/theme';
import * as React from 'react';

/**
 * Container is a component intended for wrapping around other components and content alike.
 * It renders a HTML div element by default.
 */
export const Container = styled('div', {
  variants: {
    size: {
      1: {
        maxW: '45ch',
      },
      2: {
        maxW: '50ch',
      },
      3: {
        maxW: '55ch',
      },
      4: {
        maxW: '60ch',
      },
      5: {
        maxW: '65ch',
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

  defaultVariants: {
    size: '4',
  },
});
