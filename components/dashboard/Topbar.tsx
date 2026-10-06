"use client";

import {
  Bell,
  BriefcasePlus,
  ChevronDown,
  FileUp,
  Menu,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface TopbarProps {
  onToggleSidebar: () => void;
}

export default function Topbar({ onToggleSidebar }: TopbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-20 px-5 sm:px-8 bg-white/80 backdrop-blur-md border-b border-gray-100">
      {/* Left: Mobile Toggle & Global Search */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search resumes, jobs, matches..."
            className="w-full pl-9 pr-10 py-2.5 text-xs bg-gray-50/70 border border-gray-200/80 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[var(--primary)]/40 focus:ring-2 focus:ring-[var(--primary)]/10 transition-all"
          />
          <kbd className="hidden sm:inline-flex absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[9px] font-mono text-gray-400 bg-white border border-gray-200 rounded">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right: Quick Action, Notification & Avatar */}
      <div className="flex items-center gap-3">
        {/* Quick Action Button */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="group inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">New Action</span>
            <ChevronDown className="w-3 h-3 opacity-70" />
          </button>

          {dropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setDropdownOpen(false)}
              />
              <div className="absolute right-0 z-20 w-48 mt-2 py-1.5 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/60 animate-in fade-in zoom-in-95">
                <Link
                  href="/resumes?action=upload"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[var(--primary)] transition-colors"
                >
                  <FileUp className="w-4 h-4 text-[var(--primary)]" />
                  <span>Upload Resume</span>
                </Link>
                <Link
                  href="/jobs?action=create"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[var(--primary)] transition-colors"
                >
                  <BriefcasePlus className="w-4 h-4 text-[var(--primary)]" />
                  <span>Add Job Target</span>
                </Link>
                <div className="my-1 border-t border-gray-100" />
                <Link
                  href="/analysis"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[var(--secondary)] transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[var(--secondary)]" />
                  <span>Run Match Analysis</span>
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Notifications */}
        <button className="relative p-2.5 rounded-xl border border-gray-200/80 bg-white text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-all">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[var(--secondary)] ring-2 ring-white" />
        </button>

        {/* Avatar */}
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--secondary)]/10 text-[var(--secondary)] font-bold text-xs cursor-pointer hover:bg-[var(--secondary)]/20 transition-colors">
          ✦
        </div>
      </div>
    </header>
  );
}
