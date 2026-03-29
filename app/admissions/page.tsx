import Image from "next/image";
import { ProgramFinderForm } from "@/components/forms/program-finder";

const containerClass = "mx-auto max-w-[1280px] px-6";
const inputClass = "w-full rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-700 outline-none";
const primaryButtonClass = "rounded-full bg-black px-6 py-3 text-white";

const procedureSteps = [
  {
    title: "Application",
    description: "Fill out the application form with your details and preferred course.",
  },
  {
    title: "Entrance Exam",
    description: "Appear for the entrance evaluation based on the selected program.",
  },
  {
    title: "Document",
    description: "Submit required academic and identity documents for verification.",
  },
];

const courses = [
  "BTECH CSE",
  "BTECH ECE",
  "AGRICULTURE",
  "BBA",
  "MBA",
  "HM",
  "PARAMEDICAL",
  "PHARMACY",
  "BCA",
  "MCA",
];

function HeroForm() {
  return (
    <form className="w-90  rounded-2xl border border-gray-100 p-5">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Input text"
          className={inputClass}
        />
        <select
          title="Course"
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>
            Selection text
          </option>
          <option value="btech">B.Tech</option>
          <option value="mba">MBA</option>
          <option value="bca">BCA</option>
        </select>
        <input
          type="tel"
          placeholder="Input text"
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Input text"
          className={inputClass}
        />
        <button
          type="submit"
          className={`mt-2 flex w-full items-center justify-between text-base font-semibold ${primaryButtonClass}`}
        >
          Apply Now
          <span>↗</span>
        </button>
      </div>
    </form>
  );
}

function Timeline() {
  return (
    <div className="relative mt-26">
      <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[#1A1C4B] md:block" />
      <div className="absolute left-2 -top-3 hidden h-10 w-0.5 bg-[#1A1C4B] md:block" />
      <div className="grid gap-10 md:grid-cols-3">
        {procedureSteps.map((step, index) => (
          <div key={step.title} className="relative">
            <div className="mb-3 flex items-center gap-4">
              <span
                className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white ${
                  index === 0 ? "bg-[#1A1C4B]" : "bg-gray-400"
                }`}
              >
                {index + 1}
              </span>
              <p className="text-base font-semibold text-gray-700">{step.title}</p>
            </div>
            <p className="max-w-65 text-sm leading-relaxed text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="absolute -top-18 left-0 hidden rounded-2xl bg-[#1A1C4B] px-4 py-3 text-sm font-medium text-white md:block">
        You Are
        <br />
        Here
      </div>
    </div>
  );
}

function EligibilityPanel() {
  return (
    <div className="mt-10 grid gap-10 md:grid-cols-3">
      <div>
        <h3 className="text-2xl font-semibold">CHOOSE COURSE</h3>
        <ul className="mt-4 divide-y divide-gray-200 border-b border-gray-200">
          {courses.map((course, index) => (
            <li
              key={course}
              className={`py-2 text-base ${index === 0 ? "font-semibold text-orange-500" : "text-gray-600"}`}
            >
              {course}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-4xl font-bold">CRITERIA</h2>
        <div className="mt-6 space-y-4 text-base font-semibold text-gray-700">
          <div className="grid grid-cols-2 gap-4">
            <span>10TH</span>
            <span>12TH</span>
          </div>
          <p>ENTRANCE TEST SCORE</p>
          <p>ENTRANCE TEST SCORE</p>
          <p>ENTRANCE TEST SCORE</p>
        </div>
        <p className="mt-10 text-base text-gray-600">
          *Technology Enhanced Experimental Learning
          <br />
          With Advance Learning Centers & Labs.
        </p>
      </div>

      <div>
        <div className="relative overflow-hidden rounded-2xl border border-gray-100">
          <Image
            src="/assets/img/college/scholarship.png"
            alt="Eligibility"
            width={360}
            height={480}
            className="h-105 w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-transparent" />
          <button
            type="button"
            className={`absolute bottom-5 left-5 flex items-center gap-2 text-base font-semibold ${primaryButtonClass}`}
          >
            APPLY NOW
            <span>↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdmissionsPage() {
  return (
    <div className="bg-white">
      <section className="relative min-h-140  overflow-hidden">
        <Image src="/assets/img/college/auditorium.png" alt="Admissions" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 " />

        <div className={`relative flex h-full flex-col mt-14 py-16 ${containerClass}`}>
          <div className="max-w-md">
            <h1 className="text-6xl font-bold leading-tight text-[#F58E35]">
              ADMISSIONS
              <br />
              OPEN
            </h1>
            <p className="mt-4 max-w-md text-2xl text-white">
              Technology Enhanced Experimental Learning With Advance Learning Centers & Labs.
            </p>
          </div>

          <div className="mt-8 md:absolute md:right-6 md:top-1/2 md:mt-0 md:-translate-y-1/2">
            <HeroForm />
          </div>
        </div>
      </section>

      <section className={`${containerClass} py-16`}>
        <h2 className="text-4xl font-bold">
          ADMISSION
          <br />
          PROCEDURE
        </h2>
        
          <Timeline />
     
      </section>

      <section className={`${containerClass} py-16`}>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">INITIAL APPLICATION</h3>
            <form className="mt-6 flex flex-col gap-4">
              <label className="text-sm text-gray-500">Name</label>
              <input
                type="text"
                placeholder="Input text"
                className={inputClass}
              />
              <label className="text-sm text-gray-500">Course</label>
              <select
                title="Course"
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Selection text
                </option>
                <option value="btech">B.Tech</option>
                <option value="mba">MBA</option>
                <option value="bca">BCA</option>
              </select>
              <label className="text-sm text-gray-500">Phone</label>
              <input
                type="tel"
                placeholder="Input text"
                className={inputClass}
              />
              <label className="text-sm text-gray-500">Email</label>
              <input
                type="email"
                placeholder="Input text"
                className={inputClass}
              />

              <button
                type="submit"
                className={`mt-2 flex w-full items-center justify-between text-base font-semibold ${primaryButtonClass}`}
              >
                Apply Now
                <span>↗</span>
              </button>
            </form>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/assets/img/college/main_gate.png"
              alt="Campus preview"
              width={760}
              height={420}
              className="h-90 w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
            <button
              type="button"
              aria-label="Play"
              className="absolute left-1/2 top-1/2 inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white"
            >
              ▶
            </button>
          </div>
        </div>
      </section>

      <section className={`${containerClass} py-16`}>
        <h2 className="text-4xl font-bold">
          FIND YOUR OWN
          <br />
          PROGRAM
        </h2>
        <div className="mt-8">
          <ProgramFinderForm />
        </div>
      </section>

      <section className={`${containerClass} py-16`}>
        <h2 className="text-4xl font-bold">ELIGIBILITY CRITERIA</h2>
        <p className="mt-2 max-w-3xl text-lg text-gray-700">
          Technology Enhanced Experimental Learning With Advance Learning Centers & Labs.
        </p>
        <EligibilityPanel />
      </section>
    </div>
  );
}
