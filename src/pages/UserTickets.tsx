
import React, { useState } from "react";
import { TicketForm } from "@/components/tickets/TicketForm";
import { UserTicketHistory } from "@/components/tickets/UserTicketHistory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, History } from "lucide-react";

const UserTickets = () => {
  // Mock data สำหรับประวัติการแจ้งซ่อม - ในการใช้งานจริงข้อมูลควรมาจาก API
  const [userTickets] = useState([
    {
      id: "TK001",
      title: "คอมพิวเตอร์ไม่สามารถเปิดได้",
      createdAt: "2025-05-12T08:30:00",
      status: "in_progress" as const,
      priority: "high" as const,
      type: "hardware",
    },
    {
      id: "TK002",
      title: "ไม่สามารถเข้าระบบอีเมลได้",
      createdAt: "2025-05-10T14:20:00",
      status: "resolved" as const,
      priority: "medium" as const,
      type: "software",
    },
    {
      id: "TK003",
      title: "เครื่องปริ้นเตอร์ไม่ทำงาน",
      createdAt: "2025-05-08T09:15:00",
      status: "closed" as const,
      priority: "low" as const,
      type: "hardware",
    },
    {
      id: "TK004",
      title: "อินเตอร์เน็ตช้าผิดปกติ",
      createdAt: "2025-05-05T16:45:00",
      status: "open" as const,
      priority: "high" as const,
      type: "network",
    }
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">ระบบแจ้งซ่อม</h1>
        <p className="text-muted-foreground">แจ้งปัญหาและติดตามสถานะการซ่อมของคุณ</p>
      </div>

      <div className="hidden md:block">
        <div className="grid gap-6 md:grid-cols-2">
          <TicketForm />
          <UserTicketHistory tickets={userTickets} />
        </div>
      </div>

      {/* แสดงแบบ Tabs บนมือถือ */}
      <div className="block md:hidden">
        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="form" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              แจ้งซ่อม
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              ประวัติ
            </TabsTrigger>
          </TabsList>
          <TabsContent value="form">
            <TicketForm />
          </TabsContent>
          <TabsContent value="history">
            <UserTicketHistory tickets={userTickets} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserTickets;
