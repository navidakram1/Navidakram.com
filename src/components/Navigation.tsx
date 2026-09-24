"use client";

import React, { useState } from "react";
import { 
  User, 
  FileText, 
  Briefcase, 
  BookOpen, 
  Mail, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Download, 
  Phone, 
  DollarSign
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { VerifiedBadge } from "@/components/ui/verified-badge";
import { useTheme } from "@/components/ThemeContext";

export interface NavigationProps {
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

/**
 * Desktop docked vertical navigation bar (attached to profile card on XL+ screens)
 */
export function DesktopNavigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
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
  );
}

/**
 * Mobile sticky header and 5-item horizontal navigation bar
 * Matching exact example: Top Name + Title + Theme + Menu, followed by 5 horizontal tabs
 */
export function MobileNavigation({ activeTab, setActiveTab }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleTabSelect = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    const contentEl = document.getElementById("content-panel");
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="xl:hidden sticky top-0 z-50 bg-[#161722]/95 backdrop-blur-xl border-b border-white/10 shadow-xl w-full">
      {/* Top Bar: Name & Title on Left, Theme Toggle & Hamburger on Right */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <h1 className="text-base font-extrabold text-white tracking-tight">
              {portfolioData.personal.name}
            </h1>
            <VerifiedBadge variant="shimmer" size={15} />
          </div>
          <p className="text-xs text-[#0084ff] font-semibold tracking-wide">
            {portfolioData.personal.titles[0]}
          </p>
        </div>

        {/* Action Controls: Theme Switcher + Menu Button */}
        <div className="flex items-center gap-1.5">
          <button
            suppressHydrationWarning
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition"
          >
            {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
          </button>

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

      {/* Horizontal 5 Navigation Tabs (Exact Match to Example) */}
      <nav className="grid grid-cols-5 bg-[#12131d]/95 divide-x divide-white/5">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              suppressHydrationWarning
              onClick={() => handleTabSelect(tab.id)}
              className={`flex flex-col items-center justify-center py-2.5 px-0.5 transition-all relative ${
                isActive
                  ? "text-[#0084ff] bg-[#0084ff]/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {/* Active Top Highlight Line */}
              {isActive && (
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#0084ff] shadow-[0_0_8px_#0084ff]" />
              )}

              <Icon
                size={18}
                className={`transition-transform duration-200 ${
                  isActive ? "text-[#0084ff] drop-shadow-[0_0_8px_rgba(0,132,255,0.6)] scale-110" : "text-gray-400"
                }`}
              />
              <span className={`text-[9px] font-bold tracking-wider uppercase mt-1 ${
                isActive ? "text-[#0084ff]" : "text-gray-400"
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#181926] p-4 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex flex-col gap-1.5">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  suppressHydrationWarning
                  onClick={() => handleTabSelect(tab.id)}
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
          </div>

          {/* Quick Action Links Bar in Drawer */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-[11px] font-bold">
            <a
              href={portfolioData.personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 flex flex-col items-center justify-center gap-1 transition"
            >
              <Download size={14} className="text-[#0084ff]" />
              <span>Download CV</span>
            </a>
            <a
              href={portfolioData.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 flex flex-col items-center justify-center gap-1 transition"
            >
              <Phone size={14} className="text-[#0084ff]" />
              <span>Contact Me</span>
            </a>
            <a
              href={portfolioData.personal.stripeGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 flex flex-col items-center justify-center gap-1 transition"
            >
              <DollarSign size={14} className="text-[#0084ff]" />
              <span>Payment</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// Default export wrapper for backward compatibility
export function Navigation(props: NavigationProps) {
  return <DesktopNavigation {...props} />;
}

