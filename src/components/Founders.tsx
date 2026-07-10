import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, HelpCircle } from "lucide-react";

export default function Founders() {
  const [hoveredFounder, setHoveredFounder] = useState<"hashim" | "waniya" | null>(null);

  // Main high-quality editorial photo representing the co-founders
  const foundersPhotoUrl = "https://res.cloudinary.com/oh1asjml/image/upload/v1783583390/Untitled_design_3_jpt7qt.png";

  const bios = {
    hashim: {
      name: "Hashim Qasmi",
      title: "Co-Founder",
      credentials: "MBA from Dadabhoy Institute of Higher Education (Finance)",
      text: "25+ years of international finance experience across Dubai, India, and KSA. Built the curriculum from real practice, not theory."
    },
    waniya: {
      name: "Waniya Hashim",
      title: "Founder",
      credentials: "Systems Thinker & Co-Founder since Age 16",
      text: "Building, selling, and thinking in systems since age 16. Co-founded Ma'ash because she knows firsthand what happens when young people are left to figure out money alone."
    }
  };

  return (
    <section 
      className="w-full bg-[#FAF8F3] py-14 sm:py-20 px-6 sm:px-8 lg:px-12 border-t border-[#1f310c]/10 relative z-20 select-none overflow-hidden" 
      id="about-section"
    >
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 bg-textured-grid opacity-60 pointer-events-none" />
      
      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-12 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1.5px] bg-[#7a6200]" />
            <span className="text-[11px] sm:text-xs font-bold text-[#7a6200] uppercase tracking-[0.2em] font-sans">
              THE PEOPLE
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-[#1f310c] font-semibold tracking-tight">
            The People Behind Ma'ash
          </h2>
        </div>

        {/* LAYOUT: Two columns on desktop (photo left, interactive card right / stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* PHOTO BOX (6 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Interactive Image Frame */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-[#1f310c]/15 shadow-lg group">
              
              {/* Vignette Overlay (Darkens when hovering either founder) */}
              <div 
                className={`absolute inset-0 bg-black/35 z-10 pointer-events-none transition-all duration-300 ${
                  hoveredFounder ? "opacity-100" : "opacity-0"
                }`} 
              />

              {/* Founder Photo */}
              <img 
                src={foundersPhotoUrl} 
                alt="Ma'ash Founders - Hashim Qasmi & Waniya Hashim" 
                className="w-full h-full object-cover transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* DESKTOP HOVER SPLIT-ZONES */}
              <div className="absolute inset-0 z-20 hidden md:flex">
                {/* Left Side: Hashim */}
                <div 
                  className="w-1/2 h-full cursor-pointer relative"
                  onMouseEnter={() => setHoveredFounder("hashim")}
                  onMouseLeave={() => setHoveredFounder(null)}
                >
                  {/* Pulsing Hotspot */}
                  <div className="absolute top-[35%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#7a6200] animate-ping absolute" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#7a6200] relative border-2 border-white shadow-md" />
                    <span className="text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs shadow-sm">Hashim</span>
                  </div>
                </div>

                {/* Right Side: Waniya */}
                <div 
                  className="w-1/2 h-full cursor-pointer relative"
                  onMouseEnter={() => setHoveredFounder("waniya")}
                  onMouseLeave={() => setHoveredFounder(null)}
                >
                  {/* Pulsing Hotspot */}
                  <div className="absolute top-[40%] left-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#7a6200] animate-ping absolute" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#7a6200] relative border-2 border-white shadow-md" />
                    <span className="text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs shadow-sm">Waniya</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Subtle discovery caption for desktop */}
            <p className="text-[11px] sm:text-xs italic text-[#5C6454]/85 mt-3 hidden md:flex items-center gap-1.5">
              <HelpCircle size={13} className="text-[#7a6200]" /> Hover over the founders' hotspots to read their biographies.
            </p>

          </div>

          {/* BIO DETAILS (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* MOBILE ONLY / STATIC BIO BLOCK: Always visible on small screens, hidden on desktop unless hovered */}
            <div className="md:hidden space-y-6">
              {/* Hashim Bio */}
              <div className="bg-white p-6 rounded-2xl border border-[#1f310c]/10 shadow-xs">
                <h4 className="font-serif text-xl font-bold text-[#1f310c]">{bios.hashim.name}</h4>
                <div className="text-xs font-bold text-[#7a6200] uppercase tracking-wider mt-0.5">{bios.hashim.title}</div>
                <div className="w-10 h-[2px] bg-[#7a6200] my-2.5" />
                <div className="text-[11px] text-[#1f310c]/60 font-bold mb-1.5">{bios.hashim.credentials}</div>
                <p className="text-sm text-[#5C6454] leading-relaxed">{bios.hashim.text}</p>
              </div>

              {/* Waniya Bio */}
              <div className="bg-white p-6 rounded-2xl border border-[#1f310c]/10 shadow-xs">
                <h4 className="font-serif text-xl font-bold text-[#1f310c]">{bios.waniya.name}</h4>
                <div className="text-xs font-bold text-[#7a6200] uppercase tracking-wider mt-0.5">{bios.waniya.title}</div>
                <div className="w-10 h-[2px] bg-[#7a6200] my-2.5" />
                <div className="text-[11px] text-[#1f310c]/60 font-bold mb-1.5">{bios.waniya.credentials}</div>
                <p className="text-sm text-[#5C6454] leading-relaxed">{bios.waniya.text}</p>
              </div>
            </div>

            {/* DESKTOP STATIC PLACEHOLDER: Shown when no-hover to guide the eye */}
            <div className="hidden md:block">
              <AnimatePresence mode="wait">
                {!hoveredFounder ? (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-8 border border-[#1f310c]/10 rounded-3xl bg-white shadow-xs"
                  >
                    <h3 className="font-serif text-2xl font-bold text-[#1f310c] mb-3">Curriculum Born of Practice</h3>
                    <p className="font-sans text-[#5C6454] text-sm leading-relaxed mb-4">
                      Ma'ash School isn't a collection of corporate ideas. It is built by two founders merging decades of international financial leadership with systems built explicitly to simplify real finance for the next generation.
                    </p>
                    <span className="text-xs font-bold text-[#7a6200] uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
                      Hover on the photo to discover their stories →
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-8 border border-[#7a6200]/25 rounded-3xl bg-white shadow-md border-l-4 border-l-[#7a6200]"
                  >
                    <h3 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">{bios[hoveredFounder].name}</h3>
                    <div className="text-xs font-bold text-[#7a6200] uppercase tracking-wider mb-3">{bios[hoveredFounder].title}</div>
                    <p className="font-sans text-[#5C6454] text-sm leading-relaxed">
                      {bios[hoveredFounder].text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CLOSING LINE (Always visible below the photo/bios) */}
            <div className="mt-10 pt-6 border-t border-[#1f310c]/10" id="founders-closing">
              <p className="font-serif italic text-base sm:text-lg text-[#1f310c] leading-relaxed">
                "Two people. One mission. A curriculum built from 25 years of experience and a lifetime of knowing what it costs when nobody teaches you."
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
