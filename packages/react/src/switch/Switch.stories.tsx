import * as React from 'react';
import { Flex } from '../layout';
import { Switch, SwitchThumb } from './Switch';

export default {
  title: 'Components/Form/Switch',
  component: Switch,
};

export const Default = () => {
  return (
    <Switch>
      <SwitchThumb />
    </Switch>
  );
};

export const Sizes = () => {
  return (
    <Flex direction="column" gap="3">
      <Switch size="1">
        <SwitchThumb />
      </Switch>
      <Switch size="2">
        <SwitchThumb />
      </Switch>
      <Switch size="3">
        <SwitchThumb />
      </Switch>
    </Flex>
  );
};
