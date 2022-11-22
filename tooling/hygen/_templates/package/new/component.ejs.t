---
to: packages/<%= packageName %>/src/<%= h.capitalize(packageName) %>.tsx
---

import * as React from 'react';
import { styled } from '@aura-ui/theme';

export interface <%= h.capitalize(packageName) %>Props {}

export const <%= h.capitalize(packageName) %> = () => {
  return <div>Welcome to Aura.</div>
}
