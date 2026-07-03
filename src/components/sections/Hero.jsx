import heroBg from "../../assets/hero/hero-bg.png";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden h-screen min-h-[760px]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto h-full max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

        <div className="flex h-full items-center">

          <div className="w-full lg:w-[48%] pt-20 md:pt-28 lg:pt-32">

            <h1 className="
              max-w-[620px]
              text-[46px]
              sm:text-[54px]
              md:text-[62px]
              lg:text-[70px]
              xl:text-[76px]
              leading-[1]
              font-light
              tracking-[-2px]
              text-[#111]
            ">
              Building Brands
              <br />
              That Leave a{" "}
              <span
                className="italic font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Mark.
              </span>
            </h1>

            <p className="
              mt-8
              max-w-[500px]
              text-base
              md:text-lg
              leading-8
              md:leading-9
              text-[#555]
            ">
              We are a branding and design studio crafting
              strategic identities and digital experiences
              for forward-thinking brands.
            </p>

            <div className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-6
            ">

              <a
                href="#contact"
                className="
                  flex
                  h-12
                  md:h-14
                  items-center
                  gap-2
                  rounded-full
                  bg-black
                  px-7
                  md:px-8
                  text-white
                  transition
                  hover:scale-[1.02]
                "
              >
                Let's Talk
                <FiArrowUpRight />
              </a>

              <a
                href="#projects"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  border-b
                  border-black
                  pb-1
                  text-base
                  md:text-lg
                  font-medium
                "
              >
                Check our work

                <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}