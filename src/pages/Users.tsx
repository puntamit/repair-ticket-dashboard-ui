
import React, { useState } from "react";
import { UserTable } from "@/components/users/UserTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Mock data for users
  const allUsers = [
    {
      id: "USR-001",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "user" as const,
      status: "active" as const,
      ticketCount: 3,
    },
    {
      id: "USR-002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "user" as const,
      status: "active" as const,
      ticketCount: 1,
    },
    {
      id: "USR-003",
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      role: "user" as const,
      status: "active" as const,
      ticketCount: 2,
    },
    {
      id: "USR-004",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      role: "user" as const,
      status: "inactive" as const,
      ticketCount: 0,
    },
    {
      id: "USR-005",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "technician" as const,
      status: "active" as const,
      ticketCount: 5,
    },
    {
      id: "USR-006",
      name: "Lisa Taylor",
      email: "lisa.taylor@example.com",
      role: "user" as const,
      status: "active" as const,
      ticketCount: 1,
    },
    {
      id: "USR-007",
      name: "David Miller",
      email: "david.miller@example.com",
      role: "user" as const,
      status: "active" as const,
      ticketCount: 2,
    },
    {
      id: "USR-008",
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      role: "admin" as const,
      status: "active" as const,
      ticketCount: 0,
    },
    {
      id: "USR-009",
      name: "James Anderson",
      email: "james.anderson@example.com",
      role: "technician" as const,
      status: "active" as const,
      ticketCount: 7,
    },
    {
      id: "USR-010",
      name: "Olivia Martin",
      email: "olivia.martin@example.com",
      role: "user" as const,
      status: "inactive" as const,
      ticketCount: 0,
    },
  ];

  // Filter users based on search query and filters
  const filteredUsers = allUsers.filter((user) => {
    let matchesSearch = true;
    if (searchQuery) {
      matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.id.toLowerCase().includes(searchQuery.toLowerCase());
    }

    let matchesRole = true;
    if (roleFilter) {
      matchesRole = user.role === roleFilter;
    }

    let matchesStatus = true;
    if (statusFilter) {
      matchesStatus = user.status === statusFilter;
    }

    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-muted-foreground">Manage users and access control</p>
      </div>

      <div className="dashboard-card">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
          
          <div className="flex gap-4">
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="technician">Technician</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            
            <Button>
              New User
            </Button>
          </div>
        </div>
        
        <UserTable users={filteredUsers} />
      </div>
    </div>
  );
};

export default Users;
