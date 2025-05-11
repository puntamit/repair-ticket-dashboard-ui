
import React, { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, Briefcase, UserRound } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Employee = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock employee data
  const [employee, setEmployee] = useState({
    id: "EMP-001",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    department: "IT Support",
    position: "Senior Technician",
    joinedDate: "2022-05-15",
    supervisor: "Emma Wilson",
  });
  
  // Mock tickets assigned to the employee
  const assignedTickets = [
    {
      id: "TK-1001",
      title: "Network connectivity issue",
      status: "in_progress",
      priority: "high",
      createdAt: "2025-05-08T10:30:00Z",
      clientName: "Robert Johnson"
    },
    {
      id: "TK-1002",
      title: "Software installation request",
      status: "open",
      priority: "medium",
      createdAt: "2025-05-09T14:20:00Z",
      clientName: "Sarah Williams"
    },
    {
      id: "TK-1003",
      title: "Password reset",
      status: "resolved",
      priority: "low",
      createdAt: "2025-05-07T09:15:00Z",
      clientName: "Michael Brown"
    },
  ];
  
  const [formData, setFormData] = useState({...employee});
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSave = () => {
    setEmployee(formData);
    setIsEditing(false);
  };
  
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
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        <p className="text-muted-foreground">Manage your profile and assigned tickets</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserRound size={20} />
              Profile Information
            </CardTitle>
            <CardDescription>Your personal and work details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <User size={40} />
              </div>
              <h3 className="text-xl font-bold">{employee.name}</h3>
              <p className="text-muted-foreground">{employee.position}</p>
              <Badge className="mt-2">{employee.department}</Badge>
            </div>
            
            {isEditing ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name} 
                    onChange={handleInputChange} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    value={formData.phone} 
                    onChange={handleInputChange} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input 
                    id="position" 
                    name="position"
                    value={formData.position} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{employee.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{employee.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BriefCase className="w-4 h-4 text-muted-foreground" />
                  <span>Reports to: {employee.supervisor}</span>
                </div>
                <div className="pt-2">
                  <span className="text-sm text-muted-foreground">
                    Employee since: {formatDate(employee.joinedDate)}
                  </span>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            {isEditing ? (
              <div className="flex w-full gap-2">
                <Button onClick={handleSave} className="flex-1">Save Changes</Button>
                <Button onClick={() => {
                  setIsEditing(false);
                  setFormData({...employee});
                }} variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            ) : (
              <Button onClick={() => setIsEditing(true)} variant="outline" className="w-full">
                Edit Profile
              </Button>
            )}
          </CardFooter>
        </Card>
        
        {/* Assigned Tickets */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Assigned Tickets</CardTitle>
            <CardDescription>Current tickets assigned to you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assignedTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.title}</TableCell>
                      <TableCell>{ticket.clientName}</TableCell>
                      <TableCell>
                        <Badge 
                          className={`border ${statusColors[ticket.status as keyof typeof statusColors]}`}
                          variant="outline"
                        >
                          {statusLabels[ticket.status as keyof typeof statusLabels]}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          className={`border ${priorityColors[ticket.priority as keyof typeof priorityColors]}`}
                          variant="outline"
                        >
                          {priorityLabels[ticket.priority as keyof typeof priorityLabels]}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDate(ticket.createdAt)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Tickets</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Employee;
