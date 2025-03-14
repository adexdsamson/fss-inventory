"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-muted data-[state=unchecked]:bg-muted focus-visible:ring-slate-950/50 inline-flex h-6 w-10 shrink-0 items-center rounded-full border-2 border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 ",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-accent pointer-events-none block size-5 rounded-full ring-0 shadow-xs transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 data-[state=checked]:rtl:-translate-x-4",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
