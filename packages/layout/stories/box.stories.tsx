import { ComponentMeta } from '@storybook/react';
import { Box } from '../src';
import * as React from 'react';

export default {
  title: 'Components/Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

export const Basic = () => <Box css={{ boxSize: '$32', bg: '$solid' }} />;

export const FullWidth = () => <Box css={{ width: '100%', height: '$32', bg: '$solid' }} />;
