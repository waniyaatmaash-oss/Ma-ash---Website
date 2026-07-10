import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { smoothScrollTo } from "../utils/scroll";
import { 
  GraduationCap, Sun, Zap, Users, Heart, School, Star, 
  Briefcase, Award, MessageSquare, CalendarRange, Sparkles, 
  ChevronRight, ArrowRight, Check, Send, AlertCircle, X,
  BookOpen
} from "lucide-react";

interface AudienceCardProps {
  key?: string;
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function AudienceCard({ id, label, isActive, onClick }: AudienceCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Calculate tilt angles (limit max angle to 10 degrees for a gentle, tactile feel)
    const rX = -(mouseY / height) * 10;
    const rY = (mouseX / width) * 10;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Icon mapping
  const getIcon = () => {
    const iconProps = {
      className: `h-8 w-8 transition-transform duration-500 z-10 ${
        isHovered ? "scale-110 rotate-3" : "scale-100"
      } ${isActive ? "text-[#EADCB0]" : "text-[#7a6200] group-hover:text-[#1f310c]"}`,
      strokeWidth: 1.25,
    };

    switch (id) {
      case "educationists":
        return <BookOpen {...iconProps} />;
      case "parents":
        return <Heart {...iconProps} />;
      case "corporate":
        return <Briefcase {...iconProps} />;
      case "students":
        return <GraduationCap {...iconProps} />;
      default:
        return null;
    }
  };

  // Subtle line-art vector overlay
  const getBgGraphic = () => {
    const strokeColor = isActive ? "rgba(234, 220, 176, 0.12)" : "rgba(122, 98, 0, 0.08)";
    
    switch (id) {
      case "educationists":
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="32" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="42" stroke={strokeColor} strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke={strokeColor} strokeWidth="0.25" strokeDasharray="2 2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke={strokeColor} strokeWidth="0.25" strokeDasharray="2 2" />
          </svg>
        );
      case "parents":
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="28" stroke={strokeColor} strokeWidth="0.5" />
            <path d="M50 12 A38 38 0 0 0 12 50" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M88 50 A38 38 0 0 0 50 88" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="6" fill={strokeColor} />
          </svg>
        );
      case "corporate":
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 25 L50 42 L85 25 M50 42 L50 85 M15 25 L15 68 L50 85 M85 25 L85 68 L50 85" stroke={strokeColor} strokeWidth="0.5" />
            <line x1="15" y1="46" x2="50" y2="64" stroke={strokeColor} strokeWidth="0.25" />
            <line x1="85" y1="46" x2="50" y2="64" stroke={strokeColor} strokeWidth="0.25" />
          </svg>
        );
      case "students":
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 75 L75 25 M75 25 H45 M75 25 V55" stroke={strokeColor} strokeWidth="0.5" />
            <path d="M20 60 L60 20" stroke={strokeColor} strokeWidth="0.25" strokeDasharray="3 3" />
            <circle cx="75" cy="25" r="3" fill={strokeColor} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative p-6 sm:p-8 rounded-2xl border text-center transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center justify-center gap-4 ${
        isActive 
          ? "bg-[#1f310c] border-[#1f310c] text-white shadow-xl scale-[1.03]" 
          : "bg-white border-[#1f310c]/10 hover:border-[#1f310c]/30 hover:shadow-md text-[#1f310c]"
      }`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
        transition: isHovered ? "none" : "all 0.5s ease-out",
      }}
    >
      {/* Background low-opacity graphic overlay */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out pointer-events-none z-0 ${
          isHovered || isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        {getBgGraphic()}
      </div>

      {/* Card Content with translateZ for a subtle 3D pop effect */}
      <div className="relative z-10 flex flex-col items-center gap-3" style={{ transform: "translateZ(20px)" }}>
        {getIcon()}
        
        <div className="font-serif text-lg sm:text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:scale-105">
          {label}
        </div>
        
        <div className={`mx-auto w-6 h-[2px] rounded-full mt-1 transition-all duration-300 ${
          isActive 
            ? "bg-[#EADCB0] w-12" 
            : "bg-[#7a6200]/0 group-hover:bg-[#7a6200]/30 group-hover:w-8"
        }`} />
      </div>
    </button>
  );
}

interface PersonaSelectorProps {
  onBookMeeting: () => void;
  activePersona: string;
  setActivePersona: (personaId: string) => void;
}

export default function PersonaSelector({ onBookMeeting, activePersona, setActivePersona }: PersonaSelectorProps) {
  // Nested interactive form states
  const [activeParentTab, setActiveParentTab] = useState<"trust" | "benefits">("trust");

  const [proposalForm, setProposalForm] = useState({ name: "", email: "", school: "", role: "", message: "" });
  const [proposalSubmitted, setProposalSubmitted] = useState(false);

  const [referSchoolForm, setReferSchoolForm] = useState({ parentName: "", email: "", schoolName: "", city: "", principalName: "" });
  const [referSchoolSubmitted, setReferSchoolSubmitted] = useState(false);

  const [reviewForm, setReviewForm] = useState({ name: "", city: "", rating: 5, text: "" });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const [ambassadorForm, setAmbassadorForm] = useState({ name: "", age: "", school: "", email: "", why: "" });
  const [ambassadorSubmitted, setAmbassadorSubmitted] = useState(false);

  const [pilotSessionForm, setPilotSessionForm] = useState({ name: "", email: "", school: "", grades: "", contact: "", message: "" });
  const [pilotSessionSubmitted, setPilotSessionSubmitted] = useState(false);

  const [consultationForm, setConsultationForm] = useState({ name: "", email: "", school: "", role: "", date: "", timeSlot: "" });
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);

  const [assessmentForm, setAssessmentForm] = useState({ name: "", email: "", kidAge: "", contact: "", message: "" });
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

  const [corporateAuditForm, setCorporateAuditForm] = useState({ name: "", email: "", company: "", size: "", contact: "", message: "" });
  const [corporateAuditSubmitted, setCorporateAuditSubmitted] = useState(false);

  const [studentBlueprintForm, setStudentBlueprintForm] = useState({ name: "", email: "", age: "", school: "" });
  const [studentBlueprintSubmitted, setStudentBlueprintSubmitted] = useState(false);

  // Active overlay forms
  const [activeFormType, setActiveFormType] = useState<string | null>(null); // 'proposal' | 'refer' | 'review' | 'ambassador' | 'pilot' | 'consultation' | 'assessment' | 'corporateAudit' | 'studentBlueprint'

  const personas = [
    { id: "educationists", label: "Educationists", theme: "green" },
    { id: "parents", label: "Parents", theme: "gold" },
    { id: "corporate", label: "Corporate", theme: "dark" },
    { id: "students", label: "Students", theme: "bright" }
  ];

  const handlePersonaClick = (id: string) => {
    setActivePersona(id);
    const element = document.getElementById("persona-offerings-container");
    if (element) {
      setTimeout(() => {
        smoothScrollTo(element, 112, 850);
      }, 100);
    }
  };

  const handleFormSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    if (type === "proposal") setProposalSubmitted(true);
    if (type === "refer") setReferSchoolSubmitted(true);
    if (type === "review") setReviewSubmitted(true);
    if (type === "ambassador") setAmbassadorSubmitted(true);
    if (type === "pilot") setPilotSessionSubmitted(true);
    if (type === "consultation") setConsultationSubmitted(true);
    if (type === "assessment") setAssessmentSubmitted(true);
    if (type === "corporateAudit") setCorporateAuditSubmitted(true);
    if (type === "studentBlueprint") setStudentBlueprintSubmitted(true);
  };

  const resetFormState = (type: string) => {
    if (type === "proposal") {
      setProposalForm({ name: "", email: "", school: "", role: "", message: "" });
      setProposalSubmitted(false);
    }
    if (type === "refer") {
      setReferSchoolForm({ parentName: "", email: "", schoolName: "", city: "", principalName: "" });
      setReferSchoolSubmitted(false);
    }
    if (type === "review") {
      setReviewForm({ name: "", city: "", rating: 5, text: "" });
      setReviewSubmitted(false);
    }
    if (type === "ambassador") {
      setAmbassadorForm({ name: "", age: "", school: "", email: "", why: "" });
      setAmbassadorSubmitted(false);
    }
    if (type === "pilot") {
      setPilotSessionForm({ name: "", email: "", school: "", grades: "", contact: "", message: "" });
      setPilotSessionSubmitted(false);
    }
    if (type === "consultation") {
      setConsultationForm({ name: "", email: "", school: "", role: "", date: "", timeSlot: "" });
      setConsultationSubmitted(false);
    }
    if (type === "assessment") {
      setAssessmentForm({ name: "", email: "", kidAge: "", contact: "", message: "" });
      setAssessmentSubmitted(false);
    }
    if (type === "corporateAudit") {
      setCorporateAuditForm({ name: "", email: "", company: "", size: "", contact: "", message: "" });
      setCorporateAuditSubmitted(false);
    }
    if (type === "studentBlueprint") {
      setStudentBlueprintForm({ name: "", email: "", age: "", school: "" });
      setStudentBlueprintSubmitted(false);
    }
    setActiveFormType(null);
  };

  return (
    <section 
      className="w-full bg-[#FAF8F3] py-14 sm:py-20 px-6 sm:px-8 lg:px-12 border-t border-[#1f310c]/10 relative z-20" 
      id="persona-section"
    >
      <div className="mx-auto max-w-5xl">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center mb-2">
            <span className="text-2xl sm:text-3xl text-[#7a6200] font-handwritten tracking-normal">
              Offers by Audience
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-8 h-[1px] bg-[#7a6200]/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#7a6200]" />
              <span className="w-8 h-[1px] bg-[#7a6200]/40" />
            </div>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1f310c] font-semibold tracking-tight mt-1">
            Who are you?
          </h2>
          <p className="font-sans text-[#5C6454] text-sm sm:text-base leading-relaxed mt-3 max-w-xl mx-auto">
            Select your path. Ma'ash builds custom, hyper-relevant frameworks tailored directly to your distinct goals.
          </p>
        </div>

        {/* SELECTABLE AUDIENCE CARDS/TABS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {personas.map((p) => (
            <AudienceCard
              key={p.id}
              id={p.id}
              label={p.label}
              isActive={activePersona === p.id}
              onClick={() => handlePersonaClick(p.id)}
            />
          ))}
        </div>

        {/* ACTIVE PERSONA SHOWCASE WRAPPER */}
        <div id="persona-offerings-container" className="scroll-mt-28">
          <AnimatePresence mode="wait">
            {activePersona === "educationists" && (
              <motion.div
                key="educationists"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-[#fbf9f5] border border-[#1f310c]/10 p-8 sm:p-12 rounded-3xl shadow-sm"
              >
                {/* Header Block */}
                <div className="border-b border-[#1f310c]/10 pb-8 mb-8">
                  <div className="text-[10px] font-bold text-[#7a6200] uppercase tracking-[0.22em] mb-2 font-sans">
                    FOR EDUCATIONISTS
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#1f310c] tracking-tight leading-tight">
                    Bring the science of money into your school hours.
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C6454] font-sans mt-3 leading-relaxed max-w-3xl">
                    Standard curricula teach math. We teach value creation. Ma'ash builds real-world financial literacy and entrepreneurship for school ecosystems.
                  </p>
                </div>

                {/* Why Us Feature Cards (Dual Column) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {/* Card 1: Trust */}
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#1f310c]/10 shadow-xs relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest bg-[#1f310c]/10 text-[#1f310c] px-3 py-1 rounded-full">
                          CLASSROOM READY
                        </span>
                      </div>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1f310c] mb-2">
                        Built for Direct Assimilation
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5C6454] leading-relaxed">
                        Conforming to rigorous developmental standards that ensure age-appropriate progression and high retention.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Differentiator Feature Stat */}
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#1f310c]/10 shadow-xs flex items-center gap-6">
                    <div className="font-serif text-5xl sm:text-6xl font-black text-[#7a6200] tracking-tight leading-none">
                      25+
                    </div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-[#5C6454] leading-relaxed font-sans">
                        <span className="font-bold text-[#1f310c]">Years of Global Finance Practice</span> — Teaching pure business mechanics, not stale theory or mock worksheets.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Offerings Grid (Interactive 2x2 Grid) */}
                <h4 className="font-sans font-bold text-xs text-[#1f310c]/60 uppercase tracking-[0.15em] mb-6">
                  Our School Offerings
                </h4>
                
                <motion.div 
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08 }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                >
                  {/* Offering 1 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                    }}
                    onClick={() => setActiveFormType("consultation")}
                    className="group bg-white border border-[#1f310c]/10 border-b-2 hover:border-b-[#7a6200] p-6 rounded-2xl hover:bg-[#1f310c]/2 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative cursor-pointer"
                  >
                    <span className="absolute top-4 right-4 text-[9px] font-extrabold uppercase tracking-wider text-[#1f310c] bg-[#1f310c]/10 px-2.5 py-1 rounded-full">
                      Flagship
                    </span>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#1f310c]/10 flex items-center justify-center text-[#1f310c] flex-shrink-0">
                        <GraduationCap className="stroke-[1.5] w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-sans font-bold text-sm text-[#1f310c] mb-1">
                          Curriculum Integration
                        </h5>
                        <p className="text-xs text-[#5C6454] leading-relaxed">
                          Flagship model, school-embedded program. One class/week covering the full progression from Financial Literacy to Entrepreneurship and Venture-building.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pl-14 flex items-center gap-1 text-xs font-bold text-[#7a6200] group-hover:text-[#1f310c] transition-colors cursor-pointer">
                      <span>Explore Program</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </div>
                  </motion.div>

                  {/* Offering 2 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                    }}
                    onClick={() => setActiveFormType("consultation")}
                    className="group bg-white border border-[#1f310c]/10 border-b-2 hover:border-b-[#7a6200] p-6 rounded-2xl hover:bg-[#1f310c]/2 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative cursor-pointer"
                  >
                    <span className="absolute top-4 right-4 text-[9px] font-extrabold uppercase tracking-wider text-[#7a6200] bg-[#7a6200]/10 px-2.5 py-1 rounded-full">
                      3-Day / 8-Session
                    </span>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#7a6200]/10 flex items-center justify-center text-[#7a6200] flex-shrink-0">
                        <Sun className="stroke-[1.5] w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-sans font-bold text-sm text-[#1f310c] mb-1">
                          Summer Camp
                        </h5>
                        <p className="text-xs text-[#5C6454] leading-relaxed">
                          Our highly successful piloted framework. Offered in a flexible 8-session program or an intensive 3-day immersive sprint.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pl-14 flex items-center gap-1 text-xs font-bold text-[#7a6200] group-hover:text-[#1f310c] transition-colors cursor-pointer">
                      <span>Explore Program</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </div>
                  </motion.div>

                  {/* Offering 3 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                    }}
                    onClick={() => setActiveFormType("consultation")}
                    className="group bg-white border border-[#1f310c]/10 border-b-2 hover:border-b-[#7a6200] p-6 rounded-2xl hover:bg-[#1f310c]/2 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative cursor-pointer"
                  >
                    <span className="absolute top-4 right-4 text-[9px] font-extrabold uppercase tracking-wider text-[#1f310c] bg-[#1f310c]/10 px-2.5 py-1 rounded-full">
                      Custom On-Demand
                    </span>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#1f310c]/10 flex items-center justify-center text-[#1f310c] flex-shrink-0">
                        <Zap className="stroke-[1.5] w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-sans font-bold text-sm text-[#1f310c] mb-1">
                          Sessions on Demand
                        </h5>
                        <p className="text-xs text-[#5C6454] leading-relaxed">
                          Standalone sessions for custom requirements, panels, or assemblies with zero long-term structural commitment.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pl-14 flex items-center gap-1 text-xs font-bold text-[#7a6200] group-hover:text-[#1f310c] transition-colors cursor-pointer">
                      <span>Explore Program</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </div>
                  </motion.div>

                  {/* Offering 4 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                    }}
                    onClick={() => setActiveFormType("consultation")}
                    className="group bg-white border border-[#1f310c]/10 border-b-2 hover:border-b-[#7a6200] p-6 rounded-2xl hover:bg-[#1f310c]/2 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative cursor-pointer"
                  >
                    <span className="absolute top-4 right-4 text-[9px] font-extrabold uppercase tracking-wider text-[#7a6200] bg-[#7a6200]/10 px-2.5 py-1 rounded-full">
                      Faculty Development
                    </span>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#7a6200]/10 flex items-center justify-center text-[#7a6200] flex-shrink-0">
                        <Users className="stroke-[1.5] w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-sans font-bold text-sm text-[#1f310c] mb-1">
                          Teacher Training
                        </h5>
                        <p className="text-xs text-[#5C6454] leading-relaxed">
                          Empower your own staff. Intensive, professional workshops designed to train teachers to deliver the Ma'ash curriculum independently.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pl-14 flex items-center gap-1 text-xs font-bold text-[#7a6200] group-hover:text-[#1f310c] transition-colors cursor-pointer">
                      <span>Explore Program</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Lead Magnet Banner */}
                <div 
                  className="w-full bg-[#1f310c] text-white p-6 sm:p-10 rounded-2xl mb-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl"
                  style={{
                    background: "radial-gradient(circle at 80% 50%, rgba(234, 220, 176, 0.15) 0%, transparent 70%), #1f310c"
                  }}
                >
                  <div className="max-w-2xl text-left relative z-10">
                    <span className="inline-block text-[9px] font-extrabold uppercase tracking-[0.2em] bg-[#7a6200]/40 text-[#EADCB0] px-3.5 py-1 rounded-full mb-3 border border-[#EADCB0]/20">
                      LIMITED PARTNERSHIP SLOTS
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3.5xl font-bold tracking-tight text-[#FAF8F3] mb-2 leading-tight">
                      Test the Framework in Your Classroom: 100% Free
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FAF8F3]/80 font-sans leading-relaxed">
                      "Experience the impact firsthand. We will conduct one full interactive financial literacy session for your students at zero cost or commitment."
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center sm:items-start lg:items-end flex-shrink-0 gap-2 relative z-10">
                    <button
                      onClick={() => setActiveFormType("pilot")}
                      className="bg-[#7a6200] hover:bg-[#8e7305] text-[#FAF8F3] font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      Claim Your Free School Session <ArrowRight size={14} />
                    </button>
                    <span className="text-[10px] text-white/50 font-sans tracking-wide">
                      Takes 60 seconds • Tailored for Grades 5–12
                    </span>
                  </div>
                </div>

                {/* BOTTOM CTA BUTTONS */}
                <div className="border-t border-[#1f310c]/10 pt-8 flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={() => setActiveFormType("proposal")}
                    className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-sm hover:shadow active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Request a Curriculum Proposal
                  </button>
                  <button
                    onClick={onBookMeeting}
                    className="border border-[#1f310c]/30 hover:border-[#1f310c] text-[#1f310c] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Book a Meeting
                  </button>
                </div>
              </motion.div>
            )}

            {activePersona === "parents" && (
              <motion.div
                key="parents"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-[#fbf9f5] border border-[#7a6200]/20 p-8 sm:p-12 rounded-3xl shadow-sm"
              >
                {/* Header Block */}
                <div className="border-b border-[#7a6200]/10 pb-8 mb-8">
                  <div className="text-[10px] font-bold text-[#7a6200] uppercase tracking-[0.22em] mb-2 font-sans">
                    FOR PARENTS
                  </div>
                  <h3 className="font-handwritten text-4xl sm:text-5xl lg:text-5.5xl text-[#1f310c] tracking-normal leading-tight">
                    Break the cycle of financial anxiety.
                  </h3>
                  
                  {/* High impact bullet points */}
                  <div className="mt-5 space-y-3 max-w-3xl">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#1f310c]/10 flex items-center justify-center text-[#1f310c] mt-0.5 flex-shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <p className="text-xs sm:text-sm text-[#5C6454] font-sans leading-relaxed">
                        We learn money from our homes through <span className="font-bold text-[#1f310c]">everyday behavior</span>, not dry worksheets or classroom lectures.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#1f310c]/10 flex items-center justify-center text-[#1f310c] mt-0.5 flex-shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <p className="text-xs sm:text-sm text-[#5C6454] font-sans leading-relaxed">
                        Ma'ash helps you build a safe, natural space where kids master <span className="font-bold text-[#1f310c]">compound growth, value creation, and healthy spending habits</span> long before adulthood.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Trust Us / Lifelong Benefits Accordion */}
                <div className="space-y-4 mb-12">
                  {/* Accordion Item 1 */}
                  <div 
                    onClick={() => setActiveParentTab("trust")}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeParentTab === "trust" 
                        ? "bg-white border-[#7a6200] shadow-md" 
                        : "bg-white/50 border-[#7a6200]/10 hover:border-[#7a6200]/30 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest bg-[#1f310c]/10 text-[#1f310c] px-2.5 py-1 rounded-full text-center max-w-[170px]">
                          100% Practical Systems
                        </span>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[#1f310c]">
                          Why Trust Us With Your Kid
                        </h4>
                      </div>
                      <span className="text-[#7a6200] font-bold text-xl ml-2">
                        {activeParentTab === "trust" ? "−" : "+"}
                      </span>
                    </div>
                    {activeParentTab === "trust" && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.2 }}
                        className="text-xs sm:text-sm text-[#5C6454] leading-relaxed mt-3 pt-3 border-t border-[#7a6200]/10 font-sans"
                      >
                        We never treat financial literacy as dry lists or complex equations. We teach through engaging systems, custom-built household ledger logs, and gamified business loops designed to be highly memorable.
                      </motion.p>
                    )}
                  </div>

                  {/* Accordion Item 2 */}
                  <div 
                    onClick={() => setActiveParentTab("benefits")}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeParentTab === "benefits" 
                        ? "bg-white border-[#7a6200] shadow-md" 
                        : "bg-white/50 border-[#7a6200]/10 hover:border-[#7a6200]/30 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest bg-[#7a6200]/10 text-[#7a6200] px-2.5 py-1 rounded-full text-center max-w-[210px]">
                          Lifelong Financial Confidence
                        </span>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[#1f310c]">
                          The Lifelong Benefits
                        </h4>
                      </div>
                      <span className="text-[#7a6200] font-bold text-xl ml-2">
                        {activeParentTab === "benefits" ? "−" : "+"}
                      </span>
                    </div>
                    {activeParentTab === "benefits" && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.2 }}
                        className="text-xs sm:text-sm text-[#5C6454] leading-relaxed mt-3 pt-3 border-t border-[#7a6200]/10 font-sans"
                      >
                        Kids who master budgeting and savings early develop greater self-reliance, show lower adult financial stress levels, and understand how to protect their wealth from inflation and high-interest debt traps.
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Lead Magnet Banner */}
                <div 
                  className="w-full bg-[#1f310c] text-white p-6 sm:p-10 rounded-2xl mb-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl"
                  style={{
                    background: "radial-gradient(circle at 85% 50%, rgba(234, 220, 176, 0.16) 0%, transparent 70%), #1f310c"
                  }}
                >
                  <div className="max-w-2xl text-left relative z-10">
                    <span className="inline-block text-[9px] font-extrabold uppercase tracking-[0.2em] bg-[#7a6200]/40 text-[#EADCB0] px-3.5 py-1 rounded-full mb-3 border border-[#EADCB0]/20">
                      FREE PARENT RESOURCES
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3.5xl font-bold tracking-tight text-[#FAF8F3] mb-2 leading-tight">
                      Get a Free 1-on-1 Financial Readiness Assessment for Your Child
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FAF8F3]/80 font-sans leading-relaxed">
                      "Includes our complimentary Home Ledger Kit & a 20-min personalized consultation."
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center sm:items-start lg:items-end flex-shrink-0 gap-2 relative z-10">
                    <button
                      onClick={() => setActiveFormType("assessment")}
                      className="bg-[#7a6200] hover:bg-[#8e7305] text-[#FAF8F3] font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      Book Free Assessment <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Offerings / Tools Grid */}
                <h4 className="font-sans font-bold text-xs text-[#7a6200] uppercase tracking-[0.15em] mb-6">Our Parent Tools & Initiatives</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div 
                    onClick={() => setActiveFormType("refer")}
                    className="bg-white border border-[#7a6200]/15 p-6 rounded-2xl hover:bg-[#7a6200]/2 hover:border-[#7a6200]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex gap-4 cursor-pointer relative group border-b-2 hover:border-b-[#7a6200]"
                  >
                    <School className="text-[#7a6200] stroke-[1.5] w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform" />
                    <div>
                      <h5 className="font-sans font-bold text-sm text-[#1f310c] mb-1 group-hover:text-[#7a6200] transition-colors">Refer Your Kid's School</h5>
                      <p className="text-xs text-[#5C6454] leading-relaxed mb-3">
                        Nominate your child's school to partner with Ma'ash. We will reach out to their administration with a customized package.
                      </p>
                      <div className="text-xs font-bold text-[#7a6200] inline-flex items-center gap-1 group-hover:underline">
                        Nominate School Now <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div 
                    onClick={() => setActiveFormType("review")}
                    className="bg-white border border-[#7a6200]/15 p-6 rounded-2xl hover:bg-[#7a6200]/2 hover:border-[#7a6200]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex gap-4 cursor-pointer relative group border-b-2 hover:border-b-[#7a6200]"
                  >
                    <Star className="text-[#1f310c] stroke-[1.5] w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform" />
                    <div>
                      <h5 className="font-sans font-bold text-sm text-[#1f310c] mb-1 group-hover:text-[#7a6200] transition-colors">Leave Us a Review</h5>
                      <p className="text-xs text-[#5C6454] leading-relaxed mb-3">
                        Already participated in a summer camp or utilized our home trackers? Share your feedback to help us reach more Pakistani homes.
                      </p>
                      <div className="text-xs font-bold text-[#1f310c] inline-flex items-center gap-1 group-hover:underline">
                        Submit Feedback <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activePersona === "corporate" && (
              <motion.div
                key="corporate"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-[#fbf9f5] border border-[#7a6200]/20 p-8 sm:p-12 rounded-3xl shadow-sm text-[#1a1a1a]"
              >
                {/* Header Block */}
                <div className="border-b border-[#7a6200]/10 pb-8 mb-8">
                  <div className="text-[10px] font-bold text-[#7a6200] uppercase tracking-[0.22em] mb-2 font-sans">
                    FOR CORPORATES & PARTNERS
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3.5xl font-bold text-[#1f310c] tracking-tight mb-3">
                    Equip your workspace to navigate inflation.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1a1a1a] font-sans leading-relaxed max-w-3xl">
                    Financial stress is the leading cause of low workplace productivity. We partner with companies, banks, and corporate entities to deliver practical, engaging personal finance and wealth management frameworks for their employees.
                  </p>
                </div>

                {/* Offerings Grid */}
                <h4 className="font-sans font-bold text-xs text-[#7a6200] uppercase tracking-[0.15em] mb-6">Our Professional Frameworks</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {/* Card 1 */}
                  <div 
                    onClick={() => setActiveFormType("consultation")}
                    className="bg-white border border-[#7a6200]/15 p-6 rounded-2xl hover:border-[#7a6200]/40 hover:-translate-y-1 hover:shadow-md hover:shadow-[#7a6200]/5 transition-all duration-300 flex flex-col justify-between cursor-pointer group border-b-2 hover:border-b-[#7a6200]"
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#7a6200]/10 text-[#7a6200] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Briefcase className="stroke-[1.5] w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-sans font-bold text-sm text-[#1f310c] mb-1 group-hover:text-[#7a6200] transition-colors">Corporate Training</h5>
                        <p className="text-xs text-[#1a1a1a] leading-relaxed mb-4">
                          Comprehensive personal finance, tax filing, and retirement planning training customized for corporate leadership and general employee L&D budgets.
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-[#7a6200] inline-flex items-center gap-1 mt-2 self-end group-hover:underline">
                      Book 30 Mins <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div 
                    onClick={() => setActiveFormType("consultation")}
                    className="bg-white border border-[#7a6200]/15 p-6 rounded-2xl hover:border-[#7a6200]/40 hover:-translate-y-1 hover:shadow-md hover:shadow-[#7a6200]/5 transition-all duration-300 flex flex-col justify-between cursor-pointer group border-b-2 hover:border-b-[#7a6200]"
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1f310c]/10 text-[#1f310c] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Award className="stroke-[1.5] w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-sans font-bold text-sm text-[#1f310c] mb-1 group-hover:text-[#7a6200] transition-colors">Workshops</h5>
                        <p className="text-xs text-[#1a1a1a] leading-relaxed mb-4">
                          Mass audience masterclasses. Self-run or delivered in partnership with banking and CSR initiatives to drive national financial literacy.
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-[#7a6200] inline-flex items-center gap-1 mt-2 self-end group-hover:underline">
                      Book 30 Mins <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div 
                    onClick={() => setActiveFormType("consultation")}
                    className="bg-white border border-[#7a6200]/15 p-6 rounded-2xl hover:border-[#7a6200]/40 hover:-translate-y-1 hover:shadow-md hover:shadow-[#7a6200]/5 transition-all duration-300 flex flex-col justify-between cursor-pointer group border-b-2 hover:border-b-[#7a6200]"
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#7a6200]/10 text-[#7a6200] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <MessageSquare className="stroke-[1.5] w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-sans font-bold text-sm text-[#1f310c] mb-1 group-hover:text-[#7a6200] transition-colors">Panel Sessions</h5>
                        <p className="text-xs text-[#1a1a1a] leading-relaxed mb-4">
                          Curated panels featuring local market experts talking about savings certificates, real estate, inflation hedging, and smart mutual fund investment strategies.
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-[#7a6200] inline-flex items-center gap-1 mt-2 self-end group-hover:underline">
                      Book 30 Mins <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div 
                    onClick={() => setActiveFormType("consultation")}
                    className="bg-white border border-[#7a6200]/15 p-6 rounded-2xl hover:border-[#7a6200]/40 hover:-translate-y-1 hover:shadow-md hover:shadow-[#7a6200]/5 transition-all duration-300 flex flex-col justify-between cursor-pointer group border-b-2 hover:border-b-[#7a6200]"
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1f310c]/10 text-[#1f310c] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <CalendarRange className="stroke-[1.5] w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-sans font-bold text-sm text-[#1f310c] mb-1 group-hover:text-[#7a6200] transition-colors">Ma'ash On Demand</h5>
                        <p className="text-xs text-[#1a1a1a] leading-relaxed mb-4">
                          Completely bespoke, flexible engagements, keynote speeches, and advisory solutions available on explicit request.
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-[#7a6200] inline-flex items-center gap-1 mt-2 self-end group-hover:underline">
                      Book 30 Mins <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Lead Magnet Banner for Corporates */}
                <div 
                  className="w-full bg-[#1f310c] text-[#FAF8F3] p-6 sm:p-10 rounded-2xl mb-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl"
                  style={{
                    background: "radial-gradient(circle at 85% 50%, rgba(234, 220, 176, 0.16) 0%, transparent 70%), #1f310c"
                  }}
                >
                  <div className="max-w-2xl text-left relative z-10">
                    <span className="inline-block text-[9px] font-extrabold uppercase tracking-[0.2em] bg-[#7a6200]/40 text-[#EADCB0] px-3.5 py-1 rounded-full mb-3 border border-[#EADCB0]/20">
                      FREE CORPORATE AUDIT
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF8F3] mb-2 leading-tight">
                      Request a Complimentary Employee Financial Wellness Diagnostic
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FAF8F3]/80 font-sans leading-relaxed">
                      "We'll assess your workforce's financial stress metrics and deliver a customized L&D roadmap at zero cost."
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center sm:items-start lg:items-end flex-shrink-0 gap-2 relative z-10">
                    <button
                      onClick={() => setActiveFormType("corporateAudit")}
                      className="bg-[#7a6200] hover:bg-[#8e7305] text-[#FAF8F3] font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      Claim Free Audit & Consultation <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* BOTTOM CTA BUTTONS */}
                <div className="border-t border-[#7a6200]/15 pt-8 flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={() => setActiveFormType("consultation")}
                    className="bg-[#7a6200] hover:bg-[#8e7305] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Explore L&D Packages
                  </button>
                  <button
                    onClick={onBookMeeting}
                    className="border border-[#1f310c]/30 hover:border-[#1f310c] hover:bg-[#1f310c]/5 text-[#1f310c] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Book a Meeting
                  </button>
                </div>
              </motion.div>
            )}

            {activePersona === "students" && (
              <motion.div
                key="students"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-[#fbf9f5] border border-[#7a6200]/20 p-8 sm:p-12 rounded-3xl shadow-sm text-[#1a1a1a]"
              >
                {/* Header Block */}
                <div className="border-b border-[#7a6200]/10 pb-8 mb-8">
                  <div className="text-[10px] font-bold text-[#7a6200] uppercase tracking-[0.22em] mb-2 font-sans">
                    FOR STUDENTS
                  </div>
                  <h3 className="font-handwritten text-4xl sm:text-5xl lg:text-5.5xl text-[#1f310c] tracking-normal leading-tight">
                    Start making smart decisions now.
                  </h3>
                  
                  {/* High impact bullet points */}
                  <div className="mt-5 space-y-3 max-w-3xl">
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7a6200] mt-2 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-[#1a1a1a] font-sans leading-relaxed">
                        <span className="font-bold text-[#1f310c]">Build side-business mechanics</span> to create and test real-world ventures.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7a6200] mt-2 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-[#1a1a1a] font-sans leading-relaxed">
                        <span className="font-bold text-[#1f310c]">Master real-world wealth generation early</span> to prepare yourself for absolute independence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits / Offers Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {/* Card 1: Ambassador Program */}
                  <div className="border-2 border-dashed border-[#7a6200]/30 bg-[#7a6200]/3 p-6 rounded-2xl shadow-xs relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <Sparkles className="absolute -bottom-4 -right-4 text-[#7a6200]/10 w-24 h-24 pointer-events-none" />
                      <h4 className="font-sans font-bold text-sm text-[#1f310c] mb-1 flex items-center gap-2">
                        <Sparkles size={16} className="text-[#7a6200]" /> Become Our Ambassador
                      </h4>
                      <p className="text-xs text-[#1a1a1a] leading-relaxed mb-4">
                        A high-prestige 3-month virtual program for students aged 13–17. Receive premium free access to Ma'ash sessions, weekly personal finance worksheets, and interactive community tasks.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[9px] font-extrabold uppercase bg-[#7a6200]/10 text-[#7a6200] px-2.5 py-1 rounded-md">Certificate of Completion</span>
                        <span className="text-[9px] font-extrabold uppercase bg-[#1f310c]/10 text-[#1f310c] px-2.5 py-1 rounded-md">Letter of Recommendation</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Refer School */}
                  <div 
                    onClick={() => setActiveFormType("refer")}
                    className="bg-white border border-[#7a6200]/15 p-6 rounded-2xl hover:border-[#7a6200]/40 hover:-translate-y-1 hover:shadow-md hover:shadow-[#7a6200]/5 transition-all duration-300 flex flex-col justify-between cursor-pointer group border-b-2 hover:border-b-[#7a6200]"
                  >
                    <div>
                      <h4 className="font-sans font-bold text-sm text-[#1f310c] mb-1 flex items-center gap-2 group-hover:text-[#7a6200] transition-colors">
                        <School size={16} className="text-[#1f310c] group-hover:text-[#7a6200] transition-colors" /> Refer Your School Program
                      </h4>
                      <p className="text-xs text-[#1a1a1a] leading-relaxed mb-4">
                        Want the fun, engaging Ma'ash board games and textbooks in your own classroom? Give us your school's info, and we will pitch directly to your principal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Consultation Banner for Students */}
                <div 
                  className="w-full bg-[#1f310c] text-[#FAF8F3] p-6 sm:p-10 rounded-2xl mb-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl"
                  style={{
                    background: "radial-gradient(circle at 85% 50%, rgba(234, 220, 176, 0.16) 0%, transparent 70%), #1f310c"
                  }}
                >
                  <div className="max-w-2xl text-left relative z-10">
                    <span className="inline-block text-[9px] font-extrabold uppercase tracking-[0.2em] bg-[#7a6200]/40 text-[#EADCB0] px-3.5 py-1 rounded-full mb-3 border border-[#EADCB0]/20">
                      FREE CONSULTATION
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF8F3] mb-2 leading-tight">
                      Request a Free Consultation With Us
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FAF8F3]/80 font-sans leading-relaxed">
                      Speak with our educational advisors to explore how we can bring Ma'ash's specialized workshops, boards, and toolkits directly to your learning environment.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center sm:items-start lg:items-end flex-shrink-0 gap-2 relative z-10">
                    <button
                      onClick={() => setActiveFormType("consultation")}
                      className="bg-[#7a6200] hover:bg-[#8e7305] text-[#FAF8F3] font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      Request Consultation <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* BOTTOM CTA BUTTONS */}
                <div className="border-t border-[#7a6200]/15 pt-8 flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={() => setActiveFormType("ambassador")}
                    className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Enroll Here (Ambassador)
                  </button>
                  <button
                    onClick={() => setActiveFormType("refer")}
                    className="border border-[#1f310c]/30 hover:border-[#1f310c] hover:bg-[#1f310c]/5 text-[#1f310c] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Refer Your School
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* DYNAMIC FORM POPUPS/OVERLAYS */}
      <AnimatePresence>
        {activeFormType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFormType(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-lg bg-[#FAF8F3] rounded-3xl border border-[#1f310c]/15 shadow-2xl overflow-hidden z-10 p-6 sm:p-8"
            >
              {/* Form header decoration line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#7a6200]" />

              <button
                onClick={() => setActiveFormType(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-[#1f310c]/50 hover:bg-[#1f310c]/5 hover:text-[#1f310c] transition-colors"
              >
                <X size={18} />
              </button>

              {/* FORM 1: CURRICULUM PROPOSAL */}
              {activeFormType === "proposal" && (
                <div>
                  {!proposalSubmitted ? (
                    <form onSubmit={(e) => handleFormSubmit(e, "proposal")}>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Curriculum Proposal</h4>
                      <p className="text-xs text-[#5C6454] mb-5">Nominate your institution for a tailored integration package.</p>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your Full Name</label>
                          <input 
                            type="text" required placeholder="e.g. Dr. Haris Khan" 
                            value={proposalForm.name} onChange={(e) => setProposalForm({...proposalForm, name: e.target.value})}
                            className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Professional Email</label>
                          <input 
                            type="email" required placeholder="e.g. haris@school.pk" 
                            value={proposalForm.email} onChange={(e) => setProposalForm({...proposalForm, email: e.target.value})}
                            className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">School / College</label>
                            <input 
                              type="text" required placeholder="e.g. KGS, Karachi" 
                              value={proposalForm.school} onChange={(e) => setProposalForm({...proposalForm, school: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your Role</label>
                            <input 
                              type="text" required placeholder="e.g. Principal / Coordinator" 
                              value={proposalForm.role} onChange={(e) => setProposalForm({...proposalForm, role: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Special Requirements / Notes</label>
                          <textarea 
                            rows={3} placeholder="Tell us about student counts or specific goals..." 
                            value={proposalForm.message} onChange={(e) => setProposalForm({...proposalForm, message: e.target.value})}
                            className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200] resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end mt-6">
                        <button 
                          type="button" onClick={() => setActiveFormType(null)}
                          className="px-4 py-2 text-xs font-bold text-[#1f310c]/60 hover:text-[#1f310c] uppercase tracking-wider"
                        >
                          Dismiss
                        </button>
                        <button 
                          type="submit"
                          className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer"
                        >
                          Request Proposal <Send size={12} />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 bg-[#1f310c]/10 text-[#1f310c] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={24} className="stroke-[3]" />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Proposal Requested!</h4>
                      <p className="text-xs text-[#5C6454] max-w-sm mx-auto mb-6">
                        Thank you, {proposalForm.name}. Our integrations team has compiled your profile for {proposalForm.school} and will send a PDF proposal within 48 hours.
                      </p>
                      <button 
                        onClick={() => resetFormState("proposal")}
                        className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full cursor-pointer"
                      >
                        Return
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* FORM 2: REFER A SCHOOL */}
              {activeFormType === "refer" && (
                <div>
                  {!referSchoolSubmitted ? (
                    <form onSubmit={(e) => handleFormSubmit(e, "refer")}>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Refer a School</h4>
                      <p className="text-xs text-[#5C6454] mb-5">Nominate a school that should empower its students with financial literacy.</p>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your Name</label>
                            <input 
                              type="text" required placeholder="e.g. Mrs. Amina" 
                              value={referSchoolForm.parentName} onChange={(e) => setReferSchoolForm({...referSchoolForm, parentName: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your Email</label>
                            <input 
                              type="email" required placeholder="e.g. amina@mail.com" 
                              value={referSchoolForm.email} onChange={(e) => setReferSchoolForm({...referSchoolForm, email: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">School Name to Nominate</label>
                          <input 
                            type="text" required placeholder="e.g. Beaconhouse Jubilee Campus" 
                            value={referSchoolForm.schoolName} onChange={(e) => setReferSchoolForm({...referSchoolForm, schoolName: e.target.value})}
                            className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">City</label>
                            <input 
                              type="text" required placeholder="e.g. Lahore / Karachi" 
                              value={referSchoolForm.city} onChange={(e) => setReferSchoolForm({...referSchoolForm, city: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Principal / Admin Name (Optional)</label>
                            <input 
                              type="text" placeholder="e.g. Mrs. Shaheen" 
                              value={referSchoolForm.principalName} onChange={(e) => setReferSchoolForm({...referSchoolForm, principalName: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end mt-6">
                        <button 
                          type="button" onClick={() => setActiveFormType(null)}
                          className="px-4 py-2 text-xs font-bold text-[#1f310c]/60 hover:text-[#1f310c] uppercase tracking-wider"
                        >
                          Dismiss
                        </button>
                        <button 
                          type="submit"
                          className="bg-[#7a6200] hover:bg-[#604d00] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer"
                        >
                          Refer School <Send size={12} />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 bg-[#7a6200]/10 text-[#7a6200] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={24} className="stroke-[3]" />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Nomination Received!</h4>
                      <p className="text-xs text-[#5C6454] max-w-sm mx-auto mb-6">
                        Thank you for nominating <span className="font-bold text-[#1f310c]">{referSchoolForm.schoolName}</span> in {referSchoolForm.city}! We will reach out to their academic coordinator and let them know a passionate parent recommended us.
                      </p>
                      <button 
                        onClick={() => resetFormState("refer")}
                        className="bg-[#7a6200] hover:bg-[#604d00] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full cursor-pointer"
                      >
                        Return
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* FORM 3: LEAVE A REVIEW */}
              {activeFormType === "review" && (
                <div>
                  {!reviewSubmitted ? (
                    <form onSubmit={(e) => handleFormSubmit(e, "review")}>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Submit a Review</h4>
                      <p className="text-xs text-[#5C6454] mb-5">Share your experience with Ma'ash courses or at-home kits.</p>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your Name</label>
                            <input 
                              type="text" required placeholder="e.g. Asim Raza" 
                              value={reviewForm.name} onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your City</label>
                            <input 
                              type="text" required placeholder="e.g. Islamabad" 
                              value={reviewForm.city} onChange={(e) => setReviewForm({...reviewForm, city: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-2">Overall Rating</label>
                          <div className="flex items-center gap-1.5">
                            {[1, 2, 3, 4, 5].map((stars) => (
                              <button
                                key={stars}
                                type="button"
                                onClick={() => setReviewForm({...reviewForm, rating: stars})}
                                className="p-1 rounded-full hover:bg-black/5 transition-all cursor-pointer"
                              >
                                <Star 
                                  size={24} 
                                  className={`transition-colors ${
                                    stars <= reviewForm.rating 
                                      ? "text-[#7a6200] fill-[#7a6200]" 
                                      : "text-gray-300"
                                  }`} 
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your Review Text</label>
                          <textarea 
                            rows={3} required placeholder="How did our courses or games help your family?" 
                            value={reviewForm.text} onChange={(e) => setReviewForm({...reviewForm, text: e.target.value})}
                            className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200] resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end mt-6">
                        <button 
                          type="button" onClick={() => setActiveFormType(null)}
                          className="px-4 py-2 text-xs font-bold text-[#1f310c]/60 hover:text-[#1f310c] uppercase tracking-wider"
                        >
                          Dismiss
                        </button>
                        <button 
                          type="submit"
                          className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer"
                        >
                          Submit Review <Send size={12} />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 bg-[#1f310c]/10 text-[#1f310c] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={24} className="stroke-[3]" />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Review Received!</h4>
                      <p className="text-xs text-[#5C6454] max-w-sm mx-auto mb-6">
                        Thank you, {reviewForm.name}! We appreciate you sharing your experience. Honest parent feedback helps us refine our frameworks for classrooms and homes across Pakistan.
                      </p>
                      <button 
                        onClick={() => resetFormState("review")}
                        className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full cursor-pointer"
                      >
                        Return
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* FORM 4: AMBASSADOR ENROLL */}
              {activeFormType === "ambassador" && (
                <div>
                  {!ambassadorSubmitted ? (
                    <form onSubmit={(e) => handleFormSubmit(e, "ambassador")}>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Ambassador Application</h4>
                      <p className="text-xs text-[#5C6454] mb-5">Apply for our 3-month high school financial literacy leadership program (Ages 13–17).</p>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2">
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Full Name</label>
                            <input 
                              type="text" required placeholder="e.g. Zainab Raza" 
                              value={ambassadorForm.name} onChange={(e) => setAmbassadorForm({...ambassadorForm, name: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Age</label>
                            <input 
                              type="number" min={13} max={17} required placeholder="e.g. 15" 
                              value={ambassadorForm.age} onChange={(e) => setAmbassadorForm({...ambassadorForm, age: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">School / College</label>
                            <input 
                              type="text" required placeholder="e.g. Roots International" 
                              value={ambassadorForm.school} onChange={(e) => setAmbassadorForm({...ambassadorForm, school: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your Email</label>
                            <input 
                              type="email" required placeholder="e.g. zainab@mail.com" 
                              value={ambassadorForm.email} onChange={(e) => setAmbassadorForm({...ambassadorForm, email: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Why do you want to represent Ma'ash?</label>
                          <textarea 
                            rows={3} required placeholder="Share why financial education matters to your peers..." 
                            value={ambassadorForm.why} onChange={(e) => setAmbassadorForm({...ambassadorForm, why: e.target.value})}
                            className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200] resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end mt-6">
                        <button 
                          type="button" onClick={() => setActiveFormType(null)}
                          className="px-4 py-2 text-xs font-bold text-[#1f310c]/60 hover:text-[#1f310c] uppercase tracking-wider"
                        >
                          Dismiss
                        </button>
                        <button 
                          type="submit"
                          className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer"
                        >
                          Submit Application <Send size={12} />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 bg-[#1f310c]/10 text-[#1f310c] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={24} className="stroke-[3]" />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Application Received!</h4>
                      <p className="text-xs text-[#5C6454] max-w-sm mx-auto mb-6">
                        Incredible job, {ambassadorForm.name}! Your ambassador application for {ambassadorForm.school} is saved. We will review your prompt details and contact you via email at <span className="font-bold text-[#1f310c]">{ambassadorForm.email}</span> with the next onboarding tasks.
                      </p>
                      <button 
                        onClick={() => resetFormState("ambassador")}
                        className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full cursor-pointer"
                      >
                        Return
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* FORM 5: COMPLIMENTARY PILOT SESSION */}
              {activeFormType === "pilot" && (
                <div>
                  {!pilotSessionSubmitted ? (
                    <form onSubmit={(e) => handleFormSubmit(e, "pilot")}>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Schedule Your Complimentary Session</h4>
                      <p className="text-xs text-[#5C6454] mb-5">Experience the Ma'ash impact firsthand. One 100% free interactive session, zero commitment.</p>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your Full Name</label>
                            <input 
                              type="text" required placeholder="e.g. Dr. Haris Khan" 
                              value={pilotSessionForm.name} onChange={(e) => setPilotSessionForm({...pilotSessionForm, name: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Professional Email</label>
                            <input 
                              type="email" required placeholder="e.g. haris@school.pk" 
                              value={pilotSessionForm.email} onChange={(e) => setPilotSessionForm({...pilotSessionForm, email: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">School Name</label>
                            <input 
                              type="text" required placeholder="e.g. KGS, Karachi" 
                              value={pilotSessionForm.school} onChange={(e) => setPilotSessionForm({...pilotSessionForm, school: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Target Grades</label>
                            <input 
                              type="text" required placeholder="e.g. Grades 5-8" 
                              value={pilotSessionForm.grades} onChange={(e) => setPilotSessionForm({...pilotSessionForm, grades: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Phone / Contact Number</label>
                            <input 
                              type="tel" required placeholder="e.g. +92 300 1234567" 
                              value={pilotSessionForm.contact} onChange={(e) => setPilotSessionForm({...pilotSessionForm, contact: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Special Instructions / Preferred Date</label>
                          <textarea 
                            rows={2} placeholder="Any specific topics or event timelines to share..." 
                            value={pilotSessionForm.message} onChange={(e) => setPilotSessionForm({...pilotSessionForm, message: e.target.value})}
                            className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200] resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end mt-6">
                        <button 
                          type="button" onClick={() => setActiveFormType(null)}
                          className="px-4 py-2 text-xs font-bold text-[#1f310c]/60 hover:text-[#1f310c] uppercase tracking-wider"
                        >
                          Dismiss
                        </button>
                        <button 
                          type="submit"
                          className="bg-[#7a6200] hover:bg-[#8e7305] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer"
                        >
                          Claim Free Session <ArrowRight size={12} />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 bg-[#7a6200]/10 text-[#7a6200] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={24} className="stroke-[3]" />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Session Slot Reserved!</h4>
                      <p className="text-xs text-[#5C6454] max-w-sm mx-auto mb-6">
                        Thank you, {pilotSessionForm.name}. We have received your request for a complimentary interactive session at <span className="font-bold text-[#1f310c]">{pilotSessionForm.school}</span>. A curriculum representative will email you at <span className="font-bold text-[#1f310c]">{pilotSessionForm.email}</span> within 24 hours to coordinate the date and setup details.
                      </p>
                      <button 
                        onClick={() => resetFormState("pilot")}
                        className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full cursor-pointer"
                      >
                        Return
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* FORM 6: 30-MINUTE CONSULTATION */}
              {activeFormType === "consultation" && (
                <div>
                  {!consultationSubmitted ? (
                    <form onSubmit={(e) => handleFormSubmit(e, "consultation")}>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Book a 30-Minute Consultation</h4>
                      <p className="text-xs text-[#5C6454] mb-5">Select a convenient date and time to explore our curriculum framework, school dashboard, and lesson integration options with an expert.</p>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your Full Name</label>
                            <input 
                              type="text" required placeholder="e.g. Dr. Haris Khan" 
                              value={consultationForm.name} onChange={(e) => setConsultationForm({...consultationForm, name: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Professional Email</label>
                            <input 
                              type="email" required placeholder="e.g. haris@school.pk" 
                              value={consultationForm.email} onChange={(e) => setConsultationForm({...consultationForm, email: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">School Name</label>
                            <input 
                              type="text" required placeholder="e.g. KGS, Karachi" 
                              value={consultationForm.school} onChange={(e) => setConsultationForm({...consultationForm, school: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Role / Designation</label>
                            <input 
                              type="text" required placeholder="e.g. Principal / Coordinator" 
                              value={consultationForm.role} onChange={(e) => setConsultationForm({...consultationForm, role: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Preferred Date</label>
                            <input 
                              type="date" required 
                              value={consultationForm.date} onChange={(e) => setConsultationForm({...consultationForm, date: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Time Slot</label>
                            <select 
                              required 
                              value={consultationForm.timeSlot} onChange={(e) => setConsultationForm({...consultationForm, timeSlot: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            >
                              <option value="">Select a time slot</option>
                              <option value="morning">Morning (09:00 AM - 12:00 PM)</option>
                              <option value="afternoon">Afternoon (12:00 PM - 03:00 PM)</option>
                              <option value="late-afternoon">Late Afternoon (03:00 PM - 05:00 PM)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end mt-6">
                        <button 
                          type="button" onClick={() => setActiveFormType(null)}
                          className="px-4 py-2 text-xs font-bold text-[#1f310c]/60 hover:text-[#1f310c] uppercase tracking-wider"
                        >
                          Dismiss
                        </button>
                        <button 
                          type="submit"
                          className="bg-[#7a6200] hover:bg-[#8e7305] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer"
                        >
                          Book 30-Min Call <ArrowRight size={12} />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 bg-[#7a6200]/10 text-[#7a6200] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={24} className="stroke-[3]" />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Demo Call Requested!</h4>
                      <p className="text-xs text-[#5C6454] max-w-sm mx-auto mb-6">
                        Thank you, {consultationForm.name}. We have logged your request for a 30-minute consultation on <span className="font-bold text-[#1f310c]">{consultationForm.date}</span> ({consultationForm.timeSlot}). An invitation has been drafted for <span className="font-bold text-[#1f310c]">{consultationForm.email}</span>, and a team member will touch base shortly to coordinate.
                      </p>
                      <button 
                        onClick={() => resetFormState("consultation")}
                        className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full cursor-pointer"
                      >
                        Return
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* FORM 7: FREE FINANCIAL READINESS ASSESSMENT */}
              {activeFormType === "assessment" && (
                <div>
                  {!assessmentSubmitted ? (
                    <form onSubmit={(e) => handleFormSubmit(e, "assessment")}>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Book Your Child's Assessment</h4>
                      <p className="text-xs text-[#5C6454] mb-5">Claim your free 20-min consultation & custom Home Ledger Kit. No obligation, 100% practical guidance.</p>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Parent Name</label>
                            <input 
                              type="text" required placeholder="e.g. Ayesha Siddiqui" 
                              value={assessmentForm.name} onChange={(e) => setAssessmentForm({...assessmentForm, name: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Email Address</label>
                            <input 
                              type="email" required placeholder="e.g. ayesha@gmail.com" 
                              value={assessmentForm.email} onChange={(e) => setAssessmentForm({...assessmentForm, email: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Child's Age / Grade</label>
                            <input 
                              type="text" required placeholder="e.g. 11 years / Grade 6" 
                              value={assessmentForm.kidAge} onChange={(e) => setAssessmentForm({...assessmentForm, kidAge: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Phone / WhatsApp Number</label>
                            <input 
                              type="tel" required placeholder="e.g. +92 321 9876543" 
                              value={assessmentForm.contact} onChange={(e) => setAssessmentForm({...assessmentForm, contact: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Any Specific Financial Concerns or Topics of Interest?</label>
                          <textarea 
                            rows={2} placeholder="e.g. Budgeting habits, screen time & digital spending, saving targets..." 
                            value={assessmentForm.message} onChange={(e) => setAssessmentForm({...assessmentForm, message: e.target.value})}
                            className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200] resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end mt-6">
                        <button 
                          type="button" onClick={() => setActiveFormType(null)}
                          className="px-4 py-2 text-xs font-bold text-[#1f310c]/60 hover:text-[#1f310c] uppercase tracking-wider"
                        >
                          Dismiss
                        </button>
                        <button 
                          type="submit"
                          className="bg-[#7a6200] hover:bg-[#8e7305] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer"
                        >
                          Book Free Assessment <ArrowRight size={12} />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 bg-[#7a6200]/10 text-[#7a6200] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={24} className="stroke-[3]" />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Assessment Session Reserved!</h4>
                      <p className="text-xs text-[#5C6454] max-w-sm mx-auto mb-6">
                        Thank you, {assessmentForm.name}. Your complimentary 20-min consultation slot is booked. We have sent the <span className="font-bold text-[#1f310c]">Home Ledger Kit</span> download link to <span className="font-bold text-[#1f310c]">{assessmentForm.email}</span>, and a specialist will WhatsApp you at <span className="font-bold text-[#1f310c]">{assessmentForm.contact}</span> shortly to lock in a time slot.
                      </p>
                      <button 
                        onClick={() => resetFormState("assessment")}
                        className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full cursor-pointer"
                      >
                        Return
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* FORM 8: FREE CORPORATE AUDIT */}
              {activeFormType === "corporateAudit" && (
                <div>
                  {!corporateAuditSubmitted ? (
                    <form onSubmit={(e) => handleFormSubmit(e, "corporateAudit")}>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Request Financial Wellness Diagnostic</h4>
                      <p className="text-xs text-[#5C6454] mb-5">We'll assess your workforce's financial stress metrics and deliver a customized L&D roadmap at zero cost.</p>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Company / Organization</label>
                            <input 
                              type="text" required placeholder="e.g. Systems Limited" 
                              value={corporateAuditForm.company} onChange={(e) => setCorporateAuditForm({...corporateAuditForm, company: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Workforce Size</label>
                            <select 
                              required
                              value={corporateAuditForm.size} onChange={(e) => setCorporateAuditForm({...corporateAuditForm, size: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            >
                              <option value="">Select workforce size...</option>
                              <option value="Under 50">Under 50 employees</option>
                              <option value="50-200">50 - 200 employees</option>
                              <option value="200-500">200 - 500 employees</option>
                              <option value="500+">500+ employees</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Contact Name</label>
                            <input 
                              type="text" required placeholder="e.g. Haris Khan (HR Director)" 
                              value={corporateAuditForm.name} onChange={(e) => setCorporateAuditForm({...corporateAuditForm, name: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Work Email</label>
                            <input 
                              type="email" required placeholder="e.g. haris.khan@company.com" 
                              value={corporateAuditForm.email} onChange={(e) => setCorporateAuditForm({...corporateAuditForm, email: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Phone / WhatsApp Number</label>
                            <input 
                              type="tel" required placeholder="e.g. +92 300 1234567" 
                              value={corporateAuditForm.contact} onChange={(e) => setCorporateAuditForm({...corporateAuditForm, contact: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Workforce Challenges / Specific Focus Areas</label>
                          <textarea 
                            rows={2} placeholder="e.g. Personal taxation workshops, smart retirement saving schemes, inflation anxiety mitigation..." 
                            value={corporateAuditForm.message} onChange={(e) => setCorporateAuditForm({...corporateAuditForm, message: e.target.value})}
                            className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200] resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end mt-6">
                        <button 
                          type="button" onClick={() => setActiveFormType(null)}
                          className="px-4 py-2 text-xs font-bold text-[#1f310c]/60 hover:text-[#1f310c] uppercase tracking-wider"
                        >
                          Dismiss
                        </button>
                        <button 
                          type="submit"
                          className="bg-[#7a6200] hover:bg-[#8e7305] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer"
                        >
                          Claim Free Audit & Consultation <ArrowRight size={12} />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 bg-[#7a6200]/10 text-[#7a6200] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={24} className="stroke-[3]" />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Diagnostic Request Received!</h4>
                      <p className="text-xs text-[#5C6454] max-w-sm mx-auto mb-6">
                        Thank you, {corporateAuditForm.name}. Your complimentary workforce diagnostic assessment has been initiated for <span className="font-bold text-[#1f310c]">{corporateAuditForm.company}</span>. A corporate L&D specialist will reach out to you at <span className="font-bold text-[#1f310c]">{corporateAuditForm.email}</span> and WhatsApp (<span className="font-bold text-[#1f310c]">{corporateAuditForm.contact}</span>) to schedule the stress diagnostic audit session.
                      </p>
                      <button 
                        onClick={() => resetFormState("corporateAudit")}
                        className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full cursor-pointer"
                      >
                        Return
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* FORM 9: STUDENT BLUEPRINT */}
              {activeFormType === "studentBlueprint" && (
                <div>
                  {!studentBlueprintSubmitted ? (
                    <form onSubmit={(e) => handleFormSubmit(e, "studentBlueprint")}>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Get Student Side-Hustle Blueprint</h4>
                      <p className="text-xs text-[#5C6454] mb-5">Fill in your details to instantly unlock the downloadable PDF workbook and target spreadsheets.</p>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your Name</label>
                            <input 
                              type="text" required placeholder="e.g. Zainab Ahmed" 
                              value={studentBlueprintForm.name} onChange={(e) => setStudentBlueprintForm({...studentBlueprintForm, name: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Your Email</label>
                            <input 
                              type="email" required placeholder="e.g. zainab@outlook.com" 
                              value={studentBlueprintForm.email} onChange={(e) => setStudentBlueprintForm({...studentBlueprintForm, email: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Age</label>
                            <input 
                              type="number" required min="10" max="25" placeholder="e.g. 15" 
                              value={studentBlueprintForm.age} onChange={(e) => setStudentBlueprintForm({...studentBlueprintForm, age: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">School / College</label>
                            <input 
                              type="text" required placeholder="e.g. Beaconhouse" 
                              value={studentBlueprintForm.school} onChange={(e) => setStudentBlueprintForm({...studentBlueprintForm, school: e.target.value})}
                              className="w-full px-4 py-2 bg-white border border-[#1f310c]/15 rounded-xl text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 justify-end mt-6">
                        <button 
                          type="button" onClick={() => setActiveFormType(null)}
                          className="px-4 py-2 text-xs font-bold text-[#1f310c]/60 hover:text-[#1f310c] uppercase tracking-wider"
                        >
                          Dismiss
                        </button>
                        <button 
                          type="submit"
                          className="bg-[#7a6200] hover:bg-[#8e7305] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer"
                        >
                          Download Free Blueprint <ArrowRight size={12} />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 bg-[#7a6200]/10 text-[#7a6200] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={24} className="stroke-[3]" />
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#1f310c] mb-1">Blueprint Sent Successfully!</h4>
                      <p className="text-xs text-[#5C6454] max-w-sm mx-auto mb-6">
                        Thank you, {studentBlueprintForm.name}! We've dispatched your personalized copy of the <span className="font-bold text-[#1f310c]">Student Side-Hustle Blueprint & Smart Money Map</span> to your inbox at <span className="font-bold text-[#1f310c]">{studentBlueprintForm.email}</span>. Enjoy launching your financial journey!
                      </p>
                      <button 
                        onClick={() => resetFormState("studentBlueprint")}
                        className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-full cursor-pointer"
                      >
                        Return
                      </button>
                    </div>
                  )}
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
