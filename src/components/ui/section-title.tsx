"use client";

import React, { useState, useEffect } from "react";
import { LucideIcon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SectionTitleProps {
  title: string;
  highlightWord?: string;
  subtitlePrefix?: string;
  animatedWords?: string[];
  icon: LucideIcon;
  badge?: string;
}

export function SectionTitle({
  title,
  highlightWord,
  subtitlePrefix = "focus:",
  animatedWords = [],
  icon: Icon,
  badge
}: SectionTitleProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for the animated words
  useEffect(() => {
    if (!animatedWords || animatedWords.length === 0) return;

    const fullWord = animatedWords[wordIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullWord) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % animatedWords.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullWord.substring(0, currentText.length - 1)
            : fullWord.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, animatedWords]);

  return (
    <div className="relative pb-5 border-b border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Main Title with Glowing Icon */}
        <motion.div 
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center gap-3.5"
        >
          {/* Futuristic Glowing Icon Badge */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0084ff] to-[#00d2ff] opacity-40 blur-md group-hover:opacity-75 transition duration-500" />
            <div className="relative w-11 h-11 rounded-2xl bg-[#151724] border border-[#0084ff]/40 flex items-center justify-center text-[#00d2ff] shadow-inner">
              <Icon size={22} className="drop-shadow-[0_0_8px_rgba(0,132,255,0.7)]" />
            </div>
          </div>

          {/* Title Text with Gradient Shimmer */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
              {highlightWord ? (
                <>
                  <span className="bg-gradient-to-r from-[#0084ff] via-[#00d2ff] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,132,255,0.4)]">
                    {highlightWord}
                  </span>
                  <span>{title.replace(highlightWord, "").trim()}</span>
                </>
              ) : (
                <span>{title}</span>
              )}
            </h2>

            {/* Mobile-friendly animated typewriter subtitle */}
            {animatedWords.length > 0 && (
              <div className="flex sm:hidden items-center gap-1.5 mt-1 text-xs text-gray-400 font-medium">
                <span className="opacity-60">{subtitlePrefix}</span>
                <span className="font-semibold text-[#00d2ff] tracking-wide">
                  {currentText}
                  <span className="animate-pulse text-[#0084ff] font-bold">_</span>
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right side animated typewriter badge (Desktop/Tablet) */}
        {animatedWords.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141622] border border-white/10 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#0084ff] animate-ping" />
            <span className="text-xs text-gray-400 font-medium">{subtitlePrefix}</span>
            <div className="min-w-[130px] text-xs font-bold text-[#00d2ff]">
              {currentText}
              <span className="animate-pulse font-mono text-[#0084ff]">_</span>
            </div>
          </motion.div>
        )}

        {/* Optional static badge if no animated words */}
        {badge && animatedWords.length === 0 && (
          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <Sparkles size={13} className="text-[#00d2ff]" />
            <span>{badge}</span>
          </div>
        )}
      </div>

      {/* Decorative Glowing Bottom Accent Bar */}
      <div className="absolute -bottom-[1px] left-0 w-20 h-[2px] bg-gradient-to-r from-[#0084ff] to-[#00d2ff] shadow-[0_0_10px_#0084ff]" />
    </div>
  );
}
