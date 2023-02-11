import * as React from 'react';
import { styled, ComponentProps } from '../theme';
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../utils';

type BaseProps = ComponentProps<typeof Base>;

/**
 * Grid is a layout component with a default property of ```display: grid```.
 * It renders a HTML div element by default.
 */
export const Base = styled('div', {
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

export interface ExtendedProps extends BaseProps {
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

type GridProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, ExtendedProps>;

type GridComponent = <C extends React.ElementType = typeof Base>(
  props: GridProps<C>
) => React.ReactElement | null;

export const Grid: GridComponent = React.forwardRef(
  <C extends React.ElementType = typeof Base>(
    {
      css,
      as,
      templateColumns,
      templateRows,
      columnSpan,
      rowSpan,
      autoFlow,
      autoRows,
      autoColumns,
      gapX,
      gapY,
      children,
      ...rest
    }: GridProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || Base;
    return (
      <Component
        as={as}
        ref={ref}
        css={{
          gridTemplateColumns: templateColumns,
          gridTemplateRows: templateRows,
          gridColumn: columnSpan,
          gridRow: rowSpan,
          gridAutoFlow: autoFlow,
          gridAutoColumns: autoColumns,
          gridAutoRows: autoRows,
          rowGap: gapX,
          columnGap: gapY,
          ...css,
        }}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);
