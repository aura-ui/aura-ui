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
    <Badge colorScheme="red">Red</Badge>
    <Badge colorScheme="crimson">Crimson</Badge>
    <Badge colorScheme="violet">Violet</Badge>
    <Badge colorScheme="blue">Blue</Badge>
    <Badge colorScheme="green">Green</Badge>
    <Badge colorScheme="yellow">Yellow</Badge>
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
    <Badge variant="outline" colorScheme="red">
      Red
    </Badge>
    <Badge variant="outline" colorScheme="crimson">
      Crimson
    </Badge>
    <Badge variant="outline" colorScheme="violet">
      Violet
    </Badge>
    <Badge variant="outline" colorScheme="blue">
      Blue
    </Badge>
    <Badge variant="outline" colorScheme="green">
      Green
    </Badge>
    <Badge variant="outline" colorScheme="yellow">
      Yellow
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
    <Badge variant="solid" colorScheme="red">
      Red
    </Badge>
    <Badge variant="solid" colorScheme="crimson">
      Crimson
    </Badge>
    <Badge variant="solid" colorScheme="violet">
      Violet
    </Badge>
    <Badge variant="solid" colorScheme="blue">
      Blue
    </Badge>
    <Badge variant="solid" colorScheme="green">
      Green
    </Badge>

    <Badge variant="solid" colorScheme="yellow">
      Yellow
    </Badge>
    <Badge variant="solid" colorScheme="orange">
      Orange
    </Badge>
  </Flex>
);
