import * as React from 'react';
import { styled, ComponentProps, keyframes, config, CSS } from '../theme';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { ColorScheme, getContrastingColor } from '../utils';
import { IconButton } from '../icon-button';
import { Cross2Icon } from './Cross2Icon';

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + $$VIEWPORT_PADDING))` },
  to: { transform: 'translateX(0)' },
});

const slideOut = keyframes({
  from: { opacity: 1, transform: 'translateX(0)' },
  to: { opacity: 0, transform: `translateX(calc(100% + $$VIEWPORT_PADDING))` },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + $$VIEWPORT_PADDING))` },
});

export type ToastProviderProps = ComponentProps<typeof ToastProvider>;
export const ToastProvider = ToastPrimitive.Provider;

export type ToastRootProps = ComponentProps<typeof ToastRoot>;
export const ToastRoot = styled(ToastPrimitive.Root, {
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

  '&[data-state="open"]': {
    animation: `${slideIn} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideOut} 150ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },

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

export const ToastViewport = React.forwardRef<HTMLOListElement, ToastViewportProps>(
  ({ viewportPadding = '20px', css, ...rest }, ref) => (
    <StyledToastViewport
      ref={ref}
      css={{
        $$VIEWPORT_PADDING:
          typeof viewportPadding === 'number' ? `${viewportPadding}px` : viewportPadding,
        ...css,
      }}
      {...rest}
    />
  )
);

export const ToastClose = styled(ToastPrimitive.Close);

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title?: string;
  description: string;
  actionAltText?: string;
  colorScheme?: ColorScheme;
  closeButtonStyles?: CSS;
};

export const Toast = React.forwardRef<HTMLLIElement, ToastProps>(
  (
    {
      title,
      description,
      actionAltText = '',
      colorScheme = 'slate',
      closeButtonStyles,
      variant,
      css,
      children,
      ...rest
    },
    ref
  ) => {
    React.useEffect(() => {
      if (children && !actionAltText) {
        throw new Error('If providing an action, you need to add alt text for screen readers.');
      }
    }, []);

    return (
      <ToastRoot
        css={{
          $$bg: `$colors$${colorScheme}2`,
          $$color:
            colorScheme === 'slate' ? `$colors$${colorScheme}12` : `$colors$${colorScheme}11`,
          $$border: `$colors$${colorScheme}5`,
          $$bgSolid: `$colors$${colorScheme}9`,
          $$colorSolid: getContrastingColor(colorScheme),
          ...css,
        }}
        variant={variant}
        ref={ref}
        {...rest}
      >
        {title && (
          <ToastTitle
          // css={{
          //   color: colorScheme === 'slate' ? `$colors$${colorScheme}12` : `$colors$${colorScheme}11`,
          // }}
          >
            {title}
          </ToastTitle>
        )}
        <ToastDescription
        // css={{
        //   color: colorScheme === 'slate' ? `$colors$${colorScheme}11` : `$colors$${colorScheme}10`,
        // }}
        >
          {description}
        </ToastDescription>
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
      </ToastRoot>
    );
  }
);
