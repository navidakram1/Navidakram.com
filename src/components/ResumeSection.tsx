"use client";

import React from "react";
import Image from "next/image";
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Globe, 
  CheckCircle2, 
  ChevronRight,
  Cpu,
  Award,
  Lock,
  ShieldCheck
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ResumeSection() {
  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      {/* ================= SECTION HEADER ================= */}
      <div className="flex items-center gap-3 border-b border-white/10 pb-5">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#0084ff]/20 border border-[#0084ff]/40 text-[#0084ff] font-black text-xl shadow-[0_0_15px_rgba(0,132,255,0.4)]">
          R
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          esume
        </h2>
      </div>

      {/* ================= EXPERIENCE & EDUCATION COLUMNS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Experience Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0084ff] text-white flex items-center justify-center shadow-lg shadow-[#0084ff]/30">
              <Briefcase size={20} />
            </div>
            <h3 className="text-lg font-extrabold text-white tracking-wider uppercase">
              EXPERIENCE
            </h3>
          </div>

          <div className="space-y-6 relative before:absolute before:left-2.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-white/10">
            {portfolioData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 group"
              >
                {/* Timeline Dot */}
                <span className="absolute left-[7px] top-6 w-2.5 h-2.5 rounded-full bg-[#0084ff] shadow-[0_0_8px_#0084ff]" />

                <div className="p-6 rounded-2xl bg-[#1d1f2c] border border-white/10 hover:border-[#0084ff]/40 transition-all duration-300 relative overflow-hidden">
                  {/* Top Right Logo or Watermark */}
                  {exp.logo && (
                    <div className="absolute top-5 right-5 w-16 h-8 opacity-70 group-hover:opacity-100 transition-opacity">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        className="object-contain object-right"
                        unoptimized
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-md border border-[#0084ff] text-[#0084ff] text-[11px] font-bold">
                      {exp.period}
                    </span>

                    <h4 className="text-lg font-bold text-white pt-1">
                      {exp.company}
                    </h4>

                    <p className="text-xs font-semibold text-gray-400">
                      {exp.role}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1">
                      {exp.description}
                    </p>

                    {exp.websiteUrl && (
                      <p className="text-xs pt-1">
                        <span className="text-gray-400">Website: </span>
                        <a
                          href={exp.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#0084ff] hover:underline"
                        >
                          Rabbitguy.com
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0084ff] text-white flex items-center justify-center shadow-lg shadow-[#0084ff]/30">
              <GraduationCap size={22} />
            </div>
            <h3 className="text-lg font-extrabold text-white tracking-wider uppercase">
              EDUCATION
            </h3>
          </div>

          <div className="space-y-6 relative before:absolute before:left-2.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-white/10">
            {portfolioData.education.map((edu, idx) => (
              <div
                key={idx}
                className="relative pl-8 group"
              >
                {/* Timeline Dot */}
                <span className="absolute left-[7px] top-6 w-2.5 h-2.5 rounded-full bg-[#0084ff] shadow-[0_0_8px_#0084ff]" />

                <div className="p-6 rounded-2xl bg-[#1d1f2c] border border-white/10 hover:border-[#0084ff]/40 transition-all duration-300 relative overflow-hidden">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3.5 min-w-0">
                      {edu.image && (
                        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.03] border border-white/10 p-2 flex items-center justify-center flex-shrink-0 group-hover:border-[#0084ff]/40 group-hover:bg-[#0084ff]/5 transition-all shadow-inner">
                          <Image
                            src={edu.image}
                            alt={edu.institution}
                            fill
                            className="object-contain p-1"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                          {edu.institution}
                        </h4>
                        <p className="text-xs font-semibold text-gray-400 mt-1">
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center px-2.5 py-1 rounded-md border border-[#0084ff] text-[#0084ff] text-[11px] font-bold flex-shrink-0 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <p className="text-xs sm:text-sm text-gray-200 font-medium">
                      {edu.degree}
                    </p>

                    {edu.rankInfo && (
                      <p className="text-xs text-gray-400 italic leading-relaxed">
                        {edu.rankInfo}
                      </p>
                    )}

                    {edu.certificateUrl && (
                      <div className="pt-2">
                        <a
                          href={edu.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0084ff] hover:text-white uppercase tracking-wider transition-colors"
                        >
                          <span>CERTIFICATE</span>
                          <ChevronRight size={14} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CERTIFICATIONS & CREDENTIALS ================= */}
      <div className="pt-6 space-y-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0084ff] to-[#00d2ff] text-white flex items-center justify-center shadow-lg shadow-[#0084ff]/30">
            <Award size={22} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-wider uppercase">
              CERTIFICATIONS & CREDENTIALS
            </h3>
            <p className="text-xs text-gray-400">Verified credentials & professional recognitions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#1d1f2c] border border-white/10 hover:border-[#0084ff]/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0084ff]/10 border border-[#0084ff]/20 text-[#0084ff] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#0084ff]/20 transition-all">
                  {cert.iconName === "ShieldCheck" && <ShieldCheck size={22} />}
                  {cert.iconName === "Lock" && <Lock size={22} />}
                  {cert.iconName === "Award" && <Award size={22} />}
                  {cert.iconName === "CheckCircle2" && <CheckCircle2 size={22} />}
                  {!["ShieldCheck", "Lock", "Award", "CheckCircle2"].includes(cert.iconName || "") && <Award size={22} />}
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#0084ff]/15 border border-[#0084ff]/30 text-[#00d2ff] text-[10px] font-bold uppercase tracking-wider">
                      {cert.badge || "Verified"}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00d2ff] transition-colors leading-snug">
                    {cert.name}
                  </h4>

                  <p className="text-xs text-gray-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SKILL PROGRESS BARS & GAUGES ================= */}
      <div className="pt-6 space-y-8 border-t border-white/10">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <Code className="text-[#0084ff]" size={24} />
          Technical Proficiencies
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div className="p-6 rounded-2xl bg-[#1d1f2c] border border-white/10 space-y-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-3">
              <span className="w-2 h-4 bg-[#0084ff] rounded-sm" />
              Programming Skills
            </h4>
            {portfolioData.programmingSkills.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-[#0084ff] font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#0084ff] transition-all duration-1000 shadow-[0_0_8px_#0084ff]"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tool Stack */}
          <div className="p-6 rounded-2xl bg-[#1d1f2c] border border-white/10 space-y-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-3">
              <span className="w-2 h-4 bg-emerald-500 rounded-sm" />
              Tool Stack
            </h4>
            {portfolioData.toolStack.map((tool) => (
              <div key={tool.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-gray-300">{tool.name}</span>
                  <span className="text-emerald-400 font-bold">{tool.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-1000 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                    style={{ width: `${tool.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Coding & Frameworks */}
          <div className="p-6 rounded-2xl bg-[#1d1f2c] border border-white/10 space-y-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-3">
              <span className="w-2 h-4 bg-amber-500 rounded-sm" />
              Coding & Frameworks
            </h4>
            {portfolioData.codingSkills.map((item) => (
              <div key={item.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-gray-300">{item.name}</span>
                  <span className="text-amber-400 font-bold">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-500 transition-all duration-1000 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Platforms & Environments */}
          <div className="p-6 rounded-2xl bg-[#1d1f2c] border border-white/10 space-y-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-3">
              <span className="w-2 h-4 bg-purple-500 rounded-sm" />
              Platforms & IDEs
            </h4>
            {portfolioData.platforms.map((plat) => (
              <div key={plat.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-gray-300">{plat.name}</span>
                  <span className="text-purple-400 font-bold">{plat.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-purple-500 transition-all duration-1000 shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                    style={{ width: `${plat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SPOKEN LANGUAGES ================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#1d1f2c] border border-white/10 space-y-6">
        <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Globe className="text-[#0084ff]" size={20} />
          Languages
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {portfolioData.languages.map((lang) => (
            <div
              key={lang.name}
              className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center group hover:border-[#0084ff]/40 transition"
            >
              <span className="text-sm font-bold text-white">{lang.name}</span>
              <span className="text-xs text-[#0084ff] font-semibold mt-1">
                {lang.percentage}% Proficient
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= KNOWLEDGE & DOMAINS ================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#1d1f2c] border border-white/10 space-y-6">
        <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Cpu className="text-[#0084ff]" size={20} />
          Knowledge & Core Concepts
        </h3>

        <div className="flex flex-wrap gap-2.5">
          {portfolioData.knowledge.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 font-medium hover:bg-[#0084ff]/15 hover:border-[#0084ff]/40 hover:text-white transition-all cursor-default"
            >
              <CheckCircle2 size={14} className="text-[#0084ff] flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
