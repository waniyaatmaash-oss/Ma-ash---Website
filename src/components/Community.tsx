import { motion } from "motion/react";
import { MessageCircle, Calendar } from "lucide-react";

// Fine-line money/chat doodles inspired by WhatsApp chat background
const CoinDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} text-[#7a6200]/10 fill-none stroke-current stroke-[0.75] pointer-events-none`} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="6" strokeDasharray="1 2" />
    <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" stroke="none" className="font-sans">₨</text>
  </svg>
);

const ChatDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} text-[#7a6200]/10 fill-none stroke-current stroke-[0.75] pointer-events-none`} aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const MoneyBagDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} text-[#7a6200]/10 fill-none stroke-current stroke-[0.75] pointer-events-none`} aria-hidden="true">
    <path d="M19 20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    <path d="M6 7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4" />
    <path d="M12 11v6M9 14h6" />
  </svg>
);

const CardDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} text-[#7a6200]/10 fill-none stroke-current stroke-[0.75] pointer-events-none`} aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <rect x="5" y="14" width="3" height="2" />
  </svg>
);

const PiggyDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} text-[#7a6200]/10 fill-none stroke-current stroke-[0.75] pointer-events-none`} aria-hidden="true">
    <path d="M19 11c0-4.4-3.6-8-8-8S3 6.6 3 11c0 2 1 3.8 2.5 5L5 20c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2h4v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1l-.5-4c1.5-1.2 2.5-3 2.5-5z" />
    <circle cx="8" cy="9" r="1" fill="currentColor" />
    <path d="M18 10h3c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-3" />
  </svg>
);

const GraphDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} text-[#7a6200]/10 fill-none stroke-current stroke-[0.75] pointer-events-none`} aria-hidden="true">
    <path d="M3 3v18h18" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    <path d="M15 8h3.7V11.7" />
  </svg>
);

export default function Community() {
  const calendlyUrl = "https://calendly.com/waniyafrommaash/30min";

  return (
    <section 
      className="w-full bg-[#fbf9f5] py-20 sm:py-28 px-6 sm:px-8 lg:px-12 relative overflow-hidden z-20" 
      id="community-section"
    >
      {/* WhatsApp chat wall-inspired money & text doodles with low opacity */}
      <CoinDoodle className="absolute top-[12%] left-[10%] w-10 h-10" />
      <ChatDoodle className="absolute top-[28%] left-[22%] w-12 h-12" />
      <MoneyBagDoodle className="absolute top-[68%] left-[8%] w-12 h-12" />
      <CardDoodle className="absolute top-[78%] left-[25%] w-14 h-14" />
      
      <PiggyDoodle className="absolute top-[15%] right-[12%] w-14 h-14" />
      <GraphDoodle className="absolute top-[42%] right-[25%] w-12 h-12" />
      <ChatDoodle className="absolute top-[72%] right-[10%] w-12 h-12" />
      <CoinDoodle className="absolute top-[85%] right-[22%] w-10 h-10" />

      <div className="mx-auto max-w-3xl relative z-10 text-center">
        {/* Kicker in elegant handwritten font */}
        <div className="font-handwritten text-3xl sm:text-4xl text-[#7a6200] mb-2">
          Join the conversation
        </div>
        
        {/* Main Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-5.5xl font-bold text-[#1f310c] leading-tight tracking-tight mb-6">
          Connect With Ma'ash
        </h2>
        
        {/* Body paragraph */}
        <p className="font-sans text-[#1a1a1a] text-sm sm:text-base leading-[1.7] max-w-xl mx-auto mb-8">
          Real financial literacy is built on open sharing, direct advice, and shared resources. Our digital community is where we post real-time updates, classroom insights, curriculum snippets, and helpful guides.
        </p>
        
        {/* Executive Callout Container */}
        <div className="bg-[#FAF8F3]/50 border-l-2 border-[#7a6200] p-6 rounded-r-2xl mb-10 max-w-2xl mx-auto shadow-xs text-left">
          <p className="font-sans text-xs sm:text-sm text-[#1a1a1a] leading-relaxed font-medium">
            Our collective of forward-thinking educators and founders grew by 40 exclusive invitations within 24 hours of our private LinkedIn launch. Join a focused dialogue shaping the future of education.
          </p>
        </div>

        {/* Quick Action Link outs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* WhatsApp button with elegant inner ring outline on hover */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/923272419246"
            target="_blank"
            rel="noreferrer"
            className="relative group inline-flex items-center justify-center gap-2 bg-[#1f310c] hover:bg-[#111a06] text-white font-sans font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow-lg transition-all cursor-pointer"
          >
            {/* Gold inner ring on hover */}
            <span className="absolute inset-0.5 rounded-full border border-[#7a6200]/0 group-hover:border-[#7a6200]/30 transition-all pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">
              <MessageCircle size={15} strokeWidth={2.5} /> JOIN WHATSAPP NETWORK
            </span>
          </motion.a>

          {/* Calendly Book Direct styled as elegant gold-accented outline button */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#7a6200]/40 hover:bg-[#7a6200]/5 text-[#7a6200] font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full transition-all cursor-pointer"
          >
            <Calendar size={15} /> BOOK DIRECTLY VIA CALENDLY
          </motion.a>
        </div>
      </div>
    </section>
  );
}
