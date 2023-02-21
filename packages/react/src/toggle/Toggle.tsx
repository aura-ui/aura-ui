import * as React from 'react';
import { styled, ComponentProps, darkTheme } from '../theme';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { ColorScheme, ariaAttr, getContrastingColor } from '../utils';

export type ToggleProps = ComponentProps<typeof ToggleBase> & {
  colorScheme?: ColorScheme;
};
const ToggleBase = styled(TogglePrimitive.Root, {
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

  //custom
  fontFamily: 'inherit',
  br: '$2',

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
    },
  },

  defaultVariants: {
    size: '2',
    variant: 'subtle',
  },
});

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ children, colorScheme = 'slate', css, variant, disabled, ...rest }, ref) => {
    return (
      <ToggleBase
        ref={ref}
        css={{
          // themed default styles
          $$bg: `$colors$${colorScheme}2`,
          $$bgSubtle: `$colors$${colorScheme}3`,
          $$color: `$colors$${colorScheme}10`,

          // themed hover styles
          $$bgHover: `$colors$${colorScheme}4`,
          $$bgSubtleHover: `$colors$${colorScheme}3`,

          // themed active styles
          $$bgSubtleActive: `$colors$${colorScheme}4`,
          $$colorActive: `$colors$${colorScheme}11`,

          // focus
          $$focus: `$colors$${colorScheme}8`,

          $$colorSolid: '$$color',
          // themed solid hover styles
          $$bgSolidHover: `$$bgSubtleHover`,
          // themed solid active styles
          $$bgSolidActive: `$colors$${colorScheme}10`,
          $$colorSolidActive: getContrastingColor(colorScheme),

          //focus styling
          '&:focus:not(&[aria-disabled="true"])': {
            boxShadow:
              variant === 'solid'
                ? 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8'
                : `inset 0px 0px 0px 1px $colors$${colorScheme}8, 0px 0px 0px 1px $colors$${colorScheme}8`,
          },
          ...css,
        }}
        variant={variant}
        aria-disabled={ariaAttr(disabled)}
        {...rest}
      >
        {children}
      </ToggleBase>
    );
  }
);
