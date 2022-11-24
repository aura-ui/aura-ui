import { Flex, Box, Separator } from '../src';
import { DefaultNoContent as ContainerDefault } from './Container.stories';
import * as React from 'react';

export default {
  title: 'Components/Layout/Separator',
  component: Separator,
};

export const Horizontal = () => (
  <Flex css={{ maxW: '$40' }} direction="column" gap="5">
    <Box>Hello, Aura.</Box>
    <Separator />
    <Box>Hello, Aura.</Box>
    <Separator />
    <Box>Hello, Aura.</Box>
    <Separator />
    <Box>Hello, Aura.</Box>
    <Separator />
  </Flex>
);

export const Vertical = () => (
  <Flex gap="5">
    <Box>Hello, Aura.</Box>
    <Separator orientation="vertical" />
    <Box>Hello, Aura.</Box>
    <Separator orientation="vertical" />
    <Box>Hello, Aura.</Box>
    <Separator orientation="vertical" />
    <Box>Hello, Aura.</Box>
    <Separator orientation="vertical" />
  </Flex>
);
