import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-[#121418] border-t border-[#262A32]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Contact
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Get in touch for software engineering inquiries, internships, or collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Box */}
            <div className="pro-card p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase">Email</span>
                <button
                  onClick={() => handleCopy('sidharthrk756@gmail.com', 'email')}
                  className="px-2.5 py-1 rounded bg-[#20242C] text-xs text-slate-300 hover:text-white border border-[#2F3542] flex items-center gap-1"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a href="mailto:sidharthrk756@gmail.com" className="text-base font-bold text-white hover:text-sky-400">
                sidharthrk756@gmail.com
              </a>
            </div>

            {/* Phone Box */}
            <div className="pro-card p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase">Phone / WhatsApp</span>
                <button
                  onClick={() => handleCopy('+91-9342755756', 'phone')}
                  className="px-2.5 py-1 rounded bg-[#20242C] text-xs text-slate-300 hover:text-white border border-[#2F3542] flex items-center gap-1"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a href="tel:+919342755756" className="text-base font-bold text-white hover:text-sky-400">
                +91-9342755756
              </a>
            </div>

            {/* Location Box */}
            <div className="pro-card p-5 space-y-1">
              <span className="text-xs font-mono text-slate-400 uppercase">Location</span>
              <p className="text-sm font-semibold text-white">Sathyamangalam / Coimbatore, Tamil Nadu, India</p>
            </div>

            {/* Social Links */}
            <div className="pro-card p-5 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase">Online Profiles</span>
              <div className="space-y-2 text-xs">
                <a
                  href="https://github.com/sidharth756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded bg-[#1A1D23] text-slate-300 hover:text-white border border-[#292E38]"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-slate-400" />
                    <span>github.com/sidharth756</span>
                  </span>
                  <span className="text-slate-500 font-mono">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/sidharth56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded bg-[#1A1D23] text-slate-300 hover:text-white border border-[#292E38]"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-slate-400" />
                    <span>linkedin.com/in/sidharth56</span>
                  </span>
                  <span className="text-slate-500 font-mono">LinkedIn</span>
                </a>

                <a
                  href="https://leetcode.com/u/sidharth9944/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded bg-[#1A1D23] text-slate-300 hover:text-white border border-[#292E38]"
                >
                  <span className="flex items-center gap-2">
                    <LeetcodeIcon className="w-4 h-4 text-slate-400" />
                    <span>leetcode.com/u/sidharth9944/</span>
                  </span>
                  <span className="text-slate-500 font-mono">LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="pro-card p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white">Send Message</h3>

              {submitted && (
                <div className="p-3.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 rounded bg-[#121418] border border-[#2B303C] text-white text-xs focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-3.5 py-2.5 rounded bg-[#121418] border border-[#2B303C] text-white text-xs focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Project Inquiry"
                    className="w-full px-3.5 py-2.5 rounded bg-[#121418] border border-[#2B303C] text-white text-xs focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Message *</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message..."
                    className="w-full px-3.5 py-2.5 rounded bg-[#121418] border border-[#2B303C] text-white text-xs focus:border-sky-400 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded font-semibold text-xs bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
