// app/not-found.tsx
import Link from "next/link";
import { Home, Search, Phone, ArrowRight, Zap } from "lucide-react";

const PHONE      = "+917840000618";
const PHONE_DISP = "+91 78400 00618";

const quickLinks = [
  { name: "Google Ads",           href: "/services/google-ads" },
  { name: "SEO",                  href: "/services/seo" },
  { name: "Social Media Ads",     href: "/services/social-media-ads" },
  { name: "Brand Bidding",        href: "/services/brand-bidding" },
  { name: "Performance Marketing",href: "/services/performance-marketing" },
  { name: "Website Development",  href: "/services/website-development" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-white flex flex-col">

      {/* ── BG Glows ─────────────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-10 w-[400px] h-[400px] bg-purple-800/8 dark:bg-purple-800/12 rounded-full blur-[100px]" />
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </div>

      {/* ── Main ─────────────────────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-5 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-2xl w-full text-center">

          {/* 404 big number */}
          <div className="relative mb-6">
            <span className="text-[130px] sm:text-[180px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-violet-500/30 to-violet-500/5 select-none">
              404
            </span>
            {/* Centered badge over number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                <span className="text-violet-600 dark:text-violet-400 text-xs sm:text-sm font-semibold">
                  Page Not Found
                </span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-gray-900 dark:text-white">
            Oops! Wrong Turn
          </h1>

          {/* Description */}
          <p className="text-gray-500 dark:text-white text-base sm:text-lg leading-relaxed mb-10 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
            Let us get you back to growing your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link href="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 active:scale-95 transition-all shadow-xl shadow-violet-500/25 text-sm group">
              <Home className="w-4 h-4" />
              Go to Home
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="/services/google-ads"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/20 text-gray-700 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all text-sm">
              <Search className="w-4 h-4 text-violet-500" />
              Browse Services
            </Link>

            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/20 text-gray-700 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all text-sm">
              <Phone className="w-4 h-4 text-green-500" />
              {PHONE_DISP}
            </a>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100 dark:border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-[#0B0B0F] px-4 text-xs font-bold text-gray-400 dark:text-white uppercase tracking-widest">
                Our Services
              </span>
            </div>
          </div>

          {/* Quick service links */}
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map(({ name, href }) => (
              <Link key={name} href={href}
                className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-white/10 hover:bg-violet-500/10 dark:hover:bg-violet-500/20 border border-gray-200 dark:border-white/10 hover:border-violet-500/30 text-gray-700 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 text-xs font-semibold px-4 py-2 rounded-full transition-all">
                <Zap className="w-3 h-3 text-violet-500" />
                {name}
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom CTA strip ─────────────────────────────────────────── */}
      <div className="border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-[#0F0F14] py-5 px-5 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-gray-900 dark:text-white text-sm">
              Looking for a digital marketing agency?
            </p>
            <p className="text-gray-500 dark:text-white text-xs mt-0.5">
              Rigveda Ads — Google Certified Partner · 8+ Years · 500+ Campaigns
            </p>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-5 py-2.5 rounded-xl hover:opacity-90 transition-all shadow-md shadow-violet-500/20 text-sm group">
            <Zap className="w-3.5 h-3.5" />
            Get Free Audit
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
}
