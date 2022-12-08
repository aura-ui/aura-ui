import * as React from 'react';
import { IconButton } from './IconButton';
import { ArrowUpIcon } from '../../../assets/icons/ArrowUpIcon';
import { Flex } from '@aura-ui/layout';

export default {
  title: 'Components/Form/IconButton',
  component: IconButton,
};

export const Default = () => (
  <IconButton>
    <ArrowUpIcon />
  </IconButton>
);

export const Sizes = () => {
  return (
    <Flex gap="2">
      <IconButton size="1">
        <ArrowUpIcon />
      </IconButton>
      <IconButton size="2">
        {' '}
        <ArrowUpIcon />
      </IconButton>
      <IconButton size="3">
        {' '}
        <ArrowUpIcon />
      </IconButton>
    </Flex>
  );
};

export const Variant = () => {
  return (
    <Flex gap="2">
      <IconButton variant="subtle">
        <ArrowUpIcon />
      </IconButton>
      <IconButton variant="outline">
        <ArrowUpIcon />
      </IconButton>
      <IconButton variant="solid">
        <ArrowUpIcon />
      </IconButton>
      <IconButton variant="ghost">
        <ArrowUpIcon />
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
      <IconButton colorScheme="tomato">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="red">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="crimson">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="pink">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="plum">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="purple">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="violet">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="indigo">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="blue">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="sky">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="cyan">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="teal">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="mint">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="green">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="grass">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="lime">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="yellow">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="amber">
        <ArrowUpIcon />
      </IconButton>
      <IconButton colorScheme="orange">
        <ArrowUpIcon />
      </IconButton>
    </Flex>
  );
};

export const Disabled = () => (
  <IconButton disabled>
    <ArrowUpIcon />
  </IconButton>
);
