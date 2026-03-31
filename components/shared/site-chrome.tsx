"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaChevronLeft, FaChevronRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTimes, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";

import { CounsellorChat } from "@/components/ai-chat/counsellor-chat";
import { ABOUT_DROPDOWN_ITEMS } from "@/lib/config/about-nav";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Placements", href: "/placements" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Research", href: "/research" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const NAV_LINK_IMAGES = [
  {
    src: "/assets/img/college/1st.png",
    alt: "SVIET campus preview one",
  },
  {
    src: "/assets/img/college/4th.png",
    alt: "SVIET campus preview two",
  },
  {
    src: "/assets/img/college/8th.png",
    alt: "SVIET campus preview three",
  },
];

const PROGRAM_DROPDOWN_ITEMS = [
  { label: "Program Finder", href: "/program-finder" },
  { label: "B.Tech CSE", href: "/programs/btech-cse" },
  { label: "B.Tech AI & ML", href: "/programs/btech-ai" },
  { label: "MBA", href: "/programs/mba" },
  { label: "BBA", href: "/programs/bba" },
  { label: "BCA", href: "/programs/bca" },
  { label: "B.Pharm", href: "/programs/bpharm" },
];

const UTILITY_MESSAGES = [
  " Admissions Open 2026 — Apply Now",
  "Admission Helpline: +91-94652-33333 | Toll Free: 1800-120-1200",
  "NIRF Ranked #104 | NBA & NAAC Accredited",
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
    <div className="w-full border-b border-neutral-200 bg-[#ffffff] px-3 py-3 text-[10px] text-neutral-700 md:px-5 md:text-xs">
      <div className="mx-auto flex w-full max-w-300 items-center justify-between">
        <div className="relative min-w-0 flex-1 pr-3">
          <button
            type="button"
            onClick={showPreviousMessage}
            aria-label="Previous announcement"
            className="absolute left-0 top-1/2 inline-flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-[8px] transition hover:text-[#f7941d] md:h-6 md:w-6 md:text-[10px]"
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
            className="absolute right-0 top-1/2 inline-flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-[8px] transition hover:text-[#f7941d] md:h-6 md:w-6 md:text-[10px]"
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
            <span>1800-120-1200</span>
          </span>
          <FaFacebookF className="text-[10px] md:text-xs" />
          <FaInstagram className="text-[10px] md:text-xs" />
        </div>
      </div>
    </div>
  );
}

