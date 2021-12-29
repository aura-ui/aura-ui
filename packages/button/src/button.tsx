import * as React from 'react';
import { defaultColors } from '@zephyr-ui/utils';
import { buttonResets } from '@zephyr-ui/utils';
import { ComponentProps, VariantProps, styled, PropertyValue, css } from '@zephyr-ui/theme';
import { useButton } from '@react-aria/button';
import { useObjectRef } from '@react-aria/utils';
import { ButtonIcon } from './button-icon';
import { ButtonSpinner } from './button-spinner';
import { SpinnerVariant } from '@zephyr-ui/spinner';
import { dataAttr } from '@zephyr-ui/utils/src/dom';

const noOpacity = css({ opacity: 0 });

export type ButtonBaseProps = ComponentProps<typeof ButtonBase>;
export type ButtonVariants = VariantProps<typeof ButtonBase>;

const ButtonBase = styled('button', {
  ...buttonResets,

  // overridable locally scoped tokens
  ...defaultColors,

  display: 'flex',
  justifyContent: 'center',
  gap: '$1',
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

        '&[data-active]': {
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

        '&[data-active]': {
          bg: '$$bgActive',
        },
      },
      ghost: {
        boxShadow: 'none',
        bg: 'transparent',

        '&:hover': {
          bg: '$$bgHover',
        },

        '&[data-active]': {
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
        height: '$9',
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
  /**
   * The html button type to use.
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * Triggers a handler that is called when the press is released over the target.
   */
  onPress?: () => void;
  /**
   * If `true`, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * If `true`, the button will be set in a loading state, displaying a spinner and optionally some loading text.
   */
  isLoading?: boolean;
  /**
   * The label to show in the button when `isLoading` is true
   * If no text is passed, it only shows the spinner
   */
  loadingText?: string;
  /**
   * If added, the button will show an icon before the button's label.
   * @type React.ReactElement
   */

  leftIcon?: React.ReactElement;
  /**
   * If added, the button will show an icon after the button's label.
   * @type React.ReactElement
   */
  rightIcon?: React.ReactElement;
  /**
   * The space between the button icon and label.
   * @type PropertyValue<'marginRight'>
   */
  spacing?: PropertyValue<'marginRight'>;
  /**
   * Replace the spinner component when `isLoading` is set to `true`
   * @type React.ReactElement
   */
  spinner?: React.ReactElement;
  /**
   * It determines the placement of the spinner when isLoading is true
   * @default "start"
   */
  spinnerPlacement?: 'start' | 'end';
}

export const Button = React.forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      onPress,
      isDisabled,
      isLoading,
      loadingText,
      leftIcon,
      rightIcon,
      spacing,
      spinner,
      spinnerPlacement = 'start',
    } = props;
    const buttonRef = useObjectRef(ref);
    const { buttonProps, isPressed } = useButton(
      {
        ...(props as any),
        onPress() {
          onPress && onPress();
        },
        isDisabled: isDisabled || isLoading,
      },
      buttonRef
    );

    const contentProps = { rightIcon, leftIcon, spacing, children };

    return (
      <ButtonBase
        data-active={dataAttr(isPressed)}
        size={props.size}
        rounded={props.rounded}
        variant={props.variant}
        colorScheme={props.colorScheme}
        ref={buttonRef}
        {...buttonProps}
      >
        {isLoading && spinnerPlacement === 'start' && (
          <ButtonSpinner label={loadingText} placement="start">
            {spinner}
          </ButtonSpinner>
        )}

        {isLoading ? (
          loadingText || (
            <span className={noOpacity()}>
              <ButtonContent {...contentProps} />
            </span>
          )
        ) : (
          <ButtonContent {...contentProps} />
        )}

        {isLoading && spinnerPlacement === 'end' && (
          <ButtonSpinner label={loadingText} placement="end">
            {spinner}
          </ButtonSpinner>
        )}
      </ButtonBase>
    );
  }
);

type ButtonContentProps = Pick<ButtonProps, 'leftIcon' | 'rightIcon' | 'children' | 'spacing'>;

const ButtonContent = (props: ButtonContentProps) => {
  const { children, leftIcon, rightIcon, spacing } = props;
  return (
    <>
      {leftIcon && <ButtonIcon css={{ mr: spacing }}>{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && (
        <ButtonIcon css={{ ml: spacing as unknown as PropertyValue<'marginLeft'> }}>
          {rightIcon}
        </ButtonIcon>
      )}
    </>
  );
};
