import { css } from '@float-ui/theme';
import * as React from 'react';
import { Heading } from './typography';

export default {
  title: 'Components/Typography/Heading',
};

const flex = css({ display: 'flex', flexDirection: 'column', gap: '$4' });
export const sizes = () => {
  return (
    <div className={flex()}>
      <Heading size="6xl">Hello World</Heading>
      <Heading size="5xl">Hello World</Heading>
      <Heading size="4xl">Hello World</Heading>
      <Heading size="3xl">Hello World</Heading>
      <Heading size="2xl">Hello World</Heading>
      <Heading size="xl">Hello World</Heading>
      <Heading size="lg">Hello World</Heading>
      <Heading size="md">Hello World</Heading>
      <Heading size="sm">Hello World</Heading>
      <Heading size="xs">Hello World</Heading>
    </div>
  );
};

export const heading1 = () => <Heading as="h1">Hello World</Heading>;
export const heading2 = () => <Heading as="h2">Hello World</Heading>;
export const heading3 = () => <Heading as="h3">Hello World</Heading>;
export const heading4 = () => <Heading as="h4">Hello World</Heading>;
export const heading5 = () => <Heading as="h5">Hello World</Heading>;
export const heading6 = () => <Heading as="h6">Hello World</Heading>;
export const regularFontWeight = () => (
  <Heading css={{ fontWeight: '$normal' }}>Hello World</Heading>
);
