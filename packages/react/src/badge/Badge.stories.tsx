import { CircleBackslashIcon, DotFilledIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import { Flex } from '../layout';
import { Badge } from './Badge';

export default {
  title: 'Components/Data Display/Badge',
  component: Badge as any,
};

export const Default = () => <Badge>Default</Badge>;

export const WithBorder = () => <Badge border>With Border</Badge>;

export const Capitalized = () => <Badge allCaps>Capitalized</Badge>;

export const Pill = () => <Badge pill>Pill Shape</Badge>;

export const WithIcon = () => (
  <Badge pill>
    <CircleBackslashIcon />
    Cancelled
  </Badge>
);

export const Variants = () => (
  <Flex gap="2">
    <Badge variant="subtle">Subtle</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="solid">Solid</Badge>
  </Flex>
);

export const Sizes = () => (
  <Flex gap="2">
    <Badge size="1">Size 1</Badge>
    <Badge size="2">Size 2</Badge>
    <Badge size="3">Size 3</Badge>
  </Flex>
);

export const Weights = () => (
  <Flex gap="2">
    <Badge weight="1">Weight 1</Badge>
    <Badge weight="2">Weight 2</Badge>
    <Badge weight="3">Weight 3</Badge>
  </Flex>
);

export const ColorSchemeSubtle = () => (
  <Flex
    css={{
      flexWrap: 'wrap',
      maxW: 600,
    }}
    gap="2"
  >
    <Badge colorScheme="tomato">Tomato</Badge>
    <Badge colorScheme="red">Red</Badge>
    <Badge colorScheme="crimson">Crimson</Badge>
    <Badge colorScheme="pink">Pink</Badge>
    <Badge colorScheme="plum">Plum</Badge>
    <Badge colorScheme="purple">Purple</Badge>
    <Badge colorScheme="violet">Violet</Badge>
    <Badge colorScheme="indigo">Indigo</Badge>
    <Badge colorScheme="blue">Blue</Badge>
    <Badge colorScheme="sky">Sky</Badge>
    <Badge colorScheme="cyan">Cyan</Badge>
    <Badge colorScheme="teal">Teal</Badge>
    <Badge colorScheme="mint">Mint</Badge>
    <Badge colorScheme="green">Green</Badge>
    <Badge colorScheme="grass">Grass</Badge>
    <Badge colorScheme="lime">Lime</Badge>
    <Badge colorScheme="yellow">Yellow</Badge>
    <Badge colorScheme="amber">Amber</Badge>
    <Badge colorScheme="orange">Orange</Badge>
  </Flex>
);

export const ColorSchemeOutline = () => (
  <Flex
    css={{
      flexWrap: 'wrap',
      maxW: 600,
    }}
    gap="2"
  >
    <Badge variant="outline" colorScheme="tomato">
      Tomato
    </Badge>
    <Badge variant="outline" colorScheme="red">
      Red
    </Badge>
    <Badge variant="outline" colorScheme="crimson">
      Crimson
    </Badge>
    <Badge variant="outline" colorScheme="pink">
      Pink
    </Badge>
    <Badge variant="outline" colorScheme="plum">
      Plum
    </Badge>
    <Badge variant="outline" colorScheme="purple">
      Purple
    </Badge>
    <Badge variant="outline" colorScheme="violet">
      Violet
    </Badge>
    <Badge variant="outline" colorScheme="indigo">
      Indigo
    </Badge>
    <Badge variant="outline" colorScheme="blue">
      Blue
    </Badge>
    <Badge variant="outline" colorScheme="sky">
      Sky
    </Badge>
    <Badge variant="outline" colorScheme="cyan">
      Cyan
    </Badge>
    <Badge variant="outline" colorScheme="teal">
      Teal
    </Badge>
    <Badge variant="outline" colorScheme="mint">
      Mint
    </Badge>
    <Badge variant="outline" colorScheme="green">
      Green
    </Badge>
    <Badge variant="outline" colorScheme="grass">
      Grass
    </Badge>
    <Badge variant="outline" colorScheme="lime">
      Lime
    </Badge>
    <Badge variant="outline" colorScheme="yellow">
      Yellow
    </Badge>
    <Badge variant="outline" colorScheme="amber">
      Amber
    </Badge>
    <Badge variant="outline" colorScheme="orange">
      Orange
    </Badge>
  </Flex>
);

export const ColorSchemeSolid = () => (
  <Flex
    css={{
      flexWrap: 'wrap',
      maxW: 600,
    }}
    gap="2"
  >
    <Badge variant="solid" colorScheme="tomato">
      Tomato
    </Badge>
    <Badge variant="solid" colorScheme="red">
      Red
    </Badge>
    <Badge variant="solid" colorScheme="crimson">
      Crimson
    </Badge>
    <Badge variant="solid" colorScheme="pink">
      Pink
    </Badge>
    <Badge variant="solid" colorScheme="plum">
      Plum
    </Badge>
    <Badge variant="solid" colorScheme="purple">
      Purple
    </Badge>
    <Badge variant="solid" colorScheme="violet">
      Violet
    </Badge>
    <Badge variant="solid" colorScheme="indigo">
      Indigo
    </Badge>
    <Badge variant="solid" colorScheme="blue">
      Blue
    </Badge>
    <Badge variant="solid" colorScheme="sky">
      Sky
    </Badge>
    <Badge variant="solid" colorScheme="cyan">
      Cyan
    </Badge>
    <Badge variant="solid" colorScheme="teal">
      Teal
    </Badge>
    <Badge variant="solid" colorScheme="mint">
      Mint
    </Badge>
    <Badge variant="solid" colorScheme="green">
      Green
    </Badge>
    <Badge variant="solid" colorScheme="grass">
      Grass
    </Badge>
    <Badge variant="solid" colorScheme="lime">
      Lime
    </Badge>
    <Badge variant="solid" colorScheme="yellow">
      Yellow
    </Badge>
    <Badge variant="solid" colorScheme="amber">
      Amber
    </Badge>
    <Badge variant="solid" colorScheme="orange">
      Orange
    </Badge>
  </Flex>
);
