// app/services/brand-bidding/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Target, TrendingUp, AlertTriangle, CheckCircle,
  ArrowRight, Phone, ChevronRight, Zap, BarChart3,
  Search, DollarSign, Eye, Lock, Users, Star
} from "lucide-react";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Brand Bidding Campaigns | Protect Your Brand on Google | Rigveda Ads",
  description:
    "Stop competitors from stealing your branded traffic. Rigveda Ads manages Google brand bidding campaigns that protect your brand, lower CPC, and dominate branded search results.",
  keywords:
    "brand bidding, brand protection google ads, competitor brand bidding, branded keywords, brand campaign management, Delhi",
  openGraph: {
    title: "Brand Bidding Campaigns — Rigveda Ads",
    description:
      "Dominate your own brand on Google. Stop competitor ads from appearing on your brand name.",
    type: "website",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const PHONE      = "+917840000618";
const PHONE_DISP = "+91 78400 00618";

const problems = [
  {
    icon: AlertTriangle,
    title: "Competitors Steal Your Clicks",
    desc: "When someone Googles your brand name, your competitor's ad appears above your organic result — and they get the click you earned.",
  },
  {
    icon: DollarSign,
    title: "You Lose Paid Revenue",
    desc: "A visitor searching your brand name is already 80% ready to buy. Losing that click to a competitor is direct revenue loss.",
  },
  {
    icon: Eye,
    title: "Brand Confusion",
    desc: "Competitors mislead your audience with similar messaging. Customers end up on their site thinking it's yours.",
  },
  {
    icon: TrendingUp,
    title: "Higher Acquisition Cost",
    desc: "Without brand protection, your overall CPA rises because warm, ready-to-convert brand traffic leaks to rivals.",
  },
];

const benefits = [
  { stat: "3–5×",   label: "Higher CTR on branded terms vs generic" },
  { stat: "60%",    label: "Lower CPC on your own brand keywords" },
  { stat: "40%+",   label: "Increase in direct conversions" },
  { stat: "100%",   label: "SERP ownership on your brand name" },
];

const whatWeOffer = [
  {
    icon: Shield,
    title: "Brand Keyword Dominance",
    desc: "We bid on your exact brand name, misspellings, and variations so your ad always appears #1 — above competitors.",
  },
  {
    icon: Lock,
    title: "Competitor Conquest Blocking",
    desc: "Strategic bid management ensures competitors can never outbid you on your own brand terms cost-effectively.",
  },
  {
    icon: Target,
    title: "Brand + Non-brand Split Testing",
    desc: "We isolate brand campaigns from generic ones so budget is allocated efficiently and ROAS is accurately tracked.",
  },
  {
    icon: Search,
    title: "Trademark Violation Monitoring",
    desc: "Continuous monitoring of competitor ads using your brand name. We flag and report violations to Google on your behalf.",
  },
  {
    icon: BarChart3,
    title: "Branded SERP Control",
    desc: "Sitelinks, callouts, and structured snippets in your brand ads make your listing occupy 2× more screen space.",
  },
  {
    icon: Users,
    title: "Remarketing Integration",
    desc: "We layer past visitor audiences on brand campaigns to recover cart abandoners and repeat visitors at minimal cost.",
  },
];

const process = [
  {
    step: "01",
    title: "Brand Audit",
    desc: "We analyse your current SERP for all brand keyword variations, identify which competitors are bidding on your name, and calculate the revenue leakage.",
  },
  {
    step: "02",
    title: "Campaign Architecture",
    desc: "Separate brand campaign is created with exact/phrase match brand keywords, optimised ad copy, and full sitelink extensions.",
  },
  {
    step: "03",
    title: "Bid Strategy Setup",
    desc: "Smart bidding strategy (Target Impression Share at top of page) ensures your ad always wins position #1 for your brand at the lowest possible CPC.",
  },
  {
    step: "04",
    title: "Ad Copy Optimisation",
    desc: "We write brand ad copy that reinforces trust — taglines, USPs, and CTAs that convert brand searchers immediately.",
  },
  {
    step: "05",
    title: "Monitor & Protect",
    desc: "Weekly monitoring of Search Term Reports, competitor activity, and Quality Score. We alert you to any new threats instantly.",
  },
];

const faqs = [
  {
    q: "Do I need to run brand bidding if I already rank #1 organically?",
    a: "Yes. Even if you rank #1 organically, competitors' paid ads appear above your organic result. Studies show that branded paid ads increase total click volume by 50%+ — many users click the first result regardless of whether it's paid or organic. Without a brand ad, you risk losing those clicks to competitors who are actively bidding on your name.",
  },
  {
    q: "Isn't it expensive to bid on my own brand name?",
    a: "Brand keywords are actually the cheapest keywords in your account. Since you have the highest relevance and Quality Score for your own brand, CPCs are typically 5–10× lower than generic keywords. Most brands see brand campaigns as their highest-ROAS campaigns.",
  },
  {
    q: "Can I legally stop competitors from bidding on my brand name?",
    a: "Google allows competitors to bid on your brand keywords, but they cannot use your trademarked name in their ad copy. We monitor this and file trademark complaints with Google on your behalf. While you cannot stop them from bidding, a well-managed brand campaign ensures they can never outrank you cost-effectively.",
  },
  {
    q: "How quickly will I see results from brand bidding?",
    a: "Brand campaigns go live within 24–48 hours. You will immediately see your ad dominating position #1. Within the first week you will notice a drop in competitor visibility and a measurable increase in direct conversions from brand traffic.",
  },
  {
    q: "What budget do I need for a brand bidding campaign?",
    a: "Brand campaigns are very budget-efficient. Since CPCs are low and CTR is high, most businesses need only ₹5,000–₹20,000/month for full brand coverage. We will give you an exact estimate after reviewing your brand search volume.",
  },
];

const testimonials = [
  {
    name: "Priya Singh",
    role: "Founder, E-commerce Brand",
    text: "Competitors were stealing 30% of our brand traffic. Rigveda set up a brand campaign in 2 days — within a week our branded CTR jumped from 4% to 18% and CPC dropped by half.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "CEO, SaaS Startup",
    text: "We had no idea competitors were bidding on our name until Rigveda showed us the data. The brand protection campaign paid for itself within the first month.",
    rating: 5,
  },
];

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Brand Bidding Campaigns",
  description:
    "Protect your brand on Google Ads. Stop competitors from bidding on your brand name and dominate branded search results.",
  provider: {
    "@type": "Organization",
    name: "Rigveda Ads Agency Pvt. Ltd.",
    url: "https://rigvedaadds.com",
  },
  areaServed: ["India", "Delhi", "US", "UK", "UAE"],
  serviceType: "Digital Marketing",
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BrandBiddingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══════════════════════ HERO ══════════════════════════════ */}
      <section className="relative bg-white dark:bg-[#0B0B0F] pt-12 pb-0 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-700/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-purple-600/8 dark:bg-purple-800/15 rounded-full blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)", backgroundSize: "36px 36px" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-white/35 mb-6 flex-wrap">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600 dark:text-white/60">Brand Bidding</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-14 lg:pb-20">
            {/* Left */}
            <div style={{ animation: "heroFadeIn 0.7s ease 0.05s both" }}>
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-5">
                <Shield className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" />
                <span className="text-violet-700 dark:text-violet-300 text-xs font-semibold">
                  Brand Protection · Google Ads
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.05] tracking-tight mb-5">
                <span className="text-gray-900 dark:text-white">Stop Competitors </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500">
                  Stealing
                </span>
                <span className="text-gray-900 dark:text-white"> Your</span>
                <br />
                <span className="text-gray-900 dark:text-white">Brand Traffic</span>
              </h1>

              <p className="text-gray-500 dark:text-white/55 text-base sm:text-lg leading-relaxed mb-7 max-w-lg">
                Someone searches your brand name — and your competitors ad appears first.
                Every day without brand bidding is revenue walking out the door.
                We fix that in <strong className="text-gray-900 dark:text-white">48 hours.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold px-7 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-xl shadow-violet-500/25 text-sm group">
                  Protect My Brand Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold px-7 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm">
                  <Phone className="w-4 h-4 text-violet-500" /> {PHONE_DISP}
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4">
                {["48-hr Setup", "No Lock-in Contract", "Weekly Reports", "Google Certified"].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-white/50 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual */}
            <div style={{ animation: "heroSlideRight 0.8s ease 0.2s both" }}
              className="hidden lg:block">
              {/* Mock SERP card */}
              <div className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/8 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/50">
                <p className="text-xs text-gray-400 dark:text-white/30 font-medium mb-4 uppercase tracking-widest">
                  Google Search — YourBrand
                </p>

                {/* Protected — your ad */}
                <div className="border-2 border-green-400/50 bg-green-50/50 dark:bg-green-900/10 rounded-xl p-4 mb-3 relative">
                  <div className="absolute -top-2.5 left-4 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    ✓ YOUR AD — PROTECTED
                  </div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] border border-gray-300 dark:border-white/20 text-gray-500 dark:text-white/40 px-1.5 py-0.5 rounded">Ad</span>
                    <span className="text-[13px] font-bold text-blue-700 dark:text-blue-400">YourBrand — Official Website | Best Deals</span>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-white/40">www.yourbrand.com</p>
                  <p className="text-[11px] text-gray-600 dark:text-white/50 mt-1">The original. Trusted by 10,000+ customers. Free shipping today.</p>
                </div>

                {/* Competitor ad — blocked */}
                <div className="border border-red-200 dark:border-red-500/20 bg-red-50/50 dark:bg-red-900/10 rounded-xl p-4 relative opacity-50">
                  <div className="absolute -top-2.5 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    ✗ COMPETITOR — BLOCKED
                  </div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] border border-gray-300 dark:border-white/20 text-gray-400 px-1.5 py-0.5 rounded">Ad</span>
                    <span className="text-[13px] font-bold text-blue-500 line-through decoration-red-400">Competitor Bidding Your Brand Name</span>
                  </div>
                  <p className="text-[11px] text-gray-400">www.competitor.com</p>
                </div>

                {/* Result */}
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/[0.06] grid grid-cols-3 gap-3">
                  {[
                    { label: "Your CTR", value: "18%", up: true },
                    { label: "Your CPC", value: "₹4.2", up: false },
                    { label: "Conversions", value: "+43%", up: true },
                  ].map(({ label, value, up }) => (
                    <div key={label} className="text-center p-2 bg-gray-50 dark:bg-white/[0.03] rounded-lg">
                      <div className={`text-base font-black ${up ? "text-green-600 dark:text-green-400" : "text-violet-600 dark:text-violet-400"}`}>
                        {value}
                      </div>
                      <div className="text-[10px] text-gray-400 dark:text-white/30 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
              className="fill-gray-50 dark:fill-[#0F0F14]" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════ PROBLEM SECTION ══════════════════ */}
      <section className="bg-gray-50 dark:bg-[#0F0F14] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
              </span>
              <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">The Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-3">
              What Happens Without <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                Brand Protection
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-lg mx-auto">
              Right now, competitors may be running ads on your brand name. Here is what that costs you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-red-300 dark:hover:border-red-500/30 hover:-translate-y-1 transition-all duration-300 shadow-sm group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.08}s both` }}>
                <div className="w-10 h-10 bg-red-50 dark:bg-red-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{title}</h3>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ STATS BAND ════════════════════════ */}
      <section className="py-12 bg-gradient-to-r from-violet-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map(({ stat, label }, i) => (
              <div key={i} className="text-center"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1">{stat}</div>
                <div className="text-white/70 text-xs font-medium leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHAT WE OFFER ════════════════════ */}
      <section className="py-16 lg:py-24 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
              </span>
              <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">Our Solution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-3">
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
                Brand Protection
              </span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">
              Everything you need to own your brand name on Google and never lose a branded click again.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatWeOffer.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-violet-500/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-500/8 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${0.05 + i * 0.07}s both` }}>
                <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500/20 group-hover:scale-110 transition-all duration-200">
                  <Icon className="w-5 h-5 text-violet-500 dark:text-violet-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">{title}</h3>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PROCESS ══════════════════════════ */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
              </span>
              <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
              Live in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
                48 Hours
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {process.map(({ step, title, desc }, i) => (
              <div key={i}
                className="flex gap-5 sm:gap-7 bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 sm:p-6 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.1}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-violet-400/30 to-transparent mt-2 min-h-[20px]" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1.5 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-500 dark:text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ═════════════════════ */}
      <section className="py-16 lg:py-20 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Real Results from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
                Real Clients
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {testimonials.map(({ name, role, text, rating }, i) => (
              <div key={i}
                className="bg-gray-50 dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.1}s both` }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(rating)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-white/75 text-sm leading-relaxed italic mb-5">
                  {text}
                </p>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">{name}</div>
                  <div className="text-violet-600 dark:text-violet-400 text-xs mt-0.5">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FAQs ══════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-[#0F0F14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-4 rounded-full border-2 border-violet-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
              </span>
              <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Common Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i}
                className="group bg-white dark:bg-[#13131A] border border-gray-200 dark:border-white/[0.06] rounded-2xl overflow-hidden"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors list-none">
                  <span className="text-sm font-semibold text-gray-800 dark:text-white/90 pr-4">{q}</span>
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/[0.1] text-gray-400 group-open:border-violet-500 group-open:text-violet-500 group-open:bg-violet-500/10 transition-all font-bold text-base">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-gray-500 dark:text-white/50 text-sm leading-relaxed border-t border-gray-100 dark:border-white/[0.05] bg-gray-50/50 dark:bg-white/[0.02]">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ BOTTOM CTA ═══════════════════════ */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 to-purple-900/30 dark:from-violet-900/50 dark:to-purple-900/40" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.7s ease both" }}>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Shield className="w-3.5 h-3.5 text-violet-300" />
            <span className="text-white/80 text-xs font-semibold">Free Brand Audit — No Commitment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Protect Your Brand{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-200">
              Today
            </span>
          </h2>
          <p className="text-white/65 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Get a free audit showing exactly which competitors are bidding on your brand name
            and how much traffic you are losing right now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-black px-8 py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-2xl shadow-violet-500/30 text-sm sm:text-base group">
              Get Free Brand Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all text-sm sm:text-base">
              <Phone className="w-4 h-4" /> {PHONE_DISP}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
