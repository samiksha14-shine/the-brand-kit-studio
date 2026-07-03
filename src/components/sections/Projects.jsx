import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

// Replace these with your actual screenshots
import autovault from "../../assets/projects/autovaultt.png";
import cartcrew from "../../assets/projects/cartcrew.png";
import therapist from "../../assets/projects/therapist.png";
import fone2serve from "../../assets/projects/fone2serve.png";

const projects = [
  {
    category: "Automotive Branding",
    link: "/projects/autovaultt",
    title: "Auto Vaultt",
    image: autovault,
    description:
      "Premium branding, website design and digital presence for an automotive detailing studio.",
  },
  {
    category: "Procurement Platform",
    link: "/projects/cartcrew",
    title: "Cart Crew",
    image: cartcrew,
    description:
      "Corporate website and procurement platform designed to simplify business purchasing.",
  },
  {
    category: "Healthcare",
    link: "/projects/therapist",
    title: "Therapist Portfolio",
    image: therapist,
    description:
      "A calm, modern website focused on trust, accessibility and client engagement.",
  },
  {
    category: "Recruitment",
    link: "/projects/fone2serve",
    title: "Fone2Serve",
    image: fone2serve,
    description:
      "Website and digital identity for a recruitment company connecting businesses with talent.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div>

            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Selected Work
            </span>

            <h2 className="mt-6 text-[58px] leading-[1.05] font-light tracking-[-2px] text-[#111]">
              Real projects.
              <br />
              Real{" "}
              <span
                className="italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                impact.
              </span>
            </h2>

          </div>

          <p className="max-w-[440px] text-lg leading-9 text-neutral-600">
            Every project reflects a balance of thoughtful strategy,
            refined design and purposeful execution tailored to each
            client's unique goals.
          </p>

        </div>

        {/* Projects */}

        <div className="mt-24 grid gap-8 md:grid-cols-2">

          {projects.map((project) => (

            <article
              key={project.title}
              className="group overflow-hidden rounded-[30px] border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-8">

                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {project.category}
                </span>

                <h3 className="mt-4 text-[30px] font-medium">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-neutral-600">
                  {project.description}
                </p>

               <Link
  to={project.link}
  className="group mt-8 inline-flex items-center gap-2 border-b border-black pb-1 font-medium text-black transition-all duration-300 hover:gap-3"
>
  View Case Study

  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
</Link>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}