export function MainNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileProgramsOpen(false);
  };

  const toggleMobileAbout = () => {
    setIsMobileAboutOpen((prev) => !prev);
    setIsMobileProgramsOpen(false);
  };

  const toggleMobilePrograms = () => {
    setIsMobileProgramsOpen((prev) => !prev);
    setIsMobileAboutOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-300 items-center justify-between px-3 py-3 md:px-5">
        <Link href="/" className="flex items-center">
          <Image src="/Logo.webp" alt="SVIET logo" width={180} height={56} className="h-10 w-auto md:h-12" style={{ width: "auto" }} priority />
        </Link>
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 text-[#1b1b1b] transition hover:bg-neutral-100 lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-main-menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="hidden items-center gap-5 text-[11px] font-semibold tracking-wide text-[#1b1b1b] lg:flex">
          <div className="flex items-center gap-1.5">
            {NAV_LINK_IMAGES.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={347}
                height={150}
                className="h-22 w-auto object-contain"
              />
            ))}
          </div>

          {NAV_ITEMS.map((item) => (
            item.label === "About" ? (
              <div key={item.label} className="group relative">
                <Link href={item.href} className="inline-flex items-center gap-1 hover:text-[#f7941d]">
                  {item.label}
                  <span className="text-[10px]">▾</span>
                </Link>

                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-70 -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white p-3 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  <div className="space-y-1">
                    {ABOUT_DROPDOWN_ITEMS.map((aboutItem) => {
                      const isActive = pathname === aboutItem.href;

                      return (
                        <Link
                          key={aboutItem.href}
                          href={aboutItem.href}
                          className={`block rounded-xl px-3 py-2 text-[11px] font-semibold transition hover:bg-neutral-100 hover:text-[#f7941d] ${isActive ? "bg-[#f7941d]/10 text-[#f7941d]" : "text-[#1b1b1b]"}`}
                        >
                          {aboutItem.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : item.label === "Programs" ? (
              <div key={item.label} className="group relative">
                <button type="button" className="inline-flex items-center gap-1 hover:text-[#f7941d]">
                  {item.label}
                  <span className="text-[10px]">▾</span>
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-70 -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white p-3 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  <div className="space-y-1">
                    {PROGRAM_DROPDOWN_ITEMS.map((dropdownItem, index) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className={`block rounded-xl px-3 py-2 text-[11px] font-semibold transition hover:bg-neutral-100 hover:text-[#f7941d] ${index === 0 ? "bg-[#f7941d]/10 text-[#f7941d]" : "text-[#1b1b1b]"}`}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="hover:text-[#f7941d]">
                {item.label}
              </Link>
            )
          ))}
        </nav>
      </div>

      {isMobileMenuOpen ? (
        <div id="mobile-main-menu" className="absolute left-0 top-full z-40 w-full border-t border-neutral-200 bg-white/98 shadow-lg backdrop-blur-sm lg:hidden">
          <div className="mx-auto w-full max-w-300 px-4 py-4">
            <div className="mb-3 flex items-center gap-2">
              {NAV_LINK_IMAGES.map((image) => (
                <Image
                  key={`mobile-${image.src}`}
                  src={image.src}
                  alt={image.alt}
                  width={347}
                  height={150}
                  className="h-9 w-auto border border-neutral-200 object-contain"
                />
              ))}
            </div>

            <nav className="space-y-1 text-sm font-semibold text-[#1b1b1b]">
              {NAV_ITEMS.map((item) => (
                item.label === "About" ? (
                  <div key="mobile-about-dropdown" className="rounded-lg border border-neutral-200 p-1">
                    <button
                      type="button"
                      onClick={toggleMobileAbout}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition hover:bg-neutral-100 hover:text-[#f7941d]"
                    >
                      <span>{item.label}</span>
                      <span className={`text-xs transition ${isMobileAboutOpen ? "rotate-180" : "rotate-0"}`}>▾</span>
                    </button>

                    {isMobileAboutOpen ? (
                      <div className="mt-1 space-y-1 px-2 pb-2">
                        {ABOUT_DROPDOWN_ITEMS.map((aboutItem) => {
                          const isActive = pathname === aboutItem.href;

                          return (
                            <Link
                              key={`mobile-about-${aboutItem.href}`}
                              href={aboutItem.href}
                              onClick={closeMobileMenu}
                              className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-neutral-100 hover:text-[#f7941d] ${isActive ? "bg-[#f7941d]/10 text-[#f7941d]" : "text-[#1b1b1b]"}`}
                            >
                              {aboutItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                ) : item.label === "Programs" ? (
                  <div key="mobile-programs-dropdown" className="rounded-lg border border-neutral-200 p-1">
                    <button
                      type="button"
                      onClick={toggleMobilePrograms}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition hover:bg-neutral-100 hover:text-[#f7941d]"
                    >
                      <span>{item.label}</span>
                      <span className={`text-xs transition ${isMobileProgramsOpen ? "rotate-180" : "rotate-0"}`}>▾</span>
                    </button>

                    {isMobileProgramsOpen ? (
                      <div className="mt-1 space-y-1 px-2 pb-2">
                        {PROGRAM_DROPDOWN_ITEMS.map((programItem, index) => (
                          <Link
                            key={`mobile-program-${programItem.label}`}
                            href={programItem.href}
                            onClick={closeMobileMenu}
                            className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-neutral-100 hover:text-[#f7941d] ${index === 0 ? "bg-[#f7941d]/10 text-[#f7941d]" : "text-[#1b1b1b]"}`}
                          >
                            {programItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={`mobile-${item.label}`}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 transition hover:bg-neutral-100 hover:text-[#f7941d]"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
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
                  <Image src="/Logo.webp" alt="SVIET logo" width={120} height={40} className="h-8 w-auto md:h-10" style={{ width: "auto" }} />
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
                    <p className="font-semibold uppercase tracking-wide">Address</p>
                    <p>Village Ramnagar, Near Banur, Tehsil Rajpura, Patiala, Punjab - 140601</p>
                    <p className="mt-3">Phone: +91-94652-33333</p>
                    <p>Toll Free: 1800-120-1200</p>
                    <p>Email: admission@sviet.ac.in | info@sviet.ac.in</p>
                    <p>Website: www.sviet.ac.in</p>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="text-lg font-semibold uppercase">
                  <Link href="/admissions" className="hover:text-white">
                    Admissions
                  </Link>
                </h4>
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
                    <li key={item}>
                      {item === "Admission Procedure" ? (
                        <Link href="/admissions" className="hover:text-white">
                          {item}
                        </Link>
                      ) : (
                        item
                      )}
                    </li>
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
                    "Research",
                    "Blogs",
                  ].map((item) => (
                    <li key={item}>
                      {item === "Research" ? (
                        <Link href="/research" className="hover:text-white">
                          {item}
                        </Link>
                      ) : (
                        item
                      )}
                    </li>
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
      <CounsellorChat />
    </>
  );
}
