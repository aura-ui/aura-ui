import { Flex } from '../components/Flex';
import { Default as ContainerDefault } from './Container.stories';
import * as React from 'react';

export default {
  title: 'Components/Layout/Flex',
  component: Flex,
};

export const Default = () => (
  <Flex css={{ gap: '$4' }}>
    <ContainerDefault />
    <ContainerDefault />
  </Flex>
);

export const Vertical = () => (
  <Flex direction="column" css={{ gap: '$4' }}>
    <ContainerDefault />
    <ContainerDefault />
  </Flex>
);

export const SpaceBetween = () => (
  <Flex justify="between">
    <ContainerDefault />
    <ContainerDefault />
  </Flex>
);
