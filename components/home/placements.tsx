const logos = [
  "https://logo.clearbit.com/amazon.com",
  "https://logo.clearbit.com/tcs.com",
  "https://logo.clearbit.com/deloitte.com",
  "https://logo.clearbit.com/wipro.com",
  "https://logo.clearbit.com/infosys.com",
  "https://logo.clearbit.com/accenture.com",
  "https://logo.clearbit.com/cognizant.com",
  "https://logo.clearbit.com/ibm.com",
];

export function PlacementsSection() {
  return (
    <section className="bg-[#f5f5f5] px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10">
        <div className="rounded-xl bg-foreground px-6 py-5 text-center text-white">
          <p className="text-xl font-bold md:text-2xl">95+ Students grabbed placement offers</p>
        </div>

        <div className="grid gap-6 text-center md:grid-cols-3">
          <article className="rounded-xl bg-white p-6 shadow-md transition duration-200 hover:shadow-lg">
            <p className="text-4xl font-bold text-foreground md:text-5xl">12,000+</p>
            <p className="mt-2 text-sm font-medium text-[#4b4b4b]">Dreams Fulfilled</p>
          </article>
          <article className="rounded-xl bg-white p-6 shadow-md transition duration-200 hover:shadow-lg">
            <p className="text-4xl font-bold text-foreground md:text-5xl">350+</p>
            <p className="mt-2 text-sm font-medium text-[#4b4b4b]">Companies</p>
          </article>
          <article className="rounded-xl bg-white p-6 shadow-md transition duration-200 hover:shadow-lg">
            <p className="text-4xl font-bold text-foreground md:text-5xl">3,000+</p>
            <p className="mt-2 text-sm font-medium text-[#4b4b4b]">Offers</p>
          </article>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-24 items-center justify-center rounded-xl bg-white p-4 shadow-md transition duration-200 hover:shadow-lg"
            >
              <img
                src={logo}
                alt="Company logo"
                className="h-10 w-auto grayscale transition duration-200 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
