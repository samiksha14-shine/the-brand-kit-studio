import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ServiceHero from "../components/services/ServiceHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceCTA from "../components/services/ServiceCTA";

import heroImage from "../assets/services/content-strategy/hero.png";

export default function ContentStrategy() {
  return (
    <>
      <Navbar />

      <main>

        <ServiceHero
          category="Content Strategy"
          title="Stories that build"
          highlight="connections."
          image={heroImage}
          description="Great content is more than words. We help brands communicate with clarity, consistency and purpose across every digital touchpoint."
        />

        <ServiceOverview
          heading="What's Included"
          description="Every content strategy is tailored to your audience, brand voice and long-term marketing goals."
          features={[
            {
              title: "Brand Messaging",
              description:
                "Clear messaging that reflects your brand personality and values.",
            },
            {
              title: "Website Copy",
              description:
                "Engaging website content focused on readability and conversions.",
            },
            {
              title: "Content Planning",
              description:
                "Strategic planning for blogs, campaigns and long-term content growth.",
            },
            {
              title: "Social Media Copy",
              description:
                "Captions and messaging designed to increase engagement and consistency.",
            },
            {
              title: "Campaign Concepts",
              description:
                "Creative campaign ideas that connect with your audience.",
            },
            {
              title: "Content Calendar",
              description:
                "Structured monthly content planning for consistent publishing.",
            },
          ]}
        />

        <ServiceCTA
  title="Every great brand starts with a clear message."
  description="We'll help you define your voice, tell better stories and create content that builds trust, authority and meaningful customer relationships."
  buttonText="Let's Talk Content"
/>

      </main>

      <Footer />
    </>
  );
}