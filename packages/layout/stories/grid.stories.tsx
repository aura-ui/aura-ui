import { Container, Box, Grid } from '../src';
import * as React from 'react';
import { styled } from '@aura-ui/theme';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
};

const gridItems = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
  {
    number: 4,
  },
  {
    number: 5,
  },
  {
    number: 6,
  },
  {
    number: 7,
  },
  {
    number: 8,
  },
  {
    number: 9,
  },
];

const GridItem = styled(Container, {
  backgroundColor: '$violet9',
  color: 'white',
  size: '$20',
  br: '$2',

  defaultVariants: {
    centerContent: true,
  },
});

export const DefaultWithItems = () => (
  <Grid css={{ gridGap: '$4', backgroundColor: '$slate1' }}>
    {gridItems.slice(0, 3).map((item) => (
      <GridItem>{item.number}</GridItem>
    ))}
  </Grid>
);

export const TemplateColumns = () => (
  <Grid gapY="$10" gapX="$10" templateColumns="repeat(4, minmax(0, 1fr))" css={{ maxW: '$100' }}>
    {gridItems.map((item) => (
      <GridItem>{item.number}</GridItem>
    ))}
  </Grid>
);

export const TemplateRows = () => (
  <Grid
    gapY="$4"
    gapX="$4"
    templateRows="repeat(4, minmax(0, 1fr))"
    autoFlow="column"
    css={{ maxW: '$60' }}
  >
    {gridItems.map((item) => (
      <GridItem>{item.number}</GridItem>
    ))}
  </Grid>
);

export const ColumnSpan = () => (
  <Grid gap="4" templateColumns="repeat(3, minmax(0, 1fr))" css={{ maxW: '$80' }}>
    {gridItems.slice(0, 7).map((item, idx) => (
      <Box
        css={{
          display: 'grid',
          placeItems: 'center',
          gridColumn: idx === 1 || idx === 5 ? 'span 2 / span 2' : 'auto',
          height: '$16',
          backgroundColor: idx === 1 || idx === 5 ? '$violet7' : '$violet9',
          color: idx === 1 || idx === 5 ? '$violet12' : 'white',
          br: '$2',
        }}
      >
        {item.number}
      </Box>
    ))}
  </Grid>
);

const RowSpanItem = styled('div', {
  display: 'grid',
  placeItems: 'center',
  backgroundColor: '$violet9',
  color: 'white',
  br: '$2',
  minHeight: '$20',
});

export const RowSpan = () => (
  <Grid
    gapY="$4"
    gapX="$4"
    templateRows="repeat(3, minmax(0, 1fr))"
    autoFlow="column"
    css={{ maxW: '$100' }}
  >
    <RowSpanItem
      css={{
        gridRow: 'span 3 / span 3',
      }}
    >
      1
    </RowSpanItem>
    <RowSpanItem
      css={{
        gridColumn: 'span 2 / span 2',
        opacity: 0.9,
      }}
    >
      2
    </RowSpanItem>
    <RowSpanItem
      css={{
        gridRow: 'span 2 / span 2',
        gridColumn: 'span 2 / span 2',
        opacity: 0.75,
      }}
    >
      3
    </RowSpanItem>
  </Grid>
);

export const PancakeStack = () => (
  <Grid css={{ height: '100vh' }} layout="pancakeStack">
    <Container size="fullWidth" css={{ backgroundColor: '$violet9', color: 'white', p: '$5' }}>
      Header
    </Container>
    <Container size="fullWidth" css={{ backgroundColor: '$blue9', color: 'white', p: '$5' }}>
      Main
    </Container>
    <Container size="fullWidth" css={{ backgroundColor: '$violet9', color: 'white', p: '$5' }}>
      Footer
    </Container>
  </Grid>
);

const HolyGrailGridItem = styled('div', {
  color: 'white',
  p: '$5',
});

export const HolyGrail = () => (
  <Grid css={{ height: '100vh', br: '$2', overflow: 'hidden' }} layout="holyGrail">
    <HolyGrailGridItem css={{ backgroundColor: '$violet9' }} as="header">
      Header
    </HolyGrailGridItem>
    <HolyGrailGridItem css={{ backgroundColor: '$plum9' }} className="left-side">
      Left Sidebar
    </HolyGrailGridItem>
    <HolyGrailGridItem css={{ backgroundColor: '$blue9' }} as="main">
      Main
    </HolyGrailGridItem>
    <HolyGrailGridItem css={{ backgroundColor: '$plum9' }} className="right-side">
      Right Sidebar
    </HolyGrailGridItem>
    <HolyGrailGridItem css={{ backgroundColor: '$violet9' }} as="footer">
      Footer
    </HolyGrailGridItem>
  </Grid>
);
