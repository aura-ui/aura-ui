import { css } from '@zephyr-ui/theme';
import { defaultColors } from '@zephyr-ui/utils';

export const button = css({
  // resets
  cursor: 'pointer',
  border: 0,
  padding: 0,
  margin: 0,
  outline: 'none',
  textDecoration: 'none',
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontFamily: 'inherit',
  fontWeight: '$medium',
  lineHeight: 1,
  justifyContent: 'center',

  //styles
  gap: '$2',
  color: '$$text',

  // overridable locally scoped tokens
  ...defaultColors,

  '&[aria-disabled="true"]': {
    pointerEvents: 'none',
    opacity: '50%',
    cursor: 'not-allowed',
  },

  '&[data-loading]': {
    '& span': {
      opacity: 0,
    },
  },

  variants: {
    variant: {
      subtle: {
        bg: '$$bg',
        boxShadow: 'inset 0 0 0 1px $$border',

        '&:hover': {
          bg: '$$bgHover',
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },

        '&[data-active]': {
          bg: '$$bgActive',
        },
      },
      outline: {
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 1px $$border',

        '&:hover': {
          bg: '$$bgHover',
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },

        '&[data-active]': {
          bg: '$$bgActive',
        },
      },
      ghost: {
        boxShadow: 'none',
        bg: 'transparent',

        '&:hover': {
          bg: '$$bgHover',
        },

        '&[data-active]': {
          bg: '$$bgActive',
        },
      },
      solid: {
        bg: '$$solid',
        color: '$bg',

        '&:hover': {
          bg: '$$solidHover',
        },
      },
    },

    size: {
      xs: {
        px: '10px',
        fontSize: '$xs',
        height: '$7',
      },
      sm: {
        px: '$3',
        fontSize: '$sm',
        height: '$8',
      },
      md: {
        px: '$4',
        fontSize: '$md',
        height: '$9',
      },
      lg: {
        px: '$6',
        fontSize: '$lg',
        height: '$12',
      },
    },

    colorScheme: {
      purple: {
        $$bg: '$colors$violet3',
        $$bgHover: '$colors$violet4',
        $$bgActive: '$colors$violet5',
        $$border: '$colors$violet7',
        $$borderHover: '$colors$violet8',
        $$solid: '$colors$violet9',
        $$solidHover: '$colors$violet10',
        $$text: '$colors$violet11',
        $$textHiContrast: '$colors$violet12',
      },
    },

    rounded: {
      none: {
        br: '0px',
      },
      xs: {
        br: '$xs',
      },
      sm: {
        br: '$sm',
      },
      md: {
        br: '$md',
      },
      lg: {
        br: '$lg',
      },
      full: {
        br: '$full',
      },
    },
  },

  defaultVariants: {
    variant: 'subtle',
    size: 'md',
    rounded: 'md',
  },
});
