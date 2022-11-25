import * as React from 'react';
import { Button } from './Button';
import { Flex } from '@aura-ui/layout';

export default {
  title: 'Components/Form/Button',
  component: Button,
};

export const Default = () => <Button>Button</Button>;

export const Sizes = () => {
  return (
    <Flex gap="2">
      <Button size="1">Button</Button>
      <Button size="2">Button</Button>
      <Button size="3">Button</Button>
    </Flex>
  );
};

export const Variants = () => {
  return (
    <Flex gap="2">
      <Button variant="subtle">Subtle</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="ghost">Ghost</Button>
    </Flex>
  );
};

export const Disabled = () => <Button aria-disabled>Button</Button>;
