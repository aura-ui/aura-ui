import { GearIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import { IconButton } from '../icon-button';
import { VisuallyHidden } from './VisuallyHidden';

export default {
  title: 'Components/Layout/VisuallyHidden',
  component: VisuallyHidden,
};

export const IconButtonWithHiddenLabel = () => (
  <IconButton>
    <GearIcon />
    <VisuallyHidden>Settings</VisuallyHidden>
  </IconButton>
);
