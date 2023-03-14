import * as React from 'react';
import { styled, ComponentProps, CSS, ColorScheme } from '../theme';
import { VisuallyHidden } from '../visually-hidden';

type StyledLinkProps = ComponentProps<typeof StyledLink>;

const StyledLink = styled('a', {
  pb: 1,
  display: 'inline',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  textDecoration: 'none',
  position: 'relative',
  width: 'max-content',
  alignSelf: 'center',
  flexShrink: 0,
  outline: 'none',

  // default local color tokens
  $$loColor: '$colors$blue10',
  $$hiColor: '$colors$blue11',

  // default local motion tokens
  $$duration: '400ms',
  $$timingFunction: 'cubic-bezier(.77,0,.175,1)',
  $$delay: '',

  '&:focus': {
    outlineOffset: 4,
    outline: '2px solid $colors$blue8',
  },

  variants: {
    variant: {
      noUnderline: {},
      static: {
        '&:after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          transform: 'scaleX(1)',
          height: 1,
          bottom: 0,
          left: 0,
          backgroundColor: 'currentColor',
        },
      },
      underlineOnHover: {
        '&:after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          transform: 'scaleX(0)',
          height: 1,
          bottom: 0,
          left: 0,
          backgroundColor: 'currentColor',
        },

        '&:hover::after': {
          transform: 'scaleX(1)',
        },
      },
      removeUnderlineOnHover: {
        '&:after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          transform: 'scaleX(1)',
          height: 1,
          bottom: 0,
          left: 0,
          backgroundColor: 'currentColor',
        },

        '&:hover::after': {
          transform: 'scaleX(0)',
        },
      },
    },
    // experimental variant
    motionPreset: {
      slideStartEnd: {
        '&:after': {
          transformOrigin: 'bottom left',
          transition: 'transform $$duration $$timingFunction $$delay',
        },
        '&:hover::after': {
          transformOrigin: 'bottom right',
        },
      },
      slideEndStart: {
        '&:after': {
          transformOrigin: 'bottom right',
          transition: 'transform $$duration $$timingFunction $$delay',
        },
        '&:hover::after': {
          transformOrigin: 'bottom left',
        },
      },
      fadeIn: {
        '&:after': {
          opacity: 0,
          transition: 'opacity $$duration $$timingFunction $$delay',
        },
        '&:hover::after': {
          opacity: 1,
        },
      },
      fadeOut: {
        '&:after': {
          opacity: 1,
          transition: 'opacity $$duration $$timingFunction $$delay',
        },
        '&:hover::after': {
          opacity: 0,
        },
      },
    },
    contrast: {
      lo: {
        color: '$$loColor',

        '&:hover': {
          color: '$$hiColor',
        },
      },
      hi: {
        color: '$$hiColor',
      },
    },
  },
  compoundVariants: [
    {
      motionPreset: 'slideStartEnd',
      variant: 'static',
      css: {
        '&:hover::after': {
          transform: 'scaleX(0)',
        },
      },
    },
    {
      motionPreset: 'slideEndStart',
      variant: 'static',
      css: {
        '&:hover::after': {
          transform: 'scaleX(0)',
        },
      },
    },
  ],

  defaultVariants: {
    contrast: 'lo',
    variant: 'static',
  },
});

export interface LinkProps extends StyledLinkProps {
  colorScheme?: ColorScheme;
  external?: boolean;
  motion?: {
    preset?: LinkProps['motionPreset'];
    duration?: CSS['transitionDuration'];
    timingFunction?: CSS['transitionTimingFunction'];
    delay?: CSS['transitionDelay'];
  };
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      motion,
      colorScheme = 'blue',
      css,
      rel: _rel,
      target: _target,
      external = false,
      href,
      children,
      ...rest
    }: LinkProps,
    ref
  ) => {
    const checkExternal = (target: string) => (external ? target : undefined);
    const target = _target ? _target : checkExternal('_blank');
    const rel = _rel ? _rel : checkExternal('noopener');

    const duration =
      typeof motion?.duration === 'number' ? String(motion.duration) + 'ms' : motion?.duration;

    const delay = typeof motion?.delay === 'number' ? String(motion.delay) + 'ms' : motion?.delay;

    return (
      <StyledLink
        css={{
          // local color tokens
          $$loColor: `$colors$${colorScheme}10`,
          $$hiColor: colorScheme === 'slate' ? '$colors$slate12' : `$colors$${colorScheme}11`,

          // local motion properties
          $$duration: duration ? duration : '400ms',
          $$timingFunction: motion?.timingFunction
            ? motion.timingFunction
            : 'cubic-bezier(.77,0,.175,1)',
          $$delay: delay ? delay : undefined,
          ...css,
        }}
        motionPreset={motion?.preset}
        href={href}
        target={target}
        rel={rel}
        ref={ref}
        {...rest}
      >
        {children}
        {target === '_blank' && <VisuallyHidden>Opens in a new tab</VisuallyHidden>}
      </StyledLink>
    );
  }
);
