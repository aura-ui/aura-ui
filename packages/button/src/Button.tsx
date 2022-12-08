import * as React from 'react';
import { styled, ComponentProps } from '@aura-ui/theme';
import { ariaAttr, ColorScheme, getContrastingColor } from '@aura-ui/utils';

type ButtonBaseProps = ComponentProps<typeof ButtonBase>;

const ButtonBase = styled('button', {
  // resets
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

  // --------------------------------------------

  // custom
  fontFamily: 'inherit',

  '&:disabled': {
    pointerEvents: 'none',
    opacity: '50%',
  },

  '&[aria-disabled="true"]': {
    pointerEvents: 'none',
    opacity: '50%',
  },

  // --------------------------------------------

  // locally-scoped color tokens for easy theme-switching

  // default styles
  $$bg: '$colors$slate3',
  $$border: '$colors$slate7',
  $$color: '$colors$slate11',

  // hover styles
  $$bgHover: '$colors$slate4',
  $$borderHover: '$colors$slate8',

  // active styles
  $$bgActive: '$colors$slate5',
  $$borderActive: '$colors$slate8',

  // solid default styles
  $$bgSolid: '$colors$slate9',
  $$colorSolid: 'white',
  // solid hover styles
  $$bgSolidHover: '$colors$slate10',
  // solid active styles
  $$bgSolidActive: '$colors$slate10',

  // --------------------------------------------

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
        color: '$$color',
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
        color: '$$color',
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
        color: '$$colorSolid',

        '&:hover': {
          backgroundColor: '$$bgSolidHover',
        },

        '&:active': {
          backgroundColor: '$$bgSolidActive',
        },
      },
      ghost: {
        color: '$$color',
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

export interface ButtonProps extends ButtonBaseProps {
  children: React.ReactNode;

  /**
   * Change the color scheme of the button.
   * @default "slate"
   */
  colorScheme?: ColorScheme;
  /**
   * Overrides the default `disabled` prop to prefer `aria-disabled` for screen readers.
   */
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLButtonElement>> =
  React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, colorScheme = 'slate', disabled, ...rest } = props;
    return (
      <ButtonBase
        // ref={ref}
        css={{
          // themed default styles
          $$bg: `$colors$${colorScheme}3`,
          $$border: `$colors$${colorScheme}7`,
          $$color: `$colors$${colorScheme}11`,

          // themed hover styles
          $$bgHover: `$colors$${colorScheme}4`,
          $$borderHover: `$colors$${colorScheme}8`,

          // themed active styles
          $$bgActive: `$colors$${colorScheme}5`,
          $$borderActive: `$colors$${colorScheme}8`,

          // themed solid default styles
          $$bgSolid: `$colors$${colorScheme}9`,
          $$colorSolid: getContrastingColor(colorScheme),
          // themed solid hover styles
          $$bgSolidHover: `$colors$${colorScheme}10`,
          // themed solid active styles
          $$bgSolidActive: `$colors$${colorScheme}10`,
        }}
        aria-disabled={ariaAttr(disabled)}
        {...rest}
      >
        {children}
      </ButtonBase>
    );
  });
