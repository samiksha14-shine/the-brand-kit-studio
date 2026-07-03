export default function CaseDeliverables({
  deliverables = [],
}) {
  return (
    <section className="bg-white py-28 lg:py-36">

      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        {/* Heading */}

       {/* Heading */}

<div className="max-w-[760px]">

  <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
    Deliverables
  </span>

  <h2 className="mt-6 text-[58px] font-light leading-[1.05] tracking-[-2px] text-[#111]">
    Everything we
    <br />

    <span
      className="italic font-normal"
      style={{ fontFamily: "Georgia, serif" }}
    >
      created.
    </span>
  </h2>

  <p className="mt-8 max-w-[680px] text-lg leading-9 text-neutral-600">
    From strategy to execution, every deliverable was crafted to
              build a consistent brand experience and support long-term
              business growth.
  </p>

</div>
 
        {/* List */}

        <div className="mt-24 divide-y divide-neutral-200">

          {deliverables.map((item, index) => (

            <div
              key={index}
              className="grid gap-8 py-10 lg:grid-cols-[220px_320px_1fr]"
            >

              <span className="text-sm text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-[26px] font-light text-[#111]">
                {item.title}
              </h3>

              <p className="leading-8 text-neutral-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}