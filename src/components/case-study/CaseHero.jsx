export default function CaseHero({
  category,
  title,
  highlight,
  description,
  image,
}) {
  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 pb-20 lg:px-16 lg:pb-28">

        <span className="text-xs uppercase tracking-[0.35em] text-neutral-300">
          {category}
        </span>

        <h1 className="mt-6 max-w-[760px] text-[58px] font-light leading-[1.02] tracking-[-2px] text-white md:text-[72px]">
          {title}{" "}
          <span
            className="italic font-normal"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {highlight}
          </span>
        </h1>

        <p className="mt-8 max-w-[620px] text-lg leading-9 text-neutral-300">
          {description}
        </p>

      </div>
    </section>
  );
}