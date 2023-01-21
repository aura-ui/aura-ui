---
to: packages/react/src/<%= h.dasherize(name) %>/<%= h.changeCase.pascal(name) %>.stories.tsx
unless_exists: true
---

import * as React from 'react';
import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>'

export default {
  title: 'Components/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
};

export const Default = () => <<%= h.changeCase.pascal(name) %> />
