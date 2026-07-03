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
          title="Cart Crew"
          highlight="Case Study."
          image={heroImage}
          description="Building a complete corporate procurement brand from the ground up through branding, website development, procurement portal UI, social media and digital marketing."
        />

        <CaseIntro
          overview="Cart Crew approached The Brand Kit Studio during its early journey with a vision to build a trusted procurement company serving businesses across multiple industries. Starting from scratch, we developed the complete brand identity and established a strong digital ecosystem including the corporate website, procurement portal, marketing materials, presentations and social media presence. Today, we continue to support the brand's growth through design, branding and digital initiatives."

          client="Cart Crew Pvt. Ltd."

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
          challenge="As a newly launched procurement company, Cart Crew required a professional identity that could build trust with corporate clients from day one. Without an established digital presence, the challenge was to communicate reliability, simplify complex procurement services and create a consistent brand experience across every customer touchpoint."

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
                "Designed and developed a modern responsive website that clearly communicates Cart Crew's procurement services.",
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
                "Consistent visual communication and branded content created to strengthen Cart Crew's online presence and support business growth.",
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
                "Continue to support Cart Crew through social media management, creative design and branding initiatives.",
            },
            {
              title: "Long-Term Brand Partnership",
              description:
                "Working alongside Cart Crew as its creative and digital partner, continuously evolving the brand as the business grows.",
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