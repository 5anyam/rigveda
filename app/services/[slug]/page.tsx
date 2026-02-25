import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock, FileText, CheckCircle, Users, HelpCircle,
  ArrowRight, Info, ChevronRight, Phone, Mail, Zap
} from "lucide-react";
import { getServiceBySlug, services } from "@/lib/data/services";
import { ContactForm } from "@/components/ui/contact-form";
import { AnimatedPage } from "@/components/ui/animated-page"; // ← we'll create this below

// ─── Types ────────────────────────────────────────────────────────────────────
interface ServicePageProps {
  params: { slug: string };
}

// ─── Static Params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} - ${service.category} | CS Praveen Kumar`,
    description: service.longDesc,
    keywords: `${service.title}, ${service.category}, company secretary services, CS Praveen Kumar`,
    openGraph: {
      title: `${service.title} - CS Praveen Kumar`,
      description: service.longDesc,
      type: "article",
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDesc,
    provider: {
      "@type": "Organization",
      name: "CS Praveen Kumar",
      url: "https://cspraveenkumar.in",
    },
    category: service.category,
    serviceType: "Company Secretary Services",
    areaServed: "India",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero / Page Header ─────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0A1628] via-[#0D1F3C] to-[#0A1628] pt-12 pb-16 overflow-hidden">
        {/* BG decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#3AA6FF]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-10 w-[300px] h-[300px] bg-blue-800/10 rounded-full blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle, #3AA6FF 1px, transparent 1px)", backgroundSize: "36px 36px" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/40 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <span className="text-white/70">{service.title}</span>
          </nav>

          {/* Category pill */}
          <div className="inline-flex items-center gap-2 bg-[#3AA6FF]/15 border border-[#3AA6FF]/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-[#3AA6FF] rounded-full animate-pulse" />
            <span className="text-[#3AA6FF] text-xs font-semibold tracking-wide">{service.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {service.title}
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Quick stats row */}
          {service.timeline && (
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-[#3AA6FF]" />
                <span>Processing: <strong className="text-white">{service.timeline}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Coverage: <strong className="text-white">Pan India</strong></span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Users className="w-4 h-4 text-[#3AA6FF]" />
                <span>Type: <strong className="text-white">{service.category}</strong></span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Main Content ───────────────────────────────────────── */}
      <AnimatedPage>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">

            {/* ── Left: Main sections ──────────────────────────── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Service Overview */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                style={{ animation: "fadeSlideUp 0.6s ease 0.05s both" }}>
                <div className="h-1 bg-gradient-to-r from-[#3AA6FF] to-blue-400" />
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#3AA6FF]/10 rounded-lg flex items-center justify-center">
                      <Info className="w-4 h-4 text-[#3AA6FF]" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Service Overview</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    CS Praveen Kumar provides comprehensive {service.title.toLowerCase()} services to businesses
                    across India. Our experienced team ensures complete regulatory compliance and professional
                    handling of all requirements.
                  </p>
                  {service.longDesc && (
                    <p className="text-gray-500 leading-relaxed mt-3 text-sm">{service.longDesc}</p>
                  )}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                style={{ animation: "fadeSlideUp 0.6s ease 0.12s both" }}>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Key Benefits</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Expert Professional Handling",
                      "Complete Regulatory Compliance",
                      "Timely Processing",
                      "Transparent Communication",
                      "Post-Service Support",
                      "Professional Documentation",
                    ].map((benefit, i) => (
                      <div key={i}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200 group"
                        style={{ animation: `fadeSlideUp 0.5s ease ${0.15 + i * 0.06}s both` }}>
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              {service.eligibility && service.eligibility.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                  style={{ animation: "fadeSlideUp 0.6s ease 0.2s both" }}>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-8 h-8 bg-[#3AA6FF]/10 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-[#3AA6FF]" />
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">Eligibility & When Needed</h2>
                    </div>
                    <ul className="space-y-3">
                      {service.eligibility.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                          <CheckCircle className="w-4 h-4 text-[#3AA6FF] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Documents Required */}
              {service.documents && service.documents.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                  style={{ animation: "fadeSlideUp 0.6s ease 0.26s both" }}>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-8 h-8 bg-[#3AA6FF]/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-[#3AA6FF]" />
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">Documents Required</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.documents.map((doc, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-xl border border-blue-100/50">
                          <div className="w-5 h-5 bg-[#3AA6FF]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-[#3AA6FF]" />
                          </div>
                          <span className="text-gray-600 text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Process Steps */}
              {service.process && service.process.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                  style={{ animation: "fadeSlideUp 0.6s ease 0.3s both" }}>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 bg-[#3AA6FF]/10 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-[#3AA6FF]" />
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">Our Process</h2>
                    </div>
                    <div className="space-y-4">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex gap-4 group"
                          style={{ animation: `fadeSlideUp 0.5s ease ${0.32 + i * 0.07}s both` }}>
                          {/* Step number + line */}
                          <div className="flex flex-col items-center">
                            <div className="w-9 h-9 bg-gradient-to-br from-[#3AA6FF] to-blue-600 text-white rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-200">
                              {i + 1}
                            </div>
                            {i < (service.process?.length ?? 0) - 1 && (
                              <div className="w-px flex-1 bg-gradient-to-b from-[#3AA6FF]/30 to-transparent mt-1 mb-1 min-h-[16px]" />
                            )}
                          </div>
                          {/* Content */}
                          <div className="pb-4 flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">Step {i + 1}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                  style={{ animation: "fadeSlideUp 0.6s ease 0.36s both" }}>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-8 h-8 bg-[#3AA6FF]/10 rounded-lg flex items-center justify-center">
                        <HelpCircle className="w-4 h-4 text-[#3AA6FF]" />
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-3">
                      {service.faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── Right: Sticky Sidebar ────────────────────────── */}
            <div className="space-y-5">
              <div className="lg:sticky lg:top-24 space-y-5">

                {/* Service Info Card */}
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                  style={{ animation: "fadeSlideLeft 0.7s ease 0.1s both" }}>
                  <div className="h-1 bg-gradient-to-r from-[#3AA6FF] to-blue-400" />
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-4 text-base">Service Information</h3>
                    <div className="space-y-0 divide-y divide-gray-100">
                      {service.timeline && (
                        <div className="flex items-center justify-between py-3">
                          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <Clock className="w-3.5 h-3.5 text-[#3AA6FF]" /> Processing Time
                          </div>
                          <span className="text-sm text-gray-500 font-medium">{service.timeline}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between py-3">
                        <span className="text-sm font-medium text-gray-700">Service Type</span>
                        <span className="text-sm text-gray-500">{service.category}</span>
                      </div>
                      <div className="flex items-center justify-between py-3">
                        <span className="text-sm font-medium text-gray-700">Coverage</span>
                        <span className="text-sm text-gray-500">Pan India</span>
                      </div>
                    </div>

                    <div className="pt-4 space-y-2.5">
                      <Link href="/contact"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#3AA6FF] to-blue-500 text-white font-bold py-3 px-5 rounded-xl text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md shadow-blue-500/20 w-full">
                        Get Information
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <p className="text-[11px] text-gray-400 text-center">
                        Contact us for detailed information
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Consultation */}
                <div className="bg-gradient-to-br from-[#3AA6FF] to-[#1a7fd4] rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20"
                  style={{ animation: "fadeSlideLeft 0.7s ease 0.2s both" }}>
                  <div className="p-5">
                    <h3 className="font-bold text-white text-base mb-2">Need Professional Guidance?</h3>
                    <p className="text-white/80 text-xs leading-relaxed mb-4">
                      Our experienced CS professionals are here to guide you through the entire process.
                    </p>
                    <div className="space-y-2 mb-5">
                      {[
                        "Free Initial Consultation",
                        "Expert Professional Advice",
                        "Complete Process Guidance",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-white/90 text-xs font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact"
                      className="flex items-center justify-center gap-2 bg-white text-[#3AA6FF] font-bold py-2.5 px-4 rounded-xl text-sm hover:bg-white/90 transition-all w-full shadow-sm">
                      Book Free Consultation <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Contact Quick Links */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
                  style={{ animation: "fadeSlideLeft 0.7s ease 0.28s both" }}>
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Quick Contact</h3>
                  <div className="space-y-2">
                    <a href="tel:+919999999999"
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:border-blue-100 border border-transparent transition-all text-sm text-gray-700 hover:text-[#3AA6FF] font-medium group">
                      <Phone className="w-4 h-4 text-[#3AA6FF] flex-shrink-0" />
                      Call Us Now
                      <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="mailto:info@cspraveenkumar.in"
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:border-blue-100 border border-transparent transition-all text-sm text-gray-700 hover:text-[#3AA6FF] font-medium group">
                      <Mail className="w-4 h-4 text-[#3AA6FF] flex-shrink-0" />
                      Send Email
                      <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div style={{ animation: "fadeSlideLeft 0.7s ease 0.35s both" }}>
                  <ContactForm
                    title="Request Information"
                    showServices={false}
                    className="border border-gray-200 rounded-2xl shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}

// ─── FAQ Accordion (client-side) ─────────────────────────────────────────────
// Create this separately at: components/ui/faq-item.tsx if needed
// For now inline as a server component with CSS-only approach:
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  return (
    <details
      className="group border border-gray-200 rounded-xl overflow-hidden"
      style={{ animation: `fadeSlideUp 0.4s ease ${0.38 + index * 0.06}s both` }}
    >
      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors list-none">
        <span className="text-sm font-semibold text-gray-800 pr-4">{question}</span>
        <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 group-open:border-[#3AA6FF] group-open:text-[#3AA6FF] group-open:bg-[#3AA6FF]/10 transition-all flex-shrink-0 text-base font-bold">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:block">−</span>
        </span>
      </summary>
      <div className="px-5 pb-4 pt-1 text-gray-500 text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50">
        {answer}
      </div>
    </details>
  );
}
