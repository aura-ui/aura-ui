import * as React from 'react';
import { styled, ComponentProps, VariantProps } from '@float-ui/theme';

export type FlexProps = ComponentProps<typeof Flex>;
export type FlexVariants = VariantProps<typeof Flex>;
/**
 * Flex is a layout component with a default property of ```display: flex```.
 * It renders a HTML div element by default.
 */
export const Flex = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      column: {
        flexDirection: 'column',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },

    space: {
      even: {
        justifyContent: 'space-evenly',
      },
      between: {
        justifyContent: 'space-between',
      },
    },

    aligned: {
      true: {
        alignItems: 'center',
      },
    },
  },
});
