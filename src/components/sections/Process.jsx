const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We understand your business, audience and goals before a single pixel is designed.",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "We define the brand direction, user experience and creative approach for the project.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Brand identity, UI/UX, websites and visual assets are designed with precision and purpose.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "After testing and refinements, everything is delivered ready for launch and future growth.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-black text-white py-32 lg:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        <div className="max-w-[700px]">

          <span className="uppercase tracking-[0.35em] text-neutral-500 text-xs">
            Our Process
          </span>

          <h2 className="mt-6 text-[58px] leading-[1.05] font-light tracking-[-2px]">
            Simple.
            <br />
            Transparent.
            <br />
            Effective.
          </h2>

          <p className="mt-8 text-lg leading-9 text-neutral-400 max-w-[560px]">
            Every project follows a structured workflow that keeps
            communication clear and ensures quality at every stage.
          </p>

        </div>

        <div className="mt-24">

          {process.map((item, index) => (

            <div
              key={item.step}
              className={`grid lg:grid-cols-[180px_1fr] gap-10 py-12 ${
                index !== process.length - 1
                  ? "border-b border-neutral-800"
                  : ""
              }`}
            >

              <div className="text-neutral-500 text-sm tracking-[0.3em]">
                {item.step}
              </div>

              <div className="grid lg:grid-cols-2 gap-10">

                <h3 className="text-[38px] font-light">
                  {item.title}
                </h3>

                <p className="text-neutral-400 leading-9 text-lg">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}