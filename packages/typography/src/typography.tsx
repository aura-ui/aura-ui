import * as React from 'react';
import { css, ComponentProps, VariantProps, styled, CSS } from '@zephyr-ui/theme';

const text = css({
  // resets
  margin: 0,

  // styles
  fontFamily: '$body',
  color: '$textHiContrast',

  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },
      '5xl': {
        fontSize: '$5xl',
        lineHeight: '$5xl',
      },
      '6xl': {
        fontSize: '$6xl',
        lineHeight: '$6xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export type TextProps = ComponentProps<typeof Text>;
export type TextVariants = VariantProps<typeof Text>;
export const Text = styled('span', text);

export type ParagraphProps = ComponentProps<typeof Paragraph>;
export type ParagraphVariants = VariantProps<typeof Paragraph>;
export const Paragraph = styled('p', text);

export type QuoteProps = ComponentProps<typeof Quote>;
export type QuoteVariants = VariantProps<typeof Quote>;
export const Quote = styled('q', text);

export type SmallProps = ComponentProps<typeof Small>;
export type SmallVariants = VariantProps<typeof Small>;
export const Small = styled('small', text);

export type DeletedProps = ComponentProps<typeof Deleted>;
export type DeletedVariants = VariantProps<typeof Deleted>;
export const Deleted = styled('del', text);

export type CodeProps = ComponentProps<typeof Code>;
export type CodeVariants = VariantProps<typeof Code>;
export const Code = styled('code', text, { backgroundColor: '$bgSubtle' });

export const Ins = styled('ins', text, { textDecoration: 'none' });
export const Em = styled('em', text, { fontStyle: 'italic' });
export const Strong = styled('strong', text, { fontWeight: '$bold' });
export const Mark = styled('mark', text, { backgroundColor: '$yellow3' });

export type HeadingVariants = VariantProps<typeof heading>;

const heading = css({
  // resets
  margin: 0,

  // styles
  fontFamily: '$body',
  fontWeight: '$bold',
  color: '$textHiContrast',

  variants: {
    size: {
      xs: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      sm: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      md: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      lg: {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      xl: {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
      '2xl': {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },
      '3xl': {
        fontSize: '$5xl',
        lineHeight: '$5xl',
      },
      '4xl': {
        fontSize: '$6xl',
        lineHeight: '$6xl',
      },
      '5xl': {
        fontSize: '$7xl',
        lineHeight: '$7xl',
      },
      '6xl': {
        fontSize: '$8xl',
        lineHeight: '$8xl',
      },
    },
  },

  defaultVariants: {
    size: '4xl',
  },
});

export interface HeadingProps extends HeadingVariants {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: string;
  css?: CSS;
}

export const Heading = ({ as, children, ...props }: HeadingProps) => {
  if (as === 'h1') {
    return <h1 className={heading({ ...props, css: { ...props.css } })}>{children}</h1>;
  }
  if (as === 'h3') {
    return <h3 className={heading({ ...props, css: { ...props.css } })}>{children}</h3>;
  }
  if (as === 'h4') {
    return <h4 className={heading({ ...props, css: { ...props.css } })}>{children}</h4>;
  }
  if (as === 'h5') {
    return <h5 className={heading({ ...props, css: { ...props.css } })}>{children}</h5>;
  }
  if (as === 'h6') {
    return <h6 className={heading({ ...props, css: { ...props.css } })}>{children}</h6>;
  }
  return <h2 className={heading({ ...props, css: { ...props.css } })}>{children}</h2>;
};
