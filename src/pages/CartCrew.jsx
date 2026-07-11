import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CaseHero from "../components/case-study/CaseHero";
import CaseIntro from "../components/case-study/CaseIntro";
import CaseChallenge from "../components/case-study/CaseChallenge";
import CaseDeliverables from "../components/case-study/CaseDeliverables";
import CaseGallery from "../components/case-study/CaseGallery";
import CaseResults from "../components/case-study/CaseResults";
import CaseCTA from "../components/case-study/CaseCTA";

import heroImage from "../assets/case-studies/cartcrew/hero.png";
import brandingImage from "../assets/case-studies/cartcrew/branding.png";
import websiteImage from "../assets/case-studies/cartcrew/website.png";
import portalImage from "../assets/case-studies/cartcrew/portal.png";
import socialImage from "../assets/case-studies/cartcrew/social-media.png";

export default function CartCrew() {
  return (
    <>
      <Navbar />

      <main>

        <CaseHero
          category="Corporate Procurement"
          title="Procurement Platform"
          highlight="Case Study."
          image={heroImage}
          description="Building a complete corporate procurement brand from the ground up through branding, website development, procurement portal UI, social media and digital marketing."
        />

        <CaseIntro
          overview="This project involved creating a complete brand identity for a growing B2B procurement business looking to establish a strong and professional market presence. Starting from the ground up, we developed a cohesive visual identity and built an end-to-end digital ecosystem, including a corporate website, procurement portal, marketing collateral, presentations, and an ongoing social media presence. The result was a scalable brand system designed to support long-term business growth."

          client="B2B Procurement Company"

          industry="Corporate Procurement Solutions"

          projectScope="Complete Brand Development"

          role="Brand Strategy, UI/UX Design, Website Development & Digital Growth"

          services={[
            "Brand Identity",
            "Website Design & Development",
            "Procurement Portal UI/UX",
            "Social Media Management",
            "Presentation Design",
            "Company Profile Design",
            "Marketing Collaterals",
          ]}
        />

        <CaseChallenge
          challenge="Launching a new procurement business requires more than just a logo or a website—it demands trust. The challenge was to create a cohesive brand and digital ecosystem that would position the business as a reliable procurement partner while simplifying its services through intuitive design, clear communication, and a consistent experience across every platform."

          solution="Rather than treating each requirement as an individual project, we built an integrated brand ecosystem. From logo design and visual identity to the corporate website, procurement portal interface, social media, presentations and marketing materials, every element was designed to communicate professionalism, trust and long-term scalability."
        />

        <CaseDeliverables
          deliverables={[
            {
              title: "Brand Identity",
              description:
                "Developed the complete corporate identity including logo, typography, colours and visual branding guidelines.",
            },
            {
              title: "Corporate Website",
              description:
                "Designed and developed a modern responsive website that clearly communicates the brands's procurement services.",
            },
            {
              title: "Procurement Portal",
              description:
                "Designed a scalable UI/UX for the internal procurement portal focused on usability and operational efficiency.",
            },
            {
              title: "Social Media",
              description:
                "Created branded creatives and continue to manage the company's digital presence through consistent social media content.",
            },
            {
              title: "Company Profile",
              description:
                "Designed professional company profiles, presentations and sales decks for corporate business development.",
            },
            {
              title: "Marketing Assets",
              description:
                "Developed brochures, banners, presentation templates and supporting marketing collateral aligned with the brand.",
            },
          ]}
        />

        <CaseGallery
          sections={[
            {
              title: "Brand Identity",
              description:
                "A clean corporate identity developed to establish trust, professionalism and consistency across every customer touchpoint.",
              image: brandingImage,
            },

            {
              title: "Corporate Website",
              description:
                "A responsive website designed to communicate procurement solutions, improve credibility and generate enquiries.",
              image: websiteImage,
            },

            {
              title: "Procurement Portal",
              description:
                "An intuitive portal interface designed to simplify procurement workflows while maintaining a modern enterprise experience.",
              image: portalImage,
            },

            {
              title: "Social Media Management",
              description:
                "Consistent visual communication and strategically designed content created to strengthen the brand's online presence, improve engagement, and support long-term business growth.",
              image: socialImage,
            },
          ]}
        />

        <CaseResults
          results={[
            {
              title: "Brand Built From Scratch",
              description:
                "Successfully transformed a new procurement startup into a professional and recognisable corporate brand.",
            },
            {
              title: "Strong Digital Foundation",
              description:
                "Established a modern website, procurement portal and digital assets designed for long-term scalability.",
            },
            {
              title: "Unified Brand Experience",
              description:
                "Created consistency across branding, website, presentations, portal interface and marketing materials.",
            },
            {
              title: "Improved Business Credibility",
              description:
                "Built a polished corporate identity that strengthens trust among clients, suppliers and business partners.",
            },
            {
              title: "Ongoing Digital Presence",
              description:
                "Providing continuous creative support through social media management, branded content, marketing collateral, and design initiatives to maintain a consistent and impactful digital presence.",
            },
            {
              title: "Long-Term Brand Partnership",
              description:
                "Continuing to support the business as its creative and digital partner, evolving the brand through strategic design, digital experiences, and ongoing marketing initiatives as it grows.",
            },
          ]}
        />

        <CaseCTA
          title="Let's create solutions that scale."

          description="Whether you're launching a startup or modernising an established business, we design digital experiences, platforms and brand systems built for long-term growth."

          buttonText="Start Your Project"
        />

      </main>

      <Footer />
    </>
  );
}