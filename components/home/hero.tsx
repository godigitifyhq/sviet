"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { postJson } from "@/lib/form-utils";

const HERO_SLIDES = [
  {
    heading: "Nurturing Excellence\nSince 2004",
    subheading: "A Legacy of Quality Education",
    studentImage: "/assets/img/students/moon_mandal.png",
    studentImageAlt: "Moon Mandal",
    stat1: { value: "20+", label: "Years of Excellence" },
    stat2: { value: "104", label: "NIRF Ranking 2021" },
    stat3: { value: "10,000+", label: "Alumni Worldwide" },
  },
  {
    heading: "Where Innovation\nMeets Industry",
    subheading: "Chart Your Engineering Journey at SVIET",
    studentImage: "/assets/img/students/image (1).png",
    studentImageAlt: "SVIET student",
    stat1: { value: "45 LPA", label: "Highest Package" },
    stat2: { value: "500+", label: "Recruiting Companies" },
    stat3: { value: "100%", label: "Placement Assistance" },
  },
  {
    heading: "Ranked Among\nTop Institutions",
    subheading: "North India's Premier Group of Institutes",
    studentImage: "/assets/img/students/image (2).png",
    studentImageAlt: "Moon Mandal",
    stat1: { value: "10+", label: "Institutions" },
    stat2: { value: "50+", label: "Programs Offered" },
    stat3: { value: "25,000+", label: "Students Enrolled" },
  },
];

type ApplyFormState = {
  fullName: string;
  email: string;
  phone: string;
  course: string;
};

type ApplyFormErrors = Partial<Record<keyof ApplyFormState, string>>;

const initialApplyForm: ApplyFormState = {
  fullName: "",
  email: "",
  phone: "",
  course: "",
};

const indianMobilePattern = /^[6-9]\d{9}$/;

function splitFullName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0] ?? "";
  const lastName = parts.slice(1).join(" ") || ".";

  return { firstName, lastName };
}

