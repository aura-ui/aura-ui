import * as React from 'react';
import { Flex } from '../layout';
import { Typography } from '../typography';
import { Radio, RadioGroup } from './RadioGroup';

export default {
  title: 'Components/Form/RadioGroup',
  component: RadioGroup,
};

export const Default = () => (
  <RadioGroup gap="2">
    <Radio value="default">Default</Radio>
  </RadioGroup>
);

export const Sizes = () => (
  <RadioGroup gap="2">
    <Radio size="1" value="default">
      Size 1
    </Radio>
    <Radio size="2" value="default2">
      Size 2
    </Radio>
    <Radio size="3" value="default3">
      Size 3
    </Radio>
  </RadioGroup>
);

export const Variants = () => (
  <RadioGroup gap="2">
    <Radio variant="outline" value="default">
      Outline
    </Radio>
    <Radio variant="solid" value="default2">
      Solid
    </Radio>
  </RadioGroup>
);

export const IndicatorSizes = () => (
  <RadioGroup gap="2">
    <Radio indicatorSize="1" value="default">
      Indicator Size 1
    </Radio>
    <Radio indicatorSize="2" value="default2">
      Indicator Size 2
    </Radio>
    <Radio indicatorSize="3" value="default3">
      Indicator Size 3
    </Radio>
  </RadioGroup>
);

export const ColorScheme = () => (
  <RadioGroup gap="2">
    <Radio colorScheme="red" value="red">
      Red
    </Radio>
    <Radio colorScheme="crimson" value="crimson">
      Crimson
    </Radio>
    <Radio colorScheme="violet" value="violet">
      Violet
    </Radio>
    <Radio colorScheme="blue" value="blue">
      Blue
    </Radio>
    <Radio colorScheme="green" value="green">
      Green
    </Radio>
    <Radio colorScheme="yellow" value="yellow">
      Yellow
    </Radio>
    <Radio colorScheme="orange" value="orange">
      Orange
    </Radio>
  </RadioGroup>
);

export const RadioCard = () => (
  <RadioGroup gap="2">
    <Flex
      css={{
        p: '$3',
        br: '$2',
        boxShadow: '0 0 0 1px $colors$slate7',
        maxW: '$30',
        '&:focus-within': { boxShadow: '0 0 0 1px $colors$blue9' },
      }}
    >
      <Radio indicatorSize="1" value="default">
        {''}
      </Radio>
      <Typography>Option 1</Typography>
    </Flex>
    <Flex
      css={{
        p: '$3',
        br: '$2',
        boxShadow: '0 0 0 1px $colors$slate7',
        maxW: '$30',
        '&:focus-within': { boxShadow: '0 0 0 1px $colors$blue9' },
      }}
    >
      <Radio indicatorSize="2" value="default2">
        {''}
      </Radio>
      <Typography>Option 2</Typography>
    </Flex>
    <Flex
      css={{
        p: '$3',
        br: '$2',
        boxShadow: '0 0 0 1px $colors$slate7',
        maxW: '$30',
        '&:focus-within': { boxShadow: '0 0 0 1px $colors$blue9' },
      }}
    >
      <Radio indicatorSize="3" value="default3">
        {''}
      </Radio>
      <Typography>Option 3</Typography>
    </Flex>
  </RadioGroup>
);
