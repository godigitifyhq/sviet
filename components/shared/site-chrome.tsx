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

const PROGRAM_DROPDOWN_ITEMS = [{ label: "Program Finder", href: "/program-finder" }];

const ABOUT_PANEL_GROUPS = [
  {
    title: "Discover PU",
    items: [
      { label: "Overview", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Vision and Mission", href: "/about" },
      { label: "PU Advantage", href: "/about" },
    ],
  },
  {
    title: "Explore More",
    items: [
      { label: "Our Campus Locations", href: "/about/infrastructure" },
      { label: "PU Infrastructure", href: "/about/infrastructure" },
      { label: "Sakshamthad Foundation", href: "/about" },
      { label: "Life at PU", href: "/campus-life" },
    ],
  },
] as const;

const ABOUT_PANEL_FEATURE = {
  eyebrow: "Admissions Open 2026",
  title: "Join a new generation of learners",
  description: "Explore academics, campus life, and the student experience in one focused view.",
  href: "/admissions",
  imageSrc: "/assets/img/college/8th.png",
  imageAlt: "Student spotlight",
};

const PROGRAM_PANEL_FEATURE = {
  eyebrow: "Program Finder",
  title: "Find the right program faster",
  description: "Browse departments, compare active programs, and jump straight into the degree that fits.",
  href: "/program-finder",
  imageSrc: "/assets/img/college/4th.png",
  imageAlt: "Campus building",
};

type ProgramDropdownItem = {
  id: string;
  slug: string;
  title: string;
  department?: string | null;
};

type ProgramsApiResponse = {
  success?: boolean;
  data?: ProgramDropdownItem[];
};

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
  const [dynamicPrograms, setDynamicPrograms] = useState<ProgramDropdownItem[]>([]);

  useEffect(() => {
    let active = true;

    const loadPrograms = async () => {
      try {
        const response = await fetch("/api/programs", { cache: "no-store" });
        const payload = (await response.json()) as ProgramsApiResponse;

        if (!active) {
          return;
        }

        if (!response.ok || !payload.success || !Array.isArray(payload.data)) {
          setDynamicPrograms([]);
          return;
        }

        setDynamicPrograms(payload.data);
      } catch {
        if (active) {
          setDynamicPrograms([]);
        }
      }
    };

    loadPrograms();

    return () => {
      active = false;
    };
  }, []);

  const programDropdownItems: Array<{ label: string; href: string; department?: string }> = [
    ...PROGRAM_DROPDOWN_ITEMS,
    ...dynamicPrograms.map((program) => ({
      label: program.title,
      href: `/programs/${program.slug}`,
      department: program.department ?? "Programs",
    })),
  ];

  const groupedProgramItems = programDropdownItems.reduce<Record<string, { label: string; href: string }[]>>(
    (accumulator, item) => {
      const group = item.department ? item.department : "Explore";

      if (!accumulator[group]) {
        accumulator[group] = [];
      }

      accumulator[group].push({ label: item.label, href: item.href });
      return accumulator;
    },
    {},
  );

  const orderedProgramGroups = Object.entries(groupedProgramItems).sort(([left], [right]) => {
    if (left === "Explore") {
      return -1;
    }

    if (right === "Explore") {
      return 1;
    }

    return left.localeCompare(right);
  });

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

                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[min(1080px,calc(100vw-2rem))] -translate-x-1/2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
                    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {ABOUT_PANEL_GROUPS.map((group) => (
                          <section key={group.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f7941d]">{group.title}</p>
                            <div className="mt-3 space-y-1.5">
                              {group.items.map((aboutItem) => {
                                const isActive = pathname === aboutItem.href;

                                return (
                                  <Link
                                    key={`${group.title}-${aboutItem.href}-${aboutItem.label}`}
                                    href={aboutItem.href}
                                    className={`flex items-center justify-between rounded-xl border px-3 py-2 text-[12px] font-semibold transition hover:border-[#f7941d]/30 hover:bg-white hover:text-[#f7941d] ${isActive ? "border-[#f7941d]/25 bg-[#f7941d]/10 text-[#f7941d]" : "border-transparent text-[#1b1b1b]"}`}
                                  >
                                    <span>{aboutItem.label}</span>
                                    <span className="text-[10px] opacity-60">↗</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </section>
                        ))}
                      </div>

                      <Link
                        href={ABOUT_PANEL_FEATURE.href}
                        className="group/card relative overflow-hidden rounded-3xl bg-linear-to-br from-[#f2ecff] via-[#f9eef7] to-[#f9d9e7] p-5 text-slate-900 transition hover:-translate-y-0.5"
                      >
                        <div className="relative z-10 flex h-full flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5c4dd8]">{ABOUT_PANEL_FEATURE.eyebrow}</span>
                          <h3 className="mt-3 max-w-56 text-3xl font-black leading-[0.95] tracking-tight">{ABOUT_PANEL_FEATURE.title}</h3>
                          <p className="mt-3 max-w-60 text-sm leading-6 text-slate-700">{ABOUT_PANEL_FEATURE.description}</p>
                          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#5c4dd8]">
                            Learn more
                            <span className="transition group-hover/card:translate-x-0.5">→</span>
                          </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-40">
                          <Image
                            src={ABOUT_PANEL_FEATURE.imageSrc}
                            alt={ABOUT_PANEL_FEATURE.imageAlt}
                            fill
                            sizes="(max-width: 1280px) 340px, 340px"
                            className="object-cover object-top-right opacity-55 mix-blend-multiply"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : item.label === "Programs" ? (
              <div key={item.label} className="group relative">
                <button type="button" className="inline-flex items-center gap-1 hover:text-[#f7941d]">
                  {item.label}
                  <span className="text-[10px]">▾</span>
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[min(1080px,calc(100vw-2rem))] -translate-x-1/2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
                    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
                      <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                          <Link
                            href="/program-finder"
                            className="rounded-3xl border border-[#f7941d]/20 bg-[#f7941d]/10 p-4 transition hover:-translate-y-0.5 hover:border-[#f7941d]/40 hover:bg-[#f7941d]/15"
                          >
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f7941d]">Explore</p>
                            <h3 className="mt-3 text-xl font-black tracking-tight text-[#111]">Program Finder</h3>
                            <p className="mt-2 text-sm leading-6 text-[#555]">Search by career goal, duration, department, or specialization.</p>
                          </Link>

                          {orderedProgramGroups.map(([groupName, groupItems]) => (
                            <section key={groupName} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f7941d]">{groupName}</p>
                              <div className="mt-3 space-y-1.5">
                                {groupItems.slice(0, 6).map((dropdownItem) => {
                                  const isCurrent = pathname === dropdownItem.href;

                                  return (
                                    <Link
                                      key={`${groupName}-${dropdownItem.href}-${dropdownItem.label}`}
                                      href={dropdownItem.href}
                                      className={`block rounded-xl border px-3 py-2 text-[12px] font-semibold transition hover:border-[#f7941d]/30 hover:bg-white hover:text-[#f7941d] ${isCurrent ? "border-[#f7941d]/25 bg-[#f7941d]/10 text-[#f7941d]" : "border-transparent text-[#1b1b1b]"}`}
                                    >
                                      {dropdownItem.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </section>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={PROGRAM_PANEL_FEATURE.href}
                        className="group/card relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-5 text-white transition hover:-translate-y-0.5"
                      >
                        <div className="relative z-10 flex h-full flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-300">{PROGRAM_PANEL_FEATURE.eyebrow}</span>
                          <h3 className="mt-3 max-w-56 text-3xl font-black leading-[0.95] tracking-tight">{PROGRAM_PANEL_FEATURE.title}</h3>
                          <p className="mt-3 max-w-60 text-sm leading-6 text-slate-200">{PROGRAM_PANEL_FEATURE.description}</p>
                          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-300">
                            Open finder
                            <span className="transition group-hover/card:translate-x-0.5">→</span>
                          </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-44">
                          <Image
                            src={PROGRAM_PANEL_FEATURE.imageSrc}
                            alt={PROGRAM_PANEL_FEATURE.imageAlt}
                            fill
                            sizes="(max-width: 1280px) 340px, 340px"
                            className="object-cover object-center opacity-35 mix-blend-screen"
                          />
                        </div>
                      </Link>
                    </div>
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
                      <div className="mt-1 grid gap-1 px-2 pb-2">
                        {ABOUT_DROPDOWN_ITEMS.map((aboutItem) => {
                          const isActive = pathname === aboutItem.href;

                          return (
                            <Link
                              key={`mobile-about-${aboutItem.href}`}
                              href={aboutItem.href}
                              onClick={closeMobileMenu}
                              className={`block rounded-lg border px-3 py-2 text-sm transition hover:border-[#f7941d]/30 hover:bg-neutral-100 hover:text-[#f7941d] ${isActive ? "border-[#f7941d]/25 bg-[#f7941d]/10 text-[#f7941d]" : "border-neutral-200 text-[#1b1b1b]"}`}
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
                      <div className="mt-1 flex max-h-90 flex-col gap-3 overflow-y-auto px-2 pb-2">
                        {orderedProgramGroups.map(([groupName, groupItems]) => (
                          <div key={`mobile-group-${groupName}`} className="rounded-lg border border-neutral-200 bg-white p-2">
                            <p className="px-1 pb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#f7941d]">{groupName}</p>
                            <div className="space-y-1">
                              {groupItems.map((programItem, index) => (
                                <Link
                                  key={`mobile-program-${groupName}-${programItem.href}-${programItem.label}`}
                                  href={programItem.href}
                                  onClick={closeMobileMenu}
                                  className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-neutral-100 hover:text-[#f7941d] ${groupName === "Explore" && index === 0 ? "bg-[#f7941d]/10 text-[#f7941d]" : "text-[#1b1b1b]"}`}
                                >
                                  {programItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
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
