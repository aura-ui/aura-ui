import * as React from 'react';
import { ComponentProps, VariantProps, styled, keyframes } from '@zephyr-ui/theme';
import { defaultColors } from '@zephyr-ui/utils';
import { VisuallyHidden } from '@zephyr-ui/visually-hidden';

const spinner = keyframes({
  to: { transform: 'rotate(360deg)' },
});

type SpinnerBaseProps = ComponentProps<typeof SpinnerBase>;
export type SpinnerVariants = VariantProps<typeof SpinnerBase>;
const SpinnerBase = styled('div', {
  ...defaultColors,

  position: 'relative',
  $$currentColor: 'currentColor',
  $$thickness: '2px',

  variants: {
    variant: {
      circular: {
        '&::before': {
          content: '',
          boxSizing: 'border-box',
          position: 'absolute',
          top: '50%',
          left: '50%',
          boxSize: '$5',
          mt: '-10px',
          ml: '-10px',
          br: '$full',
          border: '$$thickness solid $colors$border',
          borderTopColor: '$$currentColor',
          animation: `${spinner} .6s linear infinite`,
        },
      },
      circular2: {
        '&::before': {
          content: '',
          boxSizing: 'border-box',
          position: 'absolute',
          top: '50%',
          left: '50%',
          boxSize: '$5',
          mt: '-10px',
          ml: '-10px',
          br: '$full',
          border: '$$thickness solid transparent',
          borderTopColor: '$$currentColor',
          borderBottomColor: '$$currentColor',
          animation: `${spinner} .8s ease infinite`,
        },
      },
      'circular-fluid': {
        '&::before': {
          content: '',
          boxSizing: 'border-box',
          position: 'absolute',
          top: '50%',
          left: '50%',
          boxSize: '$5',
          mt: '-10px',
          ml: '-10px',
          br: '$full',
          borderTop: `$$thickness solid $$currentColor`,
          borderRight: `$$thickness solid transparent`,
          animation: `${spinner} .6s linear infinite`,
        },
      },
    },
  },

  defaultVariants: {
    variant: 'circular',
  },
});

type SizeOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SpinnerVariant = 'circular' | 'circular2' | 'circular-fluid';
export interface SpinnerProps extends SpinnerBaseProps {
  /**
   * Controls the size of the spinner.
   */
  size?: SizeOptions;
  /**
   * Choose from one of several spinner variants.
   * @example
   * ```jsx
   * <Spinner variant="three-dots" />
   * ```
   */
  variant?: SpinnerVariant;
  /**
   * Controls the thickness of the spinner
   * @example
   * ```jsx
   * <Spinner thickness="3px"/>
   * ```
   */
  thickness?: string;
  /**
   * Controls the speed of the spinner.
   * @example
   * ```jsx
   * <Spinner speed="0.5s"/>
   * ```
   */
  speed?: string;
  /**
   * A11Y: Fallback loading text, visible to screen readers.
   */
  label?: string;
}

function generateSize(options: SizeOptions) {
  const defaultValue = '$5';
  switch (options) {
    case 'xs':
      return '$3';
    case 'sm':
      return '$4';
    case 'md':
      return '$5';
    case 'lg':
      return '$6';
    case 'xl':
      return '$8';
    default:
      return defaultValue;
  }
}

export const Spinner = (props: SpinnerProps) => {
  const { size, variant, thickness, speed, label = 'Loading...' } = props;

  return (
    <SpinnerBase
      variant={variant}
      css={{
        '&::before': {
          boxSize: size ? generateSize(size) : null,
          animationDuration: speed,
        },
        $$thickness: thickness,
      }}
      {...props}
    >
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
    </SpinnerBase>
  );
};
