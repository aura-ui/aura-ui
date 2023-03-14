import * as React from 'react';
import { styled, ComponentProps, keyframes, CSS, ColorScheme, getContrastingColor } from '../theme';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { IconButton } from '../icon-button';
import { Cross2Icon } from './Cross2Icon';
import { useToast } from './Provider';

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideInRight = keyframes({
  from: { transform: `translateX(calc(100% + $$VIEWPORT_PADDING))` },
  to: { transform: 'translateX(0)' },
});

const slideInLeft = keyframes({
  from: { transform: `translateX(calc(-100% + $$VIEWPORT_PADDING))` },
  to: { transform: 'translateX(0)' },
});

const slideOutRight = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: `translateX(calc(100% + $$VIEWPORT_PADDING))` },
});

const slideOutLeft = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: `translateX(calc(-100% + $$VIEWPORT_PADDING))` },
});

const swipeOutRight = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + $$VIEWPORT_PADDING))` },
});

const swipeOutLeft = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(-100% + $$VIEWPORT_PADDING))` },
});

const slideInTop = keyframes({
  from: { transform: `translateY(calc(-100% + $$VIEWPORT_PADDING))` },
  to: { transform: 'translateY(0)' },
});

const slideOutTop = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: `translateY(calc(-200% + $$VIEWPORT_PADDING))` },
});

const slideInBottom = keyframes({
  from: { transform: `translateY(calc(100% + $$VIEWPORT_PADDING))` },
  to: { transform: 'translateY(0)' },
});

const slideOutBottom = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: `translateY(calc(200% + $$VIEWPORT_PADDING))` },
});

const swipeDown = keyframes({
  from: { opacity: 1, transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { opacity: 0, transform: `translateY(calc(200% + $$VIEWPORT_PADDING))` },
});

const swipeUp = keyframes({
  from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { transform: `translateY(calc(-200% + $$VIEWPORT_PADDING))` },
});

export type ToastProviderProps = ComponentProps<typeof ToastProviderValues>;
export const ToastProviderValues = ToastPrimitive.Provider;

export type ToastTitleProps = ComponentProps<typeof ToastTitle>;
export const ToastTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  fontSize: '$3',
  lineHeight: '$3',
  fontWeight: '$6',
});

export type ToastDescriptionProps = ComponentProps<typeof ToastDescription>;
export const ToastDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  fontSize: '$2',
  lineHeight: '$2',
});

export type ToastActionProps = ComponentProps<typeof ToastAction>;
export const ToastAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
});

export type ToastViewportProps = ComponentProps<typeof StyledToastViewport> & {
  viewportPadding?: string | number;
};
export const StyledToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  p: '$$VIEWPORT_PADDING',
  minWidth: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: '$toast',
  outline: 'none',
});

export const ToastClose = styled(ToastPrimitive.Close);

const StyledToast = styled(ToastPrimitive.Root, {
  p: '$3',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  alignItems: 'center',
  columnGap: '$7',
  br: '$2',
  userSelect: 'none',

  $$bg: '$colors$slate2',
  $$color: '$colors$slate11',
  $$border: '$colors$slate6',
  $$bgSolid: '$colors$blue9',
  $$colorSolid: 'white',

  variants: {
    variant: {
      subtle: {
        backgroundColor: '$$bg',
        color: '$$color',
        border: '1px solid $$border',
      },
      solid: {
        backgroundColor: '$$bgSolid',
        color: '$$colorSolid',
      },
    },
    placement: {
      topLeft: {
        '&[data-state="open"]': {
          animation: `${slideInLeft} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-state="closed"]': {
          animation: `${slideOutLeft} 250ms ease-out`,
        },
        '&[data-swipe="move"]': {
          transform: 'translateX(var(--radix-toast-swipe-move-x))',
        },
        '&[data-swipe="cancel"]': {
          transform: 'translateX(0)',
          transition: 'transform 200ms ease-out',
        },
        '&[data-swipe="end"]': {
          animation: `${swipeOutLeft} 100ms ease-out`,
        },
      },
      topCenter: {
        '&[data-state="open"]': {
          animation: `${slideInTop} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-state="closed"]': {
          animation: `${slideOutTop} 250ms ease-out`,
        },
        '&[data-swipe="move"]': {
          transform: 'translateY(var(--radix-toast-swipe-move-y))',
        },
        '&[data-swipe="cancel"]': {
          transform: 'translateY(0)',
          transition: 'transform 200ms ease-out',
        },
        '&[data-swipe="end"]': {
          animation: `${swipeUp} 200ms ease-out`,
        },
      },
      topRight: {
        '&[data-state="open"]': {
          animation: `${slideInRight} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-state="closed"]': {
          animation: `${slideOutRight} 250ms ease-out`,
        },
        '&[data-swipe="move"]': {
          transform: 'translateX(var(--radix-toast-swipe-move-x))',
        },
        '&[data-swipe="cancel"]': {
          transform: 'translateX(0)',
          transition: 'transform 200ms ease-out',
        },
        '&[data-swipe="end"]': {
          animation: `${swipeOutRight} 100ms ease-out`,
        },
      },
      bottomRight: {
        '&[data-state="open"]': {
          animation: `${slideInRight} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-state="closed"]': {
          animation: `${slideOutRight} 250ms ease-out`,
        },
        '&[data-swipe="move"]': {
          transform: 'translateX(var(--radix-toast-swipe-move-x))',
        },
        '&[data-swipe="cancel"]': {
          transform: 'translateX(0)',
          transition: 'transform 200ms ease-out',
        },
        '&[data-swipe="end"]': {
          animation: `${swipeOutRight} 50ms ease-out`,
        },
      },
      bottomCenter: {
        '&[data-state="open"]': {
          animation: `${slideInBottom} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-state="closed"]': {
          animation: `${slideOutBottom} 250ms ease-out`,
        },
        '&[data-swipe="move"]': {
          transform: 'translateY(var(--radix-toast-swipe-move-y))',
        },
        '&[data-swipe="cancel"]': {
          transform: 'translateY(0)',
          transition: 'transform 200ms ease-out',
        },
        '&[data-swipe="end"]': {
          animation: `${swipeDown} 200ms ease-out`,
        },
      },
      bottomLeft: {
        '&[data-state="open"]': {
          animation: `${slideInLeft} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-state="closed"]': {
          animation: `${slideOutLeft} 250ms ease-out`,
        },
        '&[data-swipe="move"]': {
          transform: 'translateX(var(--radix-toast-swipe-move-x))',
        },
        '&[data-swipe="cancel"]': {
          transform: 'translateX(0)',
          transition: 'transform 200ms ease-out',
        },
        '&[data-swipe="end"]': {
          animation: `${swipeOutLeft} 100ms ease-out`,
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
    },
  },

  defaultVariants: {
    variant: 'subtle',
    shadow: '3',
  },
});

