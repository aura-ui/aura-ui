import { css } from '@aura-ui/theme';

export const textField = css({
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

  //custom
  px: '$3',
  br: '$md',
  color: '$text',

  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $colors$focusRing, 0 0 0 1px $colors$focusRing',
  },

  '&::placeholder': {
    color: '$placeholderText',
  },

  '&[aria-disabled="true"]': {
    pointerEvents: 'none',
    opacity: '50%',
    cursor: 'not-allowed',
  },

  '&:read-only': {
    backgroundColor: '$subtleBg',
    '&:focus': {
      boxShadow: '0 0 0 2px $colors$subtleBorder',
    },
  },

  variants: {
    variant: {
      outline: {
        boxShadow: '0 0 0 1px $colors$border',
      },
      subtle: {
        backgroundColor: '$bg',
        boxShadow: '0 0 0 1px $colors$border',
      },
      ghost: {
        '&:hover:not(:focus)': {
          boxShadow: '0 0 0 1px $colors$borderHover',
        },
      },
    },

    size: {
      sm: {
        height: '$6',
        maxW: '$xs',
        br: '$sm',
        fontSize: '$xs',
      },
      md: {
        height: '$8',
        maxW: '$xs',
        fontSize: '$sm',
      },
      lg: {
        height: '$10',
        maxW: '$sm',
        fontSize: '$md',
      },
    },
  },

  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});
