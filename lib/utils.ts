import { clsx, type ClassValue } from "clsx";
import { differenceInMinutes } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getUpdatedFields(
  newData: Record<string, any>,
  existingData: Record<string, any>
): Partial<typeof newData> {
  const updated: Partial<typeof newData> = {};

  for (const key in newData) {
    let oldField = existingData[key];
    let newField = newData[key].trim();

    if (newField !== oldField) {
      updated[key] = newField;
    }
  }

  return updated;
}
export function calculateDuration(end: Date, start: Date) {
  const minutes = differenceInMinutes(end, start);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (minutes <= 0) return "Not defined.";

  const hourStr = hours > 0 ? `${hours} ${hours === 1 ? "hour" : "hours"}` : "";
  const minStr =
    remainingMinutes < 0
      ? ""
      : `${remainingMinutes} ${remainingMinutes == 1 ? "minute" : "minutes"}`;

  return [hourStr, minStr].filter(Boolean).join(" i ");
}
