import React from "react";
import { Mail, MapPin, Instagram, Linkedin, Twitter, DollarSign, Coins } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-[#1f310c] border-t border-[#7a6200]/20 pt-16 pb-8 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Decorative Gold Accent */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#7a6200]/50 to-transparent" />
      
      {/* Money Doodles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <motion.div className="absolute top-10 left-10" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
          <DollarSign size={48} strokeWidth={1} />
        </motion.div>
        <motion.div className="absolute bottom-10 right-10" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <Coins size={64} strokeWidth={0.5} />
        </motion.div>
        <motion.div className="absolute top-1/2 left-1/3" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
          <DollarSign size={32} strokeWidth={1} />
        </motion.div>
        <motion.div className="absolute bottom-1/3 right-1/4" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <Coins size={40} strokeWidth={0.5} />
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        {/* Logo and Tagline */}
        <div className="flex flex-col gap-4">
          <motion.img 
            src="https://res.cloudinary.com/oh1asjml/image/upload/v1783595012/1_3_zr82q8.png" 
            alt="Ma'ash Logo" 
            className="w-32 h-auto"
            whileHover={{ scale: 1.05, rotate: -2 }}
            referrerPolicy="no-referrer"
          />
          <p className="text-xl text-[#FAF8F3]/80 max-w-[200px] font-handwritten">
            Enabling finance without limits.
          </p>
        </div>

        {/* Contact & Location */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-sm font-bold text-[#7a6200] uppercase tracking-wider mb-1">Contact</h4>
          <a href="mailto:info@maash.school" className="flex items-center gap-2 text-xs text-[#FAF8F3]/80 hover:text-[#7a6200] transition-colors">
            <Mail size={14} className="text-[#7a6200]" />
            info@maash.school
          </a>
          <div className="flex items-center gap-2 text-xs text-[#FAF8F3]/80">
            <MapPin size={14} className="text-[#7a6200]" />
            Karachi, Pakistan
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-sm font-bold text-[#7a6200] uppercase tracking-wider mb-1">Follow Us</h4>
          <div className="flex gap-4">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <motion.a 
                key={i} 
                href="#" 
                className="p-2 rounded-full border border-[#7a6200]/40 hover:border-[#7a6200] text-[#FAF8F3]/80 hover:text-[#7a6200] transition-all"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#7a6200]/10 text-center text-[10px] text-[#FAF8F3]/40 font-sans uppercase tracking-widest">
        © {new Date().getFullYear()} Ma'ash School. All rights reserved.
      </div>
    </footer>
  );
}
