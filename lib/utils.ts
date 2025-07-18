import { clsx, type ClassValue } from "clsx";
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
