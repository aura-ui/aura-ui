import * as React from 'react';
import { defaultColors } from '@zephyr-ui/utils';
import { buttonResets } from '@zephyr-ui/utils';
import { css, ComponentProps, VariantProps, CSS, styled } from '@zephyr-ui/theme';
import { useButton, ButtonAria } from '@react-aria/button';
import { useObjectRef } from '@react-aria/utils';

export type ButtonBaseProps = ComponentProps<typeof ButtonBase>;
export type ButtonVariants = VariantProps<typeof ButtonBase>;

const ButtonBase = styled('button', {
  ...buttonResets,

  // overridable locally scoped tokens
  ...defaultColors,

  color: '$$text',

  '&:disabled': {
    pointerEvents: 'none',
    opacity: '50%',
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      subtle: {
        bg: '$$bg',
        boxShadow: 'inset 0 0 0 1px $$border',

        '&:hover': {
          bg: '$$bgHover',
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },

        '&:active': {
          bg: '$$bgActive',
        },
      },
      outline: {
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 1px $$border',

        '&:hover': {
          bg: '$$bgHover',
          boxShadow: 'inset 0 0 0 1px $$borderHover',
        },

        '&:active': {
          bg: '$$bgActive',
        },
      },
      ghost: {
        boxShadow: 'none',
        bg: 'transparent',

        '&:hover': {
          bg: '$$bgHover',
        },

        '&:active': {
          bg: '$$bgActive',
        },
      },
      solid: {
        bg: '$$solid',
        color: '$bg',

        '&:hover': {
          bg: '$$solidHover',
        },
      },
    },

    size: {
      xs: {
        px: '10px',
        fontSize: '$xs',
        height: '$7',
      },
      sm: {
        px: '$3',
        fontSize: '$sm',
        height: '$8',
      },
      md: {
        px: '$4',
        fontSize: '$md',
        height: '$10',
      },
      lg: {
        px: '$6',
        fontSize: '$lg',
        height: '$12',
      },
    },

    // adding soon

    colorScheme: {
      purple: {
        $$bg: '$colors$violet3',
        $$bgHover: '$colors$violet4',
        $$bgActive: '$colors$violet5',
        $$border: '$colors$violet7',
        $$borderHover: '$colors$violet8',
        $$solid: '$colors$violet9',
        $$solidHover: '$colors$violet10',
        $$text: '$colors$violet11',
        $$textHiContrast: '$colors$violet12',
      },
    },

    rounded: {
      none: {
        br: '0px',
      },
      xs: {
        br: '$xs',
      },
      sm: {
        br: '$sm',
      },
      md: {
        br: '$md',
      },
      lg: {
        br: '$lg',
      },
      full: {
        br: '$full',
      },
    },
  },

  defaultVariants: {
    variant: 'subtle',
    size: 'md',
    rounded: 'md',
  },
});

export interface ButtonProps extends ButtonBaseProps {
  children?: React.ReactNode;
  onPress?: () => void;
  isDisabled?: boolean;
}

export const Button = React.forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const buttonRef = useObjectRef(ref);
    const { buttonProps, isPressed } = useButton(
      {
        ...(props as any),
        onPress() {
          props.onPress && props.onPress();
        },
      },
      buttonRef
    );

    return (
      <ButtonBase {...props} ref={buttonRef} {...buttonProps}>
        {props.children}
      </ButtonBase>
    );
  }
);
