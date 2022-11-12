import { Container } from '../src';
import * as React from 'react';

export default {
  title: 'Components/Layout/Container',
  component: Container,
};

export const Default = ({ children }: { children?: React.ReactNode }) => (
  <Container css={{ boxSize: '$32', bg: '$solid' }}>{children}</Container>
);

export const FullWidth = () => <Container size="fullWidth" css={{ height: '$32', bg: '$solid' }} />;

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
  <Container size="60ch">
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
  <Container size="4    ">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eum optio at quod culpa tenetur
      voluptates, nemo accusantium. Quidem vero molestias saepe sint atque corporis quis accusamus
      laudantium similique soluta.
    </p>
  </Container>
);
