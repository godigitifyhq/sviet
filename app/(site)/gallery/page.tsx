import type { Metadata } from "next";
import Image from "next/image";

const GALLERY_ITEMS = [
  {
    src: "/assets/img/college/main_gate.png",
    alt: "SVIET main gate",
    title: "Main Campus Gate",
  },
  {
    src: "/assets/img/college/1st.png",
    alt: "SVIET campus building one",
    title: "Academic Block",
  },
  {
    src: "/assets/img/college/4th.png",
    alt: "SVIET campus building two",
    title: "Learning Spaces",
  },
  {
    src: "/assets/img/college/8th.png",
    alt: "SVIET campus activity zone",
    title: "Campus Life",
  },
] as const;

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual gallery of SVIET campus spaces and student experience.",
};

export default function GalleryPage() {
  return (
    <main className="bg-white text-black">
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FEA700]">SVIET Visuals</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Gallery</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70">
            Explore snapshots of our campus infrastructure, academic spaces, and student environment.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-14 sm:grid-cols-2 md:px-6 md:py-16">
          {GALLERY_ITEMS.map((item) => (
            <article key={item.src} className="border border-black/10 bg-white">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-white">
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="border-t border-black/10 p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
