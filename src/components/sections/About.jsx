import { FiArrowUpRight } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">

        {/* Top */}

        <div className="grid gap-20 lg:grid-cols-2 items-start">

          {/* Left */}

          <div>

            <span className="text-xs tracking-[0.35em] uppercase text-neutral-500">
              About The Studio
            </span>

            <h2 className="mt-6 text-[58px] leading-[1.05] font-light tracking-[-2px] text-[#111]">

              We don't just
              <br />
              create brands.

              <br />

              We build
              <span
                className="italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {" "}
                experiences.
              </span>

            </h2>

          </div>

          {/* Right */}

          <div className="space-y-8">

            <p className="text-[21px] leading-10 text-neutral-700">

              The Brand Kit Studio is an independent branding and
              digital design studio helping businesses build
              memorable identities that inspire trust and
              accelerate growth.

            </p>

            <p className="text-lg leading-9 text-neutral-500">

              Every project begins with understanding your vision.
              From strategy and identity design to websites,
              content and digital experiences—we create systems
              that help brands stay consistent, memorable and
              future-ready.

            </p>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-b border-black pb-1 text-lg font-medium"
            >
              Explore our work

              <FiArrowUpRight />
            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="my-24 h-px bg-neutral-200"></div>

        {/* Bottom */}

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">

          <div>

            <h3 className="text-[42px] font-light">01</h3>

            <h4 className="mt-6 text-2xl font-medium">
              Strategy First
            </h4>

            <p className="mt-4 text-neutral-600 leading-8">

              Every project starts with research, positioning
              and understanding your audience before we begin
              designing.

            </p>

          </div>

          <div>

            <h3 className="text-[42px] font-light">02</h3>

            <h4 className="mt-6 text-2xl font-medium">
              Design With Purpose
            </h4>

            <p className="mt-4 text-neutral-600 leading-8">

              Beautiful visuals are meaningful only when they
              solve real business problems and communicate
              clearly.

            </p>

          </div>

          <div>

            <h3 className="text-[42px] font-light">03</h3>

            <h4 className="mt-6 text-2xl font-medium">
              Digital Presence
            </h4>

            <p className="mt-4 text-neutral-600 leading-8">

              From websites to social media assets, we build
              experiences that are clean, modern and memorable.

            </p>

          </div>

          <div>

            <h3 className="text-[42px] font-light">04</h3>

            <h4 className="mt-6 text-2xl font-medium">
              Long-Term Growth
            </h4>

            <p className="mt-4 text-neutral-600 leading-8">

              Our goal isn't simply launching a brand.
              It's creating one that continues to grow for years.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}