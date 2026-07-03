import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CaseHero from "../components/case-study/CaseHero";
import CaseIntro from "../components/case-study/CaseIntro";
import CaseChallenge from "../components/case-study/CaseChallenge";
import CaseDeliverables from "../components/case-study/CaseDeliverables";
import CaseGallery from "../components/case-study/CaseGallery";
import CaseResults from "../components/case-study/CaseResults";
import CaseCTA from "../components/case-study/CaseCTA";

import heroImage from "../assets/case-studies/therapist/hero.png";
import websiteImage from "../assets/case-studies/therapist/website.png";

export default function Therapist() {
  return (
    <>
      <Navbar />

      <main>

        <CaseHero
          category="Healthcare & Wellness"
          title="Therapist"
          highlight="Case Study."
          image={heroImage}
          description="Designing a calm, trustworthy and informative website that showcases therapy services, builds credibility and helps potential clients connect with confidence."
        />

        <CaseIntro
          overview="The therapist wanted a dedicated online presence where prospective clients could easily understand the therapies offered, learn about the practice, explore client experiences and connect through a single professional platform. The goal was to create a welcoming digital experience that reflects compassion, professionalism and trust while improving online visibility."

          client="Independent Therapy Practice"

          industry="Alternative Therapy & Wellness"

          projectScope="Website Design & Digital Presence"

          role="UI/UX Design, Website Design & Development"

          services={[
            "Website Design",
            "Responsive Development",
            "UI / UX Design",
            "Service Showcase",
            "Location & Contact Integration",
            "Testimonials Section",
          ]}
        />

        <CaseChallenge
          challenge="The practice relied primarily on word-of-mouth referrals and lacked a dedicated online platform where people could understand the therapist's services, therapy methods and treatment approach. Potential clients had no single place to learn about the available therapies or easily get in touch."

          solution="We designed and developed a calming, responsive website that brings together everything a prospective client needs in one place—from therapy information and treatment methods to location details, testimonials and appointment enquiries. The website creates a professional first impression while making it simple for visitors to explore services and contact the therapist."
        />

        <CaseDeliverables
          deliverables={[
            {
              title: "Website Design",
              description:
                "Designed a modern, calming and trustworthy website tailored for a wellness practice.",
            },
            {
              title: "Responsive Experience",
              description:
                "Created a fully responsive experience across desktop, tablet and mobile devices.",
            },
            {
              title: "Service Showcase",
              description:
                "Organised therapy services including Acupressure, Needling, Moxa Therapy, Cupping and other treatments into an easy-to-understand experience.",
            },
            {
              title: "Location & Contact",
              description:
                "Integrated maps, contact details and enquiry options to make appointments easier.",
            },
            {
              title: "Client Testimonials",
              description:
                "Designed dedicated sections to build trust through patient feedback and experiences.",
            },
            {
              title: "User Experience",
              description:
                "Structured the entire website to guide visitors naturally from discovery to enquiry.",
            },
          ]}
        />

        <CaseGallery
          sections={[
            {
              title: "Website Experience",
              description:
                "A calming and responsive website designed to introduce the therapist, explain treatment methods and create a reassuring first impression for every visitor.",
              image: websiteImage,
            },
          ]}
        />

        <CaseResults
          results={[
            {
              title: "Professional Online Presence",
              description:
                "Established a dedicated website that represents the therapist's practice professionally.",
            },
            {
              title: "Better Service Communication",
              description:
                "Clearly organised therapy information, helping visitors understand available treatments with ease.",
            },
            {
              title: "Improved Client Trust",
              description:
                "Introduced testimonials, location details and thoughtful design elements that build confidence.",
            },
            {
              title: "Easy Appointment Journey",
              description:
                "Simplified the process of discovering services and getting in touch through clear calls-to-action.",
            },
            {
              title: "Responsive User Experience",
              description:
                "Ensured a seamless browsing experience across mobile, tablet and desktop devices.",
            },
            {
              title: "Stronger Digital Visibility",
              description:
                "Created a lasting online presence that the therapist can confidently share with prospective clients.",
            },
          ]}
        />

        <CaseCTA
          title="Your expertise deserves a digital presence that inspires trust."

          description="We design thoughtful, user-focused websites that help professionals connect with their audience, communicate their services clearly and grow with confidence."

          buttonText="Start Your Project"
        />

      </main>

      <Footer />
    </>
  );
}