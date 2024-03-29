import * as React from 'react';
import { styled, ComponentProps, ColorScheme, getContrastingColor, VariantProps } from '../theme';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { ariaAttr, toggleGroupStyles, toggleItemStyles } from '../utils';

export type ToggleGroupProps = ComponentProps<typeof StyledToggleGroup> &
  Pick<ToggleGroupItemProps, 'colorScheme' | 'size'> & {
    itemVariant?: ToggleGroupItemVariants['variant'];
  };

export const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  ...toggleGroupStyles,
});

export const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ size, colorScheme, itemVariant, children: _children, ...rest }, ref) => {
    // TODO - update using `getValidChildren` function once merged
    const children = React.Children.map(_children, (child) => {
      return React.cloneElement(child as React.ReactElement<ToggleGroupItemProps>, {
        variant: itemVariant,
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

export type ToggleGroupItemVariants = VariantProps<typeof StyledToggleGroupItem>;

export type ToggleGroupItemProps = ComponentProps<typeof StyledToggleGroupItem> & {
  colorScheme?: ColorScheme;
};

const StyledToggleGroupItem = styled(ToggleGroupPrimitive.Item, {
  ...toggleItemStyles,
});

export const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ children, colorScheme = 'slate', css, variant, disabled, ...rest }, ref) => {
    return (
      <StyledToggleGroupItem
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
      </StyledToggleGroupItem>
    );
  }
);
