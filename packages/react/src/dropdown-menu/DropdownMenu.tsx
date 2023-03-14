import * as React from 'react';
import { styled, keyframes, ComponentProps, ColorScheme, getContrastingColor } from '../theme';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from '../checkbox/CheckIcon';
import { HorizontalLineIcon } from '../checkbox/HorizontalLineIcon';
import { DotIcon } from './DotIcon';
import { DotFilledIcon } from './DotFilledIcon';

export const DropdownMenuItemSlot = styled('div', {
  marginLeft: 'auto',
  color: '$slate11',
  '[data-highlighted] > &': { color: 'inherit' },
  '[data-disabled] &': { color: '$slate8' },
});

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(20px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-20px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-20px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(20px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledDropdownMenuContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 180,
  backgroundColor: '$slate1',
  br: '$3',
  border: '1px solid $slate6',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '200ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },

  $$accentSubtleBackground: '$colors$slate3',
  $$accentSubtleColor: '$colors$slate11',

  $$accentSolidBackground: '$colors$slate12',
  $$accentSolidColor: '$colors$slate1',

  variants: {
    variant: {
      comfortable: {
        p: '$1',
        gap: '$1',
      },
      compact: {
        gap: 0,
        px: 0,
        py: '$2',
        '& div[role=menuitem], div[role=menuitemcheckbox], div[role=menuitemradio]': {
          gap: '$2',
          br: 0,
        },
      },
    },
    accentVariant: {
      subtle: {
        '& div': {
          color: '$$accentSubtleColor',
          '&[data-highlighted]': {
            backgroundColor: '$$accentSubtleBackground',
            color: '$$accentSubtleColor',
          },
          '&[data-state="open"]': {
            backgroundColor: '$$accentSubtleBackground',
            color: '$$accentSubtleColor',
          },
        },
      },
      solid: {
        '& div': {
          color: '$slate12',
          '&[data-highlighted]': {
            backgroundColor: '$$accentSolidBackground',
            color: '$$accentSolidColor',
          },
          '&[data-state="open"]': {
            backgroundColor: '$$accentSubtleBackground',
            color: '$$accentSubtleColor',
          },
        },
      },
    },
    size: {
      1: {
        '& [role=menuitem], [role=menuitemcheckbox], [role=menuitemradio]': {
          fontSize: '$1',
        },
        '&:has([role=menuitemcheckbox])': {
          '& [role=menuitem], [role=menuitemcheckbox], [role=menuitemradio]': {
            px: '$5',
          },
        },

        '& svg': {
          size: '$3',
        },
      },
      2: {
        '& [role=menuitem], [role=menuitemcheckbox], [role=menuitemradio]': {
          fontSize: '$2',
        },
        '&:has([role=menuitemcheckbox])': {
          '& [role=menuitem], [role=menuitemcheckbox], [role=menuitemradio]': {
            px: '$5',
          },
        },

        '& svg': {
          size: '$4',
        },
      },
      3: {
        '& [role=menuitem], [role=menuitemcheckbox], [role=menuitemradio]': {
          fontSize: '$3',
        },
        '&:has([role=menuitemcheckbox])': {
          '& [role=menuitem], [role=menuitemcheckbox], [role=menuitemradio]': {
            px: '$5',
          },
        },

        '& svg': {
          size: '$4',
        },
      },
    },
    shadow: {
      1: {
        shadow: '$1',
      },
      2: {
        shadow: '$2',
      },
      3: {
        shadow: '$3',
      },
      4: {
        shadow: '$4',
      },
      5: {
        shadow: '$5',
      },
      6: {
        shadow: '$6',
      },
    },
  },

  defaultVariants: {
    size: '2',
    variant: 'comfortable',
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
  px: '$4 ',
  br: '$2',
  gap: '$5',
  // position: 'relative',
  userSelect: 'none',
  color: '$slate12',

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
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
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
  pl: '$3',
  fontSize: '$1',
  lineHeight: '$1',
  color: '$slate9',
});

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuTrigger = styled(DropdownMenuPrimitive.Trigger);
const StyledDropdownMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, DropdownMenuItem);
const StyledDropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup);

const StyledDropdownMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem, DropdownMenuItem);
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const StyledDropdownMenuSubContent = styled(
  DropdownMenuPrimitive.SubContent,
  StyledDropdownMenuContent
);

export type DropdownMenuContentProps = ComponentProps<typeof StyledDropdownMenuContent> & {
  portal?: boolean;
  arrow?: boolean;
  accent?: ColorScheme;
};

export const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ children, portal = true, arrow = false, accent = 'slate', css, ...props }, ref) => {
    const Portal = portal ? DropdownMenuPrimitive.Portal : React.Fragment;
    return (
      <Portal>
        <StyledDropdownMenuContent
          css={{
            $$accentSubtleBackground: `$colors$${accent}3`,
            $$accentSubtleColor: `$colors$${accent}11`,

            $$accentSolidBackground:
              accent === 'slate' ? `$colors$${accent}12` : `$colors$${accent}9`,
            $$accentSolidColor: getContrastingColor(accent),
            ...css,
          }}
          {...props}
          ref={ref}
        >
          {children}
          {arrow && <DropdownMenuPrimitive.Arrow />}
        </StyledDropdownMenuContent>
      </Portal>
    );
  }
);

export type SubDropdownMenuContentProps = ComponentProps<typeof StyledDropdownMenuSubContent> & {
  portal?: boolean;
  arrow?: boolean;
  accent?: ColorScheme;
};

export const DropdownMenuSubContent = React.forwardRef<HTMLDivElement, SubDropdownMenuContentProps>(
  ({ children, portal = true, arrow = false, accent = 'slate', css, ...props }, ref) => {
    const Portal = portal ? DropdownMenuPrimitive.Portal : React.Fragment;
    return (
      <Portal>
        <StyledDropdownMenuSubContent
          css={{
            $$accentSubtleBackground: `$colors$${accent}3`,
            $$accentSubtleColor: `$colors$${accent}11`,

            $$accentSolidBackground:
              accent === 'slate' ? `$colors$${accent}12` : `$colors$${accent}9`,
            $$accentSolidColor: getContrastingColor(accent),
            ...css,
          }}
          {...props}
          ref={ref}
        >
          {children}
          {arrow && <DropdownMenuPrimitive.Arrow />}
        </StyledDropdownMenuSubContent>
      </Portal>
    );
  }
);

export type DropdownMenuRadioGroupProps = ComponentProps<typeof StyledDropdownMenuRadioGroup> & {
  indicatorIcon?: '1' | '2';
};

export const DropdownMenuRadioGroup = React.forwardRef<HTMLDivElement, DropdownMenuRadioGroupProps>(
  ({ children, indicatorIcon, ...props }, ref) => {
    const _children = React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        indicatorIcon,
      });
    });
    return (
      <StyledDropdownMenuRadioGroup {...props} ref={ref}>
        {_children}
      </StyledDropdownMenuRadioGroup>
    );
  }
);

export type DropdownMenuRadioItemProps = ComponentProps<typeof StyledDropdownMenuRadioItem> & {
  indicatorIcon?: '1' | '2';
};

export const DropdownMenuRadioItem = React.forwardRef<HTMLDivElement, DropdownMenuRadioItemProps>(
  ({ children, indicatorIcon = '1', ...props }, ref) => {
    return (
      <StyledDropdownMenuRadioItem {...props} ref={ref}>
        <DropdownMenuItemIndicator>
          {indicatorIcon === '1' && <DotFilledIcon />}
          {indicatorIcon === '2' && <DotIcon />}
        </DropdownMenuItemIndicator>
        {children}
      </StyledDropdownMenuRadioItem>
    );
  }
);

export type DropdownMenuCheckboxItemProps = ComponentProps<typeof StyledDropdownMenuCheckboxItem>;

export const DropdownMenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuCheckboxItemProps
>(({ children, ...props }, ref) => {
  return (
    <StyledDropdownMenuCheckboxItem {...props} ref={ref}>
      <DropdownMenuItemIndicator>
        {props.checked === 'indeterminate' && <HorizontalLineIcon />}
        {props.checked === true && <CheckIcon />}
      </DropdownMenuItemIndicator>
      {children}
    </StyledDropdownMenuCheckboxItem>
  );
});
