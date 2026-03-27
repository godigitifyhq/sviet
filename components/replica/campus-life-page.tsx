import { FaArrowRight } from "react-icons/fa";

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

const events = Array.from({ length: 8 }).map((_, index) => ({
  title: "SPONTANIA",
  text: "Explore our collection of memorable moments and events that capture the vibrant life at SVIET.",
  image:
    index % 2 === 0
      ? "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1200&q=80"
      : "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
}));

function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-2 pt-2 md:px-5 md:pt-3">
      <div className="relative h-[310px] overflow-hidden md:h-[430px]">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=80"
          alt="Campus"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />

        <div className="absolute left-2 top-5 text-white md:left-6 md:top-8">
          <h1 className="text-[62px] font-extrabold leading-[0.95] tracking-[1px] text-white/85 md:text-[112px]">CAMPUS LIFE</h1>
          <h2 className="mt-2 text-[49px] font-extrabold leading-[0.82] md:text-[66px]">
            PIONEERING
            <br />
            <span className="text-[#f7941d]">POSSIBILITIES</span>
          </h2>
          <p className="mt-2 text-xl font-semibold md:text-[30px]">Research & Innovation</p>
        </div>

        <div className="absolute bottom-4 right-2 max-w-[180px] text-white md:bottom-8 md:right-6 md:max-w-[320px]">
          <p className="text-sm leading-tight md:text-[32px] md:leading-[1.12]">
            Technology Enhanced Experimental Learning With Advance Learning Centers & Labs.
          </p>
          <button className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#f7941d] px-4 py-2 text-xs font-semibold text-white md:mt-5 md:px-5 md:py-3 md:text-[18px]">
            Video Tour
            <FaArrowRight className="text-[11px]" />
          </button>
        </div>
      </div>
    </section>
  );
}

function HomeAwaySection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-2 pt-8 md:px-5 md:pt-10">
      <div className="grid gap-5 md:grid-cols-[1fr_1.1fr] md:gap-8">
        <div className="pt-1 md:pt-4">
          <h3 className="text-[46px] font-extrabold leading-[0.96] text-[#111] md:text-[68px]">
            A HOME <span className="text-[#f7941d]">AWAY</span>
            <br />
            FROM HOME
          </h3>
          <p className="mt-4 max-w-[370px] text-[26px] font-medium leading-[1.08] text-[#1f1f1f] md:mt-5 md:text-[34px]">
            Cosmopolitan Campus With Vibrant Cultures, Multilateral Ideas & A Lot More
          </p>
          <button className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#f7941d] px-4 py-2 text-sm font-semibold text-white md:px-5 md:py-3 md:text-[18px]">
            Video Tour
            <FaArrowRight className="text-[11px]" />
          </button>
        </div>

        <div className="overflow-hidden rounded-md">
          <img
            src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=1200&q=80"
            alt="Campus entrance"
            className="h-[245px] w-full object-cover md:h-[360px]"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-2 pt-6 md:px-5 md:pt-8">
      <div className="grid gap-5 md:grid-cols-[0.52fr_0.48fr] md:gap-8">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-[#111]">
            <span className="inline-flex h-6 w-6 items-center justify-center border border-[#111] text-xs">↘</span>
            <p className="text-[24px] font-medium leading-tight md:text-[29px]">WHAT PEOPLE SAY ABOUT US ?</p>
          </div>

          <div className="space-y-4">
            {testimonials.map((item, idx) => (
              <article key={`${item.name}-${idx}`} className="rounded-md bg-[#f2f2f2] p-3 md:p-4">
                <p className="text-[14px] text-[#f7941d] md:text-[15px]">{item.heading}</p>
                <p className="mt-2 text-[10px] leading-[1.35] text-[#2a2a2a] md:text-[11px]">{item.body}</p>
                <div className="mt-3 flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=150&q=80"
                    alt="Avatar"
                    className="h-7 w-7 rounded-full object-cover"
                  />
                  <p className="text-[24px] font-semibold leading-none text-[#111] md:text-[30px]">Yash Khandelwal</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4 md:space-y-5">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
            alt="Student speak"
            className="h-[240px] w-full rounded-md object-cover md:h-[342px]"
          />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
            alt="Award photo"
            className="h-[240px] w-full rounded-md object-cover md:h-[342px]"
          />
        </div>
      </div>
    </section>
  );
}

function ApplyNowStrip() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-2 pt-5 md:px-5 md:pt-8">
      <div className="flex items-center justify-between rounded-[10px] bg-black px-4 py-3 text-white md:px-7 md:py-4">
        <p className="text-xs font-medium tracking-wide md:text-[22px] md:font-semibold">APPLY NOW FOR SVIETEEE - 2026</p>
        <button className="inline-flex items-center gap-2 rounded-none bg-transparent p-0 text-[10px] font-semibold md:text-[17px]">
          Apply Now
          <FaArrowRight className="text-[10px] md:text-[14px]" />
        </button>
      </div>
    </section>
  );
}

function StudentSpeakSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-2 pt-8 md:px-5 md:pt-12">
      <div className="grid items-center gap-5 md:grid-cols-[1.3fr_0.7fr] md:gap-7">
        <img
          src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=1400&q=80"
          alt="Auditorium"
          className="h-[260px] w-full rounded-md object-cover md:h-[350px]"
        />

        <article className="rounded-md bg-[#f5f5f5] p-3 md:p-4">
          <p className="text-right text-[14px] text-[#f7941d] md:text-[16px]">Students Speak</p>
          <p className="mt-2 text-[10px] leading-[1.35] text-[#2a2a2a] md:text-[11px]">
            Great learning experience and the college provided me with practical exposure, faculty guidance and excellent support throughout my journey.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=150&q=80"
              alt="Avatar"
              className="h-7 w-7 rounded-full object-cover"
            />
            <p className="text-[24px] font-semibold leading-none text-[#111] md:text-[30px]">Yash Khandelwal</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-2 pt-6 md:px-5 md:pt-8">
      <div className="rounded-[10px] bg-black px-4 py-6 text-white md:px-8 md:py-10">
        <h3 className="text-[46px] font-extrabold leading-none md:text-[58px]">GALLERY HIGHLIGHTS</h3>
        <p className="mt-3 max-w-[760px] text-[10px] leading-[1.4] text-white/85 md:text-[14px]">
          Explore our collection of memorable moments and events that capture the vibrant life at Swami Vivekanand Group of Institutions.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 md:gap-3">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
          alt="Gallery"
          className="h-[130px] w-full rounded-md object-cover md:h-[265px]"
        />
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
          alt="Gallery"
          className="h-[130px] w-full rounded-md object-cover md:h-[265px]"
        />
        <img
          src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80"
          alt="Gallery"
          className="h-[130px] w-full rounded-md object-cover md:h-[265px]"
        />
        <div className="relative overflow-hidden rounded-md">
          <img
            src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1200&q=80"
            alt="Gallery"
            className="h-[130px] w-full object-cover md:h-[265px]"
          />
          <div className="absolute inset-0 bg-black/35" />
          <p className="absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 text-xs font-medium text-white md:bottom-5 md:text-[27px]">
            <span>›</span> View More
          </p>
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-2 pb-8 pt-5 md:px-5 md:pb-12 md:pt-8">
      <h3 className="text-[34px] font-medium uppercase text-[#111] md:text-[40px]">MEMORABLE EVENTS</h3>
      <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
        {events.map((event, idx) => (
          <article key={idx} className={`relative overflow-hidden rounded-md ${idx < 2 ? "col-span-1 md:col-span-2" : ""}`}>
            <img src={event.image} alt={event.title} className="h-[148px] w-full object-cover md:h-[260px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3">
              <h4 className="text-[16px] font-extrabold leading-none text-white md:text-[42px]">{event.title}</h4>
              <p className="mt-1 max-w-[240px] text-[7px] leading-[1.35] text-white/80 md:text-[10px]">{event.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CampusLifeExactPage() {
  return (
    <div className="bg-[#f5f5f5] text-[#111]">
      <HeroSection />
      <HomeAwaySection />
      <TestimonialSection />
      <ApplyNowStrip />
      <StudentSpeakSection />
      <GallerySection />
      <EventsSection />
    </div>
  );
}
