export default function CaseChallenge({
  challenge,
  solution,
}) {
  return (
    <section className="bg-black py-28 text-white lg:py-36">

      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        <div className="grid gap-24 lg:grid-cols-2">

          {/* Challenge */}

          <div>

            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              The Challenge
            </span>

            <h2 className="mt-6 text-[54px] font-light leading-[1.05] tracking-[-2px]">

              Understanding
              <br />

              <span
                className="italic font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                the problem.
              </span>

            </h2>

            <p className="mt-10 text-lg leading-9 text-neutral-400">
              {challenge}
            </p>

          </div>

          {/* Solution */}

          <div>

            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Our Solution
            </span>

            <h2 className="mt-6 text-[54px] font-light leading-[1.05] tracking-[-2px]">

              Designing the
              <br />

              <span
                className="italic font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                experience.
              </span>

            </h2>

            <p className="mt-10 text-lg leading-9 text-neutral-400">
              {solution}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}