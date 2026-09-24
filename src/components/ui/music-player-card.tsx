"use client";

import React, { useState } from "react";
import { 
  Music, 
  Play, 
  Pause, 
  ExternalLink, 
  Headphones, 
  Disc3, 
  Radio, 
  Volume2, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";

interface MusicPlayerCardProps {
  playlistUrl?: string;
}

export function MusicPlayerCard({
  playlistUrl = "https://www.youtube.com/playlist?list=PLWdKCECfzQTJvaUMgseAgRgfQg9_me6L4"
}: MusicPlayerCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  const handleTogglePlay = () => {
    setShowEmbed(true);
    setIsPlaying(true);
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#161722] via-[#1a1c2c] to-[#12131d] border border-white/10 hover:border-[#0084ff]/50 transition-all duration-300 shadow-xl overflow-hidden group">
      {/* Background Ambient Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#0084ff]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Main Bar */}
      <div className="p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-5 relative z-10">
        {/* Left: Vinyl Disc + Playlist Details */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Vinyl Disc with Spinning Animation */}
          <div className="relative flex-shrink-0">
            <div 
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#0a0a0f] via-[#181a26] to-[#0a0a0f] border-2 border-white/20 p-1 flex items-center justify-center shadow-lg transition-transform ${
                isPlaying ? "animate-[spin_4s_linear_infinite]" : "group-hover:rotate-12 transition-transform duration-500"
              }`}
            >
              {/* Concentric Vinyl Grooves */}
              <div className="w-full h-full rounded-full border border-white/10 flex items-center justify-center p-2 relative">
                <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center p-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-rose-500 to-[#0084ff] flex items-center justify-center shadow-md">
                    <Disc3 size={14} className="text-white animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Playing Pulse Dot */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPlaying ? "bg-rose-400 opacity-75" : "bg-emerald-400 opacity-75"}`} />
              <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${isPlaying ? "bg-rose-500" : "bg-emerald-500"}`} />
            </span>
          </div>

          {/* Title & Info */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 text-[10px] font-bold uppercase tracking-wider">
                <Radio size={11} className="animate-pulse" />
                <span>My Music Playlist</span>
              </span>
              <span className="hidden sm:inline-block text-[11px] font-semibold text-gray-400">
                • Focus & Coding Flow
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-extrabold text-white mt-1 group-hover:text-[#00d2ff] transition-colors truncate">
              Navidakram.com Song Music
            </h4>

            {/* Equalizer Frequency Bars */}
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex items-end gap-1 h-3.5">
                <span className={`w-1 bg-[#0084ff] rounded-full transition-all ${isPlaying ? "animate-[bounce_0.6s_ease-in-out_infinite] h-3.5" : "h-2"}`} />
                <span className={`w-1 bg-[#00d2ff] rounded-full transition-all ${isPlaying ? "animate-[bounce_0.8s_ease-in-out_infinite_0.2s] h-3" : "h-3"}`} />
                <span className={`w-1 bg-rose-500 rounded-full transition-all ${isPlaying ? "animate-[bounce_0.5s_ease-in-out_infinite_0.4s] h-3.5" : "h-1.5"}`} />
                <span className={`w-1 bg-purple-500 rounded-full transition-all ${isPlaying ? "animate-[bounce_0.7s_ease-in-out_infinite_0.1s] h-2.5" : "h-2"}`} />
                <span className={`w-1 bg-[#0084ff] rounded-full transition-all ${isPlaying ? "animate-[bounce_0.9s_ease-in-out_infinite_0.3s] h-3" : "h-2.5"}`} />
              </div>
              <span className="text-xs text-gray-400 font-medium ml-1">
                {isPlaying ? "Playing playlist tracks..." : "Curated tracks for productivity"}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-2.5 w-full md:w-auto justify-end flex-shrink-0">
          {/* Toggle In-Page Player */}
          <button
            onClick={() => {
              setShowEmbed(!showEmbed);
              if (!showEmbed) setIsPlaying(true);
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition shadow-sm"
          >
            {showEmbed ? (
              <>
                <ChevronUp size={15} />
                <span>Hide Player</span>
              </>
            ) : (
              <>
                <Play size={14} className="fill-current text-[#00d2ff]" />
                <span>Play Here</span>
              </>
            )}
          </button>

          {/* Open On YouTube Playlist Link */}
          <a
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs font-bold transition shadow-md shadow-rose-900/30 hover:scale-105"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>YouTube Playlist</span>
            <ExternalLink size={13} className="opacity-80" />
          </a>
        </div>
      </div>

      {/* Expandable Embedded YouTube Player */}
      {showEmbed && (
        <div className="border-t border-white/10 bg-black/40 p-4 animate-in slide-in-from-top-2 duration-300">
          <div className="relative w-full aspect-video sm:h-[360px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/videoseries?list=PLWdKCECfzQTJvaUMgseAgRgfQg9_me6L4&autoplay=1"
              title="Navidakram.com Song music playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
