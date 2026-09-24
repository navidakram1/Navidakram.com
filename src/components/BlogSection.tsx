"use client";

import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { portfolioData, BlogPostItem } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/section-title";

export function BlogSection() {
  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* ================= SECTION HEADER ================= */}
      <SectionTitle
        title="Blog & Articles"
        highlightWord="Blog"
        icon={BookOpen}
        subtitlePrefix="writing:"
        animatedWords={["Tech Insights.", "Full-Stack Dev.", "Tutorials & Guides.", "SaaS Growth."]}
      />

      {/* ================= ARTICLES GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.blogPosts.map((post: BlogPostItem) => (
          <article
            key={post.id}
            className="group rounded-2xl bg-[#161722] border border-white/10 overflow-hidden hover:border-[#0084ff]/50 transition-all duration-300 flex flex-col justify-between"
          >
            {post.image ? (
              <div className="relative w-full h-48 bg-[#1e202e] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161722] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0084ff]/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
            ) : (
              <div className="p-6 pb-0 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#0084ff]/20 text-[#00d2ff] text-[11px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
            )}

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <Calendar size={13} className="text-[#0084ff]" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#00d2ff] transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {post.snippet}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0084ff] group-hover:text-[#00d2ff] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
