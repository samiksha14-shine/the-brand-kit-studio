import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo-horizontal.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20">

        {/* Top */}

        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">

          {/* Left */}

          <div>

            <img
              src={logo}
              alt="The Brand Kit Studio"
              className="h-10 w-auto"
            />

            <p className="mt-8 max-w-[420px] text-neutral-600 leading-8">
              We build brands that people remember. From strategy and branding
              to websites, UI/UX and digital experiences that help businesses
              grow with confidence.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">

            {/* Studio */}

            <div>

              <h4 className="text-lg font-medium text-[#111]">
                Studio
              </h4>

              <ul className="mt-6 space-y-4 text-neutral-600">

                <li>
                  <HashLink smooth to="/#about" className="hover:text-black transition">
                    About
                  </HashLink>
                </li>

                <li>
                  <HashLink smooth to="/#services" className="hover:text-black transition">
                    Services
                  </HashLink>
                </li>

                <li>
                  <HashLink smooth to="/#work" className="hover:text-black transition">
                    Work
                  </HashLink>
                </li>

                <li>
                  <HashLink smooth to="/#contact" className="hover:text-black transition">
                    Contact
                  </HashLink>
                </li>

              </ul>

            </div>

            {/* Services */}

            {/* Services */}

<div>

  <h4 className="text-lg font-medium text-[#111]">
    Services
  </h4>

  <ul className="mt-6 space-y-4 text-neutral-600">

    <li>
      <HashLink
        smooth
        to="/services/brand-identity"
        className="transition hover:text-black"
      >
        Brand Identity
      </HashLink>
    </li>

    <li>
      <HashLink
        smooth
        to="/services/website-design"
        className="transition hover:text-black"
      >
        Website Design
      </HashLink>
    </li>

    <li>
      <HashLink
        smooth
        to="/services/ui-ux-design"
        className="transition hover:text-black"
      >
        UI / UX Design
      </HashLink>
    </li>

    <li>
      <HashLink
        smooth
        to="/services/content-strategy"
        className="transition hover:text-black"
      >
        Content Strategy
      </HashLink>
    </li>

    <li>
      <HashLink
        smooth
        to="/services/seo"
        className="transition hover:text-black"
      >
        SEO
      </HashLink>
    </li>

    <li>
      <HashLink
        smooth
        to="/services/social-media"
        className="transition hover:text-black"
      >
        Social Media
      </HashLink>
    </li>

  </ul>

</div>

            {/* Contact */}

            <div>

              <h4 className="text-lg font-medium text-[#111]">
                Contact
              </h4>

              <ul className="mt-6 space-y-4 text-neutral-600">

                <li>
                  +91 91671 92173
                </li>

                <li>
                  hello@thebrandkitstudio.in
                </li>

                <li>
                  Mumbai, Maharashtra
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-neutral-200"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">

          <p>
            © 2026 The Brand Kit Studio. All Rights Reserved.
          </p>

          <div className="flex gap-8">

            <a
              href="https://www.instagram.com/the.brand.kits.studio?igsh=cXB1cm5tY25yaWps&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              Facebook
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}