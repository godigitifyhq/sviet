const leaders = [
  {
    name: "Aman Gupta",
    title: "Founder, boAt",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1100&q=80",
  },
  {
    name: "Vineeta Singh",
    title: "CEO, SUGAR Cosmetics",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=1100&q=80",
  },
  {
    name: "Ritesh Agarwal",
    title: "Founder, OYO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1100&q=80",
  },
];

export function DistinguishedLeadersSection() {
  return (
    <section className="bg-[#f5f5f5] px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">Distinguished Leaders</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="rounded-xl bg-white p-4 shadow-md transition duration-200 hover:shadow-lg"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="h-72 w-full rounded-xl object-cover grayscale transition duration-200 hover:grayscale-0"
              />
              <h3 className="mt-4 text-xl font-bold text-foreground">{leader.name}</h3>
              <p className="mt-1 text-sm font-medium text-[#555555]">{leader.title}</p>
              <button className="mt-4 w-full rounded-full bg-black px-5 py-2 text-sm font-bold text-white transition duration-200 hover:scale-105">
                Check Event
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
