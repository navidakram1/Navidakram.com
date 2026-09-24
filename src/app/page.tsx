"use client";

import React, { useState, useEffect, useRef } from "react";
import { DesktopNavigation, MobileNavigation } from "@/components/Navigation";
import { ProfileCard } from "@/components/ProfileCard";
import { AboutSection } from "@/components/AboutSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";

const sectionIds = ["about", "resume", "projects", "articles", "contact"] as const;

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("about");
  const isProgrammaticScroll = useRef(false);

  // Synchronize active navigation indicator with viewport scroll position (Scroll-Spy)
  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      // Bottom of page check: automatically highlight the last section ('contact')
      const scrollBottom = window.innerHeight + window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= totalHeight - 60) {
        setActiveTab("contact");
        return;
      }

      // Trigger line: 35% down from top of viewport
      const triggerY = window.innerHeight * 0.35;
      let currentSection: string = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY) {
            currentSection = id;
          }
        }
      }

      setActiveTab(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabSelect = (tabId: string) => {
    setActiveTab(tabId);
    isProgrammaticScroll.current = true;
    const el = document.getElementById(tabId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 750);
  };

  return (
    <div className="min-h-screen bg-[#0d0e15] text-gray-100 relative">
      {/* Background Ambient Glow Lights */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#0084ff]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ================= MOBILE STICKY TOP HEADER & 5-TAB BAR ================= */}
      <MobileNavigation activeTab={activeTab} setActiveTab={setActiveTab} onTabSelect={handleTabSelect} />

      {/* Main Container */}
      <main className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-6 sm:gap-8 justify-center">
          {/* ================= LEFT COLUMN: DOCKED NAVIGATION (DESKTOP ONLY) + PROFILE HERO CARD ================= */}
          <div className="w-full xl:w-auto flex items-center justify-center xl:sticky xl:top-8 flex-shrink-0 mx-auto xl:mx-0">
            <DesktopNavigation activeTab={activeTab} setActiveTab={setActiveTab} onTabSelect={handleTabSelect} />
            <ProfileCard />
          </div>

          {/* ================= RIGHT COLUMN: CONTINUOUS SCROLLING SECTIONS STACK ================= */}
          <div id="content-panel" className="w-full flex-1 max-w-4xl min-w-0 space-y-8 sm:space-y-12">
            {/* About Section */}
            <section
              id="about"
              className="scroll-mt-28 xl:scroll-mt-8 bg-[#1e202d] rounded-[28px] sm:rounded-[36px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-5 sm:p-8 lg:p-10 transition-all duration-300"
            >
              <AboutSection />
            </section>

            {/* Resume Section */}
            <section
              id="resume"
              className="scroll-mt-28 xl:scroll-mt-8 bg-[#1e202d] rounded-[28px] sm:rounded-[36px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-5 sm:p-8 lg:p-10 transition-all duration-300"
            >
              <ResumeSection />
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="scroll-mt-28 xl:scroll-mt-8 bg-[#1e202d] rounded-[28px] sm:rounded-[36px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-5 sm:p-8 lg:p-10 transition-all duration-300"
            >
              <ProjectsSection />
            </section>

            {/* Articles / Blog Section */}
            <section
              id="articles"
              className="scroll-mt-28 xl:scroll-mt-8 bg-[#1e202d] rounded-[28px] sm:rounded-[36px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-5 sm:p-8 lg:p-10 transition-all duration-300"
            >
              <BlogSection />
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className="scroll-mt-28 xl:scroll-mt-8 bg-[#1e202d] rounded-[28px] sm:rounded-[36px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-5 sm:p-8 lg:p-10 transition-all duration-300"
            >
              <ContactSection />
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
