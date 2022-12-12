import * as React from 'react';
import { Checkbox } from './Checkbox';
import { Flex, Box } from '../../layout';
import { PlusIcon } from '../../../assets/icons/PlusIcon';

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
};

export const Default = () => <Checkbox>Default</Checkbox>;

export const Sizes = () => {
  return (
    <Flex direction="column" gap="2">
      <Checkbox size="1">Size 1</Checkbox>
      <Checkbox size="2">Size 2</Checkbox>
      <Checkbox size="3">Size 3</Checkbox>
    </Flex>
  );
};

export const Variants = () => {
  return (
    <Flex direction="column" gap="2">
      <Checkbox variant="subtle">Subtle</Checkbox>
      <Checkbox variant="outline">Outline</Checkbox>
      <Checkbox variant="solid">Solid</Checkbox>
    </Flex>
  );
};

export const ColorScheme = () => {
  return (
    <Flex direction="column" gap="2">
      <Checkbox colorScheme="tomato">Tomato</Checkbox>
      <Checkbox colorScheme="red">Red</Checkbox>
      <Checkbox colorScheme="crimson">Crimson</Checkbox>
      <Checkbox colorScheme="pink">Pink</Checkbox>
      <Checkbox colorScheme="plum">Plum</Checkbox>
      <Checkbox colorScheme="purple">Purple</Checkbox>
      <Checkbox colorScheme="violet">Violet</Checkbox>
      <Checkbox colorScheme="indigo">Indigo</Checkbox>
      <Checkbox colorScheme="blue">Blue</Checkbox>
      <Checkbox colorScheme="sky">Sky</Checkbox>
      <Checkbox colorScheme="cyan">Cyan</Checkbox>
      <Checkbox colorScheme="teal">Teal</Checkbox>
      <Checkbox colorScheme="mint">Mint</Checkbox>
      <Checkbox colorScheme="green">Green</Checkbox>
      <Checkbox colorScheme="grass">Grass</Checkbox>
      <Checkbox colorScheme="lime">Lime</Checkbox>
      <Checkbox colorScheme="yellow">Yellow</Checkbox>
      <Checkbox colorScheme="amber">Amber</Checkbox>
      <Checkbox colorScheme="orange">Orange</Checkbox>
    </Flex>
  );
};

export const Disabled = () => <Checkbox disabled>Disabled</Checkbox>;

export const Indeterminate = () => <Checkbox checked="indeterminate">Indeterminate</Checkbox>;
