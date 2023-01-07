import * as React from 'react';
import { CSS, keyframes, styled } from '@aura-ui/theme';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { IconButton } from '@aura-ui/icon-button';
import { Cross1Icon } from '@radix-ui/react-icons';

const StyledTrigger = styled(DialogPrimitive.Trigger);

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba(8, 8, 8, 0.7)',
  position: 'fixed',
  inset: 0,

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  children: React.ReactNode;
};

export function Dialog({ children, ...props }: DialogProps) {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
}

const StyledContent = styled(DialogPrimitive.Content, {
  br: '$3',
  backgroundColor: '$slate1',
  boxShadow: '0px 0px 33px rgba(0, 0, 0, 0.08)',
  position: 'fixed',
  top: '30%',
  left: '47.5%',
  transform: 'translate(-40%, -40%)',
  width: '100%',
  maxWidth: '550px',
  maxHeight: '85vh',
  overflow: 'hidden',
  '&:focus': { outline: 'none' },
  p: '$5',
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',
  top: '$3',
  right: '$3',
});

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content> & {
  css?: CSS;
  closeButton?: boolean;
  overlay?: boolean;
};

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, closeButton = true, overlay = true, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    {overlay && <StyledOverlay />}
    {children}
    <StyledContent {...props} ref={forwardedRef}>
      {children}
      {closeButton && (
        <StyledCloseButton asChild>
          <IconButton variant="ghost" size="1">
            <Cross1Icon />
          </IconButton>
        </StyledCloseButton>
      )}
    </StyledContent>
  </DialogPrimitive.Portal>
));

// export const Dialog = DialogPrimitive.Root;
export const DialogOverlay = StyledOverlay;
export const DialogTrigger = StyledTrigger;
export const DialogClose = styled(DialogPrimitive.Close);
export const DialogTitle = styled(DialogPrimitive.Title);
export const DialogDescription = styled(DialogPrimitive.Description);
