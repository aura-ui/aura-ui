import { css, darkTheme } from '../../theme';

export const toggleItemStyles = css({
  alignItems: 'center',
  justifyContent: 'center',
  appearance: 'none',
  borderWidth: 0,
  boxSizing: 'border-box',
  flexShrink: 0,
  outline: 'none',
  padding: 0,
  textDecoration: 'none',
  userSelect: 'none',

  // custom reset
  display: 'inline-flex',
  WebkitTapHighlightColor: 'transparent',
  lineHeight: 1,
  br: '$2',
  ml: 1,

  //custom
  fontFamily: 'inherit',

  '&[aria-disabled="true"]': {
    pointerEvents: 'none',
    opacity: '50%',
  },

  // --------------------------------------------

  variants: {
    size: {
      1: {
        width: '$7',
        height: '$7',
        fontSize: '$1',
        '& svg': {
          size: '$3',
        },
      },
      2: {
        width: '$9',
        height: '$9',
        fontSize: '$3',
        '& svg': {
          size: '$4',
        },
      },
      3: {
        width: '$11',
        height: '$11',
        fontSize: '$5',
        '& svg': {
          size: '$4',
        },
      },
    },
    variant: {
      subtle: {
        color: '$$color',
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: '$$bgSubtleHover',
        },

        '&[data-state=on]': {
          backgroundColor: '$$bgSubtleActive',
          color: '$$colorActive',
        },

        '&:focus-visible': {
          boxShadow: '0 0 0 2px $$focus',
        },
      },
      solid: {
        backgroundColor: 'transparent',
        color: '$$colorSolid',

        '&:hover': {
          backgroundColor: '$$bgSolidHover',
        },

        '&[data-state=on]': {
          backgroundColor: '$$bgSolidActive',
          color: '$$colorSolidActive',
        },

        '&:focus-visible': {
          boxShadow: '0 0 0 2px $colors$blue8',
          [`.${darkTheme} &`]: {
            boxShadow: '0 0 0 2px $colors$blue10',
          },
        },
      },
      ghost: {
        color: '$$color',
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: '$$bgSubtleHover',
        },

        '&[data-state=on]': {
          color: '$$ghostColorActive',
        },

        '&:focus-visible': {
          boxShadow: '0 0 0 2px $$focus',
        },
      },
    },
  },

  defaultVariants: {
    size: '2',
    variant: 'subtle',
  },
});

export const toggleGroupStyles = css({
  display: 'inline-flex',
  backgroundColor: '$slate1',

  variants: {
    variant: {
      compact: {
        '& button[data-radix-collection-item]': {
          '&:not(:first-child, :last-child)': {
            br: 0,
          },
          '&:first-child': { ml: 0, btrr: 0, bbrr: 0 },
          '&:last-child': { btlr: 0, bblr: 0 },
        },
      },
      comfortable: {
        gap: '$1',
      },
    },
    depth: {
      1: {
        p: '$1',
      },
      2: {
        p: '$2',
      },
      3: {
        p: '$3',
      },
    },
    shadow: {
      1: {
        shadow: '$1',
      },
      2: {
        shadow: '$2',
      },
      3: {
        shadow: '$3',
      },
      4: {
        shadow: '$4',
      },
      5: {
        shadow: '$5',
      },
    },
    gap: {
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      9: {
        gap: '$9',
      },
      10: {
        gap: '$10',
      },
      20: {
        gap: '$20',
      },
    },
  },
  defaultVariants: {
    variant: 'comfortable',
  },
});
