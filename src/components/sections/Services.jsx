import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    link: "/services/brand-identity",
    description:
      "Logos, visual identities and brand systems that make businesses memorable.",
  },
  {
    number: "02",
    title: "Website Design",
    link: "/services/website-design",
    description:
      "Modern responsive websites focused on conversions and performance.",
  },
  {
    number: "03",
    title: "UI / UX Design",
    link: "/services/ui-ux",
    description:
      "Interfaces and user experiences designed for clarity and usability.",
  },
  {
    number: "04",
    title: "Content Strategy",
    link: "/services/content-strategy",
    description:
      "Messaging and content planning that builds meaningful brands.",
  },
  {
    number: "05",
    title: "Social Media Design",
    link: "/services/social-media",
    description:
      "Creative content that strengthens your digital presence.",
  },
  {
    number: "06",
    title: "SEO & Google Business",
    link: "/services/seo",
    description:
      "Helping customers discover your business online.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black py-32 text-white lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        {/* Heading */}

        <div className="max-w-[760px]">

          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Services
          </span>

          <h2 className="mt-6 text-[58px] font-light leading-[1.05] tracking-[-2px]">
            Everything your brand
            <br />
            needs to be{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "Georgia, serif" }}
            >
              remarkable.
            </span>
          </h2>

          <p className="mt-8 max-w-[620px] text-lg leading-9 text-neutral-400">
            From strategy to execution, we design meaningful brand
            experiences that connect with your audience across every
            digital touchpoint.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-6 lg:grid-cols-2">

          {services.map((service) => (

            <Link
              key={service.number}
              to={service.link}
              aria-label={service.title}
              className="group block cursor-pointer rounded-[28px] border border-neutral-800 bg-neutral-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white hover:shadow-2xl"
            >

              <span className="text-sm tracking-[0.25em] text-neutral-500">
                {service.number}
              </span>

              <h3 className="mt-6 text-[30px] font-medium transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-neutral-400">
                {service.description}
              </p>

              <div className="mt-10 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">

                <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}