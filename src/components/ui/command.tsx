"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => (
  <Dialog {...props}>
    <DialogContent className="overflow-hidden p-0">
      <Command className="border-b border-b-border">
        <div className="flex items-center px-3 py-2">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <CommandPrimitive.Input
            placeholder="Type a command or search..."
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        {children}
      </Command>
    </DialogContent>
  </Dialog>
);
CommandDialog.displayName = "CommandDialog";

export {
  Command,
  CommandDialog,
  CommandPrimitive as CommandItem,
  CommandPrimitive.Separator as CommandSeparator,
  CommandPrimitive.Empty as CommandEmpty,
  CommandPrimitive.Group as CommandGroup,
  CommandPrimitive.Input as CommandInput,
  CommandPrimitive.List as CommandList,
};