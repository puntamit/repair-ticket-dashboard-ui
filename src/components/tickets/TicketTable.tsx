
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
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

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTickets = tickets.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tickets.length / itemsPerPage);
  
  // Handle page changes
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || 
      i === totalPages || 
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pageNumbers.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pageNumbers.push(null); // For ellipsis
    }
  }

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTickets.map((ticket) => (
              <TableRow key={ticket.id} className="ticket-row">
                <TableCell className="font-medium">{ticket.id}</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>
                  <Badge 
                    className={`border ${statusColors[ticket.status]}`}
                    variant="outline"
                  >
                    {statusLabels[ticket.status]}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    className={`border ${priorityColors[ticket.priority]}`}
                    variant="outline"
                  >
                    {priorityLabels[ticket.priority]}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Date(ticket.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{ticket.userEmail}</TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {tickets.length > itemsPerPage && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={prevPage} 
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {pageNumbers.map((number, index) => (
              number === null ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={number}>
                  <PaginationLink 
                    isActive={currentPage === number}
                    onClick={() => paginate(number as number)}
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              )
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={nextPage} 
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
