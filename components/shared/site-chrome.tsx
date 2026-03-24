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
    <footer className="bg-black px-3 py-8 text-white md:px-5">
      <div className="mx-auto grid w-full max-w-300 gap-8 md:grid-cols-[1fr_1fr_0.7fr]">
        <div>
          <p className="font-serif text-6xl leading-none">SVIET</p>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            Swami Vivekanand Institute Of Engineering & Technology Promoted By Raghunath Rai Memorial Trust.
          </p>
          <p className="mt-3 text-sm text-white/70">Village: Pamaur Near Banur Tehsil Rajpura, Distt: Patiala</p>
          <p className="mt-2 text-sm text-white/70">Admissions: +91 99882 33333</p>
        </div>
        <form className="space-y-2">
          <p className="text-2xl font-semibold">Question us</p>
          <input className="w-full rounded bg-[#131313] px-3 py-2 text-sm" placeholder="First Name" />
          <input className="w-full rounded bg-[#131313] px-3 py-2 text-sm" placeholder="Course" />
          <input className="w-full rounded bg-[#131313] px-3 py-2 text-sm" placeholder="Phone" />
          <input className="w-full rounded bg-[#131313] px-3 py-2 text-sm" placeholder="Email" />
          <button type="button" className="w-full rounded bg-white px-3 py-2 text-sm font-semibold text-black">
            Get started
          </button>
        </form>
        <ul className="space-y-2 text-sm text-white/90">
          {["About Us", "Careers", "FAQs", "Teams", "Contact Us"].map((item) => (
            <li key={item} className="flex items-center justify-between border-b border-white/10 py-2">
              <span>{item}</span>
              <span>‹</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-6 flex w-full max-w-300 items-center gap-3 border-t border-white/10 pt-4 text-white/90">
        <a href="#" aria-label="Facebook" className="rounded-full border border-white/20 p-2 transition hover:text-[#f7941d]">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2 transition hover:text-[#f7941d]">
          <FaInstagram />
        </a>
        <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/20 p-2 transition hover:text-[#f7941d]">
          <FaLinkedinIn />
        </a>
        <a href="#" aria-label="YouTube" className="rounded-full border border-white/20 p-2 transition hover:text-[#f7941d]">
          <FaYoutube />
        </a>
        <a href="#" aria-label="WhatsApp" className="rounded-full border border-white/20 p-2 transition hover:text-[#f7941d]">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}
