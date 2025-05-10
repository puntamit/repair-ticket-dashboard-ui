
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  Ticket, 
  Users, 
  Settings, 
  Calendar 
} from "lucide-react";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const location = useLocation();
  
  const navItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/",
    },
    {
      title: "Tickets",
      icon: <Ticket size={20} />,
      path: "/tickets",
    },
    {
      title: "Users",
      icon: <Users size={20} />,
      path: "/users",
    },
    {
      title: "Calendar",
      icon: <Calendar size={20} />,
      path: "/calendar",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/settings",
    },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 h-screen bg-white border-r transition-all z-10 ${
        open ? "w-64" : "w-16"
      }`}
    >
      <div className="p-4 flex items-center justify-between border-b">
        {open && (
          <h2 className="text-xl font-bold text-primary">Ticket Admin</h2>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="p-1.5 rounded-lg bg-secondary hover:bg-accent transition-colors"
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
      
      <nav className="mt-6 px-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`sidebar-item ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.icon}
                {open && <span>{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
