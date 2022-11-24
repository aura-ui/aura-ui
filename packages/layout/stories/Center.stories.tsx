import * as React from 'react';
import { Box, Center } from '../src';

export default {
  title: 'Components/Layout/Center',
  component: Center,
};

export const Default = () => (
  <Center css={{ size: '$40', p: '$5', backgroundColor: '$violet9', br: '$2' }}>
    <Box css={{ color: 'white' }}>Hello, Aura.</Box>
  </Center>
);
