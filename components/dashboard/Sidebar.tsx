"use client";

import {
  Briefcase,
  FileText,
  KanbanSquare,
  LayoutDashboard,
  LogOut,
  Mail,
  Mic,
  Settings,
  Sparkles,
  Wand2,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navSections = [
  {
    category: "Main",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "My Resumes", href: "/resumes", icon: FileText, count: "3" },
      { name: "Target Jobs", href: "/jobs", icon: Briefcase, count: "15" },
    ],
  },
  {
    category: "AI Tools",
    items: [
      { name: "Job Matches", href: "/analysis", icon: Sparkles, badge: "AI" },
      { name: "Tailored Resume", href: "/tailored-resume", icon: Wand2 },
      { name: "Cover Letters", href: "/cover-letters", icon: Mail },
      { name: "Interview Prep", href: "/interviews", icon: Mic },
    ],
  },
  {
    category: "Management",
    items: [
      { name: "Applications", href: "/applications", icon: KanbanSquare },
      { name: "Settings", href: "/settings", icon: Settings },
    ],
  },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = "/signin";
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-gray-950/40 backdrop-blur-xs lg:hidden transition-opacity"
        />
      )}

      {/* Full-Screen Edge-to-Edge Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Header / Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-100 shrink-0">
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-[var(--primary)]">
              JobPilot
            </span>
            <span className="h-2 w-2 rounded-full bg-[var(--secondary)] animate-pulse" />
          </Link>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 px-3 py-5 overflow-y-auto space-y-6">
          {navSections.map((section) => (
            <div key={section.category}>
              <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--secondary)]">
                {section.category}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={`group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                        isActive
                          ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20"
                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-4 h-4 transition-colors ${
                            isActive
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-700"
                          }`}
                        />
                        <span>{item.name}</span>
                      </div>

                      {/* Pill Badge */}
                      {"badge" in item && item.badge && (
                        <span
                          className={`px-1.5 py-0.5 text-[9px] font-bold rounded ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-[var(--primary)]/10 text-[var(--primary)]"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}

                      {/* Number Count */}
                      {"count" in item && item.count && (
                        <span
                          className={`text-[11px] font-medium ${
                            isActive ? "text-white/80" : "text-gray-400"
                          }`}
                        >
                          {item.count}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom User Profile */}
        <div className="p-3 border-t border-gray-100 bg-gray-50/50 shrink-0">
          <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)] font-bold text-xs text-white">
                PR
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-gray-900 truncate leading-none">
                  Parvez Rahman
                </p>
                <p className="text-[10px] text-gray-400 truncate mt-1">
                  parvez@example.com
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Sign Out"
              className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
