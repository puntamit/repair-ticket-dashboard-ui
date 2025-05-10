
import React, { useState } from "react";
import { TicketTable } from "@/components/tickets/TicketTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Ticket, TicketPlus } from "lucide-react";

const Tickets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  // Mock data for tickets
  const allTickets = [
    {
      id: "TCK-1234",
      title: "Computer won't turn on",
      status: "open" as const,
      priority: "high" as const,
      createdAt: "2025-05-09T10:23:00",
      userId: "USR-001",
      userEmail: "john.doe@example.com",
    },
    {
      id: "TCK-1233",
      title: "Printer not connecting",
      status: "in_progress" as const,
      priority: "medium" as const,
      createdAt: "2025-05-08T09:45:00",
      userId: "USR-002",
      userEmail: "jane.smith@example.com",
    },
    {
      id: "TCK-1232",
      title: "Software installation failed",
      status: "resolved" as const,
      priority: "low" as const,
      createdAt: "2025-05-07T14:30:00",
      userId: "USR-003",
      userEmail: "robert.johnson@example.com",
    },
    {
      id: "TCK-1231",
      title: "Monitor flickering",
      status: "open" as const,
      priority: "medium" as const,
      createdAt: "2025-05-06T11:20:00",
      userId: "USR-004",
      userEmail: "sarah.williams@example.com",
    },
    {
      id: "TCK-1230",
      title: "Network connectivity issues",
      status: "in_progress" as const,
      priority: "high" as const,
      createdAt: "2025-05-05T16:15:00",
      userId: "USR-005",
      userEmail: "michael.brown@example.com",
    },
    {
      id: "TCK-1229",
      title: "Email not syncing",
      status: "closed" as const,
      priority: "low" as const,
      createdAt: "2025-05-04T12:10:00",
      userId: "USR-006",
      userEmail: "lisa.taylor@example.com",
    },
    {
      id: "TCK-1228",
      title: "Keyboard not working",
      status: "resolved" as const,
      priority: "medium" as const,
      createdAt: "2025-05-03T09:30:00",
      userId: "USR-007",
      userEmail: "david.miller@example.com",
    },
    {
      id: "TCK-1227",
      title: "Application crashes on startup",
      status: "open" as const,
      priority: "high" as const,
      createdAt: "2025-05-02T15:45:00",
      userId: "USR-008",
      userEmail: "emma.wilson@example.com",
    },
    {
      id: "TCK-1226",
      title: "VPN connection issues",
      status: "in_progress" as const,
      priority: "high" as const,
      createdAt: "2025-05-01T13:20:00",
      userId: "USR-009",
      userEmail: "james.anderson@example.com",
    },
    {
      id: "TCK-1225",
      title: "File permission denied",
      status: "resolved" as const,
      priority: "medium" as const,
      createdAt: "2025-04-30T10:55:00",
      userId: "USR-010",
      userEmail: "olivia.martin@example.com",
    },
  ];

  // Filter tickets based on search query and filters
  const filteredTickets = allTickets.filter((ticket) => {
    let matchesSearch = true;
    if (searchQuery) {
      matchesSearch =
        ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.userEmail.toLowerCase().includes(searchQuery.toLowerCase());
    }

    let matchesStatus = true;
    if (statusFilter !== "all") {
      matchesStatus = ticket.status === statusFilter;
    }

    let matchesPriority = true;
    if (priorityFilter !== "all") {
      matchesPriority = ticket.priority === priorityFilter;
    }

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tickets</h1>
          <p className="text-muted-foreground">Manage and track repair tickets</p>
        </div>
        <Button className="flex items-center gap-2">
          <TicketPlus className="h-4 w-4" />
          New Ticket
        </Button>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Input
                placeholder="Search tickets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
            
            <div className="flex gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <TicketTable tickets={filteredTickets} />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
