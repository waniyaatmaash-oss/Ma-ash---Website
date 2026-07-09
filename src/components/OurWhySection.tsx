import { useState } from "react";
import { motion } from "motion/react";
import { RotateCw } from "lucide-react";

export default function OurWhySection() {
  const [card1Flipped, setCard1Flipped] = useState<boolean>(false);
  const [card1ShowBack, setCard1ShowBack] = useState<boolean>(false);

  const [card2Flipped, setCard2Flipped] = useState<boolean>(false);
  const [card2ShowBack, setCard2ShowBack] = useState<boolean>(false);

  const handleCard1Enter = () => {
    setCard1Flipped(true);
    setCard1ShowBack(true);
  };

  const handleCard1Leave = () => {
    setCard1Flipped(false);
    setCard1ShowBack(false);
  };

  const handleCard2Enter = () => {
    setCard2Flipped(true);
    setCard2ShowBack(true);
  };

  const handleCard2Leave = () => {
    setCard2Flipped(false);
    setCard2ShowBack(false);
  };

  return (
    <section 
      className="w-full bg-[#FAF8F3] py-14 sm:py-20 px-6 sm:px-8 lg:px-12 border-t border-[#1f310c]/10 relative z-20 select-none overflow-hidden" 
      id="our-why-section"
    >
      {/* Subtle dotted background pattern */}
      <div className="absolute inset-0 bg-textured-dots opacity-50 pointer-events-none" />
      
      <div className="mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Mission Narrative & Core Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Upper label/pill */}
            <div className="flex items-center gap-2.5 mb-5" id="our-why-label">
              <span className="w-5 h-[1.5px] bg-[#7a6200]" />
              <span className="text-[11px] sm:text-xs font-bold text-[#7a6200] uppercase tracking-[0.2em] font-sans">
                Our Why
              </span>
            </div>

            {/* Display Editorial Header with beautiful custom hand-drawn typography from the inspiration mockup */}
            <h2 className="font-handwritten text-5xl sm:text-6xl lg:text-[68px] leading-[1.1] text-[#1f310c] font-bold mb-8 tracking-wide" id="our-why-heading">
              Schools teach maths. <br />
              <span className="text-[#7a6200] block mt-1">They don't teach money.</span>
            </h2>

            {/* Narrative Body Text with precise line-height 1.6 and 24px margins */}
            <div className="text-[#5C6454] font-sans text-sm sm:text-base leading-[1.6] max-w-xl" id="our-why-narrative">
              <p className="mb-6">
                Only <span className="underline underline-offset-4 decoration-[#7a6200]/40 decoration-2 font-semibold text-[#1f310c]">26% of Pakistani adults</span> are financially literate, the generation raising children, running households, and managing businesses without ever being taught the foundation.
              </p>
              <p className="mb-6">
                The cost doesn't show on a report card. It shows up when salaries disappear before month-end, savings get eaten by inflation nobody explained, and financial anxiety passes from parent to child, through behavior, not words.
              </p>
            </div>

            {/* Accent Callout Quote with thin gold vertical line and beautiful Italian/serif styling as seen in the mockup */}
            <div className="border-l-2 border-[#7a6200] pl-6 py-2 my-8 max-w-lg" id="our-why-quote">
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#1f310c]/95 leading-relaxed">
                “Ma'ash exists because that cycle is breakable. But only if someone intervenes before the habits form.”
              </p>
            </div>

            {/* Closing Script Line */}
            <p className="font-handwritten text-2xl sm:text-3xl text-[#7a6200] font-bold mt-2" id="our-why-signature">
              Our session is where this changes.
            </p>
          </div>

          {/* Right Column: Interactive 360 Spin Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0">
            
            {/* INTERACTIVE CARD 1 (26%) */}
            <div className="perspective-1000 w-full">
              <motion.div
                onMouseEnter={handleCard1Enter}
                onMouseLeave={handleCard1Leave}
                animate={{ rotateY: card1Flipped ? 360 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ y: -4 }}
                className={`w-full rounded-3xl border cursor-pointer select-none transition-all duration-300 ${
                  card1ShowBack 
                    ? "bg-[#1f310c] border-transparent shadow-xl text-[#FAF8F3]" 
                    : "bg-white border-[#1f310c]/15 hover:shadow-lg text-[#1f310c] shadow-md"
                }`}
                id="stat-card-1"
              >
                {card1ShowBack ? (
                  /* CARD 1 BACK SIDE */
                  <div className="p-6 sm:p-8 flex flex-col min-h-[220px] justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FAF8F3]/70 font-sans">
                          What this looks like in real life
                        </span>
                        <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#7a6200] font-sans">
                          <span>Hover</span>
                          <RotateCw size={10} className="text-[#7a6200] animate-spin-slow" />
                        </div>
                      </div>
                      <p className="font-sans text-sm leading-[1.6] text-[#FAF8F3]/90 font-normal">
                        Three in four adults can't tell you the difference between an asset and a liability, don't know what inflation does to their savings, and have never seen a household budget written down. This is the country we're raising kids in.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#FAF8F3]/10">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#FAF8F3]/60 font-sans">
                        World Bank Global Financial Literacy Survey
                      </span>
                    </div>
                  </div>
                ) : (
                  /* CARD 1 FRONT SIDE */
                  <div className="p-6 sm:p-8 flex flex-col min-h-[240px] justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#7a6200] font-sans">
                          THE NUMBER
                        </span>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7a6200]/80 font-sans">
                          <span>HOVER</span>
                          <div className="w-5 h-5 rounded-full border border-[#7a6200]/35 flex items-center justify-center text-[#7a6200]">
                            <RotateCw size={9} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start mb-4">
                        <span className="font-serif text-6xl sm:text-7xl font-medium text-[#7a6200] leading-none mr-4 tracking-tight">
                          26%
                        </span>
                        <span className="text-sm sm:text-base font-sans text-[#1f310c] leading-relaxed mt-1 font-semibold max-w-[180px]">
                          of Pakistani adults are financially literate.
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-[#1f310c]/10">
                      <p className="text-xs sm:text-sm font-sans text-[#5C6454] leading-[1.6]">
                        That means 3 out of 4 people managing households, running businesses, and raising children are making every financial decision blind.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* INTERACTIVE CARD 2 (6.3%) */}
            <div className="perspective-1000 w-full">
              <motion.div
                onMouseEnter={handleCard2Enter}
                onMouseLeave={handleCard2Leave}
                animate={{ rotateY: card2Flipped ? 360 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ y: -4 }}
                className={`w-full rounded-3xl border cursor-pointer select-none transition-all duration-300 ${
                  card2ShowBack 
                    ? "bg-[#1f310c] border-transparent shadow-xl text-[#FAF8F3]" 
                    : "bg-white border-[#1f310c]/15 hover:shadow-lg text-[#1f310c] shadow-md"
                }`}
                id="stat-card-2"
              >
                {card2ShowBack ? (
                  /* CARD 2 BACK SIDE */
                  <div className="p-6 sm:p-8 flex flex-col min-h-[220px] justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FAF8F3]/70 font-sans">
                          Why this matters
                        </span>
                        <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#7a6200] font-sans">
                          <span>Hover</span>
                          <RotateCw size={10} className="text-[#7a6200] animate-spin-slow" />
                        </div>
                      </div>
                      <p className="font-sans text-sm leading-[1.6] text-[#FAF8F3]/90 font-normal">
                        A 6.3% savings rate means most families are one emergency away from debt. Not because they don't earn, because they were never shown how to keep, grow, or protect what they make.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#FAF8F3]/10">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#FAF8F3]/60 font-sans">
                        State Bank of Pakistan · 2024
                      </span>
                    </div>
                  </div>
                ) : (
                  /* CARD 2 FRONT SIDE */
                  <div className="p-6 sm:p-8 flex flex-col min-h-[240px] justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#7a6200] font-sans">
                          THE NUMBER
                        </span>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7a6200]/80 font-sans">
                          <span>HOVER</span>
                          <div className="w-5 h-5 rounded-full border border-[#7a6200]/35 flex items-center justify-center text-[#7a6200]">
                            <RotateCw size={9} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start mb-4">
                        <span className="font-serif text-6xl sm:text-7xl font-medium text-[#7a6200] leading-none mr-4 tracking-tight">
                          6.3%
                        </span>
                        <span className="text-sm sm:text-base font-sans text-[#1f310c] leading-relaxed mt-1 font-semibold max-w-[180px]">
                          National savings rate, in a country of 255 million.
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-[#1f310c]/10">
                      <p className="text-xs sm:text-sm font-sans text-[#5C6454] leading-[1.6]">
                        When the basics aren't taught, the cost compounds, quietly, across generations.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Instruction caption */}
            <p className="text-center font-sans text-[11px] sm:text-xs italic text-[#5C6454]/75 mt-1" id="stat-cards-instruction">
              Hover over a card to see what's behind the number.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
