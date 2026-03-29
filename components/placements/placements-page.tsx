"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FaPlay, FaStar } from "react-icons/fa";

const placementChartData = [
  { name: "CSE", value: 85 },
  { name: "ECE", value: 60 },
  { name: "ME", value: 70 },
  { name: "MBA", value: 90 },
  { name: "BBA", value: 65 },
  { name: "HM", value: 50 },
  { name: "Pharma", value: 55 },
];

const recruiterData = [
  { name: "Centum", value: 30 },
  { name: "Grazitti", value: 25 },
  { name: "Delhivery", value: 20 },
  { name: "Others", value: 25 },
];

const COLORS = ["#111827", "#4f46e5", "#6366f1", "#c7d2fe"];

const successStories = [
  { id: 1, title: "Campus Placement Drive", company: "Tech Corp" },
  { id: 2, title: "Student Interview Success", company: "TCS" },
  { id: 3, title: "Career Transformation", company: "Infosys" },
  { id: 4, title: "Internship to Offer", company: "Wipro" },
];

const updates = [
  {
    id: 1,
    image: "/assets/img/college/main_gate.png",
    title: "New Placement Record",
    description: "SVIET achieves 100% placement for Class of 2024",
  },
  {
    id: 2,
    image: "/assets/img/college/auditorium.png",
    title: "Highest Package Awarded",
    description: "Student receives 45 LPA from a top tech company",
  },
  {
    id: 3,
    image: "/assets/img/college/scholarship.png",
    title: "Global Recruiting Fair",
    description: "100+ international companies participate",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    company: "Google",
    text: "SVIET's mentor support and practical curriculum prepared me perfectly for corporate challenges.",
    rating: 5,
  },
  {
    id: 2,
    name: "Arjun Verma",
    role: "Product Manager at Amazon",
    company: "Amazon",
    text: "The placement cell went above and beyond to ensure every student got interview opportunities.",
    rating: 5,
  },
  {
    id: 3,
    name: "Neha Gupta",
    role: "Data Analyst at Deloitte",
    company: "Deloitte",
    text: "The internship programs at SVIET are industry-aligned and truly valuable.",
    rating: 5,
  },
];

