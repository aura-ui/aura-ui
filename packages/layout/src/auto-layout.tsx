import * as React from 'react';
import { ComponentProps, VariantProps, CSS, styled } from '@zephyr-ui/theme';
import { Flex } from '../src';

export type AutoLayoutBaseProps = ComponentProps<typeof AutoLayoutBase>;
export type AutoLayoutVariants = VariantProps<typeof AutoLayoutBase>;

const AutoLayoutBase = styled(Flex, {
  variants: {
    direction: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },

    distribution: {
      'space-between': {
        justifyContent: 'space-between',
      },
      packed: {
        justifyContent: 'start',
      },
    },

    alignment: {
      left: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      right: {
        alignItems: 'end',
      },
    },

    reversed: {
      true: {},
    },
  },

  defaultVariants: {
    direction: 'horizontal',
    distribution: 'packed',
  },

  compoundVariants: [
    {
      reversed: true,
      direction: 'horizontal',
      css: {
        flexDirection: 'row-reverse',
      },
    },
    {
      reversed: true,
      direction: 'vertical',
      css: {
        flexDirection: 'column-reverse',
      },
    },
  ],
});

export interface AutoLayoutProps extends AutoLayoutBaseProps {
  children?: React.ReactNode;
  css?: CSS;
}

/**
 * Auto Layout is a component which builds on ```Flex```.
 * Inspired by Figma's Auto Layout feature.
 */
export const AutoLayout = ({ children, ...props }: AutoLayoutProps) => (
  <AutoLayoutBase {...props}>{children}</AutoLayoutBase>
);
