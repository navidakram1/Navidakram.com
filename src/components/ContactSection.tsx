"use client";

import React, { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  CreditCard, 
  CheckCircle2, 
  Sparkles,
  MessageSquare,
  ExternalLink,
  Copy,
  Clock,
  Globe
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      {/* ================= SECTION HEADER ================= */}
      <div className="flex items-center gap-3 border-b border-white/10 pb-5">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#0084ff]/20 border border-[#0084ff]/40 text-[#00d2ff] font-black text-xl shadow-[0_0_15px_rgba(0,132,255,0.4)]">
          C
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          ontact & Inquiries
        </h2>
      </div>

      {/* Main Direct Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Direct Phone Card */}
        <div className="p-6 rounded-3xl bg-[#161722] border border-white/10 hover:border-[#0084ff]/50 transition-all duration-300 space-y-4 group">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#0084ff]/10 border border-[#0084ff]/20 text-[#00d2ff] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={22} />
            </div>
            <span className="px-3 py-1 rounded-full bg-[#0084ff]/10 border border-[#0084ff]/20 text-[#00d2ff] text-[11px] font-bold">
              Ireland (Direct)
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-white">Direct Phone</h3>
            <p className="text-xs text-gray-400 mt-0.5">Available for voice calls & urgent inquiries</p>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-sm font-semibold text-white">
              {portfolioData.personal.phone}
            </span>
            <div className="flex items-center gap-2">
              <button
                suppressHydrationWarning
                onClick={() => handleCopy(portfolioData.personal.phone, "phone")}
                title="Copy phone"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition"
              >
                {copiedPhone ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
              <a
                href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                className="px-3 py-1.5 rounded-xl bg-[#0084ff] hover:bg-[#0070db] text-white text-xs font-bold transition shadow-sm"
              >
                Call
              </a>
            </div>
          </div>
        </div>

        {/* Direct Email Card */}
        <div className="p-6 rounded-3xl bg-[#161722] border border-white/10 hover:border-[#0084ff]/50 transition-all duration-300 space-y-4 group">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#0084ff]/10 border border-[#0084ff]/20 text-[#00d2ff] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={22} />
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
              Fast Response
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-white">Direct Email</h3>
            <p className="text-xs text-gray-400 mt-0.5">For proposals, project scopes & formal inquiries</p>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-sm font-semibold text-white truncate max-w-[180px] sm:max-w-none">
              {portfolioData.personal.email}
            </span>
            <div className="flex items-center gap-2">
              <button
                suppressHydrationWarning
                onClick={() => handleCopy(portfolioData.personal.email, "email")}
                title="Copy email"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition"
              >
                {copiedEmail ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="px-3 py-1.5 rounded-xl bg-[#0084ff] hover:bg-[#0070db] text-white text-xs font-bold transition shadow-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Direct Card */}
        <div className="p-6 rounded-3xl bg-[#161722] border border-white/10 hover:border-emerald-500/50 transition-all duration-300 space-y-4 group">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare size={22} />
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
              Instant Chat
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-white">WhatsApp Direct</h3>
            <p className="text-xs text-gray-400 mt-0.5">Quick questions, ongoing support & instant messaging</p>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-sm font-semibold text-white">
              {portfolioData.personal.phone}
            </span>
            <a
              href={portfolioData.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition shadow-sm"
            >
              <span>Chat</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Stripe Instant Checkout Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-[#161722] to-[#1c1f30] border border-white/10 hover:border-[#0084ff]/50 transition-all duration-300 space-y-4 group">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#0084ff]/10 border border-[#0084ff]/20 text-[#00d2ff] flex items-center justify-center group-hover:scale-110 transition-transform">
              <CreditCard size={22} />
            </div>
            <span className="px-3 py-1 rounded-full bg-[#0084ff]/10 border border-[#0084ff]/20 text-[#00d2ff] text-[11px] font-bold">
              Secure Stripe
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-white">Instant Stripe Payment</h3>
            <p className="text-xs text-gray-400 mt-0.5">Pay for milestones, retainers & services with card/bank</p>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-xs font-medium text-gray-300">
              Encrypted 256-bit Checkout
            </span>
            <a
              href={portfolioData.personal.stripeGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0084ff] hover:bg-[#0070db] text-white text-xs font-bold transition shadow-sm"
            >
              <span>Pay Now</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Location & Availability Information Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#161722] border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                Current Location
              </span>
              <span className="text-sm font-bold text-white">
                {portfolioData.personal.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                Availability
              </span>
              <span className="text-sm font-bold text-white">
                Freelance & Contract Open
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#0084ff]/10 text-[#00d2ff] flex items-center justify-center flex-shrink-0">
              <Globe size={20} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                Timezone
              </span>
              <span className="text-sm font-bold text-white">
                GMT / IST (Ireland)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
