import { AutoLayout, Container as ContainerBase } from '../src';
import * as React from 'react';

export default {
  title: 'Components/Layout/AutoLayout',
  component: AutoLayout,
};

const Container = (props: any) => (
  <ContainerBase centerContent css={{ boxSize: '$32', bg: '$solid', color: '$bg' }}>
    {props.children}
  </ContainerBase>
);

export const Default = () => (
  <AutoLayout css={{ gap: '$8' }}>
    <Container>1</Container>
    <Container>2</Container>
    <Container>3</Container>
  </AutoLayout>
);

export const Vertical = () => (
  <AutoLayout direction="vertical" css={{ gap: '$8' }}>
    <Container>1</Container>
    <Container>2</Container>
    <Container>3</Container>
  </AutoLayout>
);

export const DistributionSpaced = () => (
  <AutoLayout distribution="space-between" css={{ gap: '$8' }}>
    <Container>1</Container>
    <Container>2</Container>
    <Container>3</Container>
  </AutoLayout>
);

export const DistributionPacked = () => (
  <AutoLayout distribution="packed" css={{ gap: '$8' }}>
    <Container>1</Container>
    <Container>2</Container>
    <Container>3</Container>
  </AutoLayout>
);

export const RowReverse = () => (
  <AutoLayout reversed css={{ gap: '$8' }}>
    <Container>1</Container>
    <Container>2</Container>
    <Container>3</Container>
  </AutoLayout>
);

export const ColumnReverse = () => (
  <AutoLayout direction="vertical" reversed css={{ gap: '$8' }}>
    <Container>1</Container>
    <Container>2</Container>
    <Container>3</Container>
  </AutoLayout>
);
