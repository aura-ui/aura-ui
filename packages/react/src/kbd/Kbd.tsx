import * as React from 'react';
import { styled, ComponentProps } from '../theme';

export type KbdProps = ComponentProps<typeof Kbd>;

export const Kbd = styled('kbd', {
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',

  variants: {
    size: {
      1: {
        fontSize: '$1',
        lineHeight: '$1',
        width: 'max-content',
        py: '$1',
        px: '$2',
        br: '$2',
      },
      2: {
        fontSize: '$2',
        lineHeight: '$2',
        width: 'max-content',
        py: '$1',
        px: '$2',
        br: '$2',
      },
    },
    variant: {
      subtle: {
        backgroundColor: '$slate3',
        color: '$slate11',
      },
      outline: {
        boxShadow: '0 0 0 1px $colors$slate6',
        color: '$slate11',
      },
      solid: {
        backgroundColor: '$slate12',
        color: '$slate1',
      },
      ghost: {
        color: '$slate11',
      },
    },
    shadow: {
      1: {
        shadow: '$1',
        border: '1px solid $slate6',
      },
      2: {
        shadow: '$2',
        border: '1px solid $slate6',
      },
      3: {
        shadow: '$3',
        border: '1px solid $slate6',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'ghost',
      size: '2',
      css: {
        p: 2,
      },
    },
    {
      variant: 'ghost',
      size: '2',
      css: {
        p: 2,
      },
    },
  ],

  defaultVariants: {
    size: '1',
    variant: 'subtle',
  },
});
