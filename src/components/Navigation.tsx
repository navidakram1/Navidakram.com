"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  User, 
  FileText, 
  Briefcase, 
  BookOpen, 
  Mail, 
  Menu, 
  X, 
  Download, 
  Phone, 
  DollarSign
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { VerifiedBadge } from "@/components/ui/verified-badge";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const navTabs = [
  { id: "about", label: "ABOUT", icon: User },
  { id: "resume", label: "RESUME", icon: FileText },
  { id: "projects", label: "PROJECTS", icon: Briefcase },
  { id: "articles", label: "ARTICLES", icon: BookOpen },
  { id: "contact", label: "CONTACT", icon: Mail },
];

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP DOCK (ATTACHED TO PROFILE CARD) ================= */}
      <aside className="hidden xl:flex flex-col items-center justify-center py-6 px-2.5 z-40 bg-[#1c1e2b]/95 backdrop-blur-xl rounded-[28px] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] w-[72px] min-h-[440px] my-auto -mr-4 relative flex-shrink-0">
        {/* Blue Contour Trace Arc */}
        <div className="absolute -left-2 -top-2 -bottom-2 right-4 rounded-l-[36px] border-l-2 border-t-2 border-b-2 border-[#0084ff]/30 -z-10 pointer-events-none" />

        {/* Navigation Items */}
        <div className="flex flex-col items-center gap-5 w-full">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                suppressHydrationWarning
                onClick={() => setActiveTab(tab.id)}
                className={`group flex flex-col items-center justify-center w-full py-2.5 rounded-2xl transition-all duration-300 relative ${
                  isActive
                    ? "text-[#0084ff]"
                    : "text-gray-400 hover:text-white"
                }`}
                title={tab.label}
              >
                {/* Active Indicator on Left */}
                {isActive && (
                  <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-7 bg-[#0084ff] rounded-r-full shadow-[0_0_12px_#0084ff]" />
                )}

                <Icon 
                  size={20} 
                  className={`transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "text-[#0084ff] drop-shadow-[0_0_8px_rgba(0,132,255,0.6)]" : "text-gray-400"
                  }`} 
                />
                <span className={`text-[9px] font-bold tracking-wider mt-1 uppercase ${
                  isActive ? "text-[#0084ff]" : "text-gray-400 group-hover:text-gray-200"
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* ================= MOBILE STICKY TOP HEADER ================= */}
      <header className="xl:hidden sticky top-0 z-50 bg-[#1b1d2a]/95 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Mascot Avatar & Name */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#0084ff] bg-[#161722]">
              <Image
                src={portfolioData.personal.avatarImage}
                alt="Avatar"
                fill
                className="object-cover scale-110"
                unoptimized
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-sm font-bold text-white leading-tight">
                  {portfolioData.personal.name}
                </h1>
                <VerifiedBadge variant="shimmer" size={15} />
              </div>
              <p className="text-xs text-[#0084ff] font-medium">
                {portfolioData.personal.titles[0]}
              </p>
            </div>
          </div>

          {/* Action buttons (Menu) */}
          <div className="flex items-center gap-2">
            <button
              suppressHydrationWarning
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Action Sub-Bar */}
        <div className="grid grid-cols-3 border-t border-white/10 bg-[#161722] text-[11px] font-bold uppercase tracking-wider text-center divide-x divide-white/5">
          <a
            href={portfolioData.personal.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-2 text-gray-300 hover:text-white flex items-center justify-center gap-1"
          >
            <Download size={13} className="text-[#0084ff]" />
            <span>Download CV</span>
          </a>
          <a
            href={portfolioData.personal.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-2 text-gray-300 hover:text-white flex items-center justify-center gap-1"
          >
            <Phone size={13} className="text-[#0084ff]" />
            <span>Contact Me</span>
          </a>
          <a
            href={portfolioData.personal.stripeGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-2 text-gray-300 hover:text-white flex items-center justify-center gap-1"
          >
            <DollarSign size={13} className="text-[#0084ff]" />
            <span>Payment</span>
          </a>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <nav className="border-t border-white/10 bg-[#1e202d] p-4 flex flex-col gap-2 animate-in fade-in duration-200">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  suppressHydrationWarning
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition ${
                    isActive
                      ? "bg-[#0084ff] text-white shadow-lg shadow-[#0084ff]/40"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        )}
      </header>
    </>
  );
}