export type ToastProps = ComponentProps<typeof StyledToast> & {
  title?: string;
  description: string;
  actionAltText?: string;
  colorScheme?: ColorScheme;
  closeButtonStyles?: CSS;
  viewportPadding?: string | number;
};

export const Toast = React.forwardRef<HTMLLIElement, ToastProps>(
  (
    {
      title,
      description,
      actionAltText = '',
      colorScheme = 'slate',
      closeButtonStyles,
      viewportPadding = '20px',
      placement = 'bottomCenter',
      variant,
      css,
      children,
      ...rest
    },
    ref
  ) => {
    const { setState } = useToast();

    React.useEffect(() => {
      if (placement === 'topLeft' || placement === 'bottomLeft') {
        setState({ swipeDirection: 'left' });
      }
      if (placement === 'topRight' || placement === 'bottomRight') {
        setState({ swipeDirection: 'right' });
      }
      if (placement === 'topCenter') {
        setState({ swipeDirection: 'up', swipeThreshold: 10 });
      }
      if (placement === 'bottomCenter') {
        setState({ swipeDirection: 'down', swipeThreshold: 10 });
      }
    }, []);

    React.useEffect(() => {
      if (children && !actionAltText) {
        throw new Error('If providing an action, you need to add alt text for screen readers.');
      }
    }, []);

    const top = placement === 'topLeft' || placement === 'topCenter' || placement === 'topRight';
    const bottom =
      placement === 'bottomLeft' || placement === 'bottomCenter' || placement === 'bottomRight';
    const left = placement === 'topLeft' || placement === 'bottomLeft';
    const right = placement === 'topRight' || placement === 'bottomRight';
    const center = placement === 'topCenter' || placement === 'bottomCenter';

    return (
      <>
        <StyledToast
          placement={placement}
          css={{
            $$bg: `$colors$${colorScheme}2`,
            $$color:
              colorScheme === 'slate' ? `$colors$${colorScheme}12` : `$colors$${colorScheme}11`,
            $$border: `$colors$${colorScheme}5`,
            $$bgSolid: colorScheme === 'slate' ? '$colors$slate12' : `$colors$${colorScheme}9`,
            $$colorSolid:
              colorScheme === 'slate' ? '$colors$slate1' : getContrastingColor(colorScheme),
            ...css,
          }}
          variant={variant}
          ref={ref}
          {...rest}
        >
          {title && <ToastTitle>{title}</ToastTitle>}
          <ToastDescription>{description}</ToastDescription>
          {children ? (
            <ToastAction asChild altText={actionAltText}>
              {children}
            </ToastAction>
          ) : (
            <ToastClose asChild>
              <IconButton
                css={{
                  ...closeButtonStyles,
                }}
                size="1"
                variant={variant}
                colorScheme={colorScheme}
              >
                <Cross2Icon aria-hidden />
              </IconButton>
            </ToastClose>
          )}
        </StyledToast>
        <StyledToastViewport
          css={{
            $$VIEWPORT_PADDING:
              typeof viewportPadding === 'number' ? `${viewportPadding}px` : viewportPadding,

            top: top ? 0 : 'auto',
            right: right || center ? 0 : 'auto',
            bottom: bottom ? 0 : 'auto',
            left: left || center ? 0 : 'auto',
            mx: 'auto',
            width: 'max-content',
          }}
        />
      </>
    );
  }
);
