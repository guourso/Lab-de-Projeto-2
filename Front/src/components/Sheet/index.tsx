import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import {
  SheetOverlay,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  CloseIcon
} from './style';

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;

interface SheetContentProps extends React.ComponentProps<typeof SheetContent> {
  side?: 'top' | 'bottom' | 'left' | 'right';
}

const SheetComponent = React.forwardRef<
  React.ElementRef<typeof SheetContent>,
  SheetContentProps
>(({ children, side = 'right', ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetContent ref={ref} side={side} {...props}>
      {children}
      <SheetClose>
        <CloseIcon />
        <span className="sr-only">Close</span>
      </SheetClose>
    </SheetContent>
  </SheetPortal>
));
SheetComponent.displayName = SheetPrimitive.Content.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetPortal,
  SheetComponent as SheetContent,
  SheetClose,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
};