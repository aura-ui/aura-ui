import * as React from 'react';
import { styled } from '@aura-ui/theme';

type TextFieldBaseProps = React.ComponentProps<typeof TextFieldBase>;

const TextFieldBase = styled('input', {
  '&[type]': {
    // reset
    appearance: 'none',
    borderWidth: '0',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    margin: '0',
    outline: 'none',
    padding: '0',
    width: '100%',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },

    // custom
    backgroundColor: 'transparent',
    minWidth: 200,
    br: '$2',
    px: '$4',
    color: '$slate12',

    '&::placeholder': {
      color: '$slate9',
    },

    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    },

    '&:disabled': {
      pointerEvents: 'none',
      cursor: 'not-allowed',
      opacity: '50%',
    },

    '&[aria-disabled="true"]': {
      pointerEvents: 'none',
      cursor: 'not-allowed',
      opacity: '50%',
    },

    '&:read-only': {
      backgroundColor: '$slate3',
      boxShadow: 'inset 0 0 0 1px $colors$slate7',
    },
  },

  variants: {
    size: {
      1: {
        fontSize: '$1',
        lineHeight: '$sizes$7',
      },
      2: {
        fontSize: '$3',
        lineHeight: '$sizes$9',
      },
      3: {
        fontSize: '$4',
        lineHeight: '$sizes$11',
      },
    },
    variant: {
      subtle: {
        '&[type]': {
          backgroundColor: '$slate3',
        },
      },
      outline: {
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
      },
      ghost: {
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
      },
      flushed: {
        '&[type]': {
          boxShadow: 'none',
          br: 0,
          borderBottom: '1px solid $colors$slate7',

          '&:hover': {
            borderBottom: '1px solid $colors$slate8',
          },

          '&:focus': {
            boxShadow: 'none',
            borderBottom: '2px solid $colors$blue8',
          },
        },
      },
    },
    state: {
      valid: {
        '&[type]': {
          boxShadow: 'inset 0 0 0 1px $colors$green7',

          '&:focus': {
            boxShadow: 'inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8',
          },
        },
      },
      invalid: {
        '&[type]': {
          boxShadow: 'inset 0 0 0 1px $colors$red7',

          '&:focus': {
            boxShadow: 'inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8',
          },
        },
      },
    },
    border: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variant: 'flushed',
      state: 'valid',
      css: {
        boxShadow: 'none',
        borderBottom: '1px solid $colors$green8',

        '&:focus': {
          boxShadow: 'none',
          borderBottom: '2px solid $colors$green8',
        },
      },
    },
    {
      variant: 'flushed',
      state: 'invalid',
      css: {
        boxShadow: 'none',
        borderBottom: '1px solid $colors$red8',

        '&:focus': {
          boxShadow: 'none',
          borderBottom: '2px solid $colors$red8',
        },
      },
    },
    {
      variant: 'subtle',
      border: true,
      css: {
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
      },
    },
  ],

  defaultVariants: {
    size: '2',
    variant: 'subtle',
  },
});

export interface TextFieldProps extends TextFieldBaseProps {}

export const TextField: React.FC<TextFieldProps & React.HTMLAttributes<HTMLInputElement>> =
  React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    return <TextFieldBase type="text" ref={ref} {...props} />;
  });
