import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ServiceHero from "../components/services/ServiceHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceCTA from "../components/services/ServiceCTA";

import heroImage from "../assets/services/ui-ux/hero.png";

export default function UIUXDesign() {
  return (
    <>
      <Navbar />

      <main>

        <ServiceHero
          category="UI / UX Design"
          title="Designing experiences people"
          highlight="love."
          image={heroImage}
          description="Great products aren't just beautiful—they're intuitive, accessible and enjoyable to use. We design user experiences that make every interaction effortless."
        />

        <ServiceOverview
          heading="What's Included"
          description="Every interface is designed with usability, accessibility and business goals in mind."
          features={[
            {
              title: "User Research",
              description:
                "Understanding your users, behaviours and goals before designing the experience.",
            },
            {
              title: "Wireframing",
              description:
                "Low-fidelity layouts that establish structure, flow and functionality.",
            },
            {
              title: "UI Design",
              description:
                "Clean, modern interfaces crafted for clarity, consistency and usability.",
            },
            {
              title: "Interactive Prototypes",
              description:
                "Clickable prototypes that simulate the final experience before development.",
            },
            {
              title: "Design Systems",
              description:
                "Reusable components and design guidelines for scalable digital products.",
            },
            {
              title: "Responsive Experience",
              description:
                "Interfaces optimized for desktop, tablet and mobile across all screen sizes.",
            },
          ]}
        />


        <ServiceCTA
  title="Let's create experiences users love."
  description="Great design is invisible. Together we'll craft interfaces that feel intuitive, delightful and effortless on every screen."
  buttonText="Start Designing"
/>

      </main>

      <Footer />
    </>
  );
}