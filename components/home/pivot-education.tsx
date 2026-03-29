import Image from "next/image";

export function PivotEducationSection() {
  return (
    <section className="bg-white  mb-20 z-1 px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="self-top">
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            The Pivot Of Education
          </h2>
          <Image
            src="/assets/img/line_vector.png"
            height={100}
            width={200}
            alt="pivot_education"
            style={{ width: "auto" }}
          />
          <h3 className="font-bold mt-5">
            Global Recognition for Excellence in Education!
          </h3>
          <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-[#3f3f3f]">
            Immerse yourself in the vibrant world of SVIET, where every day
            brings new milestones and stories of inspiration. From dynamic
            campus events to groundbreaking research and impactful student
            achievements, we showcase the essence of our thriving academic
            community. Explore our collaborations with industry leaders,
            celebrate academic breakthroughs, and witness the success stories
            that define SVIET’s journey towards excellence. Stay updated and be
            part of our ever-evolving narrative!
          </p>
        </div>

        <Image
          src="/assets/img/college/global_recognition.png"
          alt="global_recognition"
          width={500}
          height={550}
          className="mx-auto"
          style={{ width: "auto" }}
        />
      </div>
      <div className="">
        {" "}
        <div className="bg-black flex-1 w-[90%] mt-[-200px] z-0 mx-auto  p-4 flex gap-10 rounded-[15px]">
          <Image
            src={"/assets/img/college/dl.png"}
            width={100}
            height={100}
            alt="dl"
          />
          <Image
            src={"/assets/img/college/elets.png"}
            width={180}
            height={100}
            alt="elets"
            style={{ width: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
