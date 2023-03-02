import * as React from 'react';
import { styled, ComponentProps, keyframes } from '../theme';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: 'rgba(8, 8, 8, 0.7)',
  position: 'fixed',
  inset: 0,

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledAlertDialogContent = styled(AlertDialogPrimitive.Content, {
  br: '$3',
  backgroundColor: '$slate1',
  boxShadow: '0px 0px 33px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  position: 'fixed',
  top: '40%',
  left: '40%',
  transform: 'translate(-40%, -40%)',
  width: '100%',
  maxWidth: 550,
  maxHeight: 'max-content',
  overflow: 'hidden',
  '&:focus': { outline: 'none' },
  p: '$5',
});

export type AlertDialogContentProps = ComponentProps<typeof StyledAlertDialogContent> &
  AlertDialogPrimitive.AlertDialogPortalProps & {
    portal?: boolean;
  };

export const AlertDialogContent = React.forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ children, portal = true, forceMount, container, ...props }, ref) => {
    const Portal = portal ? AlertDialogPrimitive.Portal : React.Fragment;
    return (
      <Portal forceMount={forceMount} container={container}>
        <StyledAlertDialogContent ref={ref} {...props}>
          {children}
        </StyledAlertDialogContent>
      </Portal>
    );
  }
);

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogOverlay = StyledOverlay;
export const AlertDialogPortal = AlertDialogPrimitive.Portal;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogTitle = AlertDialogPrimitive.Title;
export const AlertDialogDescription = AlertDialogPrimitive.Description;
export const AlertDialogCancel = AlertDialogPrimitive.AlertDialogCancel;
export const AlertDialogAction = AlertDialogPrimitive.AlertDialogAction;
