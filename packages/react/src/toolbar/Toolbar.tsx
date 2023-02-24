import * as React from 'react';
import { styled, ComponentProps, darkTheme } from '../theme';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { ToggleGroup } from '../toggle-group';
import { ariaAttr, ColorScheme, getContrastingColor } from '../utils';

export type ToolbarProps = ComponentProps<typeof Toolbar>;
export const Toolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  minWidth: 'max-content',
  br: '$2',
  backgroundColor: '$slate1',
  gap: '$3',

  variants: {
    width: {
      full: {
        width: '100%',
      },
      maxContent: {
        width: 'max-content',
      },
    },
    size: {
      1: {
        padding: '$1',
      },
      2: {
        padding: '$2',
      },
      3: {
        padding: '$3',
      },
    },
  },
  defaultVariants: {
    size: '2',
    width: 'maxContent',
  },
});

export type ToolbarToggleGroupProps = ComponentProps<typeof ToolbarToggleGroup>;
export const ToolbarToggleGroup = styled(ToolbarPrimitive.ToggleGroup);

export type ToolbarToggleItemProps = ComponentProps<typeof StyledToolbarToggleItem> & {
  colorScheme?: ColorScheme;
};

const StyledToolbarToggleItem = styled(ToolbarPrimitive.ToggleItem, {
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

export const ToolbarToggleItem = React.forwardRef<HTMLButtonElement, ToolbarToggleItemProps>(
  ({ children, colorScheme = 'slate', css, variant, disabled, ...rest }, ref) => {
    return (
      <StyledToolbarToggleItem
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
          $$ghostColorActive: `$colors$${colorScheme}12`,

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
      </StyledToolbarToggleItem>
    );
  }
);

export type ToolbarSeparatorProps = ComponentProps<typeof ToolbarSeparator>;
export const ToolbarSeparator = styled(ToolbarPrimitive.Separator, {
  width: 1,
  backgroundColor: '$slate6',

  variants: {
    height: {
      1: {
        my: '$3',
      },
      2: {
        my: '$2',
      },
      3: {
        my: '$1',
      },
    },
  },

  defaultVariants: {
    height: '2',
  },
});

export type ToolbarLinkProps = ComponentProps<typeof ToolbarLink>;
export const ToolbarLink = styled(ToolbarPrimitive.Link);

export type ToolbarButtonProps = ComponentProps<typeof ToolbarButton>;
export const ToolbarButton = styled(ToolbarPrimitive.Button);
