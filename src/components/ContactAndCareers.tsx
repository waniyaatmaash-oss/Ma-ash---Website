import React, { useState } from "react";
import { motion } from "motion/react";
import { smoothScrollTo } from "../utils/scroll";
import { 
  MessageSquare, Briefcase, GraduationCap, Users, Heart, Smile, 
  Send, Check, Phone, Mail, AlertCircle, Copy, CheckCircle, ArrowRight,
  Linkedin, Instagram
} from "lucide-react";

interface ContactAndCareersProps {
  onSelectPersona: (personaId: string) => void;
}

export default function ContactAndCareers({ onSelectPersona }: ContactAndCareersProps) {
  // Facilitator Form State
  const [facilitatorForm, setFacilitatorForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    why: "",
    availability: "ongoing"
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Handle Form Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFacilitatorForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Careers Application Submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Compose Mailto Link
    const subject = encodeURIComponent(`Ma'ash Facilitator Application - ${facilitatorForm.name}`);
    const body = encodeURIComponent(
      `Ma'ash School Facilitator Application Details:\n\n` +
      `Full Name: ${facilitatorForm.name}\n` +
      `Email: ${facilitatorForm.email}\n` +
      `Phone/WhatsApp Number: ${facilitatorForm.phone}\n` +
      `City: ${facilitatorForm.city}\n` +
      `Availability: ${facilitatorForm.availability}\n\n` +
      `Relevant Experience/Background:\n${facilitatorForm.experience}\n\n` +
      `Why do you want to facilitate with Ma'ash?:\n${facilitatorForm.why}\n\n` +
      `Sent via Ma'ash School interactive application.`
    );

    // Trigger Mailto Action to founder's email
    window.location.href = `mailto:waniyaatmaash@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopyDetails = () => {
    const summary = 
      `Ma'ash School Facilitator Application:\n` +
      `Name: ${facilitatorForm.name}\n` +
      `Email: ${facilitatorForm.email}\n` +
      `Phone: ${facilitatorForm.phone}\n` +
      `City: ${facilitatorForm.city}\n` +
      `Availability: ${facilitatorForm.availability}\n` +
      `Experience: ${facilitatorForm.experience}\n` +
      `Motivation: ${facilitatorForm.why}`;
    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const resetFormState = (type?: string) => {
    setFacilitatorForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      experience: "",
      why: "",
      availability: "ongoing"
    });
    setFormSubmitted(false);
  };

  // Persona Prompt actions
  const handlePersonaTrigger = (id: string) => {
    onSelectPersona(id);
    const elem = document.getElementById("persona-section");
    if (elem) {
      setTimeout(() => {
        smoothScrollTo(elem, 100, 850);
      }, 50);
    }
  };

  return (
    <div className="relative z-20 select-none">
      
      {/* SECTION 8: LET'S START THE CONVERSATION */}
      <section 
        className="w-full bg-white py-14 sm:py-20 px-6 sm:px-8 lg:px-12 border-t border-[#1f310c]/10" 
        id="contact-section"
      >
        <div className="mx-auto max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Conversation Pitch (5 cols) */}
            <div className="lg:col-span-5 text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-[1.5px] bg-[#7a6200]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#7a6200] uppercase tracking-[0.2em] font-sans">
                  CONVERSATION
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1f310c] leading-tight tracking-tight mb-6">
                Let's Start the Conversation
              </h2>
              <p className="font-sans text-[#5C6454] text-sm sm:text-base leading-[1.6] mb-8">
                Whether you're an educationist looking to bring financial literacy into your classroom, a parent who wants more for your child, a corporate partner ready to put your brand behind a national education priority, or a student ready to lead, we'd love to talk.
              </p>

              {/* Direct Support Details */}
              <div className="space-y-4 pt-4 border-t border-[#1f310c]/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#7a6200]/10 flex items-center justify-center text-[#7a6200]">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-[#5C6454] uppercase tracking-wider">Direct WhatsApp Support</div>
                    <a href="https://wa.me/923272419246" target="_blank" rel="noreferrer" className="text-sm font-bold text-[#1f310c] hover:underline hover:text-[#7a6200]">
                      03272419246
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#1f310c]/10 flex items-center justify-center text-[#1f310c]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-[#5C6454] uppercase tracking-wider">Direct Founder Email</div>
                    <a href="mailto:waniyaatmaash@gmail.com" className="text-sm font-bold text-[#1f310c] hover:underline hover:text-[#7a6200]">
                      waniyaatmaash@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Persona Action Prompts (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Educationists */}
              <button 
                onClick={() => handlePersonaTrigger("educationists")}
                className="p-5 bg-[#FAF8F3] hover:bg-[#1f310c]/2 border border-[#1f310c]/10 hover:border-[#1f310c]/25 rounded-2xl text-left transition-all group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-[#1f310c]/5 flex items-center justify-center text-[#1f310c] mb-3">
                  <GraduationCap size={16} />
                </div>
                <h4 className="font-bold text-xs text-[#1f310c] uppercase tracking-wider mb-1">For Educationists</h4>
                <p className="text-[11px] text-[#5C6454] leading-relaxed mb-3">Bring financial textbooks & board games into school hours.</p>
                <span className="text-xs font-bold text-[#7a6200] inline-flex items-center gap-1 group-hover:underline">
                  Bring the curriculum <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              {/* Card 2: Parents */}
              <button 
                onClick={() => handlePersonaTrigger("parents")}
                className="p-5 bg-[#FAF8F3] hover:bg-[#7a6200]/2 border border-[#1f310c]/10 hover:border-[#7a6200]/25 rounded-2xl text-left transition-all group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-[#7a6200]/5 flex items-center justify-center text-[#7a6200] mb-3">
                  <Heart size={16} />
                </div>
                <h4 className="font-bold text-xs text-[#1f310c] uppercase tracking-wider mb-1">For Parents</h4>
                <p className="text-[11px] text-[#5C6454] leading-relaxed mb-3">Explore at-home budgeting trackers & family board games.</p>
                <span className="text-xs font-bold text-[#7a6200] inline-flex items-center gap-1 group-hover:underline">
                  Nominate your school <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              {/* Card 3: Corporate */}
              <button 
                onClick={() => handlePersonaTrigger("corporate")}
                className="p-5 bg-[#FAF8F3] hover:bg-[#1f310c]/2 border border-[#1f310c]/10 hover:border-[#1f310c]/25 rounded-2xl text-left transition-all group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-[#1f310c]/5 flex items-center justify-center text-[#1f310c] mb-3">
                  <Briefcase size={16} />
                </div>
                <h4 className="font-bold text-xs text-[#1f310c] uppercase tracking-wider mb-1">For Corporate</h4>
                <p className="text-[11px] text-[#5C6454] leading-relaxed mb-3">Invest in CSR-backed initiatives or employee wellness.</p>
                <span className="text-xs font-bold text-[#7a6200] inline-flex items-center gap-1 group-hover:underline">
                  Explore L&D packages <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              {/* Card 4: Students */}
              <button 
                onClick={() => handlePersonaTrigger("students")}
                className="p-5 bg-[#FAF8F3] hover:bg-[#7a6200]/2 border border-[#1f310c]/10 hover:border-[#7a6200]/25 rounded-2xl text-left transition-all group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-[#7a6200]/5 flex items-center justify-center text-[#7a6200] mb-3">
                  <Smile size={16} />
                </div>
                <h4 className="font-bold text-xs text-[#1f310c] uppercase tracking-wider mb-1">For Students</h4>
                <p className="text-[11px] text-[#5C6454] leading-relaxed mb-3">Become an Ambassador or pitch Ma'ash to your principal.</p>
                <span className="text-xs font-bold text-[#7a6200] inline-flex items-center gap-1 group-hover:underline">
                  Apply to lead <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: CAREERS / FACILITATOR FORM */}
      <section 
        className="w-full bg-[#FAF8F3] py-14 sm:py-20 px-6 sm:px-8 lg:px-12 border-t border-[#1f310c]/10 scroll-mt-20" 
        id="careers-section"
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Pitch (5 cols) */}
            <div className="lg:col-span-5 text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-[1.5px] bg-[#1f310c]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#1f310c] uppercase tracking-[0.2em] font-sans">
                  CAREERS
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1f310c] leading-tight tracking-tight mb-5">
                Teach With Us
              </h2>
              <p className="font-sans italic text-sm sm:text-base text-[#7a6200] font-medium leading-[1.6] mb-4">
                "Know your way around money and love explaining it? Teach with Ma'ash."
              </p>
              <p className="font-sans text-[#5C6454] text-xs sm:text-sm leading-relaxed mb-6">
                We are building a network of energetic, certified facilitators across major cities to guide young students through interactive workshops and camps. We provide full training, textbooks, resources, and competitive compensation.
              </p>
              
              <div className="bg-white p-5 rounded-2xl border border-[#1f310c]/10 shadow-xs">
                <h4 className="font-sans font-bold text-[10px] text-[#1f310c]/60 uppercase tracking-wider mb-2">Qualifications We Value</h4>
                <ul className="text-xs text-[#5C6454] space-y-2 leading-relaxed">
                  <li className="flex gap-2 items-start"><span className="text-[#7a6200]">●</span> Dynamic speaking and teaching presence.</li>
                  <li className="flex gap-2 items-start"><span className="text-[#7a6200]">●</span> Solid understanding of personal finance or commerce.</li>
                  <li className="flex gap-2 items-start"><span className="text-[#7a6200]">●</span> Passion for mentoring children (Ages 8–18).</li>
                </ul>
              </div>
            </div>

            {/* Careers Form Frame (7 cols) */}
            <div className="lg:col-span-7 w-full">
              <div className="bg-white border border-[#1f310c]/10 p-6 sm:p-10 rounded-3xl shadow-sm relative">
                
                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1f310c] mb-1">Facilitator Application</h3>
                    <p className="text-xs text-[#5C6454] mb-6">Complete this short form to apply. All applications go directly to waniyaatmaash@gmail.com</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Full Name *</label>
                        <input 
                          type="text" name="name" required placeholder="e.g. Adeel Ahmed" 
                          value={facilitatorForm.name} onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-[#FAF8F3] border border-[#1f310c]/10 rounded-xl text-xs sm:text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Email Address *</label>
                        <input 
                          type="email" name="email" required placeholder="e.g. adeel@domain.com" 
                          value={facilitatorForm.email} onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-[#FAF8F3] border border-[#1f310c]/10 rounded-xl text-xs sm:text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Phone / WhatsApp *</label>
                        <input 
                          type="tel" name="phone" required placeholder="e.g. 03001234567" 
                          value={facilitatorForm.phone} onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-[#FAF8F3] border border-[#1f310c]/10 rounded-xl text-xs sm:text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">City *</label>
                        <input 
                          type="text" name="city" required placeholder="e.g. Karachi / Islamabad" 
                          value={facilitatorForm.city} onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-[#FAF8F3] border border-[#1f310c]/10 rounded-xl text-xs sm:text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Relevant Experience & Background *</label>
                      <textarea 
                        name="experience" required rows={3} placeholder="Describe any speaking, teaching, or finance experience..." 
                        value={facilitatorForm.experience} onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-[#FAF8F3] border border-[#1f310c]/10 rounded-xl text-xs sm:text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200] resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Why do you want to facilitate with Ma'ash? *</label>
                      <textarea 
                        name="why" required rows={2} placeholder="Share your motivation..." 
                        value={facilitatorForm.why} onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-[#FAF8F3] border border-[#1f310c]/10 rounded-xl text-xs sm:text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200] resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-[#1f310c]/70 uppercase tracking-wider mb-1">Availability *</label>
                      <select 
                        name="availability" value={facilitatorForm.availability} onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-[#FAF8F3] border border-[#1f310c]/10 rounded-xl text-xs sm:text-sm text-[#1f310c] focus:outline-none focus:border-[#7a6200]"
                      >
                        <option value="ongoing">Ongoing engagement (Part-time / Full-time)</option>
                        <option value="weekdays">Weekdays only</option>
                        <option value="weekends">Weekends only</option>
                        <option value="summer">Summer program only</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-sm hover:shadow active:scale-[0.99] transition-all cursor-pointer mt-4"
                    >
                      Apply to Facilitate
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-[#1f310c]/10 text-[#1f310c] rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1f310c] mb-2">Application Drafted!</h3>
                    <p className="text-xs text-[#5C6454] max-w-sm mx-auto leading-relaxed mb-6">
                      Awesome, <span className="font-bold text-[#1f310c]">{facilitatorForm.name}</span>! We have pre-filled and compiled your credentials. Click the button below to launch your email client and send it directly to <span className="text-[#7a6200] font-bold">waniyaatmaash@gmail.com</span>.
                    </p>

                    {/* Copier / Fallback details widget */}
                    <div className="p-4 border border-[#1f310c]/10 bg-[#FAF8F3] rounded-2xl text-left max-w-sm mx-auto mb-8 space-y-2">
                      <div className="flex items-center justify-between text-[9px] font-bold text-[#1f310c]/60 uppercase tracking-wider">
                        <span>Application Summary</span>
                        <button 
                          onClick={handleCopyDetails}
                          className="text-[#7a6200] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          {isCopied ? "Copied!" : <span className="flex items-center gap-1"><Copy size={11} /> Copy Text</span>}
                        </button>
                      </div>
                      <div className="text-[10px] text-[#5C6454] font-medium leading-normal space-y-1">
                        <div><strong>Candidate:</strong> {facilitatorForm.name}</div>
                        <div><strong>Contact:</strong> {facilitatorForm.phone} / {facilitatorForm.email}</div>
                        <div><strong>City:</strong> {facilitatorForm.city}</div>
                        <div><strong>Availability:</strong> {facilitatorForm.availability}</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={handleFormSubmit}
                        className="bg-[#1f310c] hover:bg-[#111a06] text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-full cursor-pointer shadow-sm active:scale-[0.98]"
                      >
                        Launch Mail Client
                      </button>
                      <button
                        onClick={() => resetFormState("careers")}
                        className="border border-[#1f310c]/30 hover:border-[#1f310c] text-[#1f310c] font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-full cursor-pointer"
                      >
                        Start Over
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#1f310c] py-8 text-center text-white/50 text-xs font-sans relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img 
              src="https://res.cloudinary.com/oh1asjml/image/upload/v1783583588/LOGO_for_Ma_ash-removebg-preview_kbvvxq.png" 
              alt="Ma'ash" 
              className="h-8 w-auto object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <span className="text-[8px] uppercase tracking-widest bg-white/10 px-1.5 py-0.5 rounded text-white/70">School</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div>
              "Ma'ash School is part of Ma'ash, enabling finance without limits."
            </div>
            <div className="flex items-center gap-4 text-white/60 text-[11px] mt-1">
              <a 
                href="https://www.linkedin.com/company/maashcollective/?viewAsMember=true" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Linkedin size={12} className="stroke-[1.5]" /> LinkedIn
              </a>
              <span className="text-white/20">|</span>
              <a 
                href="https://www.instagram.com/maashschool/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Instagram size={12} className="stroke-[1.5]" /> Instagram
              </a>
            </div>
          </div>
          <div className="text-[10px] text-white/30">
            © {new Date().getFullYear()} Ma'ash. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
