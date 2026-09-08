"use client";

import React, { useState } from "react";
import { TechIcon } from "@/components/TechIcons";

export interface SkillItem {
  name: string;
  category?: string;
  percentage?: number;
  color?: string;
}

interface SkillsMarqueeProps {
  skills: SkillItem[];
  speed?: number; // seconds per full loop
  direction?: "left" | "right";
  className?: string;
}

export function SkillsMarquee({
  skills,
  speed = 28,
  direction = "left",
  className = "",
}: SkillsMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items twice to ensure seamless endless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div 
      className={`relative w-full overflow-hidden py-2 select-none group ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Progressive Left Blur Edge Mask */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#1e202d] via-[#1e202d]/80 to-transparent z-10 pointer-events-none" />

      {/* Progressive Right Blur Edge Mask */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#1e202d] via-[#1e202d]/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div
        className="flex items-center gap-3.5 w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#161722] hover:bg-[#0084ff]/15 border border-white/10 hover:border-[#0084ff]/50 transition-all duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-[0_8px_20px_rgba(0,132,255,0.25)] flex-shrink-0"
          >
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <TechIcon name={skill.name} size={26} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                {skill.name}
              </span>
              {skill.percentage && (
                <span className="text-[10px] font-semibold text-[#00d2ff]">
                  {skill.percentage}% Proficiency
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}
