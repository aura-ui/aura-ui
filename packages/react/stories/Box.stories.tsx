import { Box } from '../components/Box';
import * as React from 'react';

export default {
  title: 'Components/Layout/Box',
  component: Box,
};

export const Default = () => (
  <Box css={{ size: '$60', backgroundColor: '$violet3', color: '$violet11' }}>Yo, I'm a box!</Box>
);