export function HeroSection() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [applyForm, setApplyForm] = useState<ApplyFormState>(initialApplyForm);
  const [applyErrors, setApplyErrors] = useState<ApplyFormErrors>({});
  const [applyLoading, setApplyLoading] = useState(false);
  const [applyError, setApplyError] = useState("");
  const [applySuccess, setApplySuccess] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const resetApplyPanelState = useCallback(() => {
    setApplyForm(initialApplyForm);
    setApplyErrors({});
    setApplyLoading(false);
    setApplyError("");
    setApplySuccess(false);
  }, []);

  const closeApplyPanel = useCallback(() => {
    setIsApplyOpen(false);
    resetApplyPanelState();
  }, [resetApplyPanelState]);

  const toggleApplyPanel = () => {
    if (isApplyOpen) {
      closeApplyPanel();
      return;
    }

    setIsApplyOpen(true);
  };

  const showPreviousSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const showNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      showNextSlide();
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!isApplyOpen || !panelRef.current) {
        return;
      }

      if (!panelRef.current.contains(event.target as Node)) {
        closeApplyPanel();
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeApplyPanel();
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [isApplyOpen, closeApplyPanel]);

  const handleApplyFormChange = (field: keyof ApplyFormState, value: string) => {
    setApplyForm((prev) => ({ ...prev, [field]: value }));
    setApplyErrors((prev) => ({ ...prev, [field]: "" }));
    setApplyError("");
  };

  const validateApplyForm = () => {
    const nextErrors: ApplyFormErrors = {};

    if (!applyForm.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!applyForm.email.trim()) {
      nextErrors.email = "Email is required.";
    }

    if (!applyForm.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!indianMobilePattern.test(applyForm.phone.trim())) {
      nextErrors.phone = "Enter a valid Indian mobile number.";
    }

    if (!applyForm.course.trim()) {
      nextErrors.course = "Please choose a program.";
    }

    setApplyErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleApplySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateApplyForm()) {
      return;
    }

    setApplyLoading(true);
    setApplyError("");

    try {
      const { firstName, lastName } = splitFullName(applyForm.fullName);

      const response = await postJson<{ leadId: string; message: string }>("/api/leads/apply", {
        firstName,
        lastName,
        email: applyForm.email.trim(),
        phone: applyForm.phone.trim(),
        course: applyForm.course,
      });

      const isSuccessful = response.success === true || (response as { ok?: boolean }).ok === true;

      if (!isSuccessful) {
        setApplyError(response.error?.message ?? "Unable to submit right now. Please try again.");
        return;
      }

      setApplySuccess(true);
    } catch {
      setApplyError("Unable to submit right now. Please try again.");
    } finally {
      setApplyLoading(false);
    }
  };

  return (
    <>
      <section className="px-4 py-10 md:px-6 md:py-2">
        <div className="mx-auto ">
          <div className="relative h-140 overflow-hidden rounded-2xl md:h-150">
            {HERO_SLIDES.map((slide, index) => (
              <Image
                key={`bg-${slide.heading}`}
                src="/assets/img/college/main_gate.png"
                alt="SVIET campus main gate"
                fill
                sizes="(max-width: 768px) 100vw, 1280px"
                className={`absolute inset-0 object-cover transition-opacity duration-500 ${
                  activeSlide === index ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/90 to-black/90" />

            <div className="relative grid h-full items-center gap-6 px-5  text-white md:grid-cols-[0.50fr_0.50fr] md:px-12">
              <div className="relative mx-auto  hidden h-full w-full max-w-165 items-end justify-center md:flex">
                <Image
                  src={HERO_SLIDES[activeSlide].studentImage}
                  alt={HERO_SLIDES[activeSlide].studentImageAlt}
                  width={660}
                  height={862}
                  className="h-auto w-full object-contain"
                />
                <div className="absolute bottom-28 left-3 flex items-center gap-3 rounded-xl bg-white px-3 py-2 text-foreground shadow-md">
                  <Image
                    src="/assets/img/companies/jio_digital.png"
                    alt="Jio Digital logo"
                    width={82}
                    height={32}
                    className="h-7 w-auto"
                    style={{ width: "auto" }}
                  />
                  <div>
                    <p className="text-sm font-bold">{HERO_SLIDES[activeSlide].subheading}</p>
                    <p className="text-xs font-medium text-[#555555]">SVIET</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10 text-center md:flex md:h-full md:flex-col md:justify-center md:text-left">
                <h1 className="mx-auto min-h-22 max-w-xl whitespace-pre-line text-4xl font-bold leading-tight md:mx-0 md:min-h-30 md:text-5xl">
                  {HERO_SLIDES[activeSlide].heading}
                </h1>

                <div className="mx-auto grid max-w-xl grid-cols-3 gap-4 md:mx-0 md:gap-6">
                  {[HERO_SLIDES[activeSlide].stat1, HERO_SLIDES[activeSlide].stat2, HERO_SLIDES[activeSlide].stat3].map((item) => (
                    <div key={item.label}>
                      <p className="text-3xl font-bold md:text-4xl">{item.value}</p>
                      <p className="mt-1 min-h-8 text-xs font-medium text-white/85 md:text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={toggleApplyPanel}
                    className="w-full rounded-full bg-[#F97316] px-6 py-3 text-sm font-bold transition duration-200 hover:scale-105 sm:w-auto"
                  >
                    Apply Now
                  </button>
                  <Link
                    href="/contact"
                    className="w-full rounded-full border border-white/70 px-6 py-3 text-sm font-bold transition duration-200 hover:scale-105 sm:w-auto"
                  >
                    Talk to Counselor
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <button
                    type="button"
                    onClick={showPreviousSlide}
                    aria-label="Previous hero slide"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-xs text-white transition hover:bg-white/15"
                  >
                    <FaChevronLeft />
                  </button>
                  <div className="flex items-center gap-2">
                    {HERO_SLIDES.map((slide, index) => (
                      <button
                        key={`dot-${slide.heading}`}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          activeSlide === index ? "bg-[#F97316]" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={showNextSlide}
                    aria-label="Next hero slide"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-xs text-white transition hover:bg-white/15"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2">
        <button
          type="button"
          onClick={toggleApplyPanel}
          className=" bg-[#F97316] !rounded-none px-4 py-3 text-sm rotate-90 mr-[-40px] font-bold text-white shadow-md transition duration-200 hover:scale-105"
          aria-label={isApplyOpen ? "Close apply form" : "Open apply form"}
          aria-controls="apply-now-panel"
        >
          {isApplyOpen ? "Close Form" : "Apply Now"}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 transition duration-200 ${isApplyOpen ? "pointer-events-auto bg-black/35" : "pointer-events-none bg-black/0"}`}
      >
        <div
          id="apply-now-panel"
          ref={panelRef}
          className={`absolute right-0 top-0 h-full w-[92%] max-w-md bg-white p-6 shadow-2xl transition-transform duration-300 md:w-105 ${isApplyOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-[#e8e8e8] pb-3">
            <h3 className="text-xl font-bold text-foreground">Apply Now</h3>
            <button type="button" onClick={closeApplyPanel} className="text-sm font-semibold text-[#666666]">
              Close
            </button>
          </div>

          {applySuccess ? (
            <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700">
              ✓ Application received! Our team will contact you within 24 hours.
            </div>
          ) : (
            <form className="mt-5 grid gap-4" onSubmit={handleApplySubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={applyForm.fullName}
                  onChange={(event) => handleApplyFormChange("fullName", event.target.value)}
                  className="rounded-xl border border-[#e4e4e4] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#F97316]"
                />
                {applyErrors.fullName ? <p className="mt-1 text-xs text-red-600">{applyErrors.fullName}</p> : null}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={applyForm.email}
                  onChange={(event) => handleApplyFormChange("email", event.target.value)}
                  className="rounded-xl border border-[#e4e4e4] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#F97316]"
                />
                {applyErrors.email ? <p className="mt-1 text-xs text-red-600">{applyErrors.email}</p> : null}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={applyForm.phone}
                  onChange={(event) => handleApplyFormChange("phone", event.target.value)}
                  className="rounded-xl border border-[#e4e4e4] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#F97316]"
                />
                {applyErrors.phone ? <p className="mt-1 text-xs text-red-600">{applyErrors.phone}</p> : null}
              </div>
              <div>
                <select
                  aria-label="Choose Program"
                  value={applyForm.course}
                  onChange={(event) => handleApplyFormChange("course", event.target.value)}
                  className="rounded-xl border border-[#e4e4e4] bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-[#F97316]"
                >
                  <option value="">Choose Program</option>
                  <option value="B.Tech CSE">B.Tech CSE</option>
                  <option value="MBA">MBA</option>
                  <option value="BCA">BCA</option>
                </select>
                {applyErrors.course ? <p className="mt-1 text-xs text-red-600">{applyErrors.course}</p> : null}
              </div>
              <button
                type="submit"
                disabled={applyLoading}
                className="rounded-full bg-[#F97316] px-6 py-3 text-sm font-bold text-white transition duration-200 hover:scale-105 disabled:opacity-60"
              >
                {applyLoading ? "Submitting..." : "Submit Application"}
              </button>
              {applyError ? <p className="text-sm text-red-600">{applyError}</p> : null}
            </form>
          )}
        </div>
      </div>
    </>
  );
}
