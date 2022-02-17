import { styled } from '@aura-ui/theme';
import * as React from 'react';
import { Spinner } from './spinner';

export default {
  title: 'Components/Feedback/Spinner',
};

const Container = styled('div', {
  position: 'relative',
  width: '$2',
});

export const Default = () => (
  <Container>
    <Spinner />
  </Container>
);

export const Circular2 = () => (
  <Container>
    <Spinner variant="circular2" />
  </Container>
);

export const CircularFluid = () => (
  <Container>
    <Spinner variant="circular-fluid" />
  </Container>
);

export const Thickness = () => (
  <Container>
    <Spinner size="lg" thickness="4px" />
  </Container>
);

export const SpeedSlow = () => (
  <Container>
    <Spinner size="lg" variant="circular-fluid" speed="1s" />
  </Container>
);
