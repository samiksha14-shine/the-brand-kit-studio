export default function CaseGallery({
  sections = [],
}) {
  return (
    <section className="bg-black py-28 lg:py-36">

      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        {/* Heading */}

        <div className="max-w-[760px]">

          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Project Gallery
          </span>

          <h2 className="mt-6 text-[58px] font-light leading-[1.05] tracking-[-2px] text-white">
            Bringing the
            <br />

            <span
              className="italic font-normal"
              style={{ fontFamily: "Georgia, serif" }}
            >
              vision to life.
            </span>
          </h2>

          <p className="mt-8 max-w-[620px] text-lg leading-9 text-neutral-400">
            Every project extends beyond a single deliverable. Explore the
            complete brand ecosystem developed for this client.
          </p>

        </div>

        {/* Gallery */}

        <div className="mt-24 space-y-24">

          {sections.map((section, index) => (

            <div
              key={index}
              className="grid gap-12 lg:grid-cols-[320px_1fr]"
            >

              {/* Left */}

              <div>

                <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-[36px] font-light text-white">
                  {section.title}
                </h3>

                <p className="mt-6 leading-8 text-neutral-400">
                  {section.description}
                </p>

              </div>

              {/* Right */}

              <div className="overflow-hidden rounded-[30px] border border-neutral-800 bg-neutral-900 shadow-2xl">

                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full object-cover transition duration-700 hover:scale-[1.02]"
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}