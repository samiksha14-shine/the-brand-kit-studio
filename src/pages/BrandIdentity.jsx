import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ServiceHero from "../components/services/ServiceHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceCTA from "../components/services/ServiceCTA";

import heroImage from "../assets/services/branding/hero.png";

export default function BrandIdentity() {
  return (
    <>
      <Navbar />

      <main>

        <ServiceHero
          category="Brand Identity"
          title="Build a brand people"
          highlight="remember."
          image={heroImage}
          description="A strong brand goes beyond a logo. We create meaningful identities that communicate your values, build trust and leave lasting impressions."
        />

        <ServiceOverview
          heading="What's Included"
          description="Every brand identity project is built to create consistency across every customer touchpoint."
          features={[
            {
              title: "Logo Design",
              description:
                "Unique, memorable and versatile logos crafted specifically for your business.",
            },
            {
              title: "Brand Strategy",
              description:
                "Positioning your business with clarity and purpose before the design begins.",
            },
            {
              title: "Colour Palette",
              description:
                "Thoughtfully selected colours that reflect your personality and improve recognition.",
            },
            {
              title: "Typography",
              description:
                "Modern type systems that improve consistency across print and digital media.",
            },
            {
              title: "Brand Guidelines",
              description:
                "A complete guide ensuring your brand remains consistent everywhere.",
            },
            {
              title: "Stationery Design",
              description:
                "Business cards, letterheads and professional brand collateral.",
            },
          ]}
        />

<ServiceCTA
          highlight="identity."
          description="Whether you're launching a startup or refreshing an existing business, we'll create a brand that people recognise and remember."
          buttonText="Start Your Branding Project"
        />

      </main>

      <Footer />
    </>
  );
}