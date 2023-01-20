import { styled, keyframes } from '../theme';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export const DropdownMenuItemSlot = styled('div', {
  marginLeft: 'auto',
  color: 'inherit',
  '[data-highlighted] > &': { color: 'inherit' },
  '[data-disabled] &': { color: '$slate8' },
});

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 180,
  backgroundColor: '$slate1',
  br: '$3',
  border: '1px solid $slate6',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  p: '$2',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },

  variants: {
    fontSize: {
      1: {
        '& div': {
          fontSize: '$1',
        },

        '& svg': {
          size: '$3',
        },
      },
      2: {
        '& div': {
          fontSize: '$2',
        },

        '& svg': {
          size: '$4',
        },
      },
      3: {
        '& div': {
          fontSize: '$3',
        },

        '& svg': {
          size: '$4',
        },
      },
    },
  },

  defaultVariants: {
    fontSize: '2',
  },
});

export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, {
  unset: 'all',
  outline: 'none',
  fontSize: '$2',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  whiteSpace: 'nowrap',
  py: '$2',
  px: '$7 ',
  br: '$2',
  gap: '$5',
  position: 'relative',
  userSelect: 'none',
  color: '$slate11',

  '&:focus:not(:focus-visible)': {
    outline: 'none',
  },

  variants: {
    color: {
      slate: {
        '&[data-disabled]': {
          color: '$slate8',
          pointerEvents: 'none',
        },

        '&[data-highlighted]': {
          backgroundColor: '$slate4',
          color: '$slate12',
        },
      },
      red: {
        '&[data-disabled]': {
          color: '$red8',
          pointerEvents: 'none',
        },

        '&[data-highlighted]': {
          backgroundColor: '$red4',
          color: '$red11',
        },
      },
    },
  },

  defaultVariants: {
    color: 'slate',
  },
});

export const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  mx: '-$3',
  backgroundColor: '$slate6',
});

export const DropdownMenuSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, DropdownMenuItem, {
  '&[data-state="open"]': {
    backgroundColor: '$slate4',
    color: '$slate11',
  },
});

export const DropdownMenuItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: '$1',
  minWidth: '$5',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, {
  pl: '$7',
  fontSize: '$1',
  lineHeight: '$1',
  color: '$slate9',
});

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuTrigger = styled(DropdownMenuPrimitive.Trigger);
export const DropdownMenuCheckboxItem = styled(
  DropdownMenuPrimitive.CheckboxItem,
  DropdownMenuItem
);
export const DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup);
export const DropdownMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem, DropdownMenuItem);
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubContent = styled(DropdownMenuPrimitive.SubContent, DropdownMenuContent);
