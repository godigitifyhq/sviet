import Image from "next/image";

const features = [
  {
    title: "Community Engagement",
    description: "Bringing creators, learners, and leaders together through events, discussions, and continuous peer support.",
  },
  {
    title: "Volunteer Programs",
    description: "Participate in meaningful initiatives that create local impact while building leadership and teamwork skills.",
  },
  {
    title: "Inclusive Environment",
    description: "A welcoming student-led space where everyone can learn, build, and grow regardless of background.",
  },
  {
    title: "Collaboration Opportunities",
    description: "Work with peers, mentors, and partners on hands-on projects and practical solutions for real-world needs.",
  },
];

export function EducationBeyondSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">The Uniques Community</h2>
        <p className="mt-3 max-w-6xl text-gray-600 leading-relaxed">
          The Uniques is a student-led community focused on helping learners bridge the gap between theory and
          practice. Through workshops, study jams, hands-on projects, and mentorship, members build practical skills,
          confidence, and career-ready experience.
        </p>

      <div className="flex flex-1 gap-4 mt-12">
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
          A Community of Creators, Dreamers & Doers
        </div>
      </div>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <article className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="text-lg font-semibold text-foreground">Learn, Build, and Grow Together</h3>
              <p className="mt-2 text-sm text-gray-500">
                The community emphasizes practical growth through peer learning and expert-led guidance. Members
                regularly collaborate on real projects, explore modern tech domains, and strengthen professional
                readiness through continuous learning.
              </p>
            </article>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <Image
                src="https://www.theuniques.in/assets/uniques2-DxGvOalO.jpg"
                alt="The Uniques workshop session"
                width={1200}
                height={400}
                className="h-55 w-full object-cover transition duration-200 "
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
              <a href="https://www.theuniques.in/" target="_blank" rel="noopener noreferrer">
              <span className="text-sm font-semibold">KNOW MORE ABOUT UNIQUES COMMUNITY</span>
              <span aria-hidden="true" className="text-lg leading-none">
                →
              </span></a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
