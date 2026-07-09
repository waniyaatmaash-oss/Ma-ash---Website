import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, BookOpen, Home, Briefcase, CheckCircle, ArrowRight, Play, Trophy } from "lucide-react";
import { Pillar } from "../types";

interface WorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookMeeting: () => void;
}

export default function WorksModal({ isOpen, onClose, onBookMeeting }: WorksModalProps) {
  const [activeTab, setActiveTab] = useState<string>("classrooms");

  const pillars: Pillar[] = [
    {
      id: "classrooms",
      title: "FinLit in Classrooms",
      subtitle: "Structured National Curriculum",
      description: "Our core classroom program embeds age-appropriate financial literacy books, interactive lesson plans, and practical learning modules directly into school hours.",
      audience: "Ages 8 to 18 (Grades 3 - 12)",
      icon: "BookOpen",
      benefits: [
        "Interactive board games that simulate real-world saving vs. spending decisions.",
        "Graded textbooks aligned with the National Curriculum Framework of Pakistan.",
        "Teacher training bootcamps and certification for academic institutions.",
        "Annual Inter-School Finance Olympiads across major cities."
      ]
    },
    {
      id: "homes",
      title: "FinLit at Homes",
      subtitle: "Family Engagement Kits & Trackers",
      description: "Learning money shouldn't end when the bell rings. Our at-home kits provide tools for parents to make money conversations natural, practical, and highly engaging.",
      audience: "Whole families, children & parents",
      icon: "Home",
      benefits: [
        "Pocket Money Trackers (interactive ledger booklets with goal-based saving targets).",
        "Gamified savings jars divided into three categories: Save, Spend, and Give.",
        "Family game nights featuring 'Kamyab Karobar', our flagship business simulator.",
        "Weekly parent-focused newsletters with helpful financial boundaries."
      ]
    },
    {
      id: "offices",
      title: "FinLit in Offices",
      subtitle: "Workplace Financial Wellness",
      description: "We equip young graduates and early-career professionals with practical financial knowledge to transition safely into independent adult life.",
      audience: "Corporates, startups, & young professionals",
      icon: "Briefcase",
      benefits: [
        "Pakistan Income Tax seminars (understanding salary structures and tax filings).",
        "Introduction to local mutual funds, savings certificates, and investment avenues.",
        "Personal budgeting blueprints designed for inflationary climates.",
        "Interactive workshops on debt management and compound growth mechanics."
      ]
    }
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen size={20} className="text-[#705C16]" />;
      case "Home":
        return <Home size={20} className="text-[#705C16]" />;
      case "Briefcase":
        return <Briefcase size={20} className="text-[#705C16]" />;
      default:
        return <BookOpen size={20} className="text-[#705C16]" />;
    }
  };

  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  const handleBookTrigger = () => {
    onClose();
    onBookMeeting();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/45 backdrop-blur-sm"
            id="works-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-[#FAF8F5] border border-[#6E5A0B]/10 text-[#1C2414] shadow-2xl z-10"
            id="works-modal-content"
          >
            {/* Top decorative gradient border */}
            <div className="h-2 w-full bg-gradient-to-r from-[#1F2E14] via-[#705C16] to-[#EADCB0]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#1C2414]/50 hover:bg-[#1C2414]/5 hover:text-[#1C2414] transition-colors"
              aria-label="Close modal"
              id="close-works-modal-btn"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#705C16] mb-1">
                  How Ma'ash School Operates
                </div>
                <h3 className="font-serif text-3xl font-semibold tracking-tight text-[#1C2414]">
                  Our Three Pillars of Impact
                </h3>
              </div>

              {/* Tabs list */}
              <div className="flex border-b border-[#6E5A0B]/15 mb-6 overflow-x-auto pb-0.5">
                {pillars.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleTabChange(p.id)}
                    className={`flex items-center gap-2 py-3 px-4 font-sans text-xs uppercase tracking-wider font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                      activeTab === p.id
                        ? "border-[#705C16] text-[#705C16]"
                        : "border-transparent text-[#1C2414]/55 hover:text-[#1C2414] hover:border-[#6E5A0B]/30"
                    }`}
                  >
                    {getIconComponent(p.icon)}
                    {p.title}
                  </button>
                ))}
              </div>

              {/* Animated Content Body */}
              <div className="min-h-[260px] mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPillar.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="text-xs font-semibold px-2.5 py-1 bg-[#1F2E14]/10 text-[#1F2E14] rounded-full inline-block mb-3">
                      Target Audience: {currentPillar.audience}
                    </div>

                    <h4 className="font-serif text-xl font-bold text-[#1C2414] mb-2 leading-tight">
                      {currentPillar.subtitle}
                    </h4>

                    <p className="text-sm text-[#5C6454] leading-relaxed mb-6">
                      {currentPillar.description}
                    </p>

                    <div className="space-y-3.5">
                      <div className="text-xs font-bold text-[#1C2414] uppercase tracking-wider">
                        Core Program Deliverables
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {currentPillar.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex gap-2.5 items-start">
                            <CheckCircle size={16} className="text-[#705C16] flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-[#1C2414] leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Modal footer / CTA bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#6E5A0B]/10 pt-5 gap-4">
                <div className="flex items-center gap-2 text-xs text-[#5C6454]">
                  <Trophy size={16} className="text-[#705C16]" />
                  <span>Serving classrooms across Pakistan with fully certified trainers.</span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={onClose}
                    className="flex-1 sm:flex-none text-center px-4 py-2.5 text-xs font-bold tracking-wide uppercase text-[#1C2414]/60 hover:text-[#1C2414] transition-colors"
                  >
                    Dismiss
                  </button>
                  <button
                    onClick={handleBookTrigger}
                    className="flex-1 sm:flex-none px-6 py-2.5 text-xs font-bold tracking-wide uppercase rounded-full bg-[#705C16] text-white hover:bg-[#5C4A0F] flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.98]"
                  >
                    Integrate in Your School
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
