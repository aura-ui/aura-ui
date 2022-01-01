import * as React from 'react';
import { defaultColors, useObjectRef } from '@zephyr-ui/utils';
import { ComponentProps, VariantProps, styled, PropertyValue, css } from '@zephyr-ui/theme';
import { Button, ButtonProps, ButtonVariants } from '.';

type OmittedProps = 'leftIcon' | 'rightIcon' | 'loadingText' | 'spacing' | 'spinnerPlacement';

type OmittedVariants = 'size';

type IconButtonVariants = Omit<ButtonVariants, OmittedVariants> &
  VariantProps<typeof IconButtonBase>;

const IconButtonBase = styled(Button, {
  p: 0,

  variants: {
    size: {
      xs: {
        boxSize: '$6',
        '& svg': {
          boxSize: '$3',
        },
      },
      sm: {
        boxSize: '$8',
        '& svg': {
          boxSize: '$4',
        },
      },
      md: {
        boxSize: '$10',
        '& svg': {
          boxSize: '$5',
        },
      },
      lg: {
        boxSize: '$12',
        '& svg': {
          boxSize: '$6',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

interface IconButtonProps extends Omit<ButtonProps, OmittedProps>, IconButtonVariants {
  /**
   * The icon to be used in the button.
   * @type React.ReactElement
   */
  icon?: React.ReactElement;
  /**
   * A11y: A label that describes the button
   */
  'aria-label': string;
}

export const IconButton = React.forwardRef(
  (props: IconButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { 'aria-label': ariaLabel, icon, children, ...rest } = props;
    const iconButtonRef = useObjectRef(ref);

    /**
     * Passing the icon as prop or children should work
     */
    const element = icon || children;
    const _children = React.isValidElement(element)
      ? React.cloneElement(element as any, {
          'aria-hidden': true,
          focusable: false,
        })
      : null;

    return (
      <IconButtonBase css={{ px: 0 }} ref={iconButtonRef} aria-label={ariaLabel} {...rest}>
        {_children}
      </IconButtonBase>
    );
  }
);
