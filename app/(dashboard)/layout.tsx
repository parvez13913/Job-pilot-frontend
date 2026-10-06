"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex">
      {/* Background ambient orbs identical to HomePage */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[var(--primary)]/5 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[var(--secondary)]/10 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      </div>

      {/* Sidebar Navigation */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        <Topbar onToggleSidebar={() => setSidebarOpen(true)} />

        <main className="flex-1 p-5 sm:p-8 lg:p-10 w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
