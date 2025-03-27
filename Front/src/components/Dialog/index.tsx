import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
  DialogOverlay,
  DialogContent,
  CloseButton,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  IconWrapper
} from './style';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogContentComponent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogContent ref={ref} {...props}>
      {children}
      <CloseButton>
        <IconWrapper />
      </CloseButton>
    </DialogContent>
  </DialogPortal>
));
DialogContentComponent.displayName = DialogPrimitive.Content.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContentComponent as DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};