import * as React from 'react';
import { Flex } from '../layout';
import { Button, ButtonGroup } from './Button';

export default {
  title: 'Components/Form/ButtonGroup',
  component: ButtonGroup,
};

export const Default = () => (
  <ButtonGroup>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </ButtonGroup>
);

export const Variants = () => (
  <Flex direction="column" gap="5">
    <ButtonGroup variant="subtle">
      <Button>Subtle</Button>
      <Button>Subtle</Button>
      <Button>Subtle</Button>
      <Button>Subtle</Button>
    </ButtonGroup>
    <ButtonGroup variant="outline">
      <Button>Outline</Button>
      <Button>Outline</Button>
      <Button>Outline</Button>
      <Button>Outline</Button>
    </ButtonGroup>
    <ButtonGroup variant="solid">
      <Button>Solid</Button>
      <Button>Solid</Button>
      <Button>Solid</Button>
      <Button>Solid</Button>
    </ButtonGroup>
    <ButtonGroup variant="ghost">
      <Button>Ghost</Button>
      <Button>Ghost</Button>
      <Button>Ghost</Button>
      <Button>Ghost</Button>
    </ButtonGroup>
  </Flex>
);

export const FlushedVariants = () => (
  <Flex direction="column" gap="5">
    <ButtonGroup flushed variant="subtle">
      <Button>Subtle</Button>
      <Button>Subtle</Button>
      <Button>Subtle</Button>
      <Button>Subtle</Button>
    </ButtonGroup>
    <ButtonGroup flushed variant="outline">
      <Button>Outline</Button>
      <Button>Outline</Button>
      <Button>Outline</Button>
      <Button>Outline</Button>
    </ButtonGroup>
    <ButtonGroup flushed variant="solid">
      <Button>Solid</Button>
      <Button>Solid</Button>
      <Button>Solid</Button>
      <Button>Solid</Button>
    </ButtonGroup>
    <ButtonGroup flushed variant="ghost">
      <Button>Ghost</Button>
      <Button>Ghost</Button>
      <Button>Ghost</Button>
      <Button>Ghost</Button>
    </ButtonGroup>
  </Flex>
);

export const WithCustomRadius = () => (
  <ButtonGroup radius="pill">
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </ButtonGroup>
);

export const WithCustomRadiusFlushed = () => (
  <ButtonGroup flushed radius="pill">
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </ButtonGroup>
);

export const Direction = () => (
  <Flex direction="column" gap="5">
    <ButtonGroup>
      <Button>Row</Button>
      <Button>Row</Button>
      <Button>Row</Button>
      <Button>Row</Button>
    </ButtonGroup>
    <ButtonGroup direction="column">
      <Button>Column</Button>
      <Button>Column</Button>
      <Button>Column</Button>
      <Button>Column</Button>
    </ButtonGroup>
  </Flex>
);
