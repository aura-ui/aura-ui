import { Container } from '../components/Container';
import * as React from 'react';

export default {
  title: 'Components/Layout/Container',
  component: Container,
};

export const Default = ({ children }: { children?: React.ReactNode }) => (
  <Container css={{ size: '$40', bg: '$violet6' }}>{children}</Container>
);

export const FullWidth = () => (
  <Container size="fullWidth" css={{ height: '$40', bg: '$violet3' }} />
);

const CenteredChild = () => (
  <Container centerContent css={{ size: '$20', bg: '$violet6', color: '$violet11' }}>
    Child
  </Container>
);

export const Centered = () => (
  <Container centerContent css={{ size: '$40', bg: '$violet3' }}>
    <CenteredChild />
  </Container>
);

export const TextContent = () => (
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
  <Container size="5">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eum optio at quod culpa tenetur
      voluptates, nemo accusantium. Quidem vero molestias saepe sint atque corporis quis accusamus
      laudantium similique soluta.
    </p>
  </Container>
);
