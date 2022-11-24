import { Container } from '../src';
import * as React from 'react';
import { CSS } from '@aura-ui/theme';

export default {
  title: 'Components/Layout/Container',
  component: Container,
};

export const DefaultNoContent = ({ children, css }: { children?: React.ReactNode; css?: CSS }) => (
  <Container css={{ size: '$30', bg: '$violet9', color: 'white', br: '$2', ...css }}>
    {children}
  </Container>
);

export const FullWidth = () => (
  <Container size="fullWidth" css={{ height: '$30', bg: '$violet9', color: 'white', br: '$2' }} />
);

const CenteredChild = () => (
  <Container centerContent css={{ size: '$16', bg: '$violet9', color: 'white' }}>
    Child
  </Container>
);

export const Centered = () => (
  <Container centerContent css={{ size: '$30', bg: '$violet5' }}>
    <CenteredChild />
  </Container>
);

export const DefaultWithContent = () => (
  <Container>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eum optio at quod culpa tenetur
      voluptates, nemo accusantium. Quidem vero molestias saepe sint atque corporis quis accusamus
      laudantium similique soluta.
    </p>
  </Container>
);

export const ContainerSize1 = () => (
  <Container size="1">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eum optio at quod culpa tenetur
      voluptates, nemo accusantium. Quidem vero molestias saepe sint atque corporis quis accusamus
      laudantium similique soluta.
    </p>
  </Container>
);

export const ContainerSize2 = () => (
  <Container size="2">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eum optio at quod culpa tenetur
      voluptates, nemo accusantium. Quidem vero molestias saepe sint atque corporis quis accusamus
      laudantium similique soluta.
    </p>
  </Container>
);

export const ContainerSize3 = () => (
  <Container size="3">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eum optio at quod culpa tenetur
      voluptates, nemo accusantium. Quidem vero molestias saepe sint atque corporis quis accusamus
      laudantium similique soluta.
    </p>
  </Container>
);

export const ContainerSize4 = () => (
  <Container size="4">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eum optio at quod culpa tenetur
      voluptates, nemo accusantium. Quidem vero molestias saepe sint atque corporis quis accusamus
      laudantium similique soluta.
    </p>
  </Container>
);
