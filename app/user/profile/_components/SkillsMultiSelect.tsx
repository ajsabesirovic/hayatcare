"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export function SkillsMultiSelect({ field, skills }: any) {
  const [open, setOpen] = React.useState(false);

  return (
    <FormItem>
      <FormLabel>Veštine</FormLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between"
          >
            {field.value && field.value.length > 0
              ? `${field.value.length} veština`
              : "Izaberi veštine"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Pretraži veštine..." />
            <CommandEmpty>Nema rezultata</CommandEmpty>
            <CommandGroup>
              {skills.map((skill: string) => (
                <CommandItem
                  key={skill}
                  onSelect={() => {
                    const selected = new Set(field.value ?? []);
                    if (selected.has(skill)) {
                      selected.delete(skill);
                    } else {
                      selected.add(skill);
                    }
                    field.onChange(Array.from(selected));
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      field.value?.includes(skill) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {skill
                    .replaceAll("_", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}{" "}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
}
