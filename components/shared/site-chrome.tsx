"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "ABOUT", href: "#" },
  { label: "PROGRAMS", href: "/programs" },
  { label: "PLACEMENTS", href: "#" },
  { label: "ADMISSIONS", href: "#" },
  { label: "CAMPUS LIFE", href: "/campus-life" },
  { label: "EVENTS & SPOTLIGHT", href: "/events" },
  { label: "STUDENT PORTAL", href: "#" },
  { label: "CONTACT US", href: "#" },
];

const UTILITY_MESSAGES = [
  "Accredited higher education institute in Engineering & Core Studies.",
  "Admissions open for 2026 batch with scholarship opportunities.",
  "Industry-ready programs with placements, labs, and mentorship.",
];

export function TopUtilityBar() {
  const [messageIndex, setMessageIndex] = useState(0);

  const showPreviousMessage = () => {
    setMessageIndex((prev) => (prev === 0 ? UTILITY_MESSAGES.length - 1 : prev - 1));
  };

  const showNextMessage = () => {
    setMessageIndex((prev) => (prev + 1) % UTILITY_MESSAGES.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      showNextMessage();
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="w-full border-b border-neutral-200 bg-[#ffffff] px-3 py-1 text-[10px] text-neutral-700 md:px-5 md:text-xs">
      <div className="mx-auto flex w-full max-w-300 items-center justify-between">
        <div className="relative min-w-0 flex-1 pr-3">
          <button
            type="button"
            onClick={showPreviousMessage}
            aria-label="Previous announcement"
            className="absolute left-0 top-1/2 inline-flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-400 text-[8px] transition hover:text-[#f7941d] md:h-6 md:w-6 md:text-[10px]"
          >
            <FaChevronLeft />
          </button>
          <p className="truncate px-8 text-center font-medium md:px-10" aria-live="polite">
            {UTILITY_MESSAGES[messageIndex]}
          </p>
          <button
            type="button"
            onClick={showNextMessage}
            aria-label="Next announcement"
            className="absolute right-0 top-1/2 inline-flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-400 text-[8px] transition hover:text-[#f7941d] md:h-6 md:w-6 md:text-[10px]"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="ml-3 flex items-center gap-3 whitespace-nowrap">
          <span className="flex items-center gap-1">
            <FaWhatsapp className="text-[#25D366]" />
            <span>WhatsApp</span>
          </span>
          <span className="flex items-center gap-1 rounded bg-[#f7941d] px-2 py-0.5 text-white">
            <FaPhoneAlt className="text-[9px] md:text-[10px]" />
            <span>1800-180-000</span>
          </span>
          <FaFacebookF className="text-[10px] md:text-xs" />
          <FaInstagram className="text-[10px] md:text-xs" />
        </div>
      </div>
    </div>
  );
}

export function MainNavbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-300 items-center justify-between px-3 py-3 md:px-5">
        <Link href="/" className="flex items-center">
          <Image src="/Logo.webp" alt="SVIET logo" width={180} height={56} className="h-10 w-auto md:h-12" priority />
        </Link>
        <nav className="hidden items-center gap-5 text-[11px] font-semibold tracking-wide text-[#1b1b1b] lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-[#f7941d]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-semibold md:text-3xl">Shape Your Future with Us</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-md">
            Discover limitless opportunities at SVIET, where innovation, learning, and industry connect.
          </p>
          <p className="text-sm leading-relaxed text-white/80 md:text-md">
            Take the first step towards your dreams. Explore our programs and get in touch to begin your journey with us.
          </p>
          <button
            type="button"
            className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Get in touch
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f7941d] text-white">↗</span>
          </button>
        </div>

        <div className="mt-14 border-t border-white/10 pt-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <section>
              <div className="flex items-center gap-3">
                <Image src="/Logo.webp" alt="SVIET logo" width={120} height={40} className="h-8 w-auto md:h-10" />
              </div>

              <div className="mt-6 flex items-center gap-2">
                <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center bg-white/15 text-white transition hover:bg-white/25">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center bg-white/15 text-white transition hover:bg-white/25">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center bg-white/15 text-white transition hover:bg-white/25">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="X" className="inline-flex h-10 w-10 items-center justify-center bg-white/15 text-base font-semibold text-white transition hover:bg-white/25">
                  X
                </a>
                <a href="#" aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center bg-white/15 text-white transition hover:bg-white/25">
                  <FaYoutube />
                </a>
              </div>

              <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/90">
                <div>
                  <p className="font-semibold uppercase tracking-wide">SVIET (PUNJAB)</p>
                  <p>Chandigarh-Patiala National Highway, Punjab 140 401</p>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-wide">Information Centre</p>
                  <p>Unit No. A 201-202, Elante Mall Office Complex</p>
                  <p>Industrial Area Phase 1, Chandigarh 160 002</p>
                </div>
              </div>
            </section>

            <section>
              <h4 className="text-lg font-semibold uppercase">Admissions</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {[
                  "Downloadable Brochures",
                  "Important Contact Numbers",
                  "Application Form Sale Outlets",
                  "Admission Procedure",
                  "Fee Structure",
                  "International Students",
                  "Downloadable Forms & Formats",
                  "FAQ",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="text-lg font-semibold uppercase">Important Info</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {[
                  "Grievance Redressal",
                  "NIRF Report",
                  "University National Academic Depository (NAD) Cell",
                  "UGC Mandatory Disclosures",
                  "www.pmydisha2mci.co.in/",
                  "Academic Bank of Credits (ABC)",
                  "Request for Educational Verification",
                  "RTI",
                  "Agnipath Yojana",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="text-lg font-semibold uppercase">Explore</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {[
                  "SVIET University, Punjab",
                  "SVIET University, Himachal Pradesh",
                  "SVIET International School",
                  "SVIET Centre for Global Education",
                  "Office of International Affairs",
                  "Career Advancement Services",
                  "Office of Student Affairs",
                  "University Sports Board",
                  "Blogs",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5">
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-white/65 md:flex-row">
           
            <p>© {new Date().getFullYear()} SVIET. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
