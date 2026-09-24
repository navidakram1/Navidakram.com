"use client";

import React from "react";
import Image from "next/image";
import { 
  MapPin, 
  Check, 
  X as XIcon, 
  Smartphone, 
  BarChart3, 
  Layout, 
  CheckSquare, 
  Music, 
  Trophy, 
  Coffee, 
  Globe, 
  Quote, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  Users,
  Sparkles,
  Gamepad2,
  Crown,
  GraduationCap
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { VerifiedBadge } from "@/components/ui/verified-badge";
import { HandwritingText } from "@/components/ui/handwriting-text";
import { SkillsMarquee } from "@/components/ui/skills-marquee";
import { GamingSection } from "@/components/ui/gaming-section";
import { MusicPlayerCard } from "@/components/ui/music-player-card";
import { AnimatedStatsSection } from "@/components/ui/animated-stats";

import { SectionTitle } from "@/components/ui/section-title";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      {/* ================= SECTION HEADER ================= */}
      <SectionTitle
        title="About Me"
        highlightWord="About"
        icon={User}
        subtitlePrefix="crafting:"
        animatedWords={["clean code.", "pixel-perfect UI.", "scalable apps.", "SaaS products."]}
      />

      {/* ================= INTRO / BIO NARRATIVE ================= */}
      <div className="space-y-5 text-gray-300 leading-relaxed text-sm sm:text-base">
        <h3 className="text-xl sm:text-2xl font-bold text-white inline-flex items-center gap-2">
          <span>
            Hello! I’m{" "}
            <a
              href={portfolioData.personal.googleKnowledgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0084ff] hover:text-[#00d2ff] underline decoration-[#0084ff]/50 underline-offset-4 transition"
            >
              Navid
            </a>
            .
          </span>
          <VerifiedBadge variant="shimmer" size={20} />
        </h3>

        <p>
          {portfolioData.personal.bio}
        </p>

        <p>
          I&apos;m the owner of{" "}
          <a
            href={portfolioData.personal.rabbitGuyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#0084ff] hover:text-[#00d2ff] underline underline-offset-2 transition"
          >
            Rabbitguy.com
          </a>{" "}
          & Freelancer.
        </p>

        <p className="text-gray-400">
          Specializing in <strong>Java</strong> and <strong>React</strong>. Also, I am proficient at using tools and programming languages such as <strong>Python</strong> or <strong>SQL</strong> to manipulate and analyze data.
        </p>

        {/* Info Badges */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0084ff]/10 border border-[#0084ff]/30 text-[#0084ff] text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#0084ff]" />
            <MapPin size={14} /> Location: <strong className="text-white ml-0.5">{portfolioData.personal.location}</strong>
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <ShieldCheck size={14} /> Freelance: <strong className="text-emerald-300 ml-0.5">Available</strong>
          </span>
        </div>
      </div>

      {/* ================= 21ST.DEV SKILLS CAROUSEL & MATRIX ================= */}
      <div className="space-y-6 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-[#0084ff] rounded-full" />
            Skills & Technologies
          </h3>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
            <Sparkles size={12} className="text-[#00d2ff]" /> 16+ Core Stacks
          </span>
        </div>

        {/* 21st.dev Infinite Scrolling Skills Marquee Carousel */}
        <div className="rounded-2xl bg-[#12131d] border border-white/10 p-3 sm:p-4 overflow-hidden shadow-inner">
          <SkillsMarquee skills={portfolioData.skillsIcons} speed={32} direction="left" />
        </div>
      </div>

      {/* ================= MY SERVICES ================= */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <span className="w-2 h-6 bg-[#0084ff] rounded-full" />
          My Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioData.services.map((service) => {
            const Icon = 
              service.iconName === "Smartphone" ? Smartphone :
              service.iconName === "BarChart3" ? BarChart3 :
              service.iconName === "Layout" ? Layout : CheckSquare;

            return (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-[#161722] border border-white/10 hover:border-[#0084ff]/50 hover:bg-[#1a1c2a] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0084ff]/10 text-[#00d2ff] border border-[#0084ff]/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0084ff] group-hover:text-white transition-all">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#00d2ff] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= OUR CORE TEAM ================= */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-[#0084ff] rounded-full" />
            Our Core Team
          </h3>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
            <Users size={13} /> Fast Rabbit Ltd. Team
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.teamMembers?.map((member, idx) => (
            <div
              key={member.id || idx}
              className="group relative rounded-2xl bg-[#161722] border border-white/10 hover:border-[#0084ff]/50 hover:bg-[#1a1c2b] p-4 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,132,255,0.2)]"
            >
              {/* Member Photo */}
              <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#0084ff] via-[#00d2ff] to-[#0084ff] shadow-md group-hover:shadow-[0_0_20px_rgba(0,132,255,0.6)] transition-all mb-3.5">
                <div className="w-full h-full rounded-full bg-[#12131d] overflow-hidden relative border border-[#161722]">
                  <Image
                    src={member.image}
                    alt={member.role}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                {member.badge && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#0084ff] text-white text-[9px] font-bold tracking-wider uppercase shadow-md whitespace-nowrap">
                    {member.badge}
                  </span>
                )}
              </div>

              {/* Member Info */}
              <h4 className="text-sm font-bold text-white group-hover:text-[#00d2ff] transition-colors line-clamp-1 mt-1">
                {member.role}
              </h4>
              <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">
                {member.specialty}
              </p>

              {/* Company Tag */}
              <span className="mt-3 text-[10px] font-medium text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5">
                {member.company}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= PRICING PACKAGES ================= */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <span className="w-2 h-6 bg-[#0084ff] rounded-full" />
          Pricing
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.pricing.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "bg-gradient-to-b from-[#1a1c2e] to-[#12131f] border-2 border-[#0084ff] shadow-xl shadow-[#0084ff]/20"
                  : "bg-[#161722] border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#0084ff] to-[#00d2ff] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  Recommended
                </span>
              )}

              <div>
                <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    / {plan.unit}
                  </span>
                </div>

                {/* Features list */}
                <ul className="space-y-3 my-6 border-t border-white/10 pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                          <Check size={13} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
                          <XIcon size={13} />
                        </div>
                      )}
                      <span className={feature.included ? "text-gray-300 font-medium" : "text-gray-500 line-through"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order button with Stripe */}
              <a
                href={plan.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all duration-200 mt-2 ${
                  plan.isPopular
                    ? "bg-[#0084ff] hover:bg-[#0070db] text-white shadow-lg shadow-[#0084ff]/30 hover:scale-[1.02]"
                    : "bg-white/10 hover:bg-white/20 text-white hover:scale-[1.02]"
                }`}
              >
                <span>Order Now</span>
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CLIENTS ================= */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <span className="w-2 h-6 bg-[#0084ff] rounded-full" />
          Clients & Partners
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {portfolioData.clients.map((client, idx) => (
            <div
              key={idx}
              className="h-20 rounded-2xl bg-[#161722] border border-white/10 flex items-center justify-center p-4 hover:border-[#0084ff]/40 transition group"
            >
              <div className="relative w-full h-full grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TESTIMONIALS ================= */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <span className="w-2 h-6 bg-[#0084ff] rounded-full" />
          Testimonials
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portfolioData.testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-[#161722] border border-white/10 hover:border-white/20 flex flex-col justify-between relative"
            >
              <Quote className="text-[#0084ff]/20 absolute top-5 right-5" size={32} />

              <p className="text-sm text-gray-300 italic mb-6 leading-relaxed relative z-10">
                &ldquo;{t.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#0084ff]/40 flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-400">
                    {t.role} • <span className="text-[#00d2ff]">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FUN FACTS & PASSIONS ================= */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <span className="w-2 h-6 bg-[#0084ff] rounded-full" />
          Fun Facts & Passions
        </h3>

        {/* 21st.dev Animated Stats Cards & Review Summary */}
        <AnimatedStatsSection />

        {/* Clean Gaming Cards */}
        <div className="pt-2">
          <GamingSection />
        </div>

        {/* Music Playlist Player Card */}
        <div className="pt-2">
          <MusicPlayerCard playlistUrl={portfolioData.personal.musicPlaylistUrl} />
        </div>
      </div>

      {/* ================= PAYMENT & STRIPE DIRECT CHECKOUT BANNER ================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#12131d] via-[#1a1c2b] to-[#12131d] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Secure Payment
          </span>
          <h4 className="text-xl font-bold text-white">We also accept Bank transfer & Stripe!</h4>
          <p className="text-sm text-gray-400">
            Instant and verified payments for projects, hourly retainer, or custom milestones.
          </p>
        </div>

        <a
          href="https://buy.stripe.com/6oEeYad0R3Ka4IE7sx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0084ff] hover:bg-[#0070db] text-white font-bold text-sm shadow-lg shadow-[#0084ff]/30 hover:scale-105 transition-all flex-shrink-0"
        >
          <CreditCard size={18} />
          <span>Checkout Any Amount</span>
          <ExternalLink size={14} className="opacity-80" />
        </a>
      </div>
    </div>
  );
}
