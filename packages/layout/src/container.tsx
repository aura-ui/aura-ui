import { styled, ComponentProps, VariantProps } from '@float-ui/theme';
import * as React from 'react';

type ContainerStyledProps = ComponentProps<typeof Container>;
export type ContainerVariants = VariantProps<typeof Container>;

export interface ContainerProps extends ContainerStyledProps {}

/**
 * Container is a component intended for wrapping around other components and content alike.
 * It renders a HTML div element by default.
 */
export const Container = styled('div', {
  variants: {
    maxWidth: {
      '60ch': {
        maxWidth: '60ch',
      },
      xs: {
        maxWidth: '$xs',
      },
      sm: {
        maxWidth: '$sm',
      },
      md: {
        maxWidth: '$md',
      },
      lg: {
        maxWidth: '$lg',
      },
      xl: {
        maxWidth: '$xl',
      },
      '2xl': {
        maxWidth: '$2xl',
      },
      '3xl': {
        maxWidth: '$3xl',
      },
      '4xl': {
        maxWidth: '$4xl',
      },
      '5xl': {
        maxWidth: '$5xl',
      },
    },
    centerContent: {
      true: {
        display: 'grid',
        placeItems: 'center',
      },
    },
  },
});
