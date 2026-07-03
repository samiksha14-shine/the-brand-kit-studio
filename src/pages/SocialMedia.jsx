import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ServiceHero from "../components/services/ServiceHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceCTA from "../components/services/ServiceCTA";

import heroImage from "../assets/services/social-media/hero.png";

export default function SocialMedia() {
  return (
    <>
      <Navbar />

      <main>

        <ServiceHero
          category="Social Media Design"
          title="Content that people"
          highlight="remember."
          image={heroImage}
          description="From daily creatives to complete campaign concepts, we create scroll-stopping content that keeps your brand consistent and engaging across every platform."
        />

        <ServiceOverview
          heading="What's Included"
          description="Everything you need to maintain a professional, consistent and engaging social media presence."
          features={[
            {
              title: "Post Design",
              description:
                "Premium static creatives designed to reflect your brand identity.",
            },
            {
              title: "Carousel Design",
              description:
                "Educational and storytelling carousels that increase engagement and saves.",
            },
            {
              title: "Reel Covers",
              description:
                "Consistent cover designs that create a professional Instagram feed.",
            },
            {
              title: "Story Templates",
              description:
                "Custom branded story layouts for everyday marketing and promotions.",
            },
            {
              title: "Campaign Creatives",
              description:
                "Launch campaigns, festive creatives and promotional designs tailored to your business.",
            },
            {
              title: "Content Planning",
              description:
                "Monthly content calendars and creative direction to maintain consistency.",
            },
          ]}
        />

        <ServiceCTA
  title="Ready to stand out on every scroll?"
  description="We'll create social media content that grows your audience, strengthens your brand and keeps your business consistently visible."
  buttonText="Grow My Social Presence"
/>
      </main>

      <Footer />
    </>
  );
}