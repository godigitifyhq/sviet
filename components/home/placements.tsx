import Image from "next/image";

const logos = [
  "/assets/img/companies/amazon.png",
  "/assets/img/companies/calvin.png",
  "/assets/img/companies/dabur.png",
  "/assets/img/companies/deloitte.png",
  "/assets/img/companies/infosys.png",
  "/assets/img/companies/jio_digital.png",
  "/assets/img/companies/mamsys.png",
  "/assets/img/companies/tcs.png",
  "/assets/img/companies/wipro.png",
];

export function PlacementsSection() {
  return (
    <section className="bg-[#ffffff] px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10">
       <Image src={'/assets/img/college/banner_95.png'} height={100} width={1300} alt={'banner'}/>

        <div className="grid gap-6 text-center md:grid-cols-3">
          <article className="rounded-xl bg-white p-6 transition duration-200">
            <p className="text-4xl font-bold text-foreground md:text-5xl">12,000+</p>
            <p className="mt-2 text-sm font-medium text-[#4b4b4b]">Dreams Fulfilled</p>
          </article>
          <article className="rounded-xl bg-white p-6 transition duration-200">
            <p className="text-4xl font-bold text-foreground md:text-5xl">350+</p>
            <p className="mt-2 text-sm font-medium text-[#4b4b4b]">Companies</p>
          </article>
          <article className="rounded-xl bg-white p-6 transition duration-200">
            <p className="text-4xl font-bold text-foreground md:text-5xl">3,000+</p>
            <p className="mt-2 text-sm font-medium text-[#4b4b4b]">Offers</p>
          </article>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-32 items-center justify-center rounded-xl bg-white p-6 transition duration-200 md:h-36"
            >
              <Image
                src={logo}
                alt="Company logo"
                height={64}
                width={180}
                className="h-14 w-auto max-w-45 object-contain grayscale transition duration-200 hover:grayscale-0 md:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
