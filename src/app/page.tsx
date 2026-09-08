"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ProfileCard } from "@/components/ProfileCard";
import { AboutSection } from "@/components/AboutSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-[#0d0e15] text-gray-100 relative">
      {/* Background Ambient Glow Lights */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#0084ff]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Container without overlap */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
        <div className="flex flex-col xl:flex-row items-start gap-8 justify-center">
          {/* ================= LEFT COLUMN: DOCKED NAVIGATION + PROFILE HERO CARD ================= */}
          <div className="w-full xl:w-auto flex items-center justify-center xl:sticky xl:top-8 flex-shrink-0 mx-auto xl:mx-0">
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <ProfileCard />
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE CONTENT PANEL ================= */}
          <div className="w-full flex-1 max-w-4xl min-w-0">
            <div className="bg-[#1e202d] rounded-[36px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-6 sm:p-8 lg:p-10 transition-all duration-300">
              {activeTab === "about" && <AboutSection />}
              {activeTab === "resume" && <ResumeSection />}
              {activeTab === "projects" && <ProjectsSection />}
              {activeTab === "articles" && <BlogSection />}
              {activeTab === "contact" && <ContactSection />}
            </div>

            {/* Footer Copyright */}
            <footer className="mt-8 text-center text-xs text-gray-500 py-4">
              <p>
                © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Sk Navid Akram</span>. All rights reserved. Built with Next.js, Tailwind CSS & 21st UI.
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
