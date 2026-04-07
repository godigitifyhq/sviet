import Image from "next/image";
import { Flag, Sparkles, Users } from "lucide-react";

export function InternationalCulturalDiversitySection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <article className="overflow-hidden rounded-2xl">
          <Image src="/assets/img/campus-life/audi.png" alt="Cultural diversity" width={1600} height={900} className="h-72 w-full object-cover md:h-96" />
        </article>

        <h2 className="mt-8 text-3xl font-semibold leading-tight text-[#111827] md:text-5xl">
          Making your education an adventure
          <br />
          <span className="bg-linear-to-r from-[#2563EB] to-[#f7941d] bg-clip-text font-extrabold text-transparent">with cultural diversity at SVIET</span>
        </h2>
        <p className="mt-4 text-base text-[#374151] md:text-lg">Our campus is a tapestry of cultures, fostering mutual respect and understanding.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-0">
          <article className="md:border-r md:border-black/10 md:pr-6"><Sparkles className="h-6 w-6 text-[#2563EB]" /><h3 className="mt-3 text-xl font-semibold md:text-2xl">Cultural Festivals</h3><p className="mt-2 text-sm text-[#374151] md:text-base">Events where students showcase their heritage through dance, music and art.</p></article>
          <article className="md:border-r md:border-black/10 md:px-6"><Users className="h-6 w-6 text-[#2563EB]" /><h3 className="mt-3 text-xl font-semibold md:text-2xl">International Student Clubs</h3><p className="mt-2 text-sm text-[#374151] md:text-base">Join clubs that celebrate global traditions, culture, and collaboration.</p></article>
          <article className="md:pl-6"><Flag className="h-6 w-6 text-[#2563EB]" /><h3 className="mt-3 text-xl font-semibold md:text-2xl">National Day Celebrations</h3><p className="mt-2 text-sm text-[#374151] md:text-base">Celebrate national identity and cross-cultural respect through campus activities.</p></article>
        </div>
      </div>
    </section>
  );
}

