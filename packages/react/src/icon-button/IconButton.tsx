import * as React from 'react';
import { ComponentProps, styled } from '../theme';
import { ColorScheme, getContrastingColor, ariaAttr } from '../utils';

type IconButtonBaseProps = ComponentProps<typeof IconButtonBase>;

const IconButtonBase = styled('button', {
  // Reset
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
        backgroundColor: '$$bg',

        '&:hover': {
          backgroundColor: '$$bgHover',
        },

        '&:active': {
          backgroundColor: '$$bgActive',
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
    border: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variant: 'subtle',
      border: true,
      css: {
        boxShadow: 'inset 0 0 0 1px $$border',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },
        '&:active': {
          boxShadow: 'inset 0 0 0 1px $$borderActive',
        },
      },
    },
  ],

  defaultVariants: {
    size: '2',
    variant: 'subtle',
  },
});

export interface IconButtonProps extends IconButtonBaseProps {
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

export const IconButton: React.FC<IconButtonProps & React.HTMLAttributes<HTMLButtonElement>> =
  React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
    const { children, colorScheme = 'slate', disabled, ...rest } = props;
    return (
      <IconButtonBase
        ref={ref}
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

          //focus styling
          '&:focus:not(&[aria-disabled="true"])': {
            boxShadow:
              props.variant === 'solid'
                ? 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8'
                : `inset 0px 0px 0px 1px $colors$${colorScheme}8, 0px 0px 0px 1px $colors$${colorScheme}8`,
          },
        }}
        aria-disabled={ariaAttr(disabled)}
        {...rest}
      >
        {children}
      </IconButtonBase>
    );
  });
