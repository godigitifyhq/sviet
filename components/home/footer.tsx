const quickLinks = ["Admissions", "Scholarships", "Placements", "Campus Life", "Events"];
const navLinks = ["About", "Programs", "Admissions", "Campus", "Careers", "Contact"];

export function HomeFooter() {
  return (
    <footer className="bg-black px-4 py-10 text-white md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <p className="text-3xl font-bold">SVIET</p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-white/75">
              Swami Vivekanand Institute of Engineering & Technology, Village Pamaur, Rajpura, Patiala, Punjab.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 grid gap-3">
              {quickLinks.map((item) => (
                <li key={item} className="text-sm font-medium text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold">Question Form</h3>
            <form className="mt-4 grid gap-3">
              <input
                type="text"
                placeholder="Name"
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium outline-none"
              />
              <textarea
                placeholder="Your Question"
                className="min-h-21 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium outline-none"
              />
              <button className="rounded-full bg-[#F97316] px-4 py-2 text-sm font-bold transition duration-200 hover:scale-105">
                Submit
              </button>
            </form>
          </section>

          <section>
            <h3 className="text-lg font-bold">Navigation</h3>
            <ul className="mt-4 grid gap-3">
              {navLinks.map((item) => (
                <li key={item} className="text-sm font-medium text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
              FB
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
              IG
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
              IN
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
              YT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
