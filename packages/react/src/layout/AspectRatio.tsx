import * as React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { ComponentProps, CSS, styled } from '../theme';
import { Container } from './Container';

const StyledAspectRation = styled(AspectRatioPrimitive.Root, {
  variants: {
    variant: {
      square: {
        aspectRatio: 1 / 1,
      },
      standard: {
        aspectRatio: 4 / 3,
      },
      film: {
        aspectRatio: 3 / 2,
      },
      hd: {
        aspectRatio: 16 / 9,
      },
      cinemascope: {
        aspectRatio: 21 / 9,
      },
    },
  },
});

type AspectRatioBaseProps = ComponentProps<typeof StyledAspectRation>;

export type AspectRatioProps = AspectRatioBaseProps & {
  children: React.ReactNode;
  css?: CSS;
  maxWidth?: string | number;
};

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ children, maxWidth, ...props }: AspectRatioProps, ref) => {
    return (
      <Container css={{ maxW: maxWidth }}>
        <StyledAspectRation ref={ref} {...props}>
          {children}
        </StyledAspectRation>
      </Container>
    );
  }
);
