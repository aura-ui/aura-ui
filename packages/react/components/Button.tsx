import { styled } from '../stitches.config';

export const Button = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // custom reset
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // custom
  fontFamily: 'inherit',

  '&[aria-disabled="true"]': {
    pointerEvents: 'none',
    opacity: '50%',
    cursor: 'not-allowed',
  },

  // default
  $$bg: '$colors$slate3',
  $$border: '$colors$slate7',
  $$color: '$colors$slate11',

  // hover
  $$bgHover: '$colors$slate4',
  $$borderHover: '$colors$slate8',

  // hover
  $$bgActive: '$colors$slate5',
  $$borderActive: '$colors$slate8',

  // solid

  // default
  $$bgSolid: '$colors$slate9',
  // hover
  $$bgSolidHover: '$colors$slate10',
  // active
  $$bgSolidActive: '$colors$slate11',

  variants: {
    size: {
      1: {
        br: '$1',
        height: '$7',
        fontSize: '$1',
        lineHeight: '$sizes$7',
        px: '$3',
      },
      2: {
        br: '$2',
        height: '$9',
        fontSize: '$3',
        lineHeight: '$sizes$9',
        px: '$4',
      },
      3: {
        br: '$2',
        height: '$11',
        fontSize: '$4',
        lineHeight: '$sizes$11',
        px: '$5',
      },
    },
    variant: {
      subtle: {
        backgroundColor: '$$bg',
        boxShadow: 'inset 0 0 0 1px $$border',

        '&:hover': {
          backgroundColor: '$$bgHover',
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },

        '&:active': {
          backgroundColor: '$$bgActive',
          boxShadow: 'inset 0 0 0 1px $$borderActive',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        boxShadow: 'inset 0 0 0 1px $$border',

        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },

        '&:active': {
          backgroundColor: '$$bgActive',
          boxShadow: 'inset 0 0 0 1px $$borderActive',
        },
      },
      solid: {
        backgroundColor: '$$bgSolid',
        color: '$slate1',

        '&:hover': {
          backgroundColor: '$$bgSolidHover',
        },

        '&:active': {
          backgroundColor: '$$bgSolidActive',
        },
      },
      ghost: {
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: '$$bgHover',
        },

        '&:active': {
          backgroundColor: '$$bgActive',
        },
      },
    },
  },

  defaultVariants: {
    size: '2',
    variant: 'subtle',
  },
});
