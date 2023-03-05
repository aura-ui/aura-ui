import * as React from 'react';
import { styled, ComponentProps } from '../theme';
import { ColorScheme, PolymorphicComponentPropsWithRef, PolymorphicRef } from '../utils';

type StyledTypographyProps = ComponentProps<typeof StyledTypography>;

const StyledTypography = styled('p', {
  // resets
  margin: 0,
  fontVariantNumeric: 'tabular-nums',

  // custom
  fontFamily: 'inherit',
  $$loColor: '$colors$slate11',
  $$hiColor: '$colors$slate12',

  variants: {
    size: {
      1: {
        fontSize: '$1',
        lineHeight: '$1',
      },
      2: {
        fontSize: '$2',
        lineHeight: '$2',
      },
      3: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      4: {
        fontSize: '$4',
        lineHeight: '$4',
      },
      5: {
        fontSize: '$5',
        lineHeight: '$5',
      },
      6: {
        fontSize: '$6',
        lineHeight: '$6',
      },
      7: {
        fontSize: '$7',
        lineHeight: '$7',
      },
      8: {
        fontSize: '$8',
        lineHeight: '$8',
      },
      9: {
        fontSize: '$9',
        lineHeight: '$9',
      },
      10: {
        fontSize: '$10',
        lineHeight: '$10',
      },
      11: {
        fontSize: '$11',
        lineHeight: '$11',
      },
      12: {
        fontSize: '$12',
        lineHeight: '$12',
      },
    },
    weight: {
      1: {
        fontWeight: '$1',
      },
      2: {
        fontWeight: '$2',
      },
      3: {
        fontWeight: '$3',
      },
      4: {
        fontWeight: '$4',
      },
      5: {
        fontWeight: '$5',
      },
      6: {
        fontWeight: '$6',
      },
      7: {
        fontWeight: '$7',
      },
      8: {
        fontWeight: '$8',
      },
      9: {
        fontWeight: '$9',
      },
    },
    contrast: {
      loContrast: {
        color: '$$loColor',
      },
      hiContrast: {
        color: '$$hiColor',
      },
    },
    ellipsis: {
      single: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
      multi: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
      },
    },
  },

  defaultVariants: {
    size: '3',
    weight: '4',
    contrast: 'loContrast',
  },
});

export interface TypographyExtendedProps extends StyledTypographyProps {
  colorScheme?: ColorScheme;
}

type TypographyProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  TypographyExtendedProps
>;

type TypographyComponent = <C extends React.ElementType = typeof StyledTypography>(
  props: TypographyProps<C>
) => React.ReactElement | null;

export const Typography: TypographyComponent = React.forwardRef(
  <C extends React.ElementType = typeof StyledTypography>(
    { as, colorScheme, css, ...rest }: TypographyProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    return (
      <StyledTypography
        as={as}
        ref={ref}
        css={{
          $$loColor: `$colors$${colorScheme}11`,
          $$hiColor: `$colors$${colorScheme}12`,
          ...css,
        }}
        {...rest}
      />
    );
  }
);
