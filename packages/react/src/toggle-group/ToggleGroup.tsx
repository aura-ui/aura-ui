import * as React from 'react';
import { styled, ComponentProps, darkTheme, VariantProps } from '../theme';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { ariaAttr, ColorScheme, getContrastingColor } from '../utils';

export type ToggleGroupProps = ComponentProps<typeof StyledToggleGroup> &
  Pick<ToggleGroupItemProps, 'colorScheme' | 'size'>;

export const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
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

export const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ size, colorScheme, children: _children, ...rest }, ref) => {
    // TODO - update using `getValidChildren` function once merged
    const children = React.Children.map(_children, (child) => {
      return React.cloneElement(child as React.ReactElement<ToggleGroupItemProps>, {
        colorScheme,
        size,
      });
    });
    return (
      <StyledToggleGroup ref={ref} {...rest}>
        {children}
      </StyledToggleGroup>
    );
  }
);

export type ToggleGroupItemVariants = VariantProps<typeof ToggleGroupItemBase>;

export type ToggleGroupItemProps = ComponentProps<typeof ToggleGroupItemBase> & {
  colorScheme?: ColorScheme;
};

const ToggleGroupItemBase = styled(ToggleGroupPrimitive.Item, {
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
    },
  },

  defaultVariants: {
    size: '2',
    variant: 'subtle',
  },
});

export const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ children, colorScheme = 'slate', css, variant, disabled, ...rest }, ref) => {
    return (
      <ToggleGroupItemBase
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
          $$colorActive: colorScheme === 'slate' ? '$colors$slate12' : `$colors$${colorScheme}11`,

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
      </ToggleGroupItemBase>
    );
  }
);
