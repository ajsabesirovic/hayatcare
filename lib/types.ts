export interface ScheduleEvent {
  id: string;
  start: Date;
  end: Date;
  title: string;
  color: EventColor;
}
type EventColor = "default" | "blue" | "green" | "pink" | "purple";
