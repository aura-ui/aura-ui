import * as React from 'react';
import { styled, ComponentProps, VariantProps } from '@aura-ui/theme';

type StyledGridProps = ComponentProps<typeof StyledGrid>;

export interface GridProps extends StyledGridProps {
  children: React.ReactNode;
  /**
   * Specifies the columns in a grid layout.
   */
  templateColumns?: string;
  /**
   * Specifies the rows in a grid layout.
   */
  templateRows?: string;
  /**
   * Specifies how items are size and placed across grid columns.
   */
  columnSpan?: string;
  /**
   * Specifies how items are size and placed across grid rows.
   */
  rowSpan?: string;
  /**
   * Specifies how items are auto-placed within a grid.
   */
  autoFlow?: string;
  /**
   * Specifies the size of implicitly-created grid columns.
   */
  autoColumns?: string;
  /**
   * Specifies the size of implicitly-created grid rows.
   */
  autoRows?: string;
  /**
   * Specifies the size of the gutters between rows.
   */
  gapX?: string | number;
  /**
   * Specifies the size of the gutters between columns.
   */
  gapY?: string | number;
}

/**
 * Grid is a layout component with a default property of ```display: grid```.
 * It renders a HTML div element by default.
 */
export const StyledGrid = styled('div', {
  display: 'grid',

  variants: {
    layout: {
      pancakeStack: {
        gridTemplateRows: 'auto 1fr auto',
      },
      holyGrail: {
        gridTemplate: 'auto 1fr auto / auto 1fr auto',

        '& header': {
          gridColumn: '1 / 4',
        },
        '.left-side': {
          gridColumn: '1 / 2',
        },
        '& main': {
          gridColumn: '2 / 3',
        },
        '.right-side': {
          gridColumn: '3 / 4',
        },
        '& footer': {
          gridColumn: '1 / 4',
        },
      },
    },
    gap: {
      1: {
        gridGap: '$1',
      },
      2: {
        gridGap: '$2',
      },
      3: {
        gridGap: '$3',
      },
      4: {
        gridGap: '$4',
      },
      5: {
        gridGap: '$5',
      },
      6: {
        gridGap: '$6',
      },
      7: {
        gridGap: '$7',
      },
      8: {
        gridGap: '$8',
      },
      9: {
        gridGap: '$9',
      },
      10: {
        gridGap: '$10',
      },
      20: {
        gridGap: '$20',
      },
    },
  },
});

export const Grid = ({ children, css, ...props }: GridProps) => {
  return (
    <StyledGrid
      css={{
        gridTemplateColumns: props.templateColumns,
        gridTemplateRows: props.templateRows,
        gridColumn: props.columnSpan,
        gridRow: props.rowSpan,
        gridAutoFlow: props.autoFlow,
        gridAutoColumns: props.autoColumns,
        gridAutoRows: props.autoRows,
        rowGap: props.gapX,
        columnGap: props.gapY,
        ...css,
      }}
      {...props}
    >
      {children}
    </StyledGrid>
  );
};
