export default function CaseIntro({
  overview,
  client,
  industry,
  projectScope,
  role,
  services = [],
}) {
  return (
    <section className="bg-white py-28 lg:py-36">

      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        <div className="grid gap-20 lg:grid-cols-[380px_1fr]">

          {/* Left */}

          <div>

            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Project Overview
            </span>

            <h2 className="mt-6 text-[56px] leading-[1.05] font-light tracking-[-2px] text-[#111]">

              Building a
              <br />

              <span
                className="italic font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                complete brand.
              </span>

            </h2>

          </div>

          {/* Right */}

          <div>

            <p className="max-w-[760px] text-lg leading-9 text-neutral-600">
              {overview}
            </p>

            <div className="mt-16 grid gap-12 md:grid-cols-2">

              <div>

                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Client
                </span>

                <h3 className="mt-3 text-[24px] font-medium">
                  {client}
                </h3>

              </div>

              <div>

                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Industry
                </span>

                <h3 className="mt-3 text-[24px] font-medium">
                  {industry}
                </h3>

              </div>

              <div>

                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Project Scope
                </span>

                <h3 className="mt-3 text-[24px] font-medium">
                  {projectScope}
                </h3>

              </div>

              <div>

                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Our Role
                </span>

                <h3 className="mt-3 text-[24px] font-medium">
                  {role}
                </h3>

              </div>

            </div>

            {/* Services */}

            <div className="mt-16">

              <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Deliverables
              </span>

              <div className="mt-6 flex flex-wrap gap-3">

                {services.map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-neutral-300 px-5 py-2 text-sm text-neutral-700"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}