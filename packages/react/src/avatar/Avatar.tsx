import * as React from 'react';
import { styled, ComponentProps, css, ColorScheme, getContrastingColor } from '../theme';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { Flex } from '../layout';
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

const avatarFallbackStyles = css({
  userSelect: 'none',
  width: '100%',
  height: '100%',
  fontFamily: 'inherit',

  $$subtleBg: '$colors$slate3',
  $$subtleColor: '$colors$slate11',
  $$subtleBgHover: '$colors$slate4',
  $$subtleBgActive: '$colors$slate5',

  $$solidBg: '$colors$slate9',
  $$solidBgHover: '$colors$slate10',
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
    interactive: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variant: 'subtle',
      interactive: true,
      css: {
        '&:hover': {
          backgroundColor: '$$subtleBgHover',
        },
        '&:active': {
          backgroundColor: '$$subtleBgActive',
        },
      },
    },
    {
      variant: 'solid',
      interactive: true,
      css: {
        '&:hover': {
          backgroundColor: '$$solidBgHover',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'subtle',
  },
});

const StyledFallback = styled(AvatarPrimitive.Fallback, avatarFallbackStyles);

export const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ colorScheme = 'slate', css, children, ...rest }, ref) => {
    return (
      <StyledFallback
        ref={ref}
        data-avatar="fallback"
        css={{
          $$subtleBg: `$colors$${colorScheme}3`,
          $$subtleColor: `$colors$${colorScheme}11`,
          $$subtleBgHover: `$colors$${colorScheme}4`,
          $$subtleBgActive: `$colors$${colorScheme}5`,

          $$solidBg: `$colors$${colorScheme}9`,
          $$solidBgHover: `$colors$${colorScheme}10`,
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

export type AvatarGroupProps = ComponentProps<typeof StyledAvatarGroup> &
  AvatarProps & {
    limit?: number;
    border?: boolean;
    borderColor?: string;
    borderWidth?: string | number;
    indicator?: boolean;
    indicatorVariant?: AvatarFallbackProps['variant'];
    indicatorColorScheme?: ColorScheme;
    indicatorOnClick?: () => void;
    indicatorInteractive?: boolean;
  };

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      children,
      border,
      borderColor = '$colors$slate1',
      borderWidth = 2,
      indicator = true,
      indicatorVariant = 'subtle',
      indicatorColorScheme = 'slate',
      indicatorInteractive,
      indicatorOnClick,
      limit,
      size,
      stacking = 'firstOnTop',
      ...rest
    },
    ref
  ) => {
    const validChildren = getValidChildren(children);

    const childrenWithinLimit = limit ? validChildren.slice(0, limit) : validChildren;

    const reversedChildren =
      stacking === 'firstOnTop' ? childrenWithinLimit.reverse() : childrenWithinLimit;

    const _children = reversedChildren.map((child, index) => {
      const firstAvatar = index === 0;

      const _borderWidth =
        typeof borderWidth === 'number' ? String(borderWidth) + 'px' : borderWidth;

      const childProps = {
        size: size,
        css: {
          mr: firstAvatar ? 0 : '$3',
          boxShadow: `0 0 0 ${_borderWidth} ${borderColor}`,
        },
      };

      return React.cloneElement(child, compact(childProps));
    });

    return (
      <StyledAvatarGroup stacking={stacking} role="group" ref={ref} {...rest}>
        {stacking === 'firstOnTop' && indicator && limit && limit < validChildren.length && (
          <Avatar size={size} data-avatar="fallback">
            <StyledFallback
              as={indicatorInteractive ? 'button' : undefined}
              onClick={indicatorOnClick}
              interactive={indicatorInteractive}
              variant={indicatorVariant}
              css={{
                border: 'none',
                $$subtleBg: `$colors$${indicatorColorScheme}3`,
                $$subtleColor: `$colors$${indicatorColorScheme}11`,
                $$subtleBgHover: `$colors$${indicatorColorScheme}4`,
                $$subtleBgActive: `$colors$${indicatorColorScheme}5`,

                $$solidBg: `$colors$${indicatorColorScheme}9`,
                $$solidBgHover: `$colors$${indicatorColorScheme}10`,
                $$solidColor: getContrastingColor(indicatorColorScheme),
              }}
            >
              +{validChildren.length - limit}
            </StyledFallback>
          </Avatar>
        )}
        {_children}
        {stacking === 'lastOnTop' && indicator && limit && limit < validChildren.length && (
          <Avatar size={size} data-avatar="fallback">
            <StyledFallback
              as={indicatorInteractive ? 'button' : undefined}
              onClick={indicatorOnClick}
              interactive={indicatorInteractive}
              variant={indicatorVariant}
              css={{
                border: 'none',
                $$subtleBg: `$colors$${indicatorColorScheme}3`,
                $$subtleColor: `$colors$${indicatorColorScheme}11`,
                $$subtleBgHover: `$colors$${indicatorColorScheme}4`,
                $$subtleBgActive: `$colors$${indicatorColorScheme}5`,

                $$solidBg: `$colors$${indicatorColorScheme}9`,
                $$solidBgHover: `$colors$${indicatorColorScheme}10`,
                $$solidColor: getContrastingColor(indicatorColorScheme),
              }}
            >
              +{validChildren.length - limit}
            </StyledFallback>
          </Avatar>
        )}
      </StyledAvatarGroup>
    );
  }
);
