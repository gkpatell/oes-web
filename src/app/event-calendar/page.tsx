"use client";

import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPin, Clock } from "lucide-react";

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

// Define a custom TypeScript interface for your events
interface EventType {
  id: number;
  title: string;
  start: Date;
  end: Date;
  category: string;
  location: string;
}

// Demo events
const events: EventType[] = [
  {
    id: 1,
    title: "Annual Research Symposium",
    start: new Date(2024, 2, 15, 9, 0), // March 15, 2024, 9:00 AM
    end: new Date(2024, 2, 15, 17, 0),
    category: "Conference",
    location: "Main Auditorium",
  },
  {
    id: 2,
    title: "AI Ethics Workshop",
    start: new Date(2024, 2, 20, 13, 0), // March 20, 2024, 1:00 PM
    end: new Date(2024, 2, 20, 16, 0),
    category: "Workshop",
    location: "Room 201",
  },
  {
    id: 3,
    title: "Guest Lecture: Quantum Computing",
    start: new Date(2024, 3, 5, 14, 0), // April 5, 2024, 2:00 PM
    end: new Date(2024, 3, 5, 16, 0),
    category: "Lecture",
    location: "Lecture Hall A",
  },
  {
    id: 4,
    title: "Research Grant Writing Seminar",
    start: new Date(2024, 3, 12, 10, 0), // April 12, 2024, 10:00 AM
    end: new Date(2024, 3, 12, 12, 0),
    category: "Seminar",
    location: "Conference Room 3",
  },
  {
    id: 5,
    title: "Biotechnology Expo",
    start: new Date(2024, 4, 1, 9, 0), // May 1, 2024, 9:00 AM
    end: new Date(2024, 4, 3, 18, 0), // May 3, 2024, 6:00 PM
    category: "Exhibition",
    location: "Exhibition Hall",
  },
];

export default function EventCalendarPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  const handleSelectEvent = (event: EventType) => {
    setSelectedEvent(event);
  };

  const eventStyleGetter = (event: EventType) => {
    let backgroundColor = "#3182ce";
    switch (event.category) {
      case "Conference":
        backgroundColor = "#2C5282";
        break;
      case "Workshop":
        backgroundColor = "#2F855A";
        break;
      case "Lecture":
        backgroundColor = "#9C4221";
        break;
      case "Seminar":
        backgroundColor = "#702459";
        break;
      case "Exhibition":
        backgroundColor = "#744210";
        break;
    }
    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        opacity: 0.8,
        color: "white",
        border: "0px",
        display: "block",
      },
    };
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Event Calendar</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={handleSelectEvent}
                eventPropGetter={eventStyleGetter}
                defaultDate={new Date(2024, 2, 1)} // Start at March 2024
              />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>
                Click on an event to see details
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedEvent ? (
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedEvent.title}
                  </h3>
                  <Badge className="mb-2">{selectedEvent.category}</Badge>
                  <p className="flex items-center text-sm text-gray-600 mb-1">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {moment(selectedEvent.start).format("MMMM D, YYYY")}
                  </p>
                  <p className="flex items-center text-sm text-gray-600 mb-1">
                    <Clock className="mr-2 h-4 w-4" />
                    {moment(selectedEvent.start).format("h:mm A")} -{" "}
                    {moment(selectedEvent.end).format("h:mm A")}
                  </p>
                  <p className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPin className="mr-2 h-4 w-4" />
                    {selectedEvent.location}
                  </p>
                  <Button>Register for Event</Button>
                </div>
              ) : (
                <p>Select an event to view details</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {events
                  .filter((event) => event.start > new Date())
                  .sort((a, b) => a.start.getTime() - b.start.getTime())
                  .slice(0, 3)
                  .map((event) => (
                    <li
                      key={event.id}
                      className="border-b pb-2 last:border-b-0"
                    >
                      <h4 className="font-semibold">{event.title}</h4>
                      <p className="text-sm text-gray-600">
                        {moment(event.start).format("MMMM D, YYYY")}
                      </p>
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
