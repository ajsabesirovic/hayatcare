"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Availability",
};

const daysOfWeek = [
  "Ponedeljak",
  "Utorak",
  "Sreda",
  "Četvrtak",
  "Petak",
  "Subota",
  "Nedelja",
];

export default function AvailabilityPage() {
  const [regularSchedule, setRegularSchedule] = useState<any[]>([]);
  const [adHoc, setAdHoc] = useState<any[]>([]);
  const [isFlexible, setIsFlexible] = useState(false);

  const toggleDay = (day: string) => {
    if (regularSchedule.some((d) => d.day === day)) {
      setRegularSchedule(regularSchedule.filter((d) => d.day !== day));
    } else {
      setRegularSchedule([...regularSchedule, { day, from: "", to: "" }]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Dostupnost</h1>

      <div className="flex items-center space-x-2">
        <Switch checked={isFlexible} onCheckedChange={setIsFlexible} />
        <Label>Nemam fiksni raspored — dostupan po dogovoru</Label>
      </div>

      {!isFlexible && (
        <div className="space-y-4">
          {daysOfWeek.map((day) => {
            const selected = regularSchedule.find((d) => d.day === day);
            return (
              <div
                key={day}
                className="flex items-center justify-between border p-3 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={!!selected}
                    onCheckedChange={() => toggleDay(day)}
                  />
                  <Label>{day}</Label>
                </div>
                {selected && (
                  <div className="flex items-center gap-2">
                    <Input
                      type="time"
                      value={selected.from}
                      onChange={(e) =>
                        setRegularSchedule(
                          regularSchedule.map((d) =>
                            d.day === day ? { ...d, from: e.target.value } : d
                          )
                        )
                      }
                    />
                    <span>-</span>
                    <Input
                      type="time"
                      value={selected.to}
                      onChange={(e) =>
                        setRegularSchedule(
                          regularSchedule.map((d) =>
                            d.day === day ? { ...d, to: e.target.value } : d
                          )
                        )
                      }
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Ad-hoc slots */}
      <div>
        <h2 className="text-lg font-semibold">Posebni termini</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Dodaj termin</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dodaj slobodan termin</DialogTitle>
            </DialogHeader>
            {/* Primer minimalne logike */}
            <div className="space-y-4">
              <Label>Datum</Label>
              <Input type="date" />
              <Label>Od</Label>
              <Input type="time" />
              <Label>Do</Label>
              <Input type="time" />
              <Button variant="outline">Sačuvaj</Button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="mt-4 space-y-2">
          {adHoc.length === 0 && (
            <p className="text-muted-foreground text-sm">
              Nema posebnih termina.
            </p>
          )}
          {adHoc.map((slot, idx) => (
            <div
              key={idx}
              className="border p-2 rounded flex justify-between items-center"
            >
              <span>
                {slot.date} — {slot.from} do {slot.to}
              </span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setAdHoc(adHoc.filter((_, i) => i !== idx))}
              >
                Ukloni
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Button>Sačuvaj dostupnost</Button>
    </div>
  );
}
