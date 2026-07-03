import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

import BrandIdentity from "./pages/BrandIdentity";
import WebsiteDesign from "./pages/WebsiteDesign";
import UIUXDesign from "./pages/UIUXDesign";
import ContentStrategy from "./pages/ContentStrategy";
import SocialMedia from "./pages/SocialMedia";
import SEO from "./pages/SEO";

import AutoVaultt from "./pages/AutoVaultt";
import CartCrew from "./pages/CartCrew";
import Therapist from "./pages/Therapist";
import Fone2Serve from "./pages/Fone2Serve";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default function App() {

  useEffect(() => {
  // Disable right click
  const disableContextMenu = (e) => {
    e.preventDefault();
  };

  // Disable common shortcuts
  const disableShortcuts = (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey &&
        ["I", "J", "C"].includes(e.key.toUpperCase())) ||
      (e.ctrlKey && ["U", "S"].includes(e.key.toUpperCase()))
    ) {
      e.preventDefault();
    }
  };

  document.addEventListener("contextmenu", disableContextMenu);
  document.addEventListener("keydown", disableShortcuts);

  return () => {
    document.removeEventListener("contextmenu", disableContextMenu);
    document.removeEventListener("keydown", disableShortcuts);
  };
}, []);

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/services/brand-identity"
          element={<BrandIdentity />}
        />

        <Route
          path="/services/website-design"
          element={<WebsiteDesign />}
        />

        <Route
          path="/services/ui-ux"
          element={<UIUXDesign />}
        />

        <Route
          path="/services/content-strategy"
          element={<ContentStrategy />}
        />

        <Route
          path="/services/social-media"
          element={<SocialMedia />}
        />

        <Route
          path="/services/seo"
          element={<SEO />}
        />

        <Route
  path="/projects/autovaultt"
  element={<AutoVaultt />}
/>

<Route
  path="/projects/cartcrew"
  element={<CartCrew />}
/>

<Route
  path="/projects/therapist"
  element={<Therapist />}
/>

<Route
  path="/projects/fone2serve"
  element={<Fone2Serve />}
/>
      </Routes>
    </>
  );
}