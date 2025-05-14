
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Users from "./pages/Users";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Employee from "./pages/Employee.jsx";
import Login from "./pages/Login";
import UserTickets from "./pages/UserTickets";

const queryClient = new QueryClient();

const App = () => {
  // สำหรับตัวอย่าง สถานะการเข้าสู่ระบบเป็น false (ในความเป็นจริงให้ใช้ context หรือ state management)
  const isAuthenticated = false;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* หน้าเข้าสู่ระบบ */}
            <Route path="/login" element={<Login />} />
            
            {/* หน้าผู้ใช้งาน */}
            <Route path="/user-tickets" element={
              isAuthenticated ?
              <DashboardLayout>
                <UserTickets />
              </DashboardLayout> :
              <Navigate to="/login" />
            } />
            
            {/* หน้าหลักที่ต้องเข้าสู่ระบบ */}
            <Route path="/" element={
              isAuthenticated ? 
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout> : 
              <Navigate to="/login" />
            } />
            <Route path="/tickets" element={
              isAuthenticated ?
              <DashboardLayout>
                <Tickets />
              </DashboardLayout> :
              <Navigate to="/login" />
            } />
            <Route path="/users" element={
              isAuthenticated ?
              <DashboardLayout>
                <Users />
              </DashboardLayout> :
              <Navigate to="/login" />
            } />
            <Route path="/calendar" element={
              isAuthenticated ?
              <DashboardLayout>
                <Calendar />
              </DashboardLayout> :
              <Navigate to="/login" />
            } />
            <Route path="/settings" element={
              isAuthenticated ?
              <DashboardLayout>
                <Settings />
              </DashboardLayout> :
              <Navigate to="/login" />
            } />
            <Route path="/employee" element={
              isAuthenticated ?
              <DashboardLayout>
                <Employee />
              </DashboardLayout> :
              <Navigate to="/login" />
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
