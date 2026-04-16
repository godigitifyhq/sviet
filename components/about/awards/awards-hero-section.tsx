import Image from "next/image";

export function AwardsHeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-72 w-full md:h-84 lg:h-96">
        <Image
          src="/assets/img/college/main_gate.png"
          alt="SVIET main gate"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/52" />

        <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-4 pb-10 text-white md:px-6">
          <p className="text-xs font-medium text-white/80">Home / About Us / Awards &amp; Recognitions</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Awards &amp; Recognitions</h1>
          <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-base">
            Recognition highlights that reflect SVIET&apos;s academic quality, institutional progress, and innovation-led growth.
          </p>
        </div>
      </div>
    </section>
  );
}
