export default function ServiceOverview({
  heading,
  description,
  features,
}) {
  return (
    <section className="bg-white py-28">

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        <div className="grid lg:grid-cols-[420px_1fr] gap-20">

          {/* Left */}

          <div>

            <span className="uppercase tracking-[0.35em] text-xs text-neutral-500">
              Overview
            </span>

            <h2 className="mt-6 text-[52px] leading-[1.05] font-light tracking-[-2px] text-[#111]">
              {heading}
            </h2>

            <p className="mt-8 text-lg leading-9 text-neutral-600">
              {description}
            </p>

          </div>

          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((feature, index) => (

              <div
                key={index}
                className="rounded-[28px] border border-neutral-200 p-8 transition duration-300 hover:-translate-y-1 hover:border-black"
              >

                <span className="text-sm tracking-[0.25em] text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-[26px] font-medium text-[#111]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}