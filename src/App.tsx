import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Users from "./pages/Users";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Employee from "./pages/Employee.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } />
          <Route path="/tickets" element={
            <DashboardLayout>
              <Tickets />
            </DashboardLayout>
          } />
          <Route path="/users" element={
            <DashboardLayout>
              <Users />
            </DashboardLayout>
          } />
          <Route path="/calendar" element={
            <DashboardLayout>
              <Calendar />
            </DashboardLayout>
          } />
          <Route path="/settings" element={
            <DashboardLayout>
              <Settings />
            </DashboardLayout>
          } />
          <Route path="/employee" element={
            <DashboardLayout>
              <Employee />
            </DashboardLayout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
