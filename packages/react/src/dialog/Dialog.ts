import { keyframes, styled } from '../theme';
import * as DialogPrimitive from '@radix-ui/react-dialog';

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
  variants: {
    pos: {
      absolute: {
        position: 'absolute',

        top: '$3',
        right: '$3',
      },
      relative: {
        position: 'relative',

        top: 0,
        right: 0,
      },
    },
  },

  defaultVariants: {
    pos: 'absolute',
  },
});

export const Dialog = DialogPrimitive.Root;
export const DialogOverlay = StyledOverlay;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogTrigger = styled(DialogPrimitive.Trigger);
export const DialogTitle = styled(DialogPrimitive.Title);
export const DialogDescription = styled(DialogPrimitive.Description);
export const DialogContent = StyledContent;
export const DialogClose = StyledCloseButton;
