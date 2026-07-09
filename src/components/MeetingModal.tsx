import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Check, Sparkles, Send, ArrowRight, ArrowLeft } from "lucide-react";
import { BookingForm } from "../types";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MeetingModal({ isOpen, onClose }: MeetingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [duration, setDuration] = useState<string>("30 mins");
  const [form, setForm] = useState<BookingForm>({
    name: "",
    email: "",
    organization: "",
    date: "",
    timeSlot: "",
    purpose: "Classroom Integration",
  });

  const durationOptions = [
    { label: "15 mins", desc: "Introductory Discovery Call", value: "15 mins" },
    { label: "30 mins", desc: "Curriculum Integration Deep-Dive", value: "30 mins" },
    { label: "60 mins", desc: "Institutional Partnership Board", value: "60 mins" },
  ];

  // Dynamically generate upcoming weekdays starting from Wed, Jul 8, 2026
  const weekdays = [
    { day: "Thu", date: "Jul 9, 2026", iso: "2026-07-09" },
    { day: "Fri", date: "Jul 10, 2026", iso: "2026-07-10" },
    { day: "Mon", date: "Jul 13, 2026", iso: "2026-07-13" },
    { day: "Tue", date: "Jul 14, 2026", iso: "2026-07-14" },
    { day: "Wed", date: "Jul 15, 2026", iso: "2026-07-15" },
  ];

  const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (dateStr: string) => {
    setForm((prev) => ({ ...prev, date: dateStr }));
  };

  const handleTimeSelect = (timeStr: string) => {
    setForm((prev) => ({ ...prev, timeSlot: timeStr }));
  };

  const isStep1Valid = form.date !== "" && form.timeSlot !== "";
  const isStep2Valid = form.name.trim() !== "" && form.email.trim() !== "" && form.organization.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isStep2Valid) {
      setStep(3);
    }
  };

  const resetModal = () => {
    setStep(1);
    setForm({
      name: "",
      email: "",
      organization: "",
      date: "",
      timeSlot: "",
      purpose: "Classroom Integration",
    });
    onClose();
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
            onClick={resetModal}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#FAF8F5] border border-[#6E5A0B]/10 text-[#1C2414] shadow-2xl z-10"
            id="meeting-modal-content"
          >
            {/* Top decorative gradient border */}
            <div className="h-2 w-full bg-gradient-to-r from-[#6E5A0B] via-[#917610] to-[#1F2E14]" />

            {/* Close Button */}
            <button
              onClick={resetModal}
              className="absolute top-5 right-5 p-2 rounded-full text-[#1C2414]/50 hover:bg-[#1C2414]/5 hover:text-[#1C2414] transition-colors"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-8">
              {/* Logo / Header */}
              <div className="mb-6 flex items-center gap-2">
                <img 
                  src="https://res.cloudinary.com/oh1asjml/image/upload/v1783583588/LOGO_for_Ma_ash-removebg-preview_kbvvxq.png" 
                  alt="Ma'ash" 
                  className="h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#705C16]/10 text-[#705C16] rounded-full uppercase tracking-wider ml-1">
                  Consultation
                </span>
              </div>

              {/* Steps Progress Indicator */}
              {step < 3 && (
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                        step === 1 ? "bg-[#705C16] text-white" : "bg-[#705C16]/10 text-[#705C16]"
                      }`}
                    >
                      1
                    </div>
                    <span className={`text-xs font-medium ${step === 1 ? "text-[#1C2414] font-semibold" : "text-[#1C2414]/50"}`}>
                      Time & Date
                    </span>
                  </div>
                  <div className="h-[1px] flex-1 bg-[#6E5A0B]/20" />
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                        step === 2 ? "bg-[#705C16] text-white" : "bg-white border border-[#6E5A0B]/20 text-[#1C2414]/40"
                      }`}
                    >
                      2
                    </div>
                    <span className={`text-xs font-medium ${step === 2 ? "text-[#1C2414] font-semibold" : "text-[#1C2414]/50"}`}>
                      Your Details
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 1: SELECT DURATION AND TIME */}
              {step === 1 && (
                <div>
                  <h3 className="font-serif text-2xl font-semibold tracking-tight text-[#1C2414] mb-1">
                    Select meeting type and date
                  </h3>
                  <p className="text-sm text-[#5C6454] mb-6">
                    Connect with our education integration coordinators. Let us bring finance to your students.
                  </p>

                  {/* Duration Selection */}
                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-[#1C2414]/70 uppercase tracking-wider mb-2">
                      1. Choose Duration
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {durationOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setDuration(opt.value)}
                          className={`p-4 rounded-xl text-left border transition-all ${
                            duration === opt.value
                              ? "border-[#705C16] bg-[#705C16]/5 ring-1 ring-[#705C16]/20"
                              : "border-[#6E5A0B]/10 hover:border-[#6E5A0B]/40 hover:bg-[#1C2414]/2"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 font-bold text-[#1C2414] text-sm">
                            <Clock size={14} className="text-[#705C16]" />
                            {opt.label}
                          </div>
                          <div className="text-[11px] text-[#5C6454] mt-1.5 leading-tight">{opt.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-[#1C2414]/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#705C16]" />
                      2. Select a Date
                    </label>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#705C16]/10">
                      {weekdays.map((wd) => (
                        <button
                          key={wd.iso}
                          type="button"
                          onClick={() => handleDateSelect(wd.iso)}
                          className={`flex-shrink-0 px-4 py-3 rounded-xl border text-center transition-all min-w-[90px] ${
                            form.date === wd.iso
                              ? "border-[#705C16] bg-[#705C16] text-white"
                              : "border-[#6E5A0B]/10 hover:border-[#6E5A0B]/40 hover:bg-[#1C2414]/2"
                          }`}
                        >
                          <div className={`text-xs uppercase tracking-wider font-semibold ${form.date === wd.iso ? "text-white/80" : "text-[#1C2414]/50"}`}>
                            {wd.day}
                          </div>
                          <div className="text-sm font-bold mt-1">{wd.date.split(",")[0]}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div className="mb-8">
                    <label className="block text-xs font-semibold text-[#1C2414]/70 uppercase tracking-wider mb-2">
                      3. Select Time (Pakistan Standard Time)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {timeSlots.map((ts) => (
                        <button
                          key={ts}
                          type="button"
                          onClick={() => handleTimeSelect(ts)}
                          className={`py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all ${
                            form.timeSlot === ts
                              ? "border-[#705C16] bg-[#705C16] text-white"
                              : "border-[#6E5A0B]/10 hover:border-[#6E5A0B]/40 hover:bg-[#1C2414]/2"
                          }`}
                        >
                          {ts}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-3 border-t border-[#6E5A0B]/10 pt-5">
                    <button
                      type="button"
                      onClick={resetModal}
                      className="px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-[#1C2414]/60 hover:text-[#1C2414] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      disabled={!isStep1Valid}
                      onClick={() => setStep(2)}
                      className={`px-6 py-2.5 text-xs font-bold tracking-wide uppercase rounded-full flex items-center gap-1.5 transition-all ${
                        isStep1Valid
                          ? "bg-[#705C16] text-white hover:bg-[#5C4A0F] active:scale-[0.98]"
                          : "bg-[#1C2414]/10 text-[#1C2414]/30 cursor-not-allowed"
                      }`}
                    >
                      Continue
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: GUEST DETAILS FORM */}
              {step === 2 && (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-serif text-2xl font-semibold tracking-tight text-[#1C2414] mb-1">
                    Share details with us
                  </h3>
                  <p className="text-sm text-[#5C6454] mb-6">
                    Please provide your contact details so we can send the video-meeting invite link.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C2414]/70 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Adeel Ahmed"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#6E5A0B]/20 bg-white text-sm text-[#1C2414] focus:outline-none focus:border-[#705C16] focus:ring-1 focus:ring-[#705C16]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1C2414]/70 uppercase tracking-wider mb-1.5">
                        Work/Personal Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="e.g. adeel@school.pk"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#6E5A0B]/20 bg-white text-sm text-[#1C2414] focus:outline-none focus:border-[#705C16] focus:ring-1 focus:ring-[#705C16]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C2414]/70 uppercase tracking-wider mb-1.5">
                        School / Organization *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        required
                        value={form.organization}
                        onChange={handleInputChange}
                        placeholder="e.g. Beaconhouse Lahore"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#6E5A0B]/20 bg-white text-sm text-[#1C2414] focus:outline-none focus:border-[#705C16] focus:ring-1 focus:ring-[#705C16]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1C2414]/70 uppercase tracking-wider mb-1.5">
                        Collaboration Purpose
                      </label>
                      <select
                        name="purpose"
                        value={form.purpose}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#6E5A0B]/20 bg-white text-sm text-[#1C2414] focus:outline-none focus:border-[#705C16] focus:ring-1 focus:ring-[#705C16]/20"
                      >
                        <option value="Classroom Integration">School Curriculum Integration</option>
                        <option value="Home Learning Support">Home-based Financial Literacy Kits</option>
                        <option value="Workplace Workshop">Corporate Workplace Finance</option>
                        <option value="Partnership Proposal">Institutional Partnership</option>
                        <option value="General Query">General Inquiry / Media</option>
                      </select>
                    </div>
                  </div>

                  {/* Summary of Selected Slot */}
                  <div className="p-4 bg-[#705C16]/5 border border-[#705C16]/10 rounded-2xl mb-8 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 text-xs">
                      <div className="w-8 h-8 rounded-full bg-[#705C16]/10 flex items-center justify-center text-[#705C16]">
                        <Clock size={14} />
                      </div>
                      <div>
                        <div className="font-bold text-[#1C2414]">{duration} Briefing Call</div>
                        <div className="text-[#5C6454] mt-0.5">
                          {weekdays.find((w) => w.iso === form.date)?.date} at {form.timeSlot} PKT
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-bold text-[#705C16] hover:underline"
                    >
                      Change slot
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center border-t border-[#6E5A0B]/10 pt-5">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 text-xs font-bold tracking-wide uppercase text-[#1C2414]/60 hover:text-[#1C2414] flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft size={14} />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!isStep2Valid}
                      className={`px-6 py-2.5 text-xs font-bold tracking-wide uppercase rounded-full flex items-center gap-1.5 transition-all ${
                        isStep2Valid
                          ? "bg-[#705C16] text-white hover:bg-[#5C4A0F] active:scale-[0.98]"
                          : "bg-[#1C2414]/10 text-[#1C2414]/30 cursor-not-allowed"
                      }`}
                    >
                      Confirm Booking
                      <Send size={13} />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: BOOKING SUCCESS CONFIRMATION */}
              {step === 3 && (
                <div className="text-center py-6">
                  {/* Animated Check Ring */}
                  <div className="mx-auto w-16 h-16 bg-[#705C16]/10 text-[#705C16] rounded-full flex items-center justify-center mb-5">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    >
                      <Check size={32} className="stroke-[3]" />
                    </motion.div>
                  </div>

                  <h3 className="font-serif text-3xl font-semibold tracking-tight text-[#1C2414] mb-2 flex justify-center items-center gap-2">
                    Meeting Confirmed!
                    <Sparkles className="text-[#705C16] fill-[#705C16]" size={20} />
                  </h3>
                  <p className="text-sm text-[#5C6454] max-w-md mx-auto mb-8">
                    Congratulations, <span className="font-semibold text-[#1C2414]">{form.name}</span>. Your briefing slot for <span className="font-semibold text-[#1C2414]">{form.organization}</span> is locked in!
                  </p>

                  {/* Summary card */}
                  <div className="max-w-md mx-auto p-5 bg-white border border-[#6E5A0B]/10 rounded-2xl text-left shadow-sm mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#705C16] mb-3">
                      Booking Summary
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-[#1C2414]">
                        <Clock size={16} className="text-[#705C16]" />
                        <span><strong>Duration:</strong> {duration} Video Conference</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#1C2414]">
                        <Calendar size={16} className="text-[#705C16]" />
                        <span>
                          <strong>Date/Time:</strong> {weekdays.find((w) => w.iso === form.date)?.date} at {form.timeSlot} (PKT)
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-[#1C2414] border-t border-[#6E5A0B]/10 pt-3 mt-1 text-xs">
                        <div className="w-2 h-2 rounded-full bg-[#705C16] mt-1.5" />
                        <div>
                          <strong>Conference Link:</strong> We have dispatched an email confirmation with an automated Google Meet access invite to <span className="text-[#705C16] font-medium">{form.email}</span>.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Finish Button */}
                  <button
                    onClick={resetModal}
                    className="px-8 py-3 bg-[#705C16] text-white font-bold text-xs tracking-wider uppercase rounded-full hover:bg-[#5C4A0F] transition-all shadow-sm active:scale-[0.98]"
                  >
                    Return to Home
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
