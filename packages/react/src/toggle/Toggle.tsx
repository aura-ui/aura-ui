import * as React from 'react';
import { styled, ComponentProps, ColorScheme, getContrastingColor } from '../theme';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { ariaAttr, toggleItemStyles } from '../utils';

export type ToggleProps = ComponentProps<typeof StyledToggle> & {
  colorScheme?: ColorScheme;
};
const StyledToggle = styled(TogglePrimitive.Root, {
  ...toggleItemStyles,
});

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ children, colorScheme = 'slate', css, variant, disabled, ...rest }, ref) => {
    return (
      <StyledToggle
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
      </StyledToggle>
    );
  }
);
