"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Download, 
  Phone, 
  DollarSign
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SocialIcon } from "./SocialIcons";
import { VerifiedBadge } from "@/components/ui/verified-badge";

export function ProfileCard() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // Auto-rotating Slideshow for Hero Banner
  useEffect(() => {
    const images = portfolioData.personal.heroImages || [portfolioData.personal.heroBgImage];
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Typewriter animation effect
  useEffect(() => {
    const currentTitle = portfolioData.personal.titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % portfolioData.personal.titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const heroImages = portfolioData.personal.heroImages || [portfolioData.personal.heroBgImage];

  // Divide social links into balanced rows (5 in row 1, 4 in row 2)
  const socialRow1 = portfolioData.personal.socialLinks.slice(0, 5);
  const socialRow2 = portfolioData.personal.socialLinks.slice(5);

  return (
    <div className="w-full max-w-[400px] bg-[#1e202d] rounded-[32px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col flex-shrink-0 transition-all duration-300 relative z-20 overflow-hidden">
      {/* Top Banner / Cover Slideshow Photo Section */}
      <div className="relative w-full">
        {/* Cover Photo Banner - Full View */}
        <div className="relative w-full h-[320px] sm:h-[350px] overflow-hidden bg-[#181a26]">
          {heroImages.map((imgSrc, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === imageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              <Image
                src={imgSrc}
                alt={`${portfolioData.personal.name} photo ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover object-top transition-transform duration-[4500ms]"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Circular Avatar Overlapping the Bottom Edge */}
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 z-30">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#0084ff] via-[#00d2ff] to-[#0084ff] shadow-[0_0_25px_rgba(0,132,255,0.7)]">
            <div className="w-full h-full rounded-full bg-[#181a26] overflow-hidden relative border-2 border-[#181a26]">
              <Image
                src={portfolioData.personal.avatarImage}
                alt={portfolioData.personal.name}
                fill
                className="object-cover scale-110 p-0.5"
                unoptimized
              />
            </div>
            {/* Status Indicator */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#1e202d] rounded-full shadow-lg ring-2 ring-emerald-400/40" title="Available for Freelance" />
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="pt-16 pb-5 px-5 flex flex-col items-center text-center">
        {/* Full Name with Shimmer Verified Badge */}
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight">
            {portfolioData.personal.name}
          </h2>
          <VerifiedBadge variant="shimmer" size={22} />
        </div>

        {/* Animated Typewriter Subtitle */}
        <div className="h-7 flex items-center justify-center mt-1">
          <p className="text-sm font-semibold text-gray-300 tracking-wide">
            {displayText}
            <span className="animate-pulse font-mono text-[#0084ff] font-bold">_</span>
          </p>
        </div>

        {/* Social Icons Rows */}
        <div className="flex flex-col items-center gap-2 my-4 w-full">
          {/* Row 1: 5 Icons */}
          <div className="flex items-center justify-center gap-2">
            {socialRow1.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="w-9 h-9 rounded-full bg-[#2a2d3e] border border-white/10 hover:border-[#0084ff] hover:bg-[#0084ff]/20 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_0_12px_rgba(0,132,255,0.5)]"
              >
                <SocialIcon name={social.name} size={16} />
              </a>
            ))}
          </div>

          {/* Row 2: 4 Icons */}
          {socialRow2.length > 0 && (
            <div className="flex items-center justify-center gap-2">
              {socialRow2.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="w-9 h-9 rounded-full bg-[#2a2d3e] border border-white/10 hover:border-[#0084ff] hover:bg-[#0084ff]/20 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_0_12px_rgba(0,132,255,0.5)]"
                >
                  <SocialIcon name={social.name} size={16} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="grid grid-cols-3 border-t border-white/10 bg-[#161723] divide-x divide-white/10 text-[11px] font-bold uppercase tracking-wider text-center">
        <a
          href={portfolioData.personal.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 px-2 text-gray-300 hover:text-white hover:bg-white/5 flex items-center justify-center gap-1.5 transition-colors group"
        >
          <span>DOWNLOAD CV</span>
          <Download size={14} className="text-[#0084ff] group-hover:scale-110 transition-transform" />
        </a>

        <a
          href={portfolioData.personal.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 px-2 text-gray-300 hover:text-white hover:bg-white/5 flex items-center justify-center gap-1.5 transition-colors group"
        >
          <span>CONTACT ME</span>
          <Phone size={14} className="text-[#0084ff] group-hover:scale-110 transition-transform" />
        </a>

        <a
          href={portfolioData.personal.stripeGeneralUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 px-2 text-gray-300 hover:text-white hover:bg-[#0084ff]/10 flex items-center justify-center gap-1.5 transition-colors group"
        >
          <span>PAYMENT</span>
          <DollarSign size={14} className="text-[#0084ff] group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
}
