"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaSearch,
  FaTimes,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
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

const HEADER_SCROLL_THRESHOLD = 50;

type TopUtilityBarProps = {
  isTransparent?: boolean;
  isUtilityHidden?: boolean;
};

type MainNavbarProps = {
  isTransparent?: boolean;
  isScrolled?: boolean;
};

export function SiteHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const syncScrollState = () => {
      const nextScrolled = window.scrollY > HEADER_SCROLL_THRESHOLD;
      setIsScrolled((previous) => (previous === nextScrolled ? previous : nextScrolled));
      animationFrameId = null;
    };

    const onScroll = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(syncScrollState);
    };

    syncScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [pathname]);

  const isTransparent = isHomePage && !isScrolled;
  const isUtilityHidden = isScrolled;

  return (
    <div
      className={[
        "site-header",
        isHomePage ? "site-header-home" : "site-header-default",
        isTransparent ? "navbar-transparent" : "navbar-scrolled",
        isUtilityHidden ? "utility-hidden" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <TopUtilityBar isTransparent={isTransparent} isUtilityHidden={isUtilityHidden} />
      <MainNavbar isTransparent={isTransparent} isScrolled={isScrolled} />
    </div>
  );
}

export function TopUtilityBar({ isTransparent = false, isUtilityHidden = false }: TopUtilityBarProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  const utilityToneClass = isTransparent
    ? "border-white/25 bg-transparent text-[#FFFFFF]"
    : "border-black/10 bg-[#FFFFFF] text-[#000000]";

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
    <div className={`utility-bar w-full border-b px-3 py-2 text-[10px] md:px-5 md:text-xs ${utilityToneClass} ${isUtilityHidden ? "utility-hidden" : ""}`}>
      <div className="mx-auto flex w-full max-w-300 items-center justify-between">
        <div className="relative min-w-0 flex-1 pr-3">
          <button
            type="button"
            onClick={showPreviousMessage}
            aria-label="Previous announcement"
            className="absolute left-0 top-1/2 inline-flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-[8px] text-current transition-colors duration-300 ease-out hover:text-[#FEA700] md:h-6 md:w-6 md:text-[10px]"
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
            className="absolute right-0 top-1/2 inline-flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-[8px] text-current transition-colors duration-300 ease-out hover:text-[#FEA700] md:h-6 md:w-6 md:text-[10px]"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="ml-3 hidden items-center gap-3 whitespace-nowrap md:flex">
          <span className="flex items-center gap-1 border border-current/20 px-2 py-1">
            <FaPhoneAlt className="text-[9px] md:text-[10px]" />
            <span>1800-120-1200</span>
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1 border border-current/20 px-2 py-1 text-current transition-colors duration-300 ease-out hover:border-[#FEA700] hover:text-[#FEA700]"
            aria-label="Open search"
          >
            <FaSearch className="text-[9px] md:text-[10px]" />
            <span>Search</span>
          </button>
          <a
            href="https://wa.me/919465233333"
            className="inline-flex items-center gap-1 bg-[#FEA700] px-2 py-1 font-semibold text-[#000000] transition-colors duration-300 ease-out hover:bg-[#FFFFFF]"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-[10px]" />
            <span>WhatsApp</span>
          </a>
          <FaFacebookF className="text-[10px] md:text-xs" />
          <FaInstagram className="text-[10px] md:text-xs" />
        </div>
      </div>
    </div>
  );
}

export function MainNavbar({ isTransparent = false, isScrolled = false }: MainNavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const [dynamicPrograms, setDynamicPrograms] = useState<ProgramDropdownItem[]>([]);

  const navbarToneClass = isTransparent
    ? "border-white/25 bg-transparent text-[#FFFFFF]"
    : "border-black/10 bg-[#FFFFFF] text-[#000000]";

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
    <header
      className={`main-navbar w-full border-b transition-[background-color,color,border-color,box-shadow] duration-300 ease-out ${navbarToneClass} ${
        isScrolled ? "shadow-[0_2px_10px_rgba(0,0,0,0.05)]" : "shadow-none"
      }`}
    >
      <div className={`mx-auto flex w-full max-w-300 items-center justify-between px-3 md:px-5 ${isScrolled ? "py-2 md:py-2.5" : "py-3 md:py-3.5"}`}>
        <Link href="/" className="flex items-center">
          <Image
            src={isTransparent ? "/assets/img/sviet_white.png" : "/Logo.webp"}
            alt="SVIET logo"
            width={347}
            height={150}
            className={`main-navbar-logo h-10 md:h-12 w-auto transition-[filter] duration-300 ease-out object-contain `}
            style={{ width: "auto" }}
            priority
          />
        </Link>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className={`inline-flex h-10 w-10 items-center justify-center border transition-colors duration-300 ease-out lg:hidden ${
            isTransparent
              ? "border-white/35 text-[#FFFFFF] hover:border-[#FEA700] hover:text-[#FEA700]"
              : "border-black/20 text-[#000000] hover:border-[#FEA700] hover:text-[#FEA700]"
          }`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-main-menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden items-center gap-5 text-[11px] font-semibold tracking-wide text-current lg:flex">
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
                <Link href={item.href} className="inline-flex items-center gap-1 transition-colors duration-300 ease-out hover:text-[#FEA700]">
                  {item.label}
                  <span className="text-[10px]">▾</span>
                </Link>

                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[min(1080px,calc(100vw-2rem))] -translate-x-1/2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden border border-black/10 bg-[#FFFFFF] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.1)]">
                    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {ABOUT_PANEL_GROUPS.map((group) => (
                          <section key={group.title} className="border border-black/10 bg-[#FFFFFF] p-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FEA700]">{group.title}</p>
                            <div className="mt-3 space-y-1.5">
                              {group.items.map((aboutItem) => {
                                const isActive = pathname === aboutItem.href;

                                return (
                                  <Link
                                    key={`${group.title}-${aboutItem.href}-${aboutItem.label}`}
                                    href={aboutItem.href}
                                    className={`flex items-center justify-between border px-3 py-2 text-[12px] font-semibold transition-colors duration-300 ease-out hover:border-[#FEA700]/40 hover:bg-[#FEA700]/10 hover:text-[#000000] ${
                                      isActive
                                        ? "border-[#FEA700]/40 bg-[#FEA700]/10 text-[#000000]"
                                        : "border-transparent text-[#000000]"
                                    }`}
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
                        className="group/card relative overflow-hidden border border-[#FEA700]/35 bg-[#000000] p-5 text-[#FFFFFF] transition-colors duration-300 ease-out hover:border-[#FEA700]"
                      >
                        <div className="relative z-10 flex h-full flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FEA700]">{ABOUT_PANEL_FEATURE.eyebrow}</span>
                          <h3 className="mt-3 max-w-56 text-3xl font-black leading-[0.95] tracking-tight">{ABOUT_PANEL_FEATURE.title}</h3>
                          <p className="mt-3 max-w-60 text-sm leading-6 text-white/80">{ABOUT_PANEL_FEATURE.description}</p>
                          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#FEA700]">
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
                            className="object-cover object-top-right opacity-30 mix-blend-screen"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : item.label === "Programs" ? (
              <div key={item.label} className="group relative">
                <button type="button" className="inline-flex items-center gap-1 transition-colors duration-300 ease-out hover:text-[#FEA700]">
                  {item.label}
                  <span className="text-[10px]">▾</span>
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[min(1080px,calc(100vw-2rem))] -translate-x-1/2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden border border-black/10 bg-[#FFFFFF] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.1)]">
                    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
                      <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                          <Link
                            href="/program-finder"
                            className="border border-[#FEA700]/30 bg-[#FEA700]/10 p-4 transition-colors duration-300 ease-out hover:border-[#FEA700]"
                          >
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FEA700]">Explore</p>
                            <h3 className="mt-3 text-xl font-black tracking-tight text-[#000000]">Program Finder</h3>
                            <p className="mt-2 text-sm leading-6 text-black/70">Search by career goal, duration, department, or specialization.</p>
                          </Link>

                          {orderedProgramGroups.map(([groupName, groupItems]) => (
                            <section key={groupName} className="border border-black/10 bg-[#FFFFFF] p-4">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FEA700]">{groupName}</p>
                              <div className="mt-3 space-y-1.5">
                                {groupItems.slice(0, 6).map((dropdownItem) => {
                                  const isCurrent = pathname === dropdownItem.href;

                                  return (
                                    <Link
                                      key={`${groupName}-${dropdownItem.href}-${dropdownItem.label}`}
                                      href={dropdownItem.href}
                                      className={`block border px-3 py-2 text-[12px] font-semibold transition-colors duration-300 ease-out hover:border-[#FEA700]/40 hover:bg-[#FEA700]/10 hover:text-[#000000] ${
                                        isCurrent
                                          ? "border-[#FEA700]/40 bg-[#FEA700]/10 text-[#000000]"
                                          : "border-transparent text-[#000000]"
                                      }`}
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
                        className="group/card relative overflow-hidden border border-[#FEA700]/35 bg-[#000000] p-5 text-[#FFFFFF] transition-colors duration-300 ease-out hover:border-[#FEA700]"
                      >
                        <div className="relative z-10 flex h-full flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FEA700]">{PROGRAM_PANEL_FEATURE.eyebrow}</span>
                          <h3 className="mt-3 max-w-56 text-3xl font-black leading-[0.95] tracking-tight">{PROGRAM_PANEL_FEATURE.title}</h3>
                          <p className="mt-3 max-w-60 text-sm leading-6 text-white/80">{PROGRAM_PANEL_FEATURE.description}</p>
                          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#FEA700]">
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
                            className="object-cover object-center opacity-30 mix-blend-screen"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="transition-colors duration-300 ease-out hover:text-[#FEA700]">
                {item.label}
              </Link>
            )
          ))}
        </nav>
      </div>

      {isMobileMenuOpen ? (
        <div
          id="mobile-main-menu"
          className={`absolute left-0 top-full z-40 w-full border-t backdrop-blur-sm lg:hidden ${
            isTransparent
              ? "border-white/20 bg-[#000000]/95 text-[#FFFFFF]"
              : "border-black/10 bg-[#FFFFFF]/98 text-[#000000] shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
          }`}
        >
          <div className="mx-auto w-full max-w-300 px-4 py-4">
            <div className="mb-3 flex items-center gap-2">
              {NAV_LINK_IMAGES.map((image) => (
                <Image
                  key={`mobile-${image.src}`}
                  src={image.src}
                  alt={image.alt}
                  width={347}
                  height={150}
                  className={`h-9 w-auto border object-contain ${isTransparent ? "border-white/20" : "border-black/10"}`}
                />
              ))}
            </div>

            <nav className="space-y-1 text-sm font-semibold text-current">
              {NAV_ITEMS.map((item) => (
                item.label === "About" ? (
                  <div key="mobile-about-dropdown" className={`border p-1 ${isTransparent ? "border-white/20 bg-black/60" : "border-black/10 bg-[#FFFFFF]"}`}>
                    <button
                      type="button"
                      onClick={toggleMobileAbout}
                      className="flex w-full items-center justify-between px-3 py-2 text-left transition-colors duration-300 ease-out hover:text-[#FEA700]"
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
                              className={`block border px-3 py-2 text-sm transition-colors duration-300 ease-out hover:border-[#FEA700]/40 hover:bg-[#FEA700]/10 hover:text-[#FEA700] ${
                                isActive
                                  ? "border-[#FEA700]/40 bg-[#FEA700]/10 text-[#FEA700]"
                                  : isTransparent
                                    ? "border-white/20 text-[#FFFFFF]"
                                    : "border-black/10 text-[#000000]"
                              }`}
                            >
                              {aboutItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                ) : item.label === "Programs" ? (
                  <div key="mobile-programs-dropdown" className={`border p-1 ${isTransparent ? "border-white/20 bg-black/60" : "border-black/10 bg-[#FFFFFF]"}`}>
                    <button
                      type="button"
                      onClick={toggleMobilePrograms}
                      className="flex w-full items-center justify-between px-3 py-2 text-left transition-colors duration-300 ease-out hover:text-[#FEA700]"
                    >
                      <span>{item.label}</span>
                      <span className={`text-xs transition ${isMobileProgramsOpen ? "rotate-180" : "rotate-0"}`}>▾</span>
                    </button>

                    {isMobileProgramsOpen ? (
                      <div className="mt-1 flex max-h-90 flex-col gap-3 overflow-y-auto px-2 pb-2">
                        {orderedProgramGroups.map(([groupName, groupItems]) => (
                          <div key={`mobile-group-${groupName}`} className={`border p-2 ${isTransparent ? "border-white/20 bg-black/50" : "border-black/10 bg-[#FFFFFF]"}`}>
                            <p className="px-1 pb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#FEA700]">{groupName}</p>
                            <div className="space-y-1">
                              {groupItems.map((programItem, index) => (
                                <Link
                                  key={`mobile-program-${groupName}-${programItem.href}-${programItem.label}`}
                                  href={programItem.href}
                                  onClick={closeMobileMenu}
                                  className={`block px-3 py-2 text-sm transition-colors duration-300 ease-out hover:text-[#FEA700] ${
                                    groupName === "Explore" && index === 0
                                      ? "bg-[#FEA700]/10 text-[#FEA700]"
                                      : isTransparent
                                        ? "text-[#FFFFFF]"
                                        : "text-[#000000]"
                                  }`}
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
                    className="block px-3 py-2 transition-colors duration-300 ease-out hover:text-[#FEA700]"
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
                  <Image src="/assets/img/sviet_white.png" alt="SVIET logo" width={120} height={40} className="h-8 w-auto md:h-10" style={{ width: "auto" }} />
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
