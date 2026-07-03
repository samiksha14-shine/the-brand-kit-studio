import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ServiceHero from "../components/services/ServiceHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceCTA from "../components/services/ServiceCTA";

import heroImage from "../assets/services/seo/hero.png";

export default function SEO() {
  return (
    <>
      <Navbar />

      <main>

        <ServiceHero
          category="SEO & Google Business"
          title="Helping your business get"
          highlight="found."
          image={heroImage}
          description="A beautiful website deserves to be seen. We optimise your digital presence to improve visibility, attract qualified traffic and help customers discover your business."
        />

        <ServiceOverview
          heading="What's Included"
          description="From technical optimisation to local search, we build a strong foundation for sustainable online growth."
          features={[
            {
              title: "Website SEO",
              description:
                "On-page optimisation including headings, metadata, image optimisation and technical improvements.",
            },
            {
              title: "Keyword Research",
              description:
                "Finding the right keywords your customers are already searching for.",
            },
            {
              title: "Google Business Profile",
              description:
                "Complete profile setup and optimisation to improve your local search visibility.",
            },
            {
              title: "Local SEO",
              description:
                "Helping your business rank higher for nearby customers and location-based searches.",
            },
            {
              title: "Performance Monitoring",
              description:
                "Track rankings, website performance and user behaviour with actionable insights.",
            },
            {
              title: "SEO Consultation",
              description:
                "Practical recommendations and long-term strategies to help your business grow organically.",
            },
          ]}
        />

       <ServiceCTA
  title="Let's help your customers find you first."
  description="Improve your visibility, attract qualified traffic and grow organically with an SEO strategy built for long-term success."
  buttonText="Improve My Rankings"
/>

      </main>

      <Footer />
    </>
  );
}