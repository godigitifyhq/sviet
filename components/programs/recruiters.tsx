const RECRUITER_LOGOS = [
  { name: "Deloitte", src: "https://1000logos.net/wp-content/uploads/2016/10/Deloitte-logo.png" },
  { name: "Amazon", src: "https://1000logos.net/wp-content/uploads/2021/05/Amazon-Logo-768x230.png" },
  { name: "Wipro", src: "https://1000logos.net/wp-content/uploads/2022/06/Wipro-logo.png" },
  { name: "Infosys", src: "https://1000logos.net/wp-content/uploads/2021/05/Infosys-logo-768x248.png" },
  { name: "TCS", src: "https://1000logos.net/wp-content/uploads/2017/04/TCS-Logo.png" },
  { name: "Calvin Klein", src: "https://1000logos.net/wp-content/uploads/2017/04/Calvin-Klein-Logo.png" },
  { name: "Dabur", src: "https://1000logos.net/wp-content/uploads/2020/10/Dabur-logo.png" },
  { name: "Mamy's", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Mamy%27s_Logo.svg/2560px-Mamy%27s_Logo.svg.png" },
];

export function ProgramRecruitersSection() {
  return (
    <section className="mx-auto mt-30 mb-15 w-full max-w-300 px-3 md:px-5">
      <p className="text-center text-xs font-semibold tracking-[0.08em] text-[#f7941d] uppercase">Top Recruiters</p>
      <h3 className="text-center mt-1 text-4xl font-extrabold">Companies That Hire Our Graduates</h3>
      <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-md md:grid-cols-4">
        {RECRUITER_LOGOS.map((company) => (
          <div
            key={company.name}
            className="flex min-h-24 items-center justify-center border border-[#efefef] px-4 py-7 "
          >
            <img
              src={company.src}
              alt={company.name}
              className="h-10 max-h-12 max-w-full object-contain filter grayscale opacity-95"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
