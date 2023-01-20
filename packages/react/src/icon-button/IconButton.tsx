import * as React from 'react';
import { ComponentProps, darkTheme, styled } from '../theme';
import {
  ariaAttr,
  ColorScheme,
  getContrastingColor,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../utils';

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

  $$bgSubtle: '$colors$slate4',
  $$bgSubtleHover: '$colors$slate5',
  $$bgSubtleActive: '$colors$slate6',

  $$focus: '$colors$slate8',

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
        backgroundColor: '$$bgSubtle',

        '&:hover': {
          backgroundColor: '$$bgSubtleHover',
        },

        '&:active': {
          backgroundColor: '$$bgSubtleActive',
        },

        '&:focus-visible': {
          boxShadow: '0 0 0 2px $$focus',
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

        '&:focus-visible': {
          boxShadow: '0 0 0 2px $$focus',
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
          backgroundColor: '$$bgHover',
        },

        '&:active': {
          backgroundColor: '$$bgActive',
        },

        '&:focus-visible': {
          boxShadow: '0 0 0 2px $$focus',
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
    },
  ],

  defaultVariants: {
    size: '2',
    variant: 'subtle',
  },
});

export interface IconButtonExtendedProps extends IconButtonBaseProps {
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

type IconButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  IconButtonExtendedProps
>;

type IconButtonComponent = <C extends React.ElementType = typeof IconButtonBase>(
  props: IconButtonProps<C>
) => React.ReactElement | null;

export const IconButton: IconButtonComponent = React.forwardRef(
  <C extends React.ElementType = typeof IconButtonBase>(
    { as, children, colorScheme = 'slate', disabled, variant, ...rest }: IconButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || IconButtonBase;
    return (
      <Component
        as={as}
        ref={ref}
        css={{
          // themed default styles
          $$bg: `$colors$${colorScheme}3`,
          $$bgSubtle: `$colors$${colorScheme}4`,
          $$border: `$colors$${colorScheme}7`,
          $$color: `$colors$${colorScheme}11`,

          // themed hover styles
          $$bgHover: `$colors$${colorScheme}4`,
          $$borderHover: `$colors$${colorScheme}8`,
          $$bgSubtleHover: `$colors$${colorScheme}5`,

          // themed active styles
          $$bgActive: `$colors$${colorScheme}5`,
          $$borderActive: `$colors$${colorScheme}8`,
          $$bgSubtleActive: `$colors$${colorScheme}5`,

          // focus
          $$focus: `$colors$${colorScheme}8`,

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
              variant === 'solid'
                ? 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8'
                : `inset 0px 0px 0px 1px $colors$${colorScheme}8, 0px 0px 0px 1px $colors$${colorScheme}8`,
          },
        }}
        variant={variant}
        aria-disabled={ariaAttr(disabled)}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);
