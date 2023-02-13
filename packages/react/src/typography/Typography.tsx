import * as React from 'react';
import { styled, ComponentProps } from '../theme';
import { ColorScheme } from '../utils';

type TypographyBaseProps = ComponentProps<typeof TypographyBase>;

const TypographyBase = styled('p', {
  // resets
  margin: 0,

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

export interface TypographyProps extends TypographyBaseProps {
  colorScheme?: ColorScheme;
}

export const Typography = ({ colorScheme = 'slate', css, ...rest }: TypographyProps) => {
  return (
    <TypographyBase
      css={{
        $$loColor: `$colors$${colorScheme}11`,
        $$hiColor: `$colors$${colorScheme}12`,
        ...css,
      }}
      {...rest}
    />
  );
};
