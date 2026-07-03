import { FiArrowUpRight } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

export default function ServiceHero({
  category,
  title,
  highlight,
  description,
  image,
}) {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">

      {/* Background Image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-right"
      />

      {/* Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/15 to-transparent" />
      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

          <div className="max-w-[720px]">

            <span className="uppercase tracking-[0.35em] text-xs text-neutral-500">
              {category}
            </span>

            <h1 className="mt-6 text-[68px] leading-[0.98] font-light tracking-[-2px] text-[#111]">
              {title}{" "}
              <span
                className="italic font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {highlight}
              </span>
            </h1>

            <p className="mt-10 max-w-[620px] text-lg leading-9 text-neutral-700">
              {description}
            </p>

            <HashLink
              smooth
              to="/#contact"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-white transition duration-300 hover:scale-[1.02] hover:bg-neutral-900"
            >
              Let's Talk
              <FiArrowUpRight />
            </HashLink>

          </div>

        </div>
      </div>

    </section>
  );
}