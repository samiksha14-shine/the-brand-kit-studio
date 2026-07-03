import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CaseHero from "../components/case-study/CaseHero";
import CaseIntro from "../components/case-study/CaseIntro";
import CaseChallenge from "../components/case-study/CaseChallenge";
import CaseDeliverables from "../components/case-study/CaseDeliverables";
import CaseGallery from "../components/case-study/CaseGallery";
import CaseResults from "../components/case-study/CaseResults";
import CaseCTA from "../components/case-study/CaseCTA";

import heroImage from "../assets/case-studies/fone2serve/hero.png";
import brandingImage from "../assets/case-studies/fone2serve/branding.png";
import websiteImage from "../assets/case-studies/fone2serve/website.png";

export default function Fone2Serve() {
  return (
    <>
      <Navbar />

      <main>

        <CaseHero
          category="Recruitment & Staffing"
          title="Fone2Serve"
          highlight="Case Study."
          image={heroImage}
          description="Refreshing an established recruitment brand through strategic rebranding, a modern corporate website and professional business collateral."
        />

        <CaseIntro
          overview="Fone2Serve approached The Brand Kit Studio to modernise its existing brand identity while retaining its recognised logo. The objective was to create a more professional and consistent brand presence across digital and print media. We refreshed the brand, redesigned business collateral, developed a modern corporate website and created presentations and marketing assets that better represent the company's recruitment expertise."

          client="Fone2Serve"

          industry="Recruitment & Staffing"

          projectScope="Corporate Rebranding & Digital Presence"

          role="Brand Strategy, Visual Design, Website Design & Development"

          services={[
            "Brand Refresh",
            "Corporate Website",
            "Presentation Design",
            "Pitch Deck",
            "Letterhead Design",
            "Email Signature",
            "Business Stationery",
            "Marketing Assets",
          ]}
        />

        <CaseChallenge
          challenge="Although Fone2Serve had an established business and an existing logo, its overall branding lacked consistency across customer touchpoints. Marketing materials, business stationery and digital presence needed to reflect a more modern, professional and trustworthy recruitment company."

          solution="Rather than redesigning the logo entirely, we refined and rebuilt the brand ecosystem around it. This included creating editable brand assets, designing professional stationery, developing presentations and pitch decks, building a responsive corporate website and ensuring every visual element followed a consistent corporate identity."
        />

        <CaseDeliverables
          deliverables={[
            {
              title: "Brand Refresh",
              description:
                "Refined the existing identity while preserving the original logo and creating editable brand assets.",
            },
            {
              title: "Corporate Website",
              description:
                "Designed and developed a modern responsive website that communicates services professionally.",
            },
            {
              title: "Presentation & Pitch Deck",
              description:
                "Created corporate presentations and pitch decks for business meetings and client proposals.",
            },
            {
              title: "Business Stationery",
              description:
                "Designed letterheads, envelopes, email signatures and other branded corporate materials.",
            },
            {
              title: "Marketing Assets",
              description:
                "Produced supporting digital creatives and communication materials aligned with the refreshed identity.",
            },
            {
              title: "Brand Consistency",
              description:
                "Established a unified visual language across every online and offline customer touchpoint.",
            },
          ]}
        />

        <CaseGallery
          sections={[
            {
              title: "Corporate Branding",
              description:
                "A refreshed corporate identity including stationery, presentations, email signatures and business communication materials designed to create a professional and consistent brand experience.",
              image: brandingImage,
            },

            {
              title: "Corporate Website",
              description:
                "A clean, responsive website built to showcase recruitment services, strengthen credibility and improve client engagement.",
              image: websiteImage,
            },
          ]}
        />

        <CaseResults
          results={[
            {
              title: "Modern Brand Identity",
              description:
                "Successfully refreshed the company's visual identity while retaining its established brand recognition.",
            },
            {
              title: "Professional Business Assets",
              description:
                "Created branded presentations, stationery and communication materials that strengthen corporate credibility.",
            },
            {
              title: "Consistent Brand Experience",
              description:
                "Unified digital and print assets under one professional visual language.",
            },
            {
              title: "Corporate Website",
              description:
                "Delivered a modern website that clearly communicates recruitment services and supports business enquiries.",
            },
            {
              title: "Stronger Business Communication",
              description:
                "Improved client-facing presentations and marketing materials with a clean, consistent design system.",
            },
            {
              title: "Future-Ready Brand",
              description:
                "Built a scalable branding system that supports future marketing, recruitment campaigns and business growth.",
            },
          ]}
        />

        <CaseCTA
          title="Strengthen your brand. Elevate your business."

          description="From corporate branding and presentations to websites and digital assets, we create professional identities that build credibility and leave a lasting impression."

          buttonText="Start Your Project"
        />

      </main>

      <Footer />
    </>
  );
}