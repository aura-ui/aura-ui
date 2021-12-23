import { Container, ContainerProps } from '../src';
import * as React from 'react';

export default {
  title: 'Components/Layout/Container',
  component: Container,
};

export const Default = ({ children }: { children?: React.ReactNode }) => (
  <Container css={{ boxSize: '$32', bg: '$solid' }}>{children}</Container>
);

export const FullWidth = () => <Container css={{ width: '100%', height: '$32', bg: '$solid' }} />;

const CenteredChild = () => (
  <Container centerContent css={{ boxSize: '$16', bg: '$solid', color: '$bg' }}>
    Child
  </Container>
);

export const Centered = () => (
  <Container centerContent css={{ boxSize: '$32', bg: '$bgActive' }}>
    <CenteredChild />
  </Container>
);

export const Content = () => (
  <Container maxWidth="60ch">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eum optio at quod culpa tenetur
      voluptates, nemo accusantium. Quidem vero molestias saepe sint atque corporis quis accusamus
      laudantium similique soluta.
    </p>
  </Container>
);

export const ContentWider = () => (
  <Container maxWidth="5xl">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eum optio at quod culpa tenetur
      voluptates, nemo accusantium. Quidem vero molestias saepe sint atque corporis quis accusamus
      laudantium similique soluta.
    </p>
  </Container>
);
