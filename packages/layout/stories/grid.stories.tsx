import { Grid } from '../src';
import { Default as ContainerDefault } from '../stories/container.stories';
import * as React from 'react';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
};

export const Default = () => (
  <Grid css={{ gridGap: '$4' }}>
    <ContainerDefault />
    <ContainerDefault />
    <ContainerDefault />
  </Grid>
);
