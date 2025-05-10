
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Ticket {
  id: string;
  title: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
  createdAt: string;
  userId: string;
  userEmail: string;
}

interface TicketTableProps {
  tickets: Ticket[];
}

export function TicketTable({ tickets }: TicketTableProps) {
  const statusColors = {
    open: "text-blue-500 bg-blue-50 border-blue-200",
    in_progress: "text-yellow-500 bg-yellow-50 border-yellow-200",
    resolved: "text-green-500 bg-green-50 border-green-200",
    closed: "text-gray-500 bg-gray-50 border-gray-200",
  };
  
  const priorityColors = {
    low: "text-green-500 bg-green-50 border-green-200",
    medium: "text-yellow-500 bg-yellow-50 border-yellow-200",
    high: "text-red-500 bg-red-50 border-red-200",
  };
  
  const statusLabels = {
    open: "Open",
    in_progress: "In Progress",
    resolved: "Resolved",
    closed: "Closed",
  };
  
  const priorityLabels = {
    low: "Low",
    medium: "Medium", 
    high: "High",
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">ID</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Title</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Status</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Priority</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Created</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">User</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="ticket-row border-b">
              <td className="px-4 py-3 text-sm">{ticket.id}</td>
              <td className="px-4 py-3 text-sm font-medium">{ticket.title}</td>
              <td className="px-4 py-3 text-sm">
                <Badge 
                  className={`border ${statusColors[ticket.status]}`}
                  variant="outline"
                >
                  {statusLabels[ticket.status]}
                </Badge>
              </td>
              <td className="px-4 py-3 text-sm">
                <Badge 
                  className={`border ${priorityColors[ticket.priority]}`}
                  variant="outline"
                >
                  {priorityLabels[ticket.priority]}
                </Badge>
              </td>
              <td className="px-4 py-3 text-sm text-muted-foreground">
                {new Date(ticket.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 text-sm">{ticket.userEmail}</td>
              <td className="px-4 py-3 text-sm">
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="h-8 px-2 text-xs"
                  >
                    View
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="h-8 px-2 text-xs"
                  >
                    Edit
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
