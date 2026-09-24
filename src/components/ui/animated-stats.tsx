"use client";

import React, { useEffect, useRef } from "react";
import { CheckSquare, GraduationCap, Globe, Trophy, Star } from "lucide-react";
import { motion, animate } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReviewSummaryCard } from "./review-summary-card";

interface StatItemProps {
  label: string;
  target: number;
  suffix?: string;
  icon: string;
  delay?: number;
  hasStars?: boolean;
}

export function AnimatedStatCard({
  label,
  target,
  suffix = "+",
  icon,
  delay = 0,
  hasStars = false,
}: StatItemProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      delay: delay * 0.15,
      onUpdate(value) {
        if (numberRef.current) {
          numberRef.current.textContent = new Intl.NumberFormat("en-US").format(
            Math.round(value)
          );
        }
      },
    });

    return () => controls.stop();
  }, [target, delay]);

  const IconComponent =
    icon === "GraduationCap" ? GraduationCap :
    icon === "Trophy" ? Trophy :
    icon === "Globe" ? Globe : CheckSquare;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: "easeOut" }}
      className="p-5 rounded-2xl bg-[#161722] border border-white/10 flex flex-col items-center text-center group hover:border-[#0084ff]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_8px_25px_rgba(0,132,255,0.2)] cursor-default"
    >
      {/* Icon Badge */}
      <div className="w-10 h-10 rounded-xl bg-[#0084ff]/10 text-[#00d2ff] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
        <IconComponent size={20} />
      </div>

      {/* Optional Star Rating Animation */}
      {hasStars && (
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.35, ease: "easeOut" }}
            >
              <Star
                className="h-3.5 w-3.5 text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]"
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Animated Counter */}
      <div className="text-2xl sm:text-[26px] font-black text-white tracking-tight">
        <span ref={numberRef}>0</span>
        <span className="text-[#00d2ff] ml-0.5">{suffix}</span>
      </div>

      {/* Subtitle Label */}
      <span className="text-xs text-gray-400 font-semibold mt-1 group-hover:text-gray-200 transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

export function AnimatedStatsSection() {
  return (
    <div className="space-y-4">
      {/* 4 Interactive Animated Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
        <AnimatedStatCard
          label="Total Projects Delivered"
          target={1350}
          suffix="+"
          icon="CheckSquare"
          delay={0}
        />
        <AnimatedStatCard
          label="Students & Mentees Taught"
          target={45}
          suffix="+"
          icon="GraduationCap"
          delay={1}
        />
        <AnimatedStatCard
          label="5-Star Client Reviews"
          target={1280}
          suffix="+"
          icon="Trophy"
          delay={2}
          hasStars={true}
        />
        <AnimatedStatCard
          label="Global Reach & Followers"
          target={22000}
          suffix="+"
          icon="Globe"
          delay={3}
        />
      </div>

      {/* Featured 21st.dev Review Summary Card */}
      <div className="pt-2">
        <ReviewSummaryCard
          rating={5.0}
          reviewCount={1280}
          maxRating={5}
          summaryText="Consistently rated 5.0/5 across Upwork, Fiverr & direct client retainers"
          className="max-w-none"
        />
      </div>
    </div>
  );
}
