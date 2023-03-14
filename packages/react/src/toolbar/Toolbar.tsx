import * as React from 'react';
import { styled, ComponentProps, ColorScheme, getContrastingColor } from '../theme';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { ariaAttr, toggleGroupStyles, toggleItemStyles } from '../utils';

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

export type ToolbarToggleGroupProps = ComponentProps<typeof StyledToolbarToggleGroup> &
  Pick<ToolbarToggleItemProps, 'colorScheme' | 'size'> & {
    itemVariant?: ToolbarToggleItemProps['variant'];
  };

export const StyledToolbarToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
  ...toggleGroupStyles,
});

export const ToolbarToggleGroup = React.forwardRef<HTMLDivElement, ToolbarToggleGroupProps>(
  ({ size, colorScheme, itemVariant, children: _children, ...rest }, ref) => {
    // TODO - update using `getValidChildren` function once merged
    const children = React.Children.map(_children, (child) => {
      return React.cloneElement(child as React.ReactElement<ToolbarToggleItemProps>, {
        variant: itemVariant,
        colorScheme,
        size,
      });
    });
    return (
      <StyledToolbarToggleGroup ref={ref} {...rest}>
        {children}
      </StyledToolbarToggleGroup>
    );
  }
);

export type ToolbarToggleItemProps = ComponentProps<typeof StyledToolbarToggleItem> & {
  colorScheme?: ColorScheme;
};

const StyledToolbarToggleItem = styled(ToolbarPrimitive.ToggleItem, {
  ...toggleItemStyles,
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
          $$colorActive: colorScheme === 'slate' ? '$colors$slate12' : `$colors$${colorScheme}11`,

          $$colorSolid: '$$color',
          // themed solid hover styles
          $$bgSolidHover: `$$bgSubtleHover`,
          // themed solid active styles
          $$bgSolidActive: colorScheme === 'slate' ? '$colors$slate12' : `$colors$${colorScheme}10`,
          $$colorSolidActive:
            colorScheme === 'slate' ? '$colors$slate1' : getContrastingColor(colorScheme),

          //focus styling
          '&:focus-visible': {
            $$focus: variant === 'solid' ? '$colors$focus' : `$colors$${colorScheme}8`,
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
