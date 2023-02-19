import * as React from 'react';
import { styled, ComponentProps } from '../theme';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ColorScheme, getContrastingColor } from '../utils';
import { Center, Flex } from '../layout';
import { getValidChildren } from '../utils/react-children';
import { compact } from '../utils/object-utils';

export type AvatarProps = ComponentProps<typeof Avatar>;

export const Avatar = styled(AvatarPrimitive.Root, {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',

  variants: {
    size: {
      1: {
        size: '$5',
        '& span[data-avatar="fallback"]': {
          fontSize: '$1',
          lineHeight: '$1',
        },
      },
      2: {
        size: '$6',
        '& span[data-avatar="fallback"]': {
          fontSize: '$1',
          lineHeight: '$1',
        },
      },
      3: {
        size: '$7',
        '& span[data-avatar="fallback"]': {
          fontSize: '$2',
          lineHeight: '$2',
        },
      },
      4: {
        size: '$10',
        '& span[data-avatar="fallback"]': {
          fontSize: '$2',
          lineHeight: '$2',
        },
      },
      5: {
        size: '$16',
        '& span[data-avatar="fallback"]': {
          fontSize: '$5',
          lineHeight: '$5',
        },
      },
      6: {
        size: '$20',
        '& span[data-avatar="fallback"]': {
          fontSize: '$6',
          lineHeight: '$6',
        },
      },
      7: {
        size: 96,
        '& span[data-avatar="fallback"]': {
          fontSize: '$7',
          lineHeight: '$7',
        },
      },
    },
    shape: {
      round: {
        br: '$round',
      },
      square: {
        br: 0,
      },
    },
  },

  defaultVariants: {
    size: '4',
    shape: 'round',
  },
});

export const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

type AvatarFallbackProps = ComponentProps<typeof StyledFallback> & {
  colorScheme?: ColorScheme;
};

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',

  $$subtleBg: '$colors$slate3',
  $$subtleColor: '$colors$slate11',

  $$solidBg: '$colors$slate9',
  $$solidColor: 'white',

  variants: {
    variant: {
      subtle: {
        backgroundColor: '$$subtleBg',
        color: '$$subtleColor',
        display: 'grid',
        placeItems: 'center',
      },
      solid: {
        backgroundColor: '$$solidBg',
        color: '$$solidColor',
        display: 'grid',
        placeItems: 'center',
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
});

export const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ colorScheme = 'slate', css, children, ...rest }, ref) => {
    return (
      <StyledFallback
        ref={ref}
        data-avatar="fallback"
        css={{
          $$subtleBg: `$colors$${colorScheme}3`,
          $$subtleColor: `$colors$${colorScheme}11`,

          $$solidBg: `$colors$${colorScheme}9`,
          $$solidColor: getContrastingColor(colorScheme),
          ...css,
        }}
        {...rest}
      >
        {children}
      </StyledFallback>
    );
  }
);

type AvatarGroupProps = ComponentProps<typeof StyledAvatarGroup> &
  AvatarProps & {
    limit?: number;
    border?: boolean;
    borderColor?: string;
  };

const StyledAvatarGroup = styled('div', Flex, {
  //resets
  m: 0,
  p: 0,

  variants: {
    stacking: {
      firstOnTop: {
        '& span': {
          '&:not(:first-of-type)': {
            mr: '-$3',
          },
        },
        justifyContent: 'flex-end',
        flexDirection: 'row-reverse',
      },
      lastOnTop: {
        '& span': {
          '&:not(:last-of-type)': {
            mr: '-$3',
          },
        },
      },
    },
  },

  defaultVariants: {
    stacking: 'firstOnTop',
  },
});

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    { children, border, borderColor = 'inherit', limit, size, stacking = 'firstOnTop', ...rest },
    ref
  ) => {
    const validChildren = getValidChildren(children);

    const childrenWithinLimit = limit ? validChildren.slice(0, limit) : validChildren;

    const reversedChildren = childrenWithinLimit.reverse();

    const _children = reversedChildren.map((child, index) => {
      const firstAvatar = index === 0;

      const childProps = {
        size: size,
        css: {
          mr: firstAvatar ? 0 : '$3',
          boxShadow: `0 0 0 3px $colors$slate1`,
        },
      };

      return React.cloneElement(child, compact(childProps));
    });

    // const _children = React.Children.map(reversedChildren, (child) => {
    //   return React.cloneElement(child as React.ReactElement<AvatarProps>, {
    //     css: { boxShadow: `0 0 0 3px $colors$slate1` },
    //     size: size,
    //   });
    // });
    return (
      <StyledAvatarGroup role="group" ref={ref} {...rest}>
        {stacking === 'firstOnTop' && limit && limit < validChildren.length && (
          <Avatar size={size} data-avatar="fallback">
            <AvatarFallback>+{validChildren.length - limit}</AvatarFallback>
          </Avatar>
        )}
        {_children}
        {stacking === 'lastOnTop' && limit && limit < validChildren.length && (
          <Avatar size={size} data-avatar="fallback">
            <AvatarFallback>+{validChildren.length - limit}</AvatarFallback>
          </Avatar>
        )}
      </StyledAvatarGroup>
    );
  }
);
