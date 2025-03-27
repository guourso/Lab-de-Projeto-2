import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import {
  SelectTrigger,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectContent,
  SelectViewport,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
  SelectItemIndicator
} from './style';

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectContentComponent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & { position?: 'popper' | 'item-aligned' }
>(({ children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectContent position={position} ref={ref} {...props}>
      <SelectScrollUpButton>
        <ChevronUpIcon />
      </SelectScrollUpButton>
      <SelectViewport position={position}>
        {children}
      </SelectViewport>
      <SelectScrollDownButton>
        <ChevronDownIcon />
      </SelectScrollDownButton>
    </SelectContent>
  </SelectPrimitive.Portal>
));
SelectContentComponent.displayName = SelectPrimitive.Content.displayName;

const SelectItemComponent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, ref) => (
  <SelectItem ref={ref} {...props}>
    <SelectItemIndicator>
      <CheckIcon />
    </SelectItemIndicator>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectItem>
));
SelectItemComponent.displayName = SelectPrimitive.Item.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContentComponent as SelectContent,
  SelectLabel,
  SelectItemComponent as SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};