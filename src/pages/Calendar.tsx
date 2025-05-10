
import React from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const Calendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  // Mock data for tickets with dates
  const ticketDates = [
    new Date(2025, 4, 2),
    new Date(2025, 4, 5),
    new Date(2025, 4, 8),
    new Date(2025, 4, 12),
    new Date(2025, 4, 15),
    new Date(2025, 4, 19),
    new Date(2025, 4, 22),
    new Date(2025, 4, 25),
    new Date(2025, 4, 29),
  ];

  // Helper to check if a date has tickets
  const hasTickets = (day: Date) => {
    return ticketDates.some(ticketDate => 
      ticketDate.getDate() === day.getDate() &&
      ticketDate.getMonth() === day.getMonth() &&
      ticketDate.getFullYear() === day.getFullYear()
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Schedule</h1>
        <p className="text-muted-foreground">Ticket schedule and appointments</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="dashboard-card lg:w-1/3">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Calendar</h2>
            <p className="text-sm text-muted-foreground">Select a date to view tickets</p>
          </div>
          
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            modifiers={{
              hasTicket: (date) => hasTickets(date),
            }}
            modifiersClassNames={{
              hasTicket: "bg-primary/10 font-bold text-primary",
            }}
          />
        </div>
        
        <div className="dashboard-card lg:w-2/3">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Schedule for {date?.toLocaleDateString()}</h2>
            <p className="text-sm text-muted-foreground">Appointments and tickets</p>
          </div>
          
          {hasTickets(date!) ? (
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-2 h-8 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Printer maintenance</p>
                      <p className="text-sm text-muted-foreground">Marketing Department</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium">09:30 - 10:30</p>
                </div>
                <p className="text-sm text-muted-foreground">Assigned to: Michael Brown</p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-2 h-8 bg-red-500 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Network outage investigation</p>
                      <p className="text-sm text-muted-foreground">IT Department</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium">11:00 - 12:30</p>
                </div>
                <p className="text-sm text-muted-foreground">Assigned to: James Anderson</p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-2 h-8 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Software update deployment</p>
                      <p className="text-sm text-muted-foreground">All Departments</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium">14:00 - 16:00</p>
                </div>
                <p className="text-sm text-muted-foreground">Assigned to: Support Team</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-muted-foreground">No tickets or appointments scheduled for this day</p>
              <button className="mt-4 text-primary font-medium hover:underline">
                + Add new appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
