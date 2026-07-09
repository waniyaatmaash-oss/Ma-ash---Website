import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NavLink } from "../types";
import { smoothScrollTo, smoothScrollToTop } from "../utils/scroll";

interface NavbarProps {
  onBookMeeting: () => void;
  onSelectPersona: (personaId: string) => void;
}

export default function Navbar({ onBookMeeting, onSelectPersona }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: NavLink[] = [
    { label: "Programs", href: "#persona-section" },
    { label: "Partnerships", href: "#persona-section" },
    { label: "About", href: "#our-why-section" },
    { label: "Careers", href: "#careers-section" },
    { label: "Contact", href: "#contact-section" },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string, label: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // If partnerships, switch persona selector to 'corporate' or 'educationists'
    if (label === "Partnerships") {
      onSelectPersona("corporate");
    } else if (label === "Programs") {
      onSelectPersona("educationists");
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      // Small delay to let tabs switch if necessary
      setTimeout(() => {
        smoothScrollTo(element, 90, 850);
      }, 100);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 select-none transition-all duration-300 ${
      isScrolled 
        ? "bg-[#FAF8F3]/85 backdrop-blur-md border-b border-[#1f310c]/10 shadow-sm" 
        : "bg-[#FAF8F3]/60 backdrop-blur-sm border-b border-[#1f310c]/5"
    }`}>
      <div className={`mx-auto w-full max-w-none px-4 sm:px-10 lg:px-16 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "py-2.5" : "py-4.5"
      }`}>
        {/* LOGO */}
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={() => smoothScrollToTop(850)}
        >
          <img 
            src="https://res.cloudinary.com/oh1asjml/image/upload/v1783583588/LOGO_for_Ma_ash-removebg-preview_kbvvxq.png" 
            alt="Ma'ash" 
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? "h-13 sm:h-16 -my-2" : "h-22 sm:h-28 -my-4 sm:-my-6"
            }`}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.label)}
              className="text-[13px] font-sans font-semibold text-[#1f310c]/80 hover:text-[#7a6200] tracking-wide transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#7a6200] after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* BOOK A MEETING BUTTON */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onBookMeeting}
            className={`flex items-center gap-2 bg-[#7a6200] hover:bg-[#604d00] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer ${
              isScrolled ? "px-4.5 py-2" : "px-5.5 py-2.5"
            }`}
            id="navbar-book-meeting-btn"
          >
            Book a Meeting
            <ArrowRight size={13} className="stroke-[2.5]" />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#1f310c]/80 hover:text-[#1f310c] hover:bg-[#1f310c]/5 transition-colors"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#FAF8F3] border-b border-[#1f310c]/10"
            id="mobile-drawer-container"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.label)}
                  className="block text-sm font-sans font-bold text-[#1f310c]/80 hover:text-[#7a6200] py-2 transition-all border-b border-[#1f310c]/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookMeeting();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#7a6200] hover:bg-[#604d00] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Book a Meeting
                  <ArrowRight size={14} className="stroke-[2.5]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
