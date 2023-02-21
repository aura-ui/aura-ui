import * as React from 'react';
import { styled, ComponentProps } from '../theme';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export type TooltipPropviderProps = ComponentProps<typeof TooltipProvider>;
export const TooltipProvider = TooltipPrimitive.Provider;

export type TooltipProps = ComponentProps<typeof Tooltip>;
export const Tooltip = TooltipPrimitive.Root;

export type TooltipTriggerProps = ComponentProps<typeof TooltipTrigger>;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export type TooltipPortalProps = ComponentProps<typeof TooltipPortal>;
export const TooltipPortal = TooltipPrimitive.Portal;

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$slate12',
});

export type TooltipContentProps = ComponentProps<typeof StyledTooltipContent> & {
  arrow?: boolean;
  arrowWidth?: string | number;
  arrowHeight?: string | number;
};
const StyledTooltipContent = styled(TooltipPrimitive.Content, {
  backgroundColor: '$slate12',
  color: '$slate1',
  p: '$3',
  br: '$2',

  variants: {
    size: {
      1: {
        fontSize: '$1',
        lineHeight: '$1',
        py: '$1',
        px: '$2',
      },
      2: {
        fontSize: '$2',
        lineHeight: '$2',
        py: '$1',
        px: '$2',
      },
      3: {
        fontSize: '$3',
        lineHeight: '$3',
        py: '$1',
        px: '$2',
      },
    },
  },

  defaultVariants: {
    size: '2',
  },
});

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ arrow = false, arrowWidth = 10, arrowHeight = 5, sideOffset = 4, children, ...rest }, ref) => {
    return (
      <StyledTooltipContent ref={ref} sideOffset={sideOffset} {...rest}>
        {children}
        {arrow && <TooltipArrow width={arrowWidth} height={arrowHeight} />}
      </StyledTooltipContent>
    );
  }
);
