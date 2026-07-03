export default function CaseResults({
  title = "Project Outcomes",
  description = "Every decision throughout the project was made to create a cohesive, scalable and memorable brand experience.",
  results = [],
}) {
  return (
    <section className="bg-[#ffffff] py-28 lg:py-36">

      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        {/* Heading */}

        <div className="max-w-[760px]">

          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Results
          </span>

          <h2 className="mt-6 text-[58px] font-light leading-[1.05] tracking-[-2px] text-[#111]">

            The final
            <br />

            <span
              className="italic font-normal"
              style={{ fontFamily: "Georgia, serif" }}
            >
              outcome.
            </span>

          </h2>

          <p className="mt-8 max-w-[620px] text-lg leading-9 text-neutral-600">
            {description}
          </p>

        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {results.map((item, index) => (

            <div
              key={index}
              className="rounded-[28px] border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 text-[28px] font-medium text-[#111]">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-neutral-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}