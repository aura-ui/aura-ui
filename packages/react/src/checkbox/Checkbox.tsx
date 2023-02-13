import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { styled, ComponentProps } from '../theme';
import { getContrastingColor, ColorScheme, ariaAttr } from '../utils';
import { Label } from '../label';
import { CheckIcon } from './CheckIcon';
import { HorizontalLineIcon } from './HorizontalLineIcon';
import { Flex } from '../layout';

type CheckboxRootProps = ComponentProps<typeof CheckboxPrimitive.Root>;
type StyledCheckboxProps = ComponentProps<typeof StyledCheckbox>;

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  // resets
  all: 'unset',
  overflow: 'hidden',

  // custom
  $$color: '$colors$slate11',
  $$colorSolid: 'white',
  $$bg: '$colors$slate3',
  $$bgHover: '$colors$slate4',
  $$bgSolid: '$colors$slate9',
  $$bgSolidHover: '$colors$slate11',
  $$border: '$colors$slate10',
  $$borderHover: '$colors$slate11',

  color: '$$color',

  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
  },

  '&[aria-disabled="true"]': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    opacity: '50%',
  },

  variants: {
    variant: {
      subtle: {
        bg: '$$bg',
        boxShadow: 'inset 0 0 0 1px $$border',
        color: '$$color',

        '&:hover': {
          bg: '$$bgHover',
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },
      },
      outline: {
        boxShadow: 'inset 0 0 0 1px $$border',
        color: '$$color',

        '&:hover': {
          bg: '$$bgHover',
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },
      },
      solid: {
        bg: '$$bg',
        boxShadow: 'inset 0 0 0 1px $$border',
        color: '$$colorSolid',

        '&[data-state="checked"]': {
          bg: '$$bgSolid',
          boxShadow: 'none',

          '&:hover': {
            bg: '$$bgSolidHover',
          },
        },
      },
    },
    size: {
      1: {
        size: '$3',
        br: '$1',

        '& svg': {
          size: '$3',
        },
      },
      2: {
        size: '$4',
        br: '$1',

        '& svg': {
          size: '$3',
        },
      },
      3: {
        size: '$5',
        br: '$1',

        '& svg': {
          size: '$4',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'subtle',
    size: '2',
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  size: '$3',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export interface CheckboxProps extends CheckboxRootProps, StyledCheckboxProps {
  colorScheme?: ColorScheme;
  children: React.ReactNode;
  id?: string;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ children, colorScheme = 'slate', id, disabled, checked, css, ...rest }, ref) => {
    return (
      <Flex align="center" gap="2">
        <StyledCheckbox
          ref={ref}
          id={id}
          css={{
            $$color: `$colors$${colorScheme}11`,
            $$colorSolid: getContrastingColor(colorScheme),
            $$bg: `$colors$${colorScheme}3`,
            $$bgHover: `$colors$${colorScheme}4`,
            $$bgSolid: `$colors$${colorScheme}9`,
            $$bgSolidHover: `$colors$${colorScheme}11`,
            $$border: `$colors$${colorScheme}8`,
            $$borderHover: `$colors$${colorScheme}9`,
            ...css,
          }}
          aria-disabled={ariaAttr(disabled)}
          {...rest}
        >
          <StyledIndicator>
            {checked === 'indeterminate' && <HorizontalLineIcon />}
            {checked !== 'indeterminate' && <CheckIcon />}
          </StyledIndicator>
        </StyledCheckbox>
        <Label htmlFor={id}>{children}</Label>
      </Flex>
    );
  }
);
