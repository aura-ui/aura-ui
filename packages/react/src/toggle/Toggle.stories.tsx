import { FontBoldIcon, FontItalicIcon, Half1Icon, Half2Icon } from '@radix-ui/react-icons';
import * as React from 'react';
import { Flex } from '../layout';
import { Toggle } from './Toggle';

export default {
  title: 'Components/Form/Toggle',
  component: Toggle,
};

export const Default = () => (
  <Toggle aria-label="Toggle Bold">
    <FontBoldIcon />
  </Toggle>
);

export const Variants = () => (
  <Flex gap="3">
    <Toggle aria-label="Toggle Bold">
      <FontBoldIcon />
    </Toggle>
    <Toggle aria-label="Toggle Italics" variant="solid">
      <FontItalicIcon />
    </Toggle>
  </Flex>
);

export const Sizes = () => (
  <Flex gap="3">
    <Toggle aria-label="Toggle Bold" size="1">
      <FontItalicIcon />
    </Toggle>
    <Toggle aria-label="Toggle Italics">
      <FontItalicIcon />
    </Toggle>
    <Toggle aria-label="Toggle Italics" size="3">
      <FontItalicIcon />
    </Toggle>
  </Flex>
);

export const ColorSchemes = () => (
  <Flex
    css={{
      flexWrap: 'wrap',
      maxW: 300,
    }}
    gap="2"
  >
    <Toggle aria-label="Toggle Color Scheme" colorScheme="red">
      <Half2Icon />
    </Toggle>
    <Toggle aria-label="Toggle Color Scheme" colorScheme="crimson">
      <Half2Icon />
    </Toggle>
    <Toggle aria-label="Toggle Color Scheme" colorScheme="violet">
      <Half2Icon />
    </Toggle>
    <Toggle aria-label="Toggle Color Scheme" colorScheme="blue">
      <Half2Icon />
    </Toggle>
    <Toggle aria-label="Toggle Color Scheme" colorScheme="green">
      <Half2Icon />
    </Toggle>
    <Toggle aria-label="Toggle Color Scheme" colorScheme="yellow">
      <Half2Icon />
    </Toggle>
    <Toggle aria-label="Toggle Color Scheme" colorScheme="orange">
      <Half2Icon />
    </Toggle>
  </Flex>
);

export const ColorSchemeSolid = () => (
  <Flex
    css={{
      flexWrap: 'wrap',
      maxW: 300,
    }}
    gap="2"
  >
    <Toggle variant="solid" aria-label="Toggle Color Scheme" colorScheme="red">
      <Half2Icon />
    </Toggle>
    <Toggle variant="solid" aria-label="Toggle Color Scheme" colorScheme="crimson">
      <Half2Icon />
    </Toggle>
    <Toggle variant="solid" aria-label="Toggle Color Scheme" colorScheme="violet">
      <Half2Icon />
    </Toggle>
    <Toggle variant="solid" aria-label="Toggle Color Scheme" colorScheme="blue">
      <Half2Icon />
    </Toggle>
    <Toggle variant="solid" aria-label="Toggle Color Scheme" colorScheme="green">
      <Half2Icon />
    </Toggle>
    <Toggle variant="solid" aria-label="Toggle Color Scheme" colorScheme="yellow">
      <Half2Icon />
    </Toggle>
    <Toggle variant="solid" aria-label="Toggle Color Scheme" colorScheme="orange">
      <Half2Icon />
    </Toggle>
  </Flex>
);
