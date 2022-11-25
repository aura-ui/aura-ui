import * as React from 'react';
import { Button } from './Button';
import { Flex } from '@aura-ui/layout';

export default {
  title: 'Components/Form/Button',
  component: Button,
};

export const Default = () => <Button>Default</Button>;

export const Sizes = () => {
  return (
    <Flex gap="2">
      <Button size="1">Size 1</Button>
      <Button size="2">Size 2</Button>
      <Button size="3">Size 3</Button>
    </Flex>
  );
};

export const Variant = () => {
  return (
    <Flex gap="2">
      <Button variant="subtle">Subtle</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="ghost">Ghost</Button>
    </Flex>
  );
};

export const ColorScheme = () => {
  return (
    <Flex
      css={{
        flexWrap: 'wrap',
        maxW: 600,
      }}
      gap="2"
    >
      <Button colorScheme="tomato">Tomato</Button>
      <Button colorScheme="red">Red</Button>
      <Button colorScheme="crimson">Crimson</Button>
      <Button colorScheme="pink">Pink</Button>
      <Button colorScheme="plum">Plum</Button>
      <Button colorScheme="purple">Purple</Button>
      <Button colorScheme="violet">Violet</Button>
      <Button colorScheme="indigo">Indigo</Button>
      <Button colorScheme="blue">Blue</Button>
      <Button colorScheme="sky">Sky</Button>
      <Button colorScheme="cyan">Cyan</Button>
      <Button colorScheme="teal">Teal</Button>
      <Button colorScheme="mint">Mint</Button>
      <Button colorScheme="green">Green</Button>
      <Button colorScheme="grass">Grass</Button>
      <Button colorScheme="lime">Lime</Button>
      <Button colorScheme="yellow">Yellow</Button>
      <Button colorScheme="amber">Amber</Button>
      <Button colorScheme="orange">Orange</Button>
    </Flex>
  );
};

export const Disabled = () => <Button aria-disabled>Button</Button>;
