import * as React from 'react';
import { TextField } from '../TextField';
import { Flex } from '../../layout';

export default {
  title: 'Components/Form/TextField',
  component: TextField,
};

export const Default = () => {
  return (
    <Flex css={{ maxW: 300 }}>
      <TextField placeholder="Default" />
    </Flex>
  );
};

export const Sizes = () => {
  return (
    <Flex css={{ maxW: 300 }} direction="column" gap="2">
      <TextField size="1" placeholder="Size 1" />
      <TextField size="2" placeholder="Size 2" />
      <TextField size="3" placeholder="Size 3" />
    </Flex>
  );
};

export const Variants = () => {
  return (
    <Flex css={{ maxW: 300 }} direction="column" gap="2">
      <TextField variant="subtle" placeholder="Subtle" />
      <TextField variant="outline" placeholder="Outline" />
      <TextField variant="ghost" placeholder="Ghost" />
      <TextField variant="flushed" placeholder="Flushed" />
    </Flex>
  );
};

export const States = () => {
  return (
    <Flex css={{ maxW: 300 }} direction="column" gap="2">
      <TextField state="valid" placeholder="Valid" />
      <TextField state="invalid" placeholder="Invalid" />
    </Flex>
  );
};

export const Disabled = () => {
  return (
    <Flex css={{ maxW: 300 }}>
      <TextField disabled placeholder="Disabled" />
    </Flex>
  );
};

export const ReadOnly = () => {
  return (
    <Flex css={{ maxW: 300 }} direction="column" gap="2">
      <TextField readOnly placeholder="Readonly with placeholder" />
      <TextField readOnly value="Readonly with value" />
    </Flex>
  );
};
