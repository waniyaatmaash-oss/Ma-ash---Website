import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  org: string;
  stars: number;
}

export default function TrustedBy() {
  const [showTestimonials, setShowTestimonials] = useState<boolean>(false);

  const images = [
    {
      url: "https://res.cloudinary.com/oh1asjml/image/upload/v1783583393/Ma_ash_Post_-_3_Day_Short_Course_1_lsvtv0.png",
      alt: "Ma'ash Post - 3 Day Short Course",
    },
    {
      url: "https://res.cloudinary.com/oh1asjml/image/upload/v1783583413/Ma_ash_Post_-_3_Day_Short_Course_jjrahc.png",
      alt: "Ma'ash Post - 3 Day Short Course Presentation",
    },
    {
      url: "https://res.cloudinary.com/oh1asjml/image/upload/v1783583444/Certificate_2_k5sfth.png",
      alt: "Ma'ash Certificate of Excellence",
    },
    {
      url: "https://res.cloudinary.com/oh1asjml/image/upload/v1783583454/WhatsApp_Image_2026-06-15_at_2.51.09_PM_1_teo7ru.jpg",
      alt: "Ma'ash Interactive Workshop",
    },
    {
      url: "https://res.cloudinary.com/oh1asjml/image/upload/v1783583464/WhatsApp_Image_2026-06-15_at_2.51.12_PM_3_mgybmi.jpg",
      alt: "Ma'ash Student Engagement",
    },
    {
      url: "https://res.cloudinary.com/oh1asjml/image/upload/v1783583475/WhatsApp_Image_2026-06-15_at_2.51.12_PM_2_1_gtda8d.jpg",
      alt: "Ma'ash Class Photo",
    },
  ];

  const testimonialsList: Testimonial[] = [
    {
      quote: "Ma'ash School came in and completely transformed how our Grade 8 and 9 students think about money. Our teachers were amazed at how engaged the kids were with the interactive board games. It is the curriculum Pakistan has been waiting for.",
      author: "Naila Malik",
      role: "Vice Principal",
      org: "LGS Paragon, Lahore",
      stars: 5
    },
    {
      quote: "As a parent, I always struggled to explain saving and inflation to my children. The Ma'ash at-home kits gave us a shared language. Now, pocket money is a lesson in budgeting, not a weekly negotiation.",
      author: "Zameer Chaudhry",
      role: "Father of Two (Ages 12 & 14)",
      org: "Karachi",
      stars: 5
    },
    {
      quote: "We partnered with Ma'ash for a youth financial literacy program. The feedback from our community associates and students was overwhelmingly positive, helping them understand budgeting and savings for the first time.",
      author: "Amna Farooq",
      role: "Program Lead",
      org: "Soorty Foundation",
      stars: 5
    },
    {
      quote: "The interactive sessions conducted by Ma'ash at our school made complex financial concepts incredibly easy to grasp. Our students didn't just learn about budgeting—they lived it through hands-on simulations.",
      author: "Hina Kidwai",
      role: "Senior Academic Coordinator",
      org: "Army Public School, Karachi",
      stars: 5
    }
  ];

  const handleBookMeeting = () => {
    window.open("https://calendly.com/waniyafrommaash/30min", "_blank");
  };

  return (
    <section 
      className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 relative z-20 overflow-hidden select-none" 
      id="trusted-section"
    >
      <div className="w-full max-w-7xl mx-auto mb-12 text-center flex flex-col items-center px-4">
        {/* Upper label/pill */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#1f310c]/15 bg-[#FAF8F3]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7a6200]" />
          <span className="text-[10px] sm:text-[11px] font-bold text-[#1f310c] uppercase tracking-[0.2em] font-sans">
            WE ARE TRUSTED
          </span>
        </motion.div>

        {/* Title exactly matching the handwritten script cursive in Image 3 */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-handwritten text-4xl sm:text-5xl lg:text-6xl text-[#1f310c] font-bold tracking-wide leading-tight text-center max-w-3xl mb-4"
        >
          Trusted by the schools, parents and companies we've worked with.
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-[#5C6454] text-xs sm:text-sm sm:text-base leading-relaxed text-center max-w-xl sm:max-w-2xl mb-8"
        >
          A glimpse of the rooms Ma'ash has been in, short courses, camps, and certificates from real sessions.
        </motion.p>

        {/* Success Stories Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowTestimonials(true)}
          className="group flex items-center justify-center gap-2.5 bg-[#1f310c] hover:bg-[#111b06] text-white px-6.5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
        >
          Join Our Success Stories
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>

      {/* STUNNING INFINITE DOUBLE-ROW SCROLLING MARQUEE GALLERY */}
      <div className="w-full relative flex flex-col gap-6 overflow-hidden py-6 mt-4">
        {/* Row 1 - scrolling left */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-4 sm:gap-6 shrink-0 min-w-full animate-[scrollLeft_35s_linear_infinite] hover:[animation-play-state:paused] py-2">
            {images.map((img, idx) => (
              <div 
                key={`row1-${idx}`} 
                className="w-64 sm:w-80 h-44 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1f310c]/10 shadow-sm flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-grab active:cursor-grabbing"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
            {/* Duplicate for seamless infinite marquee loop */}
            {images.map((img, idx) => (
              <div 
                key={`row1-dup-${idx}`} 
                className="w-64 sm:w-80 h-44 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1f310c]/10 shadow-sm flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-grab active:cursor-grabbing"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolling right */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-4 sm:gap-6 shrink-0 min-w-full animate-[scrollRight_35s_linear_infinite] hover:[animation-play-state:paused] py-2">
            {images.slice().reverse().map((img, idx) => (
              <div 
                key={`row2-${idx}`} 
                className="w-64 sm:w-80 h-44 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1f310c]/10 shadow-sm flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-grab active:cursor-grabbing"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
            {/* Duplicate for seamless infinite marquee loop */}
            {images.slice().reverse().map((img, idx) => (
              <div 
                key={`row2-dup-${idx}`} 
                className="w-64 sm:w-80 h-44 sm:h-52 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1f310c]/10 shadow-sm flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-grab active:cursor-grabbing"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DYNAMIC SLIDE-OUT TESTIMONIAL DRAWER */}
      <AnimatePresence>
        {showTestimonials && (
          <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTestimonials(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Testimonials Side Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-lg h-full bg-[#FAF8F3] shadow-2xl flex flex-col border-l border-[#1f310c]/15"
            >
              {/* Top Banner decoration */}
              <div className="h-2 w-full bg-[#7a6200]" />

              {/* Drawer Header */}
              <div className="p-6 border-b border-[#1f310c]/10 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1f310c]">Success Stories</h3>
                  <p className="text-xs text-[#5C6454] font-sans mt-1">Direct feedback from our partner network</p>
                </div>
                <button
                  onClick={() => setShowTestimonials(false)}
                  className="p-2 rounded-full text-[#1f310c]/50 hover:bg-[#1f310c]/5 hover:text-[#1f310c] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-thin">
                {testimonialsList.map((t, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-[#1f310c]/10 shadow-sm relative overflow-hidden"
                  >
                    <Quote className="absolute top-4 right-4 text-[#7a6200]/10 w-12 h-12 pointer-events-none" />
                    
                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mb-3">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} size={14} className="text-[#7a6200] fill-[#7a6200]" />
                      ))}
                    </div>

                    <p className="font-sans text-sm text-[#1f310c]/90 leading-[1.6] italic mb-4">
                      "{t.quote}"
                    </p>

                    <div className="border-t border-[#1f310c]/5 pt-3 flex flex-col">
                      <span className="font-bold text-[#1f310c] text-xs uppercase tracking-wider">{t.author}</span>
                      <span className="text-[11px] text-[#5C6454] mt-0.5 font-medium">{t.role}, <strong className="text-[#7a6200]">{t.org}</strong></span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-[#1f310c]/10 bg-white">
                <button
                  onClick={handleBookMeeting}
                  className="w-full flex items-center justify-center gap-2 bg-[#7a6200] hover:bg-[#604d00] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Join Our Partner Network
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
