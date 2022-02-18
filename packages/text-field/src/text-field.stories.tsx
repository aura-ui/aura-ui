import * as React from 'react';
import { TextField } from './text-field';

export default {
  title: 'Components/Form/TextField',
};

export const Default = () => <TextField placeholder="Type here..." />;

export const Sizes = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <TextField size="sm" placeholder="Small" />
      <TextField size="md" placeholder="Medium" />
      <TextField size="lg" placeholder="Large" />
    </div>
  );
};

export const Variants = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <TextField variant="outline" placeholder="Type here..." />
      <TextField variant="subtle" placeholder="Type here..." />
      <TextField variant="ghost" placeholder="Type here..." />
    </div>
  );
};
