import * as React from 'react';
import { styled } from '../stitches.config';

/**
 * Container is a component intended for wrapping around other components and content alike.
 * It renders a HTML div element by default.
 */
export const Container = styled('div', {
  variants: {
    size: {
      1: {
        maxW: '$50',
      },
      2: {
        maxW: '$60',
      },
      3: {
        maxW: '$80',
      },
      4: {
        maxW: '$100',
      },
      5: {
        maxW: '$120',
      },
      '60ch': {
        maxW: '60ch',
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
    size: '60ch',
  },
});
