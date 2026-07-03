import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ServiceHero from "../components/services/ServiceHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceCTA from "../components/services/ServiceCTA";

import heroImage from "../assets/services/website/hero.png";

export default function WebsiteDesign() {
  return (
    <>
      <Navbar />

      <main>

        <ServiceHero
          category="Website Design"
          title="Websites built to"
          highlight="perform."
          image={heroImage}
          description="We design and develop premium, responsive websites that combine aesthetics, usability and performance to help your business grow online."
        />

        <ServiceOverview
          heading="What's Included"
          description="Every website is designed to be fast, responsive and aligned with your brand while providing an excellent user experience."
          features={[
            {
              title: "Responsive Design",
              description:
                "Pixel-perfect layouts that adapt beautifully across desktop, tablet and mobile devices.",
            },
            {
              title: "Custom UI Design",
              description:
                "Interfaces designed specifically for your business instead of generic templates.",
            },
            {
              title: "Development",
              description:
                "Modern React websites built with performance, scalability and clean code.",
            },
            {
              title: "SEO Ready",
              description:
                "Technical foundations that help your website perform better in search engines.",
            },
            {
              title: "Performance",
              description:
                "Fast loading speeds, optimized assets and smooth user interactions.",
            },
            {
              title: "Future Scalability",
              description:
                "Built with growth in mind so your website can evolve with your business.",
            },
          ]}
        />

        <ServiceCTA
  title="Ready for a website that works as hard as you do?"
  description="Whether you're launching a new business or redesigning an existing website, we'll build a digital experience that's beautiful, fast and built to convert."
  buttonText="Build My Website"
/>

      </main>

      <Footer />
    </>
  );
}