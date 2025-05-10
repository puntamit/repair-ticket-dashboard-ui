
import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <div className="stat-card">
      <div className="flex justify-between">
        <div>
          <p className="stat-label">{title}</p>
          <p className="stat-value">{value}</p>
        </div>
        <div className="bg-accent h-12 w-12 rounded-lg flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      
      {trend && (
        <div className="flex items-center mt-2">
          <span className={`text-xs font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
          </span>
          <span className="text-xs text-muted-foreground ml-2">vs last week</span>
        </div>
      )}
    </div>
  );
}
