
import React from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";

interface TicketChartProps {
  data: {
    name: string;
    new: number;
    resolved: number;
    pending: number;
  }[];
  timeframe: "daily" | "weekly" | "monthly";
}

export function TicketChart({ data, timeframe }: TicketChartProps) {
  return (
    <div className="dashboard-card h-[350px]">
      <div className="mb-4">
        <h3 className="text-lg font-medium">Ticket Overview</h3>
        <p className="text-sm text-muted-foreground">
          {timeframe === "daily" && "Last 7 days"}
          {timeframe === "weekly" && "Last 4 weeks"}
          {timeframe === "monthly" && "Last 6 months"}
        </p>
      </div>
      
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: '#EEE' }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: '#EEE' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              borderRadius: '8px',
              border: '1px solid #eee',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
            }} 
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="new" 
            stroke="#3B82F6" 
            strokeWidth={2} 
            dot={{ fill: '#3B82F6', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="resolved" 
            stroke="#10B981" 
            strokeWidth={2} 
            dot={{ fill: '#10B981', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="pending" 
            stroke="#F59E0B" 
            strokeWidth={2} 
            dot={{ fill: '#F59E0B', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
