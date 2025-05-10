
import React, { useState } from "react";
import { StatsCard } from "@/components/stats/StatsCard";
import { TicketChart } from "@/components/charts/TicketChart";
import { TicketTable } from "@/components/tickets/TicketTable";
import { Ticket, Users, CheckCheck, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "monthly">("daily");
  
  // Mock data for tickets
  const recentTickets = [
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
  ];

  // Mock data for charts
  const dailyData = [
    { name: "Mon", new: 4, resolved: 2, pending: 2 },
    { name: "Tue", new: 3, resolved: 5, pending: 0 },
    { name: "Wed", new: 5, resolved: 3, pending: 2 },
    { name: "Thu", new: 7, resolved: 4, pending: 5 },
    { name: "Fri", new: 2, resolved: 6, pending: 1 },
    { name: "Sat", new: 1, resolved: 2, pending: 0 },
    { name: "Sun", new: 0, resolved: 1, pending: 0 },
  ];

  const weeklyData = [
    { name: "Week 1", new: 22, resolved: 19, pending: 3 },
    { name: "Week 2", new: 18, resolved: 20, pending: 1 },
    { name: "Week 3", new: 25, resolved: 22, pending: 4 },
    { name: "Week 4", new: 15, resolved: 18, pending: 2 },
  ];

  const monthlyData = [
    { name: "Jan", new: 78, resolved: 75, pending: 8 },
    { name: "Feb", new: 65, resolved: 68, pending: 5 },
    { name: "Mar", new: 90, resolved: 85, pending: 10 },
    { name: "Apr", new: 81, resolved: 79, pending: 12 },
    { name: "May", new: 56, resolved: 60, pending: 8 },
    { name: "Jun", new: 55, resolved: 50, pending: 13 },
  ];

  const chartData = {
    daily: dailyData,
    weekly: weeklyData,
    monthly: monthlyData,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Ticket management overview</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Tickets" 
          value="248" 
          icon={<Ticket size={24} />} 
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard 
          title="Active Users" 
          value="184" 
          icon={<Users size={24} />} 
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard 
          title="Resolved" 
          value="195" 
          icon={<CheckCheck size={24} />} 
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard 
          title="Avg. Response Time" 
          value="2.4h" 
          icon={<Clock size={24} />} 
          trend={{ value: 10, isPositive: false }}
        />
      </div>
      
      <Tabs defaultValue="daily" onValueChange={(value) => setTimeframe(value as any)}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Ticket Analytics</h2>
          <TabsList>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="daily">
          <TicketChart data={chartData.daily} timeframe="daily" />
        </TabsContent>
        <TabsContent value="weekly">
          <TicketChart data={chartData.weekly} timeframe="weekly" />
        </TabsContent>
        <TabsContent value="monthly">
          <TicketChart data={chartData.monthly} timeframe="monthly" />
        </TabsContent>
      </Tabs>
      
      <div className="dashboard-card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Recent Tickets</h2>
          <button className="text-sm font-medium text-primary hover:underline">
            View all tickets
          </button>
        </div>
        <TicketTable tickets={recentTickets} />
      </div>
    </div>
  );
};

export default Dashboard;
