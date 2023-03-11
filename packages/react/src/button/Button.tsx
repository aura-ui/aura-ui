import * as React from 'react';
import { styled, ComponentProps, darkTheme, CSS, theme } from '../theme';
import {
  ariaAttr,
  ColorScheme,
  getContrastingColor,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../utils';

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

  // custom
  fontFamily: 'inherit',
  fontWeight: '$5',
  br: '$2',

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

  $$focus: '$colors$blue8',

  // solid default styles
  $$bgSolid: '$colors$slate9',
  $$colorSolid: 'white',
  // solid hover styles
  $$bgSolidHover: '$colors$slate10',
  // solid active styles
  $$bgSolidActive: '$colors$slate10',

  variants: {
    size: {
      1: {
        height: '$7',
        fontSize: '$1',
        lineHeight: '$sizes$7',
        px: '$3',
        gap: '$1',

        '& svg': {
          size: '$3',
        },
      },
      2: {
        height: '$9',
        fontSize: '$2',
        lineHeight: '$sizes$9',
        px: '$4',
        gap: '$2',

        '& svg': {
          size: '$4',
        },
      },
      3: {
        height: '$11',
        fontSize: '$3',
        lineHeight: '$sizes$11',
        px: '$5',
        gap: '$2',

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
          boxShadow: '0 0 0 2px $$focus',
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

export interface ButtonExtendedProps extends ButtonBaseProps {
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

type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  ButtonExtendedProps
>;

type ButtonComponent = <C extends React.ElementType = typeof ButtonBase>(
  props: ButtonProps<C>
) => React.ReactElement | null;

export const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = typeof ButtonBase>(
    { as, children, colorScheme = 'slate', disabled, variant, css, ...rest }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    return (
      <ButtonBase
        data-variant={variant}
        as={as}
        ref={ref}
        css={{
          cursor: as === 'a' ? 'pointer' : 'default',
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
          $$bgSubtleActive: `$colors$${colorScheme}6`,

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
          '&:focus-visible': {
            $$focus: variant === 'solid' ? '$colors$blue8' : `$colors$${colorScheme}8`,
          },
          ...css,
        }}
        variant={variant}
        aria-disabled={ariaAttr(disabled)}
        {...rest}
      >
        {children}
      </ButtonBase>
    );
  }
);

export type ButtonGroupProps = ComponentProps<typeof StyledButtonGroup> & {
  colorScheme?: ColorScheme;
  variant?: ButtonExtendedProps['variant'];
  size?: ButtonExtendedProps['size'];
  gap?: CSS['gap'];
  radius?: keyof typeof theme.radii;
};
export const StyledButtonGroup = styled('div', {
  display: 'flex',
  $$radius: '$2',
  zIndex: 0,

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      column: {
        flexDirection: 'column',
        alignItems: 'start',
      },
    },
    flushed: {
      true: {
        flexDirection: 'row',
        ml: 1,
        gap: 0,

        // ensure button group and children does not affect normal stacking order
        position: 'relative',

        '& button': {
          br: 0,

          '&:focus-visible': {
            zIndex: 1,
            boxShadow: 'inset 0 0 0 1px $$focus, 0 0 0 1px $$focus',
          },

          '&[data-variant="outline"]': {
            boxShadow: 'inset 0 1px $$border, inset -1px 0 $$border, inset 0 -1px $$border',

            '&:hover': {
              boxShadow:
                '-1px 0 $$borderHover, inset 0 1px $$borderHover, inset -1px 0 $$borderHover, inset 0 -1px $$borderHover',
            },

            '&:focus-visible': {
              zIndex: 1,
              boxShadow: 'inset 0 0 0 1px $$focus, 0 0 0 1px $$focus',
            },
          },

          '&:first-child': {
            btlr: '$$radius',
            bblr: '$$radius',

            '&[data-variant="outline"]': {
              boxShadow: 'inset 0 0 0 1px $$border',

              '&:hover': {
                boxShadow: 'inset 0 0 0 1px $$borderHover',
              },

              '&:focus-visible': {
                zIndex: 1,
                boxShadow: 'inset 0 0 0 1px $$focus, 0 0 0 1px $$focus',
              },
            },
          },

          '&:last-child': {
            btrr: '$$radius',
            bbrr: '$$radius',
          },
        },
      },
    },
  },

  defaultVariants: {
    direction: 'row',
  },
});

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      flushed = false,
      radius = '2',
      gap = '$3',
      size,
      variant,
      colorScheme,
      children: _children,
      css,
      ...rest
    },
    ref
  ) => {
    const children = React.Children.map(_children, (child) => {
      return React.cloneElement(child as React.ReactElement<ButtonExtendedProps>, {
        variant,
        size,
        css: {
          br: flushed ? undefined : `$${radius}`,
        },
      });
    });
    const _gap = flushed ? undefined : gap;
    return (
      <StyledButtonGroup
        flushed={flushed}
        css={{
          $$radius: `$radii$${radius}`,
          gap: _gap,
          ...css,
        }}
        role="group"
        ref={ref}
        {...rest}
      >
        {children}
      </StyledButtonGroup>
    );
  }
);
