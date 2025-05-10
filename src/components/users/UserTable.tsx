
import React from "react";
import { Badge } from "@/components/ui/badge";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "technician";
  status: "active" | "inactive";
  ticketCount: number;
}

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  const statusColors = {
    active: "text-green-500 bg-green-50 border-green-200",
    inactive: "text-gray-500 bg-gray-50 border-gray-200",
  };
  
  const roleColors = {
    admin: "text-purple-500 bg-purple-50 border-purple-200",
    user: "text-blue-500 bg-blue-50 border-blue-200",
    technician: "text-orange-500 bg-orange-50 border-orange-200",
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">ID</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Name</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Email</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Role</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Status</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Tickets</th>
            <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-muted/50 transition-colors">
              <td className="px-4 py-3 text-sm">{user.id}</td>
              <td className="px-4 py-3 text-sm font-medium">{user.name}</td>
              <td className="px-4 py-3 text-sm">{user.email}</td>
              <td className="px-4 py-3 text-sm">
                <Badge 
                  className={`border ${roleColors[user.role]}`}
                  variant="outline"
                >
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Badge>
              </td>
              <td className="px-4 py-3 text-sm">
                <Badge 
                  className={`border ${statusColors[user.status]}`}
                  variant="outline"
                >
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </Badge>
              </td>
              <td className="px-4 py-3 text-sm text-center">{user.ticketCount}</td>
              <td className="px-4 py-3 text-sm">
                <div className="flex space-x-2">
                  <button className="text-xs px-2 py-1 text-primary hover:underline">
                    View
                  </button>
                  <button className="text-xs px-2 py-1 text-primary hover:underline">
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
