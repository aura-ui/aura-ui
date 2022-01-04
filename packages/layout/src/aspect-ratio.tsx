import * as React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { ComponentProps, CSS } from '@float-ui/theme';
import { Container } from '../src/';

type AspectRatioBaseProps = ComponentProps<typeof AspectRatioPrimitive.Root>;

export interface AspectRatioProps extends AspectRatioBaseProps {
  children: React.ReactElement;
  css?: CSS;
  maxWidth?: string | number;
}

export const AspectRatio = ({ children, ...props }: AspectRatioProps) => {
  return (
    <Container
      css={{
        overflow: 'hidden',
        maxWidth: props.maxWidth ? props.maxWidth : 300,
        ...props.css,
      }}
    >
      <AspectRatioPrimitive.Root {...props}>{children}</AspectRatioPrimitive.Root>
    </Container>
  );
};
