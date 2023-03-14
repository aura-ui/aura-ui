import * as React from 'react';
import { IconButton } from './IconButton';
import { Flex } from '../layout';
import { HiArrowUp } from 'react-icons/hi';

export default {
  title: 'Components/Form/IconButton',
  component: IconButton,
};

export const Default = () => (
  <IconButton>
    <HiArrowUp />
  </IconButton>
);

export const Sizes = () => {
  return (
    <Flex gap="2">
      <IconButton size="1">
        <HiArrowUp />
      </IconButton>
      <IconButton size="2">
        {' '}
        <HiArrowUp />
      </IconButton>
      <IconButton size="3">
        {' '}
        <HiArrowUp />
      </IconButton>
    </Flex>
  );
};

export const Variant = () => {
  return (
    <Flex gap="2">
      <IconButton variant="subtle">
        <HiArrowUp />
      </IconButton>
      <IconButton variant="outline">
        <HiArrowUp />
      </IconButton>
      <IconButton variant="solid">
        <HiArrowUp />
      </IconButton>
      <IconButton variant="ghost">
        <HiArrowUp />
      </IconButton>
    </Flex>
  );
};

export const ColorScheme = () => {
  return (
    <Flex
      css={{
        flexWrap: 'wrap',
        maxW: 300,
      }}
      gap="2"
    >
      <IconButton colorScheme="red">
        <HiArrowUp />
      </IconButton>
      <IconButton colorScheme="crimson">
        <HiArrowUp />
      </IconButton>
      <IconButton colorScheme="violet">
        <HiArrowUp />
      </IconButton>
      <IconButton colorScheme="blue">
        <HiArrowUp />
      </IconButton>
      <IconButton colorScheme="green">
        <HiArrowUp />
      </IconButton>
      <IconButton colorScheme="yellow">
        <HiArrowUp />
      </IconButton>
      <IconButton colorScheme="orange">
        <HiArrowUp />
      </IconButton>
    </Flex>
  );
};

export const Disabled = () => (
  <IconButton disabled>
    <HiArrowUp />
  </IconButton>
);

export const LinkIconButton = () => (
  <IconButton as="a" href="#">
    <HiArrowUp />
  </IconButton>
);
