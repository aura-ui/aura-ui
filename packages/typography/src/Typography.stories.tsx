import * as React from 'react';
import { Typography } from './Typography';
import { Flex } from '../../layout';

export default {
  title: 'Components/Typography/Typography',
  component: Typography,
};

export const Default = () => <Typography>Hello, World.</Typography>;

export const Sizes = () => {
  return (
    <Flex direction="column">
      <Typography size="12">Hello, World.</Typography>
      <Typography size="11">Hello, World.</Typography>
      <Typography size="10">Hello, World.</Typography>
      <Typography size="9">Hello, World.</Typography>
      <Typography size="8">Hello, World.</Typography>
      <Typography size="7">Hello, World.</Typography>
      <Typography size="6">Hello, World.</Typography>
      <Typography size="5">Hello, World.</Typography>
      <Typography size="4">Hello, World.</Typography>
      <Typography size="3">Hello, World.</Typography>
      <Typography size="2">Hello, World.</Typography>
      <Typography size="1">Hello, World.</Typography>
    </Flex>
  );
};

export const Weights = () => {
  return (
    <Flex direction="column">
      <Typography weight="9">Hello, World.</Typography>
      <Typography weight="8">Hello, World.</Typography>
      <Typography weight="7">Hello, World.</Typography>
      <Typography weight="6">Hello, World.</Typography>
      <Typography weight="5">Hello, World.</Typography>
      <Typography weight="4">Hello, World.</Typography>
      <Typography weight="3">Hello, World.</Typography>
      <Typography weight="2">Hello, World.</Typography>
      <Typography weight="1">Hello, World.</Typography>
    </Flex>
  );
};

export const Colors = () => {
  return (
    <Flex direction="column">
      <Typography colorScheme="tomato">Tomato</Typography>
      <Typography colorScheme="red">Red</Typography>
      <Typography colorScheme="crimson">Crimson</Typography>
      <Typography colorScheme="pink">Pink</Typography>
      <Typography colorScheme="plum">Plum</Typography>
      <Typography colorScheme="purple">Purple</Typography>
      <Typography colorScheme="violet">Violet</Typography>
      <Typography colorScheme="indigo">Indigo</Typography>
      <Typography colorScheme="blue">Blue</Typography>
      <Typography colorScheme="sky">Sky</Typography>
      <Typography colorScheme="cyan">Cyan</Typography>
      <Typography colorScheme="teal">Teal</Typography>
      <Typography colorScheme="mint">Mint</Typography>
      <Typography colorScheme="green">Green</Typography>
      <Typography colorScheme="grass">Grass</Typography>
      <Typography colorScheme="lime">Lime</Typography>
      <Typography colorScheme="yellow">Yellow</Typography>
      <Typography colorScheme="amber">Amber</Typography>
      <Typography colorScheme="orange">Orange</Typography>
    </Flex>
  );
};

export const Contrast = () => {
  return (
    <Flex direction="column">
      <Typography contrast="loContrast">LoContrast</Typography>
      <Typography contrast="hiContrast">HiContrast</Typography>
    </Flex>
  );
};

export const EllipsisSingleLine = () => (
  <Typography css={{ maxW: '50ch' }} ellipsis="single">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum totam omnis maiores numquam
    dignissimos, beatae esse obcaecati eligendi libero doloribus possimus porro, tempora saepe
    dicta.
  </Typography>
);

export const EllipsisMultiLineDefault = () => (
  <Typography css={{ maxW: '50ch' }} ellipsis="multi">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum totam omnis maiores numquam
    dignissimos, beatae esse obcaecati eligendi libero doloribus possimus porro, tempora saepe
    dicta.
  </Typography>
);

export const EllipsisMultiLineCustom = () => (
  <Typography css={{ maxW: '50ch', '-webkit-line-clamp': 3 }} ellipsis="multi">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum totam omnis maiores numquam
    dignissimos, beatae esse obcaecati eligendi libero doloribus possimus porro, tempora saepe
    dicta.
  </Typography>
);
