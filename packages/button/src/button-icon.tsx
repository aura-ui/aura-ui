import * as React from 'react';
import { css, ComponentProps, VariantProps, CSS, styled } from '@float-ui/theme';

type ButtonIconBaseProps = ComponentProps<typeof IconWrapper>;

const IconWrapper = styled('span', {
  display: 'inline-flex',
  alignSelf: 'center',
  flexShrink: 0,
});

export interface ButtonIconProps extends ButtonIconBaseProps {}

export const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const { children } = props;

  const _children = React.isValidElement(children)
    ? React.cloneElement(children, {
        'aria-hidden': true,
        focusable: false,
      })
    : children;

  return <IconWrapper>{_children}</IconWrapper>;
};