export function PlacementsPageComponent() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <h1 className="text-5xl font-bold leading-tight text-gray-900">
                WHY PAY MORE WHEN YOU CAN ACHIEVE THIS IN LESS
              </h1>
              <p className="mt-6 text-lg text-gray-700">
                Join thousands of students who have transformed their careers through SVIET&apos;s industry-aligned programs.
              </p>

              {/* Company Logos Grid */}
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
                <div className="relative h-12 w-full">
                  <Image
                    src="/assets/img/companies/amazon.png"
                    alt="Amazon"
                    fill
                    className="object-contain grayscale"
                  />
                </div>
                <div className="relative h-12 w-full">
                  <Image
                    src="/assets/img/companies/tcs.png"
                    alt="TCS"
                    fill
                    className="object-contain grayscale"
                  />
                </div>
                <div className="relative h-12 w-full">
                  <Image
                    src="/assets/img/companies/infosys.png"
                    alt="Infosys"
                    fill
                    className="object-contain grayscale"
                  />
                </div>
                <div className="relative h-12 w-full">
                  <Image
                    src="/assets/img/companies/wipro.png"
                    alt="Wipro"
                    fill
                    className="object-contain grayscale"
                  />
                </div>
                <div className="relative h-12 w-full">
                  <Image
                    src="/assets/img/companies/dabur.png"
                    alt="Dabur"
                    fill
                    className="object-contain grayscale"
                  />
                </div>
                <div className="relative h-12 w-full">
                  <Image
                    src="/assets/img/companies/jio_digital.png"
                    alt="Jio Digital"
                    fill
                    className="object-contain grayscale"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-center">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                <Image
                  src="/assets/img/college/auditorium.png"
                  alt="Student Success"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white px-8 py-4 text-center">
                    <p className="text-sm text-gray-600">Highest Package</p>
                    <p className="text-4xl font-bold text-gray-900">45 LPA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PLACEMENT STATS */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-4xl font-bold text-gray-900">Placement Statistics</h2>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <p className="text-sm text-gray-500">Total Offers</p>
              <p className="mt-2 text-5xl font-bold text-gray-900">3,000+</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <p className="text-sm text-gray-500">Dreams Fulfilled</p>
              <p className="mt-2 text-5xl font-bold text-gray-900">12,000+</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <p className="text-sm text-gray-500">Companies</p>
              <p className="mt-2 text-5xl font-bold text-gray-900">350+</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BAR CHART */}
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-4xl font-bold text-gray-900">Placement by Department</h2>
          <p className="mt-2 text-base text-gray-600">
            Placement rates across different academic programs
          </p>

          <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={placementChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#111827" radius={[4, 4, 0, 0]} width={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* SECTION 4: TOP RECRUITERS + PIE CHART */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Our Top Recruiters</h2>
              <p className="mt-4 text-base text-gray-600">
                Leading companies across sectors actively recruit SVIET graduates.
              </p>

              <form className="mt-8 space-y-4">
                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="mt-2 w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Message</label>
                  <textarea
                    placeholder="Tell us your interest"
                    className="mt-2 w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900"
                    rows={4}
                  />
                </div>
                <button className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900">
                  Get Recruiter Details
                </button>
              </form>
            </div>

            {/* RIGHT - PIE CHART */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-2xl border border-gray-100 bg-white p-6">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={recruiterData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {recruiterData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {recruiterData.map((item, index) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SUCCESS STORIES */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-4xl font-bold">Student Success Stories</h2>
          <p className="mt-2 text-base text-gray-400">
            Watch real stories from graduates who achieved their dreams
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-video bg-gray-800" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition group-hover:bg-black/60">
                  <button className="rounded-full bg-white p-4 text-gray-900 transition hover:scale-110">
                    <FaPlay size={24} />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-sm text-gray-300">{story.company}</p>
                  <p className="text-xl font-bold">{story.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: EMPLOYER TESTIMONIAL */}
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* LEFT IMAGE */}
            <div className="relative h-96 overflow-hidden rounded-2xl">
              <Image
                src="/assets/img/college/scholarship.png"
                alt="Employer"
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div>
              <p className="inline-block rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                From Industry Leader
              </p>
              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Why Companies Love Hiring from SVIET
              </h2>
              <p className="mt-6 text-lg text-gray-700">
                &quot;The quality of talent at SVIET is exceptional. Graduates come well-prepared with both technical and soft skills. We&apos;ve built long-term partnerships that consistently deliver value.&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-900">
                — HR Director, Fortune 500 Company
              </p>
              <button className="mt-6 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-900">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: UPDATES GRID */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-4xl font-bold text-gray-900">Latest Updates</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {updates.map((update) => (
              <div
                key={update.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {update.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {update.description}
                  </p>
                  <button className="mt-4 text-sm font-semibold text-gray-900 hover:text-orange-500">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: INDUSTRY LEARNING */}
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* LEFT TEXT */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-orange-500">
                Our Approach
              </h3>
              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Industry-Aligned Learning
              </h2>
              <p className="mt-6 text-lg text-gray-700">
                We work closely with industry partners to ensure curriculum meets real-world demands. Our students gain hands-on experience through internships, projects, and mentorship.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Real-world project exposure",
                  "Industry mentor partnerships",
                  "Mock interview sessions",
                  "Skill certifications",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base text-gray-700">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-96 overflow-hidden rounded-2xl">
              <Image
                src="/assets/img/college/global_recognition.png"
                alt="Industry Learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIAL SLIDER */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-4xl font-bold text-gray-900">What Our Graduates Say</h2>

          <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-8">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
              {/* Stats */}
              <div className="space-y-6 border-r border-gray-200 pr-8">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setTestimonialIndex(index)}
                    className={`w-full text-left transition ${
                      testimonialIndex === index
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.company}</p>
                  </button>
                ))}
              </div>

              {/* Testimonial */}
              <div>
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonials[testimonialIndex].rating)].map(
                    (_, i) => (
                      <FaStar
                        key={i}
                        size={16}
                        className="text-yellow-400"
                      />
                    )
                  )}
                </div>
                <p className="text-lg text-gray-700">
                  &quot;{testimonials[testimonialIndex].text}&quot;
                </p>
                <p className="mt-6 font-semibold text-gray-900">
                  {testimonials[testimonialIndex].name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[testimonialIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="text-4xl font-bold">Ready to Transform Your Career?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Join SVIET and become part of our success story
          </p>
          <button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-100">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
}
