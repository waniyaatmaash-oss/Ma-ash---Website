import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, AlertCircle, Info, ArrowUp } from "lucide-react";
import { smoothScrollToTop } from "./utils/scroll";
import Navbar from "./components/Navbar";
import SkylineSVG from "./components/SkylineSVG";
import MeetingModal from "./components/MeetingModal";
import WorksModal from "./components/WorksModal";
import OurWhySection from "./components/OurWhySection";
import TrustedBy from "./components/TrustedBy";
import PersonaSelector from "./components/PersonaSelector";
import Founders from "./components/Founders";
import Community from "./components/Community";
import WhatsNext from "./components/WhatsNext";
import Footer from "./components/Footer";
import ContactAndCareers from "./components/ContactAndCareers";
import TornPaperDivider from "./components/TornPaperDivider";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isWorksOpen, setIsWorksOpen] = useState<boolean>(false);
  const [activePersona, setActivePersona] = useState<string>("educationists");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Staggered layout entrance transitions for the hero copy
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F3] text-[#1f310c] flex flex-col justify-between overflow-x-hidden selection:bg-[#7a6200]/20 selection:text-[#7a6200] bg-textured-grain" id="app-root">
      {/* Dynamic Background Grid Pattern for texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#7a6200_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      {/* Primary Navigation */}
      <Navbar
        onBookMeeting={() => setIsBookingOpen(true)}
        onSelectPersona={setActivePersona}
      />

      {/* Hero Section Container */}
      <main className="flex-grow flex flex-col justify-start items-center pt-28 md:pt-36 pb-0 relative z-10 select-none w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full max-w-5xl text-center flex flex-col items-center px-6 sm:px-8 lg:px-12 relative z-20"
        >
          {/* Main Display Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.08] tracking-tight text-[#1f310c] font-semibold max-w-4xl mx-auto mb-6 mt-8"
          >
            Finally, a school <br />
            that teaches <span className="text-[#7a6200] italic font-medium relative inline-block">
              money.
              {/* Hand-drawn underline squiggle exactly matching the inspiration mockup */}
              <svg 
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-[105%] h-3 sm:h-4 text-[#7a6200]" 
                viewBox="0 0 100 12" 
                preserveAspectRatio="none" 
                fill="none"
              >
                <path 
                  d="M 2,7 Q 35,11 65,7 Q 85,4 98,8" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  className="opacity-90"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle Copy */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-[#5C6454] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal mb-8"
          >
            Enabling finance without limits
          </motion.p>

          {/* Call-to-Actions (CTAs) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 animate-fade-in"
          >
            {/* Primary Action */}
            <button
              onClick={() => setIsWorksOpen(true)}
              className="group flex items-center justify-center gap-2 bg-[#7a6200] hover:bg-[#604d00] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] w-full sm:w-auto cursor-pointer"
              id="cta-see-how-it-works"
            >
              See How It Works
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>

        {/* Beautiful row of buildings inside the hero page fold */}
        <div className="w-full relative z-10 bg-gradient-to-b from-transparent via-[#FBF9F5]/30 to-[#F1E8D1]/80 pt-1 pb-12 sm:pb-16 -mt-4 sm:-mt-8 md:-mt-10">
          <SkylineSVG />
        </div>
      </main>

      {/* Torn paper edge divider between hero fold and the content below */}
      <TornPaperDivider />

      {/* Mission Narrative & Interactive Statistics (Second Page) */}
      <OurWhySection />

      {/* Section 3: Trusted By */}
      <TrustedBy onBookMeeting={() => setIsBookingOpen(true)} />

      {/* Section 4: Persona Selector (Audience Offering sections) */}
      <PersonaSelector 
        onBookMeeting={() => setIsBookingOpen(true)}
        activePersona={activePersona}
        setActivePersona={setActivePersona}
      />

      {/* Section 5: The Founders */}
      <Founders />

      {/* Section 6: Community */}
      <Community />

      {/* Section 7: What's Next (Roadmap) */}
      <WhatsNext />

      <ContactAndCareers 
        onSelectPersona={setActivePersona}
      />
 
      <Footer />

      {/* Interactive Modal Layer: Meeting Scheduler */}
      <MeetingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Interactive Modal Layer: How It Works */}
      <WorksModal
        isOpen={isWorksOpen}
        onClose={() => setIsWorksOpen(false)}
        onBookMeeting={() => setIsBookingOpen(true)}
      />

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => smoothScrollToTop(850)}
            className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#1f310c] hover:bg-[#7a6200] text-[#FAF8F3] shadow-lg border border-[#7a6200]/20 flex items-center justify-center transition-colors duration-300 group cursor-pointer focus:outline-none"
            title="Scroll to Top"
            id="scroll-to-top-btn"
          >
            <ArrowUp size={20} className="stroke-[2.5] transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
