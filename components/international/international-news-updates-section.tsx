import Image from "next/image";
import Link from "next/link";

const NEWS_ITEMS = [
  {
    title: "Reporting for freshers students",
    description: "Reporting for freshers students will commence from the 10th of July onwards.",
    imageSrc: "/assets/img/college/management/ankurgupta.jpg",
  },
  {
    title: "SVIET Welcomes Canadian Delegation from Humber College",
    description: "A distinguished delegation from Humber College, Canada, visits SVIET for global collaboration.",
    imageSrc: "/assets/img/college/auditorium.png",
  },
  {
    title: "Inspiring the Next Generation: Strategic Dialogue Session",
    description: "An inspiring interaction on leadership and public service with distinguished speakers.",
    imageSrc: "/assets/img/college/main_gate.png",
  },
] as const;

export function InternationalNewsUpdatesSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold leading-tight text-[#111827] md:text-5xl">
          Stay Up To Date With the
          <br />
          <span className="bg-linear-to-r from-[#2563EB] to-[#f7941d] bg-clip-text font-extrabold text-transparent">
            International Community News & Updates
          </span>
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-black/10 bg-white">
            {NEWS_ITEMS.map((item, index) => (
              <article key={item.title} className={`grid gap-4 p-4 md:grid-cols-[1fr_auto] md:items-center md:p-5 ${index < NEWS_ITEMS.length - 1 ? "border-b border-black/10" : ""}`}>
                <div>
                  <h3 className="text-xl font-semibold text-[#111827] md:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#374151] md:text-base">{item.description}</p>
                  <Link href="/international" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:text-[#f7941d]">
                    Read more <span aria-hidden="true">›</span>
                  </Link>
                </div>
                <div className="relative h-20 w-28 overflow-hidden rounded-lg md:h-24 md:w-36">
                  <Image src={item.imageSrc} alt={item.title} fill sizes="160px" className="object-cover" />
                </div>
              </article>
            ))}
          </div>

          <div className="space-y-4">
            <article className="rounded-2xl bg-[#1d4ed8] p-5 text-white md:p-6">
              <h3 className="text-xl font-bold md:text-2xl">SVIET Welcomes Canadian Delegation for Global Ties</h3>
              <p className="mt-3 text-sm text-white/90 md:text-base">
                The visit strengthens collaborative opportunities and global academic exposure for international learners.
              </p>
              <Link href="/international" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#fbbf24]">
                Read more <span aria-hidden="true">›</span>
              </Link>
            </article>

            <article className="rounded-2xl border border-black/10 bg-white p-5 md:p-6">
              <span className="inline-flex rounded-full bg-[#f7941d] px-3 py-1 text-xs font-semibold text-white">Upcoming events</span>
              <h3 className="mt-3 text-xl font-bold text-[#111827] md:text-2xl">Reporting for freshers students</h3>
              <p className="mt-2 text-sm text-[#374151] md:text-base">Reporting starts from 10th July. Complete your onboarding checklist in advance.</p>
              <Link href="/international" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:text-[#f7941d]">
                Read more <span aria-hidden="true">›</span>
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

