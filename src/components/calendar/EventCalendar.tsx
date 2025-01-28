import { Calendar } from "@/components/ui/calendar";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
}

interface EventCalendarProps {
  events: Event[];
  onSelectEvent: (event: Event) => void;
}

export const EventCalendar = ({ events, onSelectEvent }: EventCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Convert event dates to Date objects for comparison
  const eventDates = events.reduce((acc, event) => {
    const eventDate = new Date(event.date);
    const dateString = eventDate.toDateString();
    acc[dateString] = [...(acc[dateString] || []), event];
    return acc;
  }, {} as Record<string, Event[]>);

  return (
    <DashboardCard title="Event Calendar" className="col-span-full md:col-span-1">
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            event: (date) => {
              return !!eventDates[date.toDateString()];
            },
          }}
          modifiersStyles={{
            event: {
              fontWeight: "bold",
              color: "var(--primary)",
              textDecoration: "underline",
            },
          }}
        />

        {date && eventDates[date.toDateString()] && (
          <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              Events on {date.toLocaleDateString()}
            </h4>
            {eventDates[date.toDateString()].map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-2 rounded-md bg-secondary/50 cursor-pointer hover:bg-secondary"
                onClick={() => onSelectEvent(event)}
              >
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-muted-foreground">{event.location}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </DashboardCard>
  );
}; 