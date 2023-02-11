import { styled, ComponentProps } from '../theme';

import * as SwitchPrimitive from '@radix-ui/react-switch';

export type SwitchProps = ComponentProps<typeof SwitchPrimitive.Root>;

export const Switch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  backgroundColor: '$slate8',
  borderRadius: '9999px',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&[data-state="checked"]': { backgroundColor: '$blue9' },

  '&:focus-visible': {
    boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
  },

  variants: {
    size: {
      1: {
        width: 28,
        height: 16,

        '& span': {
          size: '$3',
          transform: 'translateX(2px)',
          '&[data-state="checked"]': { transform: 'translateX(14px)' },
        },
      },
      2: {
        width: 36,
        height: 20,

        '& span': {
          size: '$4',
          transform: 'translateX(2px)',
          '&[data-state="checked"]': { transform: 'translateX(18px)' },
        },
      },
      3: {
        width: 44,
        height: 24,

        '& span': {
          size: '$5',
          transform: 'translateX(2px)',
          '&[data-state="checked"]': { transform: 'translateX(22px)' },
        },
      },
    },
  },

  defaultVariants: {
    size: '2',
  },
});

export const SwitchThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  backgroundColor: 'white',
  borderRadius: '9999px',
  transition: 'transform 100ms',
  willChange: 'transform',
});
