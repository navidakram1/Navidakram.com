"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ExternalLink, 
  Play, 
  Layers, 
  Image as ImageIcon, 
  Link as LinkIcon, 
  FileText 
} from "lucide-react";
import { portfolioData, ProjectItem } from "@/data/portfolio";

const categories = ["All", "Video", "Link", "Image", "Gallery", "Content"] as const;

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* ================= SECTION HEADER ================= */}
      <div className="flex items-center gap-3 border-b border-white/10 pb-5">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#0084ff]/20 border border-[#0084ff]/40 text-[#00d2ff] font-black text-xl shadow-[0_0_15px_rgba(0,132,255,0.4)]">
          P
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          ortfolio & Works
        </h2>
      </div>

      {/* ================= CATEGORY FILTER TABS ================= */}
      <div className="flex items-center gap-2 flex-wrap pb-2">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              suppressHydrationWarning
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                isSelected
                  ? "bg-[#0084ff] text-white shadow-lg shadow-[#0084ff]/30 scale-105"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* ================= PROJECTS GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project: ProjectItem) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-[#161722] border border-white/10 overflow-hidden hover:border-[#0084ff]/50 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Project Image Banner */}
            <div className="relative w-full h-52 sm:h-60 bg-[#1e202e] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161722] via-transparent to-transparent opacity-80" />

              {/* Category Badge */}
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0084ff]/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                {project.category}
              </span>

              {/* Overlay Action Icon */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#0084ff] text-white flex items-center justify-center shadow-lg shadow-[#0084ff]/50 scale-75 group-hover:scale-100 transition-transform duration-300">
                  {project.isVideo ? <Play size={20} className="ml-0.5" /> : <ExternalLink size={20} />}
                </div>
              </a>
            </div>

            {/* Project Info */}
            <div className="p-5 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-[#00d2ff]">
                  {project.type}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-[#00d2ff] transition-colors line-clamp-1 mt-0.5">
                  {project.title}
                </h4>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#0084ff] text-gray-400 group-hover:text-white transition-all flex-shrink-0"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
