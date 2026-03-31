import Image from "next/image";

const features = [
  {
    title: "Innovation & Entrepreneurship Cell",
    description: "IIC-recognized cell supporting student startups with mentorship, seed funding, and incubation support",
  },
  {
    title: "International Exposure",
    description: "Tie-ups with international universities for student exchange, dual degrees, and global internships",
  },
  {
    title: "Industry-Integrated Learning",
    description: "Live projects, industry visits, and guest lectures from Fortune 500 professionals",
  },
  {
    title: "Research & Development",
    description: "State-of-the-art research labs with funded projects across engineering, pharmacy, and management",
  },
];

export function EducationBeyondSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">Education Beyond The Classroom</h2>
        <p className="mt-3 max-w-5xl text-gray-600 leading-relaxed">
          Education at SVIET goes beyond traditional academics. Through the S60 program and a range of unique
          experiential initiatives, students gain industry exposure, leadership skills, and real-world readiness long
          before graduation.
        </p>

      <div className="flex flex-1 gap-4">
       <div className="flex mt-6 justify-center items-center">
         <Image
          src="/assets/img/uniques_logo.png"
          alt="uniques logo"
          width={150}
          height={100}
          className=""
          style={{ width: "auto" }}
        />
       </div>
    
          <div className="mt-7 flex-1 bg-[#BA1F27] px-5 py-2.5 text-sm font-medium tracking-wide text-white">
          The Leadership Development Program
        </div>
      </div>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <article className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="text-lg font-semibold text-foreground">Industry Mentorship</h3>
              <p className="mt-2 text-sm text-gray-500">
                Students receive guidance from experienced professionals who share real-world insights, career advice,
                and industry trends. Mentorship bridges the gap between academic learning and professional
                expectations.
              </p>
            </article>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80"
                alt="Seminar hall with students"
                width={1200}
                height={400}
                className="h-55 w-full object-cover transition duration-200 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className={`mt-2 text-sm text-gray-500 ${index > 0 ? "border-t border-gray-100 pt-4" : ""}`}>
                  {feature.description}
                </p>
              </article>
            ))}

            <button className="w-full bg-black text-white px-6 py-3 rounded-full flex items-center justify-between transition duration-200 hover:bg-gray-900 sm:w-auto sm:min-w-[320px]">
              <span className="text-sm font-semibold">GET YOUR OWN STARTUP</span>
              <span aria-hidden="true" className="text-lg leading-none">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
