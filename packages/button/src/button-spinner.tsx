import * as React from 'react';
import { Spinner, SpinnerProps, SpinnerVariant, SpinnerVariants } from '@zephyr-ui/spinner';
import { styled, ComponentProps } from '@zephyr-ui/theme';

type ButtonSpinnerBaseProps = ComponentProps<typeof ButtonSpinnerBase>;
const ButtonSpinnerBase = styled('div', {
  display: 'flex',
  alignItems: 'center',

  variants: {
    state: {
      spinner: {
        px: '$4',
      },
    },
  },

  defaultVariants: {
    state: 'spinner',
  },
});

interface ButtonSpinnerProps extends ButtonSpinnerBaseProps {
  label?: string;
  placement?: 'start' | 'end';
}

export const ButtonSpinner = (props: ButtonSpinnerProps) => {
  const { children = <Spinner />, label } = props;
  return (
    <ButtonSpinnerBase css={{ position: label ? 'relative' : 'absolute' }} {...props}>
      {children}
    </ButtonSpinnerBase>
  );
};
