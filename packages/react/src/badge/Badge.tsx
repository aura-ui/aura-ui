import * as React from 'react';
import { styled, ComponentProps } from '../theme';
import { ColorScheme, getContrastingColor } from '../utils';

type StyledBadgeProps = ComponentProps<typeof StyledBadge>;

export const StyledBadge = styled('span', {
  alignSelf: 'start',
  alignItems: 'center',
  display: 'inline-flex',
  br: '$2',

  $$subtleBg: '$colors$slate3',
  $$subtleColor: '$colors$slate11',
  $$solidBg: '$colors$slate9',
  $$solidColor: 'white',
  $$border: '$colors$slate6',

  variants: {
    variant: {
      subtle: {
        backgroundColor: '$$subtleBg',
        color: '$$subtleColor',
      },
      outline: {
        boxShadow: '0 0 0 1px $$border',
        color: '$$subtleColor',
      },
      solid: {
        backgroundColor: '$$solidBg',
        color: '$$solidColor',
      },
    },
    size: {
      1: {
        fontSize: '$1',
        lineHeight: '$1',
        py: '$1',
        px: '$2',
        gap: '$1',

        '& svg': {
          size: '$3',
        },
      },
      2: {
        fontSize: '$2',
        lineHeight: '$2',
        py: '$1',
        px: '$2',
        gap: '$1',

        '& svg': {
          size: '$4',
        },
      },
      3: {
        fontSize: '$3',
        lineHeight: '$3',
        py: '$1',
        px: '$3',
        gap: '$1',

        '& svg': {
          size: '$4',
        },
      },
    },
    weight: {
      1: {
        fontWeight: '$4',
      },
      2: {
        fontWeight: '$5',
      },
      3: {
        fontWeight: '$6',
      },
    },
    allCaps: {
      true: {
        textTransform: 'uppercase',
      },
    },
    border: {
      true: {},
    },
    pill: {
      true: {
        br: '$pill',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'subtle',
      border: true,
      css: {
        backgroundColor: '$$subtleBg',
        boxShadow: 'inset 0 0 0 1px $$border',
      },
    },
  ],

  defaultVariants: {
    variant: 'subtle',
    size: '2',
  },
});

interface BadgeProps extends StyledBadgeProps {
  colorScheme?: ColorScheme;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ colorScheme = 'slate', children, css, ...rest }, ref) => {
    return (
      <StyledBadge
        ref={ref}
        css={{
          $$subtleBg: `$colors$${colorScheme}3`,
          $$subtleColor: `$colors$${colorScheme}11`,
          $$solidBg: `$colors$${colorScheme}9`,
          $$solidColor: getContrastingColor(colorScheme),
          $$border: `$colors$${colorScheme}6`,
          ...css,
        }}
        {...rest}
      >
        {children}
      </StyledBadge>
    );
  }
);
