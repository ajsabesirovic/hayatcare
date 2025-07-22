import { AddTask } from "@/components/AddTask";
import { CalendarView } from "./_components/CalendarView";
import { getTasksForCurrentUser } from "@/dal/actions";

export default async function Page() {
  const events = await getTasksForCurrentUser();
  return (
    <>
      <div className="flex items-center justify-between px-6 mb-4">
        <div>
          <h1 className="text-2xl font-bold">Raspored</h1>
          <p className="text-sm text-muted-foreground">
            Ubacite svoje obaveze, izaberite vreme i kategoriju zadatka.
          </p>
        </div>
        <AddTask />
      </div>
      <CalendarView events={events} />
    </>
  );
}
