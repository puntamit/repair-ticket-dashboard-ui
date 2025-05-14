
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { History } from "lucide-react";

interface UserTicket {
  id: string;
  title: string;
  createdAt: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
  type: string;
}

interface UserTicketHistoryProps {
  tickets: UserTicket[];
}

export function UserTicketHistory({ tickets }: UserTicketHistoryProps) {
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
    open: "รอดำเนินการ",
    in_progress: "กำลังดำเนินการ",
    resolved: "ซ่อมสำเร็จ",
    closed: "ปิดงาน",
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm space-y-4">
      <div className="flex items-center gap-2 p-6 pb-2">
        <History className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-medium">ประวัติการแจ้งซ่อม</h3>
      </div>
      
      <div className="overflow-x-auto">
        {tickets.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <p className="text-muted-foreground mb-2">ไม่พบประวัติการแจ้งซ่อม</p>
            <p className="text-sm text-muted-foreground">
              ประวัติการแจ้งซ่อมของคุณจะแสดงที่นี่
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>เลขที่</TableHead>
                <TableHead>หัวข้อ</TableHead>
                <TableHead>วันที่แจ้ง</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>ความเร่งด่วน</TableHead>
                <TableHead>การดำเนินการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>{ticket.title}</TableCell>
                  <TableCell>{new Date(ticket.createdAt).toLocaleDateString('th-TH')}</TableCell>
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
                      {ticket.priority === 'low' ? 'ต่ำ' : ticket.priority === 'medium' ? 'ปานกลาง' : 'สูง'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-8 px-2 text-xs"
                    >
                      รายละเอียด
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
