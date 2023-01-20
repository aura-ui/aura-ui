import * as React from 'react';
import { Textarea } from './Textarea';
import { Flex } from '../layout';

export default {
  title: 'Components/Form/Textarea',
  component: Textarea,
};

export const Default = () => {
  return (
    <Flex css={{ maxW: 300 }}>
      <Textarea placeholder="Default" />
    </Flex>
  );
};

export const Sizes = () => {
  return (
    <Flex css={{ maxW: 300 }} direction="column" gap="2">
      <Textarea size="1" placeholder="Size 1" />
      <Textarea size="2" placeholder="Size 2" />
      <Textarea size="3" placeholder="Size 3" />
    </Flex>
  );
};

export const Variants = () => {
  return (
    <Flex css={{ maxW: 300 }} direction="column" gap="2">
      <Textarea variant="subtle" placeholder="Subtle" />
      <Textarea variant="outline" placeholder="Outline" />
      {/* <Textarea variant="ghost" placeholder="Ghost" />
      <Textarea variant="flushed" placeholder="Flushed" /> */}
    </Flex>
  );
};

export const States = () => {
  return (
    <Flex css={{ maxW: 300 }} direction="column" gap="2">
      <Textarea state="valid" placeholder="Valid" />
      <Textarea state="invalid" placeholder="Invalid" />
    </Flex>
  );
};

export const Disabled = () => {
  return (
    <Flex css={{ maxW: 300 }}>
      <Textarea disabled placeholder="Disabled" />
    </Flex>
  );
};

export const ReadOnly = () => {
  return (
    <Flex css={{ maxW: 300 }} direction="column" gap="2">
      <Textarea readOnly placeholder="Readonly with placeholder" />
      <Textarea readOnly value="Readonly with value" />
    </Flex>
  );
};
