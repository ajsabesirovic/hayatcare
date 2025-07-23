"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { CalendarEvent } from "./ui/full-calendar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { IconTrash } from "@tabler/icons-react";
import { calculateDuration } from "@/lib/utils";

interface iAppProps {
  event: CalendarEvent | null;
  setEvent: (e: any) => void;
}

export function TaskDetails({ event, setEvent }: iAppProps) {
  if (!event) return null;
  console.log(event);
  const formattedCategory = event.category
    ?.replaceAll("_", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <Dialog open={!!event} onOpenChange={() => setEvent(null)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {event.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm text-muted-foreground mt-2">
          <div>
            <span className="font-medium text-foreground">Category:</span>{" "}
            {formattedCategory ? (
              <Badge variant="outline" className="ml-1">
                {formattedCategory}
              </Badge>
            ) : (
              <span className="italic">Not defined</span>
            )}
          </div>

          <div>
            <p className="mt-1 text-muted-foreground">
              {event.description ? (
                event.description
              ) : (
                <span className="italic text-muted-foreground">
                  No description
                </span>
              )}
            </p>
          </div>

          <div>
            <span className="font-medium text-foreground">Location:</span>{" "}
            {event.location}
          </div>
          <div>
            <span className="font-medium text-foreground">Start:</span>{" "}
            {format(event.start, "dd.MM.yyyy HH:mm")}
          </div>
          <div>
            <span className="font-medium text-foreground">Duration:</span>{" "}
            {format(event.start, "dd.MM.yyyy HH:mm") ===
            format(event.end, "dd.MM.yyyy HH:mm")
              ? "Not defined"
              : calculateDuration(event.end, event.start)}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <DialogClose asChild>
            <Button variant="outline" type="button">
              View Details
            </Button>
          </DialogClose>

          <Button type="submit" variant="destructive">
            <IconTrash />
            Delete Task
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
