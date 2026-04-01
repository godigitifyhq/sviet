import Image from "next/image";

const experiences = [
  {
    title: "From Classroom to Career",
    description: "Most students prepare for exams. Here, you prepare for the real world. Super 60 focuses on helping you apply what you learn - in interviews, in problem-solving, and in situations where performance actually matters.",
  },
  {
    title: "Training That Transforms You",
    description: "The program is designed with depth and intent. With over 300 hours of focused training, continuous evaluations, and real-world exposure, students don't just gain knowledge - they develop the ability to think clearly, solve problems, and perform under pressure.",
  },
  {
    title: "Confidence That Shows",
    description: "Technical skills alone aren't enough. Through consistent practice, mock interviews, and real interaction, students develop a level of confidence that reflects in the way they speak, present, and handle challenges. It's not taught once - it's built over time.",
  },
  {
    title: "Built for Those Who Want More",
    description: "Super 60 is for students who are not satisfied with average outcomes. It's for those willing to push beyond comfort, stay consistent, and become professionals that companies genuinely value. The goal isn't just placement - it's transformation.",
  },
];

export function ExperiencesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex flex-1 gap-4">
          <div className="flex mt-6 justify-center items-center">
            <Image
              src="/assets/img/s60.png"
              alt="s60 logo"
              width={100}
              height={10}
              className=""
              style={{ width: "auto" }}
            />
          </div>

        <div className="flex-1 flex mt-6 items-center">
            <div className="mt-7  bg-[#F58634] flex-1 px-5 py-2.5 text-sm font-medium tracking-wide text-white">
            What Makes Super 60 Different - Not just a program, but an environment that changes how you think, perform, and grow.
          </div>
        </div>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <article className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="text-lg font-semibold text-foreground">
                Not for Everyone. Just 60.
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Every year, only 60 students are selected into Super 60. This
                isn't about filling seats - it's about building a space where
                driven individuals grow together, challenge each other, and
                raise their standards every single day. From the moment you
                step in, you realise this is different.
              </p>
            </article>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <Image
                width={1200}
                height={1000}
                src="/assets/img/s60.jpg"
                alt="Seminar hall with students"
                className="h-55 w-full object-cover transition duration-200"
              />
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((feature, index) => (
              <article
                key={feature.title}
                className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p
                  className={`mt-2 text-sm text-gray-500 ${index > 0 ? "border-t border-gray-100 pt-4" : ""}`}
                >
                  {feature.description}
                </p>
              </article>
            ))}

            <button className="w-full bg-black text-white px-6 py-3 rounded-full flex items-center justify-between transition duration-200 hover:bg-gray-900 sm:w-auto sm:min-w-[320px]">
              <a href="https://www.supersixty.in/" target="_blank" rel="noopener noreferrer">  
              <span className="text-sm font-semibold">
                Know more about Super 60
              </span>
              <span aria-hidden="true" className="text-lg leading-none">
                →
              </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
