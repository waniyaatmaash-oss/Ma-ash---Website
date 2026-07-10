import { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Terminal, Smartphone } from "lucide-react";

// Fine-line money/chat doodles rendered in low-opacity Deep Forest Green
const CoinDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} text-[#1f310c]/25 fill-none stroke-current stroke-[0.75] pointer-events-none`} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="6" strokeDasharray="1 2" />
    <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" stroke="none" className="font-sans">₨</text>
  </svg>
);

const ChatBubbleDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} text-[#1f310c]/25 fill-none stroke-current stroke-[0.75] pointer-events-none`} aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const SeedlingDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} text-[#1f310c]/25 fill-none stroke-current stroke-[0.75] pointer-events-none`} aria-hidden="true">
    <path d="M12 22V12m0 0c0-3.3 2.7-6 6-6M12 12c0-3.3-2.7-6-6-6" />
    <path d="M18 6c0-2-2-4-4-4s-4 2-4 4 2 4 4 4 4-2 4-4z" fill="currentColor" fillOpacity="0.05" />
    <path d="M10 6c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" fill="currentColor" fillOpacity="0.05" />
  </svg>
);

export default function WhatsNext() {
  // Track hovered node to synchronize scale, glow and path segment highlighting
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section 
      className="w-full bg-[#fbf9f5] py-20 sm:py-28 pb-24 sm:pb-36 px-6 sm:px-8 lg:px-12 border-t border-[#1f310c]/10 relative z-20 overflow-hidden" 
      id="whats-next-section"
    >
      <div className="mx-auto max-w-6xl text-center">
        
        {/* HEADER BLOCK */}
        <div className="mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-[1.5px] bg-[#7a6200]" />
            <span className="text-[11px] sm:text-xs font-bold text-[#7a6200] uppercase tracking-[0.2em] font-sans">
              ROADMAP
            </span>
            <span className="w-5 h-[1.5px] bg-[#7a6200]" />
          </div>
          <h2 className="font-handwritten text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1f310c] leading-tight mb-3">
            This Is Just the Beginning.
          </h2>
          <p className="font-sans text-[#1a1a1a] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Ma'ash School is where the foundation starts. Here is what we are building next to enable Pakistani finance without limits:
          </p>
        </div>

        {/* Swipe hint for mobile viewports */}
        <div className="block lg:hidden text-center text-[10px] text-[#7a6200]/70 font-sans uppercase tracking-widest mb-6">
          Swipe horizontally to explore our journey ↔
        </div>

        {/* JOURNEY CONTAINER - Horizontally scrollable on mobile to keep layout pristine */}
        <div className="w-full overflow-x-auto scrollbar-none pb-6 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="relative min-w-[1100px] h-[480px] mx-auto select-none">
            
            {/* SVG RIVER PATH & INTEGRATED DOODLES */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1100 480" fill="none" xmlns="http://www.w3.org/2000/svg">
              
              {/* Outer Glow (Translucent Accent Gold #7a6200) */}
              <path 
                d="M 0 240 C 160 240, 350 240, 550 340 C 750 340, 850 160, 940 160 L 1100 160" 
                stroke="rgba(122, 98, 0, 0.25)" 
                strokeWidth="8" 
                strokeLinecap="round"
                className="transition-all duration-300"
              />
              
              {/* Solid Deep Forest Green Centerline */}
              <path 
                d="M 0 240 C 160 240, 350 240, 550 340 C 750 340, 850 160, 940 160 L 1100 160" 
                stroke="#1f310c" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              />

              {/* Dynamic Overlay Path Segments to subtly brighten when hovered */}
              {/* Segment 1: school node */}
              <path 
                d="M 0 240 C 100 240, 130 240, 160 240" 
                stroke="#7a6200" 
                strokeWidth={hoveredNode === 1 ? "4.5" : "2.5"} 
                strokeLinecap="round"
                opacity={hoveredNode === 1 ? 1 : 0}
                className="transition-all duration-300"
              />

              {/* Segment 2: pro node */}
              <path 
                d="M 160 240 C 350 240, 450 340, 550 340" 
                stroke="#7a6200" 
                strokeWidth={hoveredNode === 2 ? "4.5" : "2.5"} 
                strokeLinecap="round"
                opacity={hoveredNode === 2 ? 1 : 0}
                className="transition-all duration-300"
              />

              {/* Segment 3: app node */}
              <path 
                d="M 550 340 C 750 340, 850 160, 940 160 L 1100 160" 
                stroke="#7a6200" 
                strokeWidth={hoveredNode === 3 ? "4.5" : "2.5"} 
                strokeLinecap="round"
                opacity={hoveredNode === 3 ? 1 : 0}
                className="transition-all duration-300"
              />

              {/* Parallel dotted guide line beneath for extra depth */}
              <path 
                d="M 0 246 C 160 246, 350 246, 550 346 C 750 346, 850 166, 940 166 L 1100 166" 
                stroke="#1f310c" 
                strokeWidth="0.75" 
                strokeDasharray="4 6" 
                strokeLinecap="round"
                opacity="0.3"
              />

              {/* Hand-drawn vine branch weaving 2 (around dipped center Node 2) */}
              <path d="M 460 270 C 480 290, 500 310, 520 330" stroke="#1f310c" strokeWidth="0.75" opacity="0.3" />
              <path d="M 482 288 C 478 296, 474 299, 481 304 Z" fill="rgba(31, 49, 12, 0.08)" stroke="#1f310c" strokeWidth="0.5" opacity="0.3" />
              <path d="M 501 308 C 497 316, 493 319, 500 324 Z" fill="rgba(31, 49, 12, 0.08)" stroke="#1f310c" strokeWidth="0.5" opacity="0.3" />

              {/* Hand-drawn vine branch weaving 3 (near Node 3) */}
              <path d="M 760 300 C 800 270, 840 210, 880 180" stroke="#7a6200" strokeWidth="0.75" opacity="0.4" />
              <path d="M 802 260 C 798 250, 792 248, 800 242 Z" fill="rgba(122, 98, 0, 0.1)" stroke="#7a6200" strokeWidth="0.5" opacity="0.4" />
              <path d="M 842 220 C 838 210, 832 208, 840 202 Z" fill="rgba(122, 98, 0, 0.1)" stroke="#7a6200" strokeWidth="0.5" opacity="0.4" />

              {/* Tiny hand-drawn direction arrows indicating progressive movement */}
              <path d="M 70 240 L 80 240 M 76 237 L 80 240 L 76 243" stroke="#7a6200" strokeWidth="1" opacity="0.5" />
              <path d="M 330 242 L 340 249 M 338 242 L 340 249 L 333 250" stroke="#7a6200" strokeWidth="1" opacity="0.5" />
              <path d="M 730 282 L 740 274 M 733 274 L 740 274 L 738 280" stroke="#7a6200" strokeWidth="1" opacity="0.5" />
              <path d="M 1030 160 L 1040 160 M 1037 157 L 1040 160 L 1037 163" stroke="#7a6200" strokeWidth="1" opacity="0.5" />

              {/* Traditional banking banknote-style concentric visual elements */}
              <circle cx="360" cy="240" r="16" stroke="rgba(31, 49, 12, 0.08)" strokeWidth="0.5" strokeDasharray="2 2" />
              <circle cx="360" cy="240" r="10" stroke="rgba(31, 49, 12, 0.12)" strokeWidth="0.5" />
              
              <circle cx="740" cy="300" r="16" stroke="rgba(31, 49, 12, 0.08)" strokeWidth="0.5" strokeDasharray="2 2" />
              <circle cx="740" cy="300" r="10" stroke="rgba(31, 49, 12, 0.12)" strokeWidth="0.5" />
            </svg>

            {/* Weaved background low-opacity Deep Forest Green doodles */}
            <ChatBubbleDoodle className="absolute top-[280px] left-[320px] w-10 h-10" />
            <SeedlingDoodle className="absolute top-[370px] left-[520px] w-12 h-12" />
            <CoinDoodle className="absolute top-[310px] left-[700px] w-9 h-9" />
            <ChatBubbleDoodle className="absolute top-[100px] left-[780px] w-10 h-10" />

            {/* NODE 1: MA'ASH SCHOOL */}
            <div 
              className="absolute top-[15px] left-[40px] w-[270px] text-left transition-all duration-300 z-10 cursor-pointer"
              onMouseEnter={() => setHoveredNode(1)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Milestone Status: LIVE (Deep Forest Green BG with soft-gold dot) */}
              <div className="mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#1f310c] text-white border border-[#7a6200]/30 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EADCB0] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EADCB0]"></span>
                  </span>
                  LIVE
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1f310c]">Ma'ash School</h3>
              <div className="text-[11px] font-bold text-[#7a6200] uppercase tracking-wider mt-0.5">Live Foundation</div>
              <p className="text-xs text-[#1a1a1a] leading-relaxed mt-2.5 font-sans">
                The core engine delivering financial literacy bootcamps, workshops, and gamified board simulations directly to schools, colleges, and young adults.
              </p>
            </div>
            
            {/* Node 1 Anchor on Path (X:160, Y:240, Icon center) */}
            <div 
              className={`absolute top-[216px] left-[136px] w-12 h-12 rounded-full bg-[#1f310c] border-2 border-[#7a6200] flex items-center justify-center text-[#EADCB0] shadow-md z-20 transition-all duration-300 ${
                hoveredNode === 1 ? "scale-110 shadow-[0_0_20px_rgba(122,98,0,0.45)]" : ""
              }`}
              onMouseEnter={() => setHoveredNode(1)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <GraduationCap size={20} className="stroke-[1.75]" />
            </div>

            {/* NODE 2: MA'ASH PRO */}
            {/* Node 2 Anchor on Path (X:550, Y:340, Icon center) */}
            <div 
              className={`absolute top-[316px] left-[526px] w-12 h-12 rounded-full bg-[#1f310c] border-2 border-[#7a6200] flex items-center justify-center text-[#EADCB0] shadow-md z-20 transition-all duration-300 ${
                hoveredNode === 2 ? "scale-110 shadow-[0_0_20px_rgba(122,98,0,0.45)]" : ""
              }`}
              onMouseEnter={() => setHoveredNode(2)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <Terminal size={18} className="stroke-[1.75]" />
            </div>

            <div 
              className="absolute top-[40px] left-[415px] w-[270px] text-left transition-all duration-300 z-10 cursor-pointer"
              onMouseEnter={() => setHoveredNode(2)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Milestone Status: BETA ACCESS COMING SOON (Deep Forest Green outline) */}
              <div className="mb-2.5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-transparent text-[#1f310c] border border-[#1f310c] font-sans">
                  BETA ACCESS COMING SOON
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1f310c]">Ma'ash Pro</h3>
              <div className="text-[11px] font-bold text-[#7a6200] uppercase tracking-wider mt-0.5">Enterprise</div>
              <p className="text-xs text-[#1a1a1a] leading-relaxed mt-2.5 font-sans">
                Complete accounting, bookkeeping, tax filing, and advisory modules customized to empower Pakistani startups, scales, and local SMEs.
              </p>
            </div>

            {/* NODE 3: MA'ASH APP */}
            <div 
              className="absolute top-[240px] left-[815px] w-[260px] text-left transition-all duration-300 z-10 cursor-pointer"
              onMouseEnter={() => setHoveredNode(3)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <h3 className="font-serif text-2xl font-bold text-[#1f310c]">Ma'ash App</h3>
              <div className="text-[11px] font-bold text-[#7a6200] uppercase tracking-wider mt-0.5">Personal Budgeting</div>
              <p className="text-xs text-[#1a1a1a] leading-relaxed mt-2.5 font-sans">
                Direct budgeting logs, real-time investment tracking, inflation calculators, and bite-sized how-to courses right inside your pocket.
              </p>
            </div>

            {/* Node 3 Anchor on Path (X:940, Y:160, Icon center) */}
            <div 
              className={`absolute top-[136px] left-[916px] w-12 h-12 rounded-full bg-[#1f310c] border-2 border-[#7a6200] flex items-center justify-center text-[#EADCB0] shadow-md z-20 transition-all duration-300 ${
                hoveredNode === 3 ? "scale-110 shadow-[0_0_20px_rgba(122,98,0,0.45)]" : ""
              }`}
              onMouseEnter={() => setHoveredNode(3)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <Smartphone size={18} className="stroke-[1.75]" />
            </div>

          </div>
        </div>

        {/* HIGH-IMPACT COMMUNITY STATS TICKER */}
        <div className="mt-16 max-w-4xl mx-auto bg-[#1f310c]/5 border border-[#1f310c]/10 rounded-2xl py-5 px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-left">
          {/* Left Side: Overlapping Avatar bubbles + text */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left z-10">
            <div className="flex -space-x-3 overflow-hidden">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fbf9f5]"
                src="https://res.cloudinary.com/oh1asjml/image/upload/v1783661151/dfe91676-8853-4219-ae45-e9a8b1693f7d_ihyw85.jpg"
                alt="Educator"
                referrerPolicy="no-referrer"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fbf9f5]"
                src="https://res.cloudinary.com/oh1asjml/image/upload/v1783661113/d9f8d804-0864-4509-a7f8-745df8b6c382_qjmvgk.jpg"
                alt="Founder"
                referrerPolicy="no-referrer"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fbf9f5]"
                src="https://res.cloudinary.com/oh1asjml/image/upload/v1783661040/f154f956-ab81-4a4a-8274-c1d6cc18c20e_vv2zbv.jpg"
                alt="Student"
                referrerPolicy="no-referrer"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#fbf9f5]"
                src="https://res.cloudinary.com/oh1asjml/image/upload/v1783660937/d594a969-1fc8-4b53-a5ce-f51d43c75e21_p7dsnj.jpg"
                alt="Educator"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="font-sans text-xs sm:text-sm text-[#1f310c] font-semibold leading-snug">
              Joined by 500+ educators, students, and corporate partners across Pakistan.
            </div>
          </div>

          {/* Right Side: A glowing live indicator badge reading LIVE COMMUNITY PULSE */}
          <div className="flex items-center gap-2 bg-[#1f310c] text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase shadow-md z-10 flex-shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EADCB0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EADCB0]"></span>
            </span>
            LIVE COMMUNITY PULSE
          </div>
        </div>

      </div>
    </section>
  );
}
