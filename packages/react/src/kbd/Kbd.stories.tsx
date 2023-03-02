import * as React from 'react';
import { Flex } from '../layout';
import { Kbd } from './Kbd';

export default {
  title: 'Components/Kbd',
  component: Kbd,
};

export const Default = () => (
  <Flex gap="2">
    <Kbd>⌘</Kbd>
    <Kbd>Alt</Kbd>
  </Flex>
);

export const Sizes = () => (
  <Flex direction="column" gap="2">
    <Kbd size="1">1</Kbd>
    <Kbd size="2">2</Kbd>
  </Flex>
);

export const Variants = () => (
  <Flex direction="column" gap="2">
    <Flex gap="2">
      <Kbd variant="subtle">Subtle</Kbd>
      <Kbd variant="subtle">⌘</Kbd>
    </Flex>
    <Flex gap="2">
      <Kbd variant="outline">Outline</Kbd>
      <Kbd variant="outline">⌘</Kbd>
    </Flex>
    <Flex gap="2">
      <Kbd variant="solid">Solid</Kbd>
      <Kbd variant="solid">⌘</Kbd>
    </Flex>
    <Flex gap="1">
      <Kbd variant="ghost">Ghost</Kbd>
      <Kbd variant="ghost">⌘</Kbd>
    </Flex>
  </Flex>
);

export const WithShadows = () => (
  <Flex direction="column" gap="2">
    <Flex gap="2">
      Shadow 1<Kbd shadow="1">⌘</Kbd>
      <Kbd shadow="1">⇧</Kbd>
      <Kbd shadow="1">A</Kbd>
    </Flex>
    <Flex gap="2">
      Shadow 2<Kbd shadow="2">⌘</Kbd>
      <Kbd shadow="2">⇧</Kbd>
      <Kbd shadow="2">A</Kbd>
    </Flex>
    <Flex gap="2">
      Shadow 3<Kbd shadow="3">⌘</Kbd>
      <Kbd shadow="3">⇧</Kbd>
      <Kbd shadow="3">A</Kbd>
    </Flex>
  </Flex>
);
