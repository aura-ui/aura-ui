import { Container, Flex } from '../';
import * as React from 'react';
import { styled } from '../../theme';

export default {
  title: 'Components/Layout/Flex',
  component: Flex,
};

const StyledContainer = styled(Container, {
  backgroundColor: '$violet9',
  color: 'white',
  size: '$30',
  br: '$2',

  defaultVariants: {
    centerContent: true,
  },
});

export const Default = () => (
  <Flex css={{ gap: '$4' }}>
    <StyledContainer>1</StyledContainer>
    <StyledContainer>2</StyledContainer>
  </Flex>
);

export const Column = () => (
  <Flex direction="column" css={{ gap: '$4' }}>
    <StyledContainer>1</StyledContainer>
    <StyledContainer>2</StyledContainer>
  </Flex>
);

export const SpaceBetween = () => (
  <Flex justify="between">
    <StyledContainer>1</StyledContainer>
    <StyledContainer>2</StyledContainer>
  </Flex>
);

export const RowReverse = () => (
  <Flex css={{ gap: '$4', justifyContent: 'start' }} direction="rowReverse">
    <StyledContainer>1</StyledContainer>
    <StyledContainer>2</StyledContainer>
  </Flex>
);

export const ColumnReverse = () => (
  <Flex css={{ gap: '$4' }} direction="columnReverse">
    <StyledContainer>1</StyledContainer>
    <StyledContainer>2</StyledContainer>
  </Flex>
);
