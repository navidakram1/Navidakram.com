"use client";

import React from "react";
import Image from "next/image";

interface CleanGameCard {
  name: string;
  category: string;
  image: string;
  accent: string;
  badge: string;
}

const games: CleanGameCard[] = [
  {
    name: "PUBG",
    category: "Battle Royale",
    image: "/images/gaming/pubg.jpg",
    accent: "#f59e0b",
    badge: "Conqueror"
  },
  {
    name: "Valorant",
    category: "Tactical FPS",
    image: "/images/gaming/valorant.jpg",
    accent: "#00d2ff",
    badge: "Radiant"
  },
  {
    name: "COD Warzone",
    category: "Battle Royale",
    image: "/images/gaming/cod-warzone.jpg",
    accent: "#10b981",
    badge: "Verdansk"
  },
  {
    name: "Clash Royale",
    category: "Real-Time Strategy",
    image: "/images/gaming/clash-royale.jpg",
    accent: "#a855f7",
    badge: "Champion"
  },
  {
    name: "Chess",
    category: "Strategy & Rapid",
    image: "/images/gaming/chess.webp",
    accent: "#38bdf8",
    badge: "1850+ ELO"
  },
];

export function GamingSection() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
      {games.map((game) => (
        <div
          key={game.name}
          className="group relative rounded-2xl bg-[#161722] border border-white/10 hover:border-[#0084ff]/60 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,132,255,0.25)] flex flex-col cursor-pointer"
        >
          {/* Card Image Banner */}
          <div className="relative w-full h-36 sm:h-44 overflow-hidden bg-[#181a26]">
            <Image
              src={game.image}
              alt={game.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              unoptimized
            />
            
            {/* Subtle Gradient Mask for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#161722] via-[#161722]/30 to-transparent" />

            {/* Clean Pill Badge */}
            <span
              className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-sm border border-white/20 text-white"
              style={{ backgroundColor: `${game.accent}dd` }}
            >
              {game.badge}
            </span>
          </div>

          {/* Clean Card Content - Name & Category */}
          <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1 bg-[#161722]">
            <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#00d2ff] transition-colors leading-tight">
              {game.name}
            </h4>
            <span className="text-[11px] font-medium text-gray-400 mt-1 block">
              {game.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
