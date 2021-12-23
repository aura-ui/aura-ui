import { css } from '@zephyr-ui/theme';
import * as React from 'react';
import { Text, Paragraph, Quote, Small, Deleted, Code, Ins, Em, Strong, Mark } from './typography';

export default {
  title: 'Components/Typography/Text',
};

const flex = css({ display: 'flex', flexDirection: 'column', gap: '$4' });
export const all = () => {
  return (
    <div className={flex()}>
      <Text>Hello World</Text>
      <Paragraph>Hello World</Paragraph>
      <Quote>Hello World</Quote>
      <Small>Hello World</Small>
      <Deleted>Hello World</Deleted>
      <Code>Hello World</Code>
      <Ins>Hello World</Ins>
      <Em>Hello World</Em>
      <Strong>Hello World</Strong>
      <Mark>Hello World</Mark>
    </div>
  );
};

export const span = () => <Text>Hello World</Text>;
export const paragraph = () => <Paragraph>Hello World</Paragraph>;
export const quote = () => <Quote>Hello World</Quote>;
export const small = () => <Small>Hello World</Small>;
export const deleted = () => <Deleted>Hello World</Deleted>;
export const code = () => <Code>Hello World</Code>;
export const ins = () => <Ins>Hello World</Ins>;
export const em = () => <Em>Hello World</Em>;
export const strong = () => <Strong>Hello World</Strong>;
export const mark = () => <Mark>Hello World</Mark>;
