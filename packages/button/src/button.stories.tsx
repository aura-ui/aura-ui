import * as React from 'react';
import { Button } from './button';

export default {
  title: 'Components/Form/Button',
};

export const Default = () => <Button>Button</Button>;
export const Outline = () => <Button variant="outline">Button</Button>;
export const Solid = () => <Button variant="solid">Button</Button>;
export const Ghost = () => <Button variant="ghost">Button</Button>;
export const Purple = () => <Button colorScheme="purple">Button</Button>;
