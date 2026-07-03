import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CaseHero from "../components/case-study/CaseHero";
import CaseIntro from "../components/case-study/CaseIntro";
import CaseChallenge from "../components/case-study/CaseChallenge";
import CaseDeliverables from "../components/case-study/CaseDeliverables";
import CaseGallery from "../components/case-study/CaseGallery";
import CaseResults from "../components/case-study/CaseResults";
import CaseCTA from "../components/case-study/CaseCTA";

import heroImage from "../assets/case-studies/autovaultt/hero.png";
import brandingImage from "../assets/case-studies/autovaultt/branding.png";
import websiteImage from "../assets/case-studies/autovaultt/website.png";
import socialImage from "../assets/case-studies/autovaultt/social-media.png";
import googleBusinessImage from "../assets/case-studies/autovaultt/google-business.png";

export default function AutoVaultt() {
  return (
    <>
      <Navbar />

      <main>

        <CaseHero
          category="Automotive Detailing Studio"
          title="AutoVaultt"
          highlight="Case Study."
          image={heroImage}
          description="Transforming a newly launched automotive detailing studio into a premium digital brand through branding, website design, SEO, Google Business optimisation and ongoing social media management."
        />

        <CaseIntro
          overview="AutoVaultt approached The Brand Kit Studio at the beginning of its journey with a vision to build a premium automotive detailing brand. Starting from a blank canvas, we crafted a complete brand identity and established a strong digital presence across every customer touchpoint. From branding and website development to Google Business optimisation, SEO and social media management, we continue to work closely with the brand to support its growth and long-term positioning."

          client="AutoVaultt"

          industry="Automotive Detailing Studio"

          projectScope="Complete Brand Development"

          role="Brand Strategy, Design, Development & Digital Growth"

          services={[
            "Brand Identity",
            "Website Design & Development",
            "UI / UX Design",
            "SEO",
            "Google Business Optimisation",
            "Social Media Management",
            "Marketing Collaterals",
          ]}
        />

        <CaseChallenge
          challenge="As a newly established detailing studio, AutoVaultt needed to build credibility from the ground up. Without an existing brand identity or digital presence, the challenge was to create a premium image that would immediately build trust, communicate quality and attract customers in a highly competitive automotive market."

          solution="We partnered with AutoVaultt from day one, developing a complete brand ecosystem rather than focusing on a single deliverable. This included creating the visual identity, designing and developing the website, implementing SEO, optimising the Google Business Profile, designing marketing assets and managing social media to ensure every customer interaction reflected a consistent premium brand experience."
        />

        <CaseDeliverables
          deliverables={[
            {
              title: "Brand Identity",
              description:
                "Created the complete visual identity including logo usage, colour palette, typography and premium brand guidelines.",
            },
            {
              title: "Website Design",
              description:
                "Designed and developed a responsive, conversion-focused website showcasing AutoVaultt's premium detailing services.",
            },
            {
              title: "SEO",
              description:
                "Implemented technical and on-page SEO to improve search visibility and long-term organic growth.",
            },
            {
              title: "Google Business",
              description:
                "Created and optimised the Google Business Profile to strengthen local search presence and customer trust.",
            },
            {
              title: "Social Media",
              description:
                "Designed branded creatives and continue to manage the brand's social media presence with consistent content.",
            },
            {
              title: "Marketing Assets",
              description:
                "Developed brochures, visiting cards, catalogues and supporting marketing materials aligned with the premium identity.",
            },
          ]}
        />

        <CaseGallery
          sections={[
            {
              title: "Brand Identity",
              description:
                "A premium visual identity inspired by precision, performance and luxury automotive craftsmanship, designed to position AutoVaultt as a trusted detailing studio.",
              image: brandingImage,
            },

            {
              title: "Website Experience",
              description:
                "A modern responsive website built to showcase services, build credibility and convert visitors into customer enquiries.",
              image: websiteImage,
            },

            {
              title: "Social Media Management",
              description:
                "Consistent social media branding and creative content designed to strengthen recognition, engage customers and support ongoing marketing campaigns.",
              image: socialImage,
            },

            {
              title: "Google Business Optimisation",
              description:
                "A professionally optimised Google Business Profile that improves discoverability, strengthens local presence and enhances customer trust.",
              image: googleBusinessImage,
            },
          ]}
        />

        <CaseResults
          results={[
            {
              title: "Brand Built From Scratch",
              description:
                "Successfully transformed a newly launched detailing studio into a premium and recognisable automotive brand.",
            },
            {
              title: "Strong Digital Foundation",
              description:
                "Established a professional website, SEO strategy and Google Business presence to support long-term business growth.",
            },
            {
              title: "Consistent Brand Experience",
              description:
                "Created a unified visual identity across digital platforms, marketing materials and customer touchpoints.",
            },
            {
              title: "Improved Local Visibility",
              description:
                "Strengthened online discoverability through Google Business optimisation and SEO best practices.",
            },
            {
              title: "Ongoing Social Presence",
              description:
                "Continue to manage and grow the brand through strategic social media content and creative campaigns.",
            },
            {
              title: "Long-Term Brand Partnership",
              description:
                "Continuing to work alongside AutoVaultt, supporting its branding, marketing and digital growth as the business expands.",
            },
          ]}
        />

        <CaseCTA
          title="Ready to accelerate your brand?"

          description="From branding and websites to SEO, Google Business and ongoing marketing, we help ambitious businesses build a premium presence that stands out from day one."

          buttonText="Start Your Project"
        />

      </main>

      <Footer />
    </>
  );
}