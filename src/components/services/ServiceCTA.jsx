import { FiArrowUpRight } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

export default function ServiceCTA({
  title = "Let's build something remarkable.",
  description = "Whether you're building a new brand, launching a website or elevating your digital presence, we're ready to help bring your vision to life.",
  buttonText = "Start Your Project",
  buttonLink = "/#contact",
}) {
  return (
    <section className="bg-white py-32 lg:py-40">

      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        <div className="rounded-[40px] bg-black px-10 py-20 text-center text-white md:px-20 md:py-24">

          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Ready to Start?
          </span>

          <h2 className="mt-6 text-[48px] font-light leading-[1.05] tracking-[-2px] md:text-[64px]">
            {title}
          </h2>

          <p className="mx-auto mt-8 max-w-[680px] text-lg leading-9 text-neutral-400">
            {description}
          </p>

          <HashLink
            smooth
            to={buttonLink}
            className="mt-12 inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 font-medium text-black transition duration-300 hover:scale-[1.03]"
          >
            {buttonText}

            <FiArrowUpRight />
          </HashLink>

        </div>

      </div>

    </section>
  );
}