import * as React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { ComponentProps, CSS } from '@aura-ui/theme';
import { Container } from './Container';

type AspectRatioBaseProps = ComponentProps<typeof AspectRatioPrimitive.Root>;

export type AspectRatioProps = AspectRatioBaseProps & {
  children: React.ReactNode;
  css?: CSS;
  maxWidth?: string | number;
};

export const AspectRatio = ({ children, maxWidth, ...props }: AspectRatioProps) => {
  return (
    <Container css={{ maxW: maxWidth }}>
      <AspectRatioPrimitive.Root {...props}>{children}</AspectRatioPrimitive.Root>
    </Container>
  );
};
