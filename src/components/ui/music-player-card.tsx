"use client";

import React, { useState, useRef } from "react";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Disc3, 
  Radio
} from "lucide-react";

interface MusicPlayerCardProps {
  playlistUrl?: string;
}

export function MusicPlayerCard({
  playlistUrl = "https://www.youtube.com/playlist?list=PLWdKCECfzQTJvaUMgseAgRgfQg9_me6L4"
}: MusicPlayerCardProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Send postMessage command to YouTube iframe API
  const sendCommand = (func: string, args: any[] = []) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "*"
      );
    }
  };

  const handlePlayPause = () => {
    if (!hasStarted) {
      setHasStarted(true);
      setIsPlaying(true);
      return;
    }

    if (isPlaying) {
      sendCommand("pauseVideo");
      setIsPlaying(false);
    } else {
      sendCommand("playVideo");
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (!hasStarted) {
      setHasStarted(true);
      setIsPlaying(true);
      return;
    }
    sendCommand("nextVideo");
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (!hasStarted) {
      setHasStarted(true);
      setIsPlaying(true);
      return;
    }
    sendCommand("previousVideo");
    setIsPlaying(true);
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#141624] via-[#1a1c2e] to-[#141624] border border-white/10 hover:border-[#0084ff]/40 transition-all duration-300 shadow-xl overflow-hidden group">
      {/* Ambient background glows */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#0084ff]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0084ff]/20 transition-all duration-500" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Bar */}
      <div className="p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        {/* Left: Vinyl Disc + Playlist Details */}
        <div className="flex items-center gap-3.5 sm:gap-4 w-full md:w-auto">
          {/* Vinyl Disc with Smooth Spin Animation */}
          <div className="relative flex-shrink-0">
            <div 
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#090a0f] via-[#1a1c28] to-[#090a0f] border-2 border-white/15 p-1 flex items-center justify-center shadow-lg transition-transform ${
                isPlaying 
                  ? "animate-[spin_4s_linear_infinite]" 
                  : "group-hover:rotate-12 transition-transform duration-500"
              }`}
            >
              {/* Concentric Vinyl Grooves */}
              <div className="w-full h-full rounded-full border border-white/10 flex items-center justify-center p-1.5 relative">
                <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-rose-500 to-[#0084ff] flex items-center justify-center shadow-md">
                    <Disc3 size={12} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle live indicator badge */}
            {isPlaying && (
              <span className="absolute bottom-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d2ff] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00d2ff] border-2 border-[#161722]" />
              </span>
            )}
          </div>

          {/* Title & Info */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 text-[10px] font-bold uppercase tracking-wider">
                <Radio size={11} className={isPlaying ? "animate-pulse" : ""} />
                <span>My Music Playlist</span>
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-extrabold text-white mt-1 group-hover:text-[#00d2ff] transition-colors truncate">
              Navidakram.com Song Music
            </h4>

            {/* Equalizer Frequency Bars */}
            <div className="flex items-center gap-2 mt-1.5">
              <div className="flex items-end gap-1 h-3.5">
                <span className={`w-0.5 sm:w-1 bg-[#0084ff] rounded-full transition-all ${isPlaying ? "animate-[bounce_0.6s_ease-in-out_infinite] h-3.5" : "h-2"}`} />
                <span className={`w-0.5 sm:w-1 bg-[#00d2ff] rounded-full transition-all ${isPlaying ? "animate-[bounce_0.8s_ease-in-out_infinite_0.2s] h-3" : "h-3"}`} />
                <span className={`w-0.5 sm:w-1 bg-rose-500 rounded-full transition-all ${isPlaying ? "animate-[bounce_0.5s_ease-in-out_infinite_0.4s] h-3.5" : "h-1.5"}`} />
                <span className={`w-0.5 sm:w-1 bg-purple-500 rounded-full transition-all ${isPlaying ? "animate-[bounce_0.7s_ease-in-out_infinite_0.1s] h-2.5" : "h-2"}`} />
                <span className={`w-0.5 sm:w-1 bg-[#00d2ff] rounded-full transition-all ${isPlaying ? "animate-[bounce_0.9s_ease-in-out_infinite_0.3s] h-3" : "h-2.5"}`} />
              </div>
              <span className="text-xs text-gray-400 font-medium">
                {isPlaying ? "Playing playlist tracks..." : "Click play to start listening"}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Music Controls Only (Left, Pause/Play, Right) */}
        <div className="flex items-center gap-2.5 sm:gap-3 w-full md:w-auto justify-end flex-shrink-0">
          {/* Previous Song (Left) */}
          <button
            onClick={handlePrevious}
            aria-label="Previous Song"
            title="Previous Song"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0084ff]/20 border border-white/10 hover:border-[#0084ff]/50 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
          >
            <SkipBack size={18} className="fill-current text-gray-300 hover:text-white" />
          </button>

          {/* Pause / Play */}
          <button
            onClick={handlePlayPause}
            aria-label={isPlaying ? "Pause Song" : "Play Song"}
            title={isPlaying ? "Pause Song" : "Play Song"}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0084ff] to-[#00d2ff] hover:from-[#0074e8] hover:to-[#00bbee] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,132,255,0.45)]"
          >
            {isPlaying ? (
              <Pause size={20} className="fill-current" />
            ) : (
              <Play size={20} className="fill-current ml-0.5" />
            )}
          </button>

          {/* Next Song (Right) */}
          <button
            onClick={handleNext}
            aria-label="Next Song"
            title="Next Song"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0084ff]/20 border border-white/10 hover:border-[#0084ff]/50 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
          >
            <SkipForward size={18} className="fill-current text-gray-300 hover:text-white" />
          </button>
        </div>
      </div>

      {/* Embedded YouTube Player Container */}
      {hasStarted && (
        <div className="border-t border-white/10 bg-black/50 p-3 sm:p-4 animate-in slide-in-from-top-2 duration-300">
          <div className="relative w-full aspect-video sm:h-[320px] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <iframe
              ref={iframeRef}
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=PLWdKCECfzQTJvaUMgseAgRgfQg9_me6L4&enablejsapi=1&autoplay=1`}
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
