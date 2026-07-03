import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo-horizontal.png";

const navLinks = [
  { title: "Studio", href: "/#about" },
  { title: "Services", href: "/#services" },
  { title: "Work", href: "/#projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-neutral-200 bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">

        <div className="relative flex h-[88px] items-center justify-between">

          {/* Logo */}

          <HashLink
            smooth
            to="/#hero"
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="The Brand Kit Studio"
              className="h-11 w-auto object-contain"
            />
          </HashLink>

          {/* Desktop Navigation */}

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-14 lg:flex">

            {navLinks.map((item) => (
              <HashLink
                smooth
                key={item.title}
                to={item.href}
                className="text-[15px] font-medium text-neutral-700 transition-all duration-300 hover:text-black"
              >
                {item.title}
              </HashLink>
            ))}

          </nav>

          {/* CTA */}

          <HashLink
            smooth
            to="/#contact"
            className="hidden h-11 items-center justify-center rounded-full bg-black px-7 text-[15px] font-medium text-white transition-all duration-300 hover:bg-neutral-800 lg:flex"
          >
            Let's Talk
          </HashLink>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="z-20 lg:hidden"
          >
            {menuOpen ? (
              <HiOutlineX size={28} />
            ) : (
              <HiOutlineMenuAlt3 size={28} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px] border-t border-neutral-200" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-8 py-8">

          {navLinks.map((item) => (
            <HashLink
              smooth
              key={item.title}
              to={item.href}
              onClick={closeMenu}
              className="text-lg font-medium text-neutral-700"
            >
              {item.title}
            </HashLink>
          ))}

          <HashLink
            smooth
            to="/#contact"
            onClick={closeMenu}
            className="mt-2 flex h-11 items-center justify-center rounded-full bg-black text-white"
          >
            Let's Talk
          </HashLink>

        </div>
      </div>
    </header>
  );
}