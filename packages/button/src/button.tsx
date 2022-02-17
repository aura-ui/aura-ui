import * as React from 'react';
import { ComponentProps, VariantProps, styled, PropertyValue, css } from '@aura-ui/theme';
import { useButton } from '@react-aria/button';
import { useObjectRef } from '@react-aria/utils';
import { ButtonIcon } from './button-icon';
import { ButtonSpinner } from './button-spinner';
import { ariaAttr, dataAttr } from '@aura-ui/utils/src/dom';
import { button } from './button.styles';

export type ButtonBaseProps = ComponentProps<typeof ButtonBase>;
export type ButtonVariants = VariantProps<typeof ButtonBase>;

const ButtonBase = styled('button', {
  ...button,
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
      ...rest
    } = props;
    const buttonRef = useObjectRef(ref);
    const { buttonProps, isPressed } = useButton(
      {
        ...(props as any),
        onClick: undefined,
        onPress: props.onClick,
      },
      buttonRef
    );

    const contentProps = { rightIcon, leftIcon, spacing, children };

    return (
      <ButtonBase
        data-active={dataAttr(isPressed)}
        data-loading={dataAttr(isLoading)}
        aria-disabled={ariaAttr(isDisabled || isLoading)}
        size={props.size}
        rounded={props.rounded}
        variant={props.variant}
        colorScheme={props.colorScheme}
        ref={buttonRef}
        {...rest}
        {...buttonProps}
      >
        {isLoading && spinnerPlacement === 'start' && (
          <ButtonSpinner label={loadingText} placement="start">
            {spinner}
          </ButtonSpinner>
        )}

        {isLoading ? (
          loadingText || (
            <span>
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
