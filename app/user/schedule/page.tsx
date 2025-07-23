import { AddTask } from "@/components/AddTask";
import { CalendarView } from "./_components/CalendarView";
import { getTasksForCurrentUser } from "@/dal/actions";

export default async function Page() {
  const events = await getTasksForCurrentUser();
  return (
    <>
      <div className="flex items-center justify-between px-6 mb-4">
        <div>
          <h1 className="text-2xl font-bold">Schedule</h1>
          <p className="text-sm text-muted-foreground">
            Add your tasks, select a time, and choose a category to organize
            your schedule efficiently.
          </p>
        </div>
        <AddTask />
      </div>
      <CalendarView events={events} />
    </>
  );
}
