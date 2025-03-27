import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  CheckIcon,
  RadioIcon,
} from "./style";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ inset, children, ...props }, ref) => (
  <DropdownMenuSubTrigger ref={ref} inset={inset} {...props}>
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ ...props }, ref) => (
  <DropdownMenuSubContent ref={ref} {...props} />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContentComponent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPortal>
    <DropdownMenuContent ref={ref} {...props} />
  </DropdownMenuPortal>
));
DropdownMenuContentComponent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItemComponent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>, // Ref do componente Radix
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ inset, ...props }, ref) => (
  <DropdownMenuItem ref={ref} inset={inset} {...props} />
));
DropdownMenuItemComponent.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItemComponent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ checked, children, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem ref={ref} checked={checked} {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItemComponent.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItemComponent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem ref={ref} {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <RadioIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItemComponent.displayName =
  DropdownMenuPrimitive.RadioItem.displayName;

  const DropdownMenuLabelComponent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ inset, ...props }, ref) => (
  <DropdownMenuLabel ref={ref} inset={inset} {...props} />
));

DropdownMenuLabelComponent.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparatorComponent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ ...props }, ref) => (
  <DropdownMenuSeparator ref={ref} {...props} />
));
DropdownMenuSeparatorComponent.displayName =
  DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcutComponent = ({
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => <DropdownMenuShortcut {...props} />;

DropdownMenuShortcutComponent.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContentComponent as DropdownMenuContent,
  DropdownMenuItemComponent as DropdownMenuItem,
  DropdownMenuCheckboxItemComponent as DropdownMenuCheckboxItem,
  DropdownMenuRadioItemComponent as DropdownMenuRadioItem,
  DropdownMenuLabelComponent as DropdownMenuLabel,
  DropdownMenuSeparatorComponent as DropdownMenuSeparator,
  DropdownMenuShortcutComponent as DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
