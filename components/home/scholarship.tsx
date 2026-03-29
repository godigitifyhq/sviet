import Image from "next/image";
export function ScholarshipSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <form className="flex w-full max-w-md flex-col gap-4">
            <label className="text-xs text-gray-600" htmlFor="scholarship-name">
              Name
            </label>
            <input
              id="scholarship-name"
              name="name"
              type="text"
              placeholder="Input text"
              className="w-full rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition focus:border-black"
            />

            <label className="text-xs text-gray-600" htmlFor="scholarship-phone">
              Phone
            </label>
            <input
              id="scholarship-phone"
              name="phone"
              type="tel"
              placeholder="Input text"
              className="w-full rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition focus:border-black"
            />

            <label className="text-xs text-gray-600" htmlFor="scholarship-course">
              Course
            </label>
            <select
              id="scholarship-course"
              name="course"
              defaultValue=""
              className="w-full rounded-lg border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition focus:border-black"
            >
              <option value="" disabled>
                Selection text
              </option>
              <option value="btech">B.Tech</option>
              <option value="mba">MBA</option>
              <option value="mca">MCA</option>
              <option value="polytechnic">Polytechnic</option>
            </select>

            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-between gap-3 rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-900"
            >
              <span className="text-lg font-semibold">Check Now</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          <div className="flex flex-col gap-4">
            <h2 className="text-center text-3xl font-bold text-black md:text-right md:text-4xl">
              Check Your Scholarship Eligibility
            </h2>
          <Image src={'/assets/img/line_vector.png'} className="mr-0 ml-auto" width={300} height={200} alt="line" style={{ width: "auto" }} />
            <div className="w-full overflow-hidden rounded-2xl">
              <Image
                src="/assets/img/college/scholarship.png"
                alt="Scholarship eligibility"
                width={700}
                height={300}
                className=" w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
