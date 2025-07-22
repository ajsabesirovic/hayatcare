"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState, useTransition } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { taskSchema, taskCategories } from "@/lib/zod.schema";
import { Textarea } from "./ui/textarea";
import { addTask } from "@/dal/actions";
import { toast } from "sonner";

function formatInitialDate() {
  return format(new Date(), "yyyy-MM-dd'T'HH:mm");
}

export function AddTask() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      category: "errands",
      description: "",
      start_time: formatInitialDate(),
      duration: 0,
      multi_day: false,
    },
  });

  function onSubmit(data: z.infer<typeof taskSchema>) {
    startTransition(async () => {
      const result = await addTask(data);
      if (result.status == "success") {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
      setOpen(false);
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Dodaj obavezu
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Nova obaveza</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Naslov</FormLabel>
                  <FormControl>
                    <Input placeholder="Kratak naziv obaveze" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormDescription>Detaljan opis zadatka</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Kategorija</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Izaberi Kategoriju"></SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {taskCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category
                            .replaceAll("_", " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="start_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Početak</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trajanje (u minutima) — opciono</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="npr. 60"
                      min={1}
                      {...field}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? "0" : Number(e.target.value)
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="multi_day"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(val) => field.onChange(Boolean(val))}
                    />
                  </FormControl>
                  <FormLabel htmlFor="multi_day">
                    Dodaj ovaj zadatak na više dana
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {isPending ? "Cuvanje..." : "Sačuvaj"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
