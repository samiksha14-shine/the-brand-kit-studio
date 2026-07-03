import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What services does The Brand Kit Studio offer?",
    answer:
      "We provide branding, logo design, websites, UI/UX design, presentations, SEO, Google Business setup, social media creatives and complete digital branding solutions.",
  },
  {
    question: "Do you only design websites?",
    answer:
      "No. We help businesses build a complete brand—from strategy and identity to websites, digital presence and ongoing creative support.",
  },
  {
    question: "Can you redesign my existing brand?",
    answer:
      "Absolutely. Whether it's a logo refresh, website redesign or complete brand transformation, we tailor every project to your business goals.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We've worked with automotive, healthcare, recruitment, procurement, travel, logistics, packaging and many growing businesses. Every project is approached with fresh research and strategy.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply click 'Let's Talk'. We'll understand your requirements, discuss your goals and recommend the right solution for your business.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="faq"
      className="bg-white py-32 lg:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        <div className="grid lg:grid-cols-[420px_1fr] gap-20">

          {/* Left */}

          <div>

            <span className="uppercase tracking-[0.35em] text-neutral-500 text-xs">
              FAQ
            </span>

            <h2 className="mt-6 text-[58px] leading-[1.05] font-light tracking-[-2px] text-[#111]">
              Questions,
              <br />
               <span
                className="italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {" "}
                answered.
              </span>
              
            </h2>

            <p className="mt-8 text-lg leading-9 text-neutral-600">
              Everything you need to know before starting your next
              branding or website project.
            </p>

          </div>

          {/* Right */}

          <div>

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="border-b border-neutral-200 py-8"
              >

                <button
                  onClick={() =>
                    setActive(active === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between text-left"
                >

                  <h3 className="text-[24px] font-medium text-[#111]">
                    {faq.question}
                  </h3>

                  {active === index ? (
                    <FiMinus size={22} />
                  ) : (
                    <FiPlus size={22} />
                  )}

                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    active === index
                      ? "max-h-[300px] pt-6"
                      : "max-h-0"
                  }`}
                >

                  <p className="text-neutral-600 leading-8 max-w-[700px]">
                    {faq.answer}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}