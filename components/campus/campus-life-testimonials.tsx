const testimonials = [
  {
    heading: "Students Speak",
    body:
      "Outstanding experience and the college provided me with the opportunities I needed. Truly outstanding and really transformed my educational journey.",
    name: "Yash Khandelwal",
  },
  {
    heading: "Students Speak",
    body:
      "Great learning experience and the college provided me with practical exposure, faculty support and a vibrant academic culture.",
    name: "Yash Khandelwal",
  },
];

export function CampusLifeTestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-2 pt-6 md:px-5 md:pt-8">
      <div className="mb-6 inline-flex items-center gap-2 text-[#111]">
        <span className="inline-flex h-6 w-6 items-center justify-center border border-[#111] text-xs">↘</span>
        <p className="text-[24px] font-medium leading-tight md:text-[29px]">WHAT PEOPLE SAY ABOUT US ?</p>
      </div>

      <div className="space-y-6">
        {testimonials.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="grid gap-4 md:grid-cols-[1fr_1fr] md:gap-6">
            <article className="rounded-md bg-[#f2f2f2] p-4 md:p-6">
              <p className="text-[16px] font-bold text-[#f7941d] md:text-[18px]">{item.heading}</p>
              <p className="mt-2 text-[12px] leading-[1.5] text-[#2a2a2a] md:text-[15px] md:leading-[1.6]">
                {item.body}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="/assets/img/campus-life/image3.png"
                  alt="Avatar"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <p className="text-[16px] font-semibold text-[#111] md:text-[18px]">{item.name}</p>
              </div>
            </article>

            <div className="overflow-hidden rounded-md">
              <img
                src={idx === 0
                  ? "/assets/img/campus-life/image2.png"
                  : "/assets/img/campus-life/image3.png"}
                alt="Student speak"
                className="h-[240px] w-full object-cover rounded-md md:h-[342px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
