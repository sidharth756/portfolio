import React, { useState } from 'react';
import { Mail, Phone, MapPin, Code, Copy, Check, Send, Sparkles, Terminal } from 'lucide-react';
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
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-slate-400 text-base">
            Open for software engineering opportunities, internships, microservices projects, or technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3 group hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy('sidharthrk756@gmail.com', 'email')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</h4>
                <a href="mailto:sidharthrk756@gmail.com" className="text-base font-bold text-white hover:text-cyan-300 transition-colors">
                  sidharthrk756@gmail.com
                </a>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3 group hover:border-emerald-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy('+91-9342755756', 'phone')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-emerald-400" />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                <a href="tel:+919342755756" className="text-base font-bold text-white hover:text-emerald-300 transition-colors">
                  +91-9342755756
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</h4>
                <p className="text-base font-bold text-white">Sathyamangalam / Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Verified Profiles Box */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Verified Developer Links</span>
              </h4>

              <div className="space-y-2">
                <a
                  href="https://github.com/sidharth756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 hover:text-white hover:border-cyan-500/40 text-xs font-medium transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>github.com/sidharth756</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/sidharth56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 hover:text-white hover:border-indigo-500/40 text-xs font-medium transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                    <span>linkedin.com/in/sidharth56</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">LinkedIn</span>
                </a>

                <a
                  href="https://leetcode.com/u/sidharth9944/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 hover:text-white hover:border-amber-500/40 text-xs font-medium transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <LeetcodeIcon className="w-4 h-4 text-amber-400" />
                    <span>leetcode.com/u/sidharth9944/</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Have a question, opportunity, or collaboration idea? Fill out the form below.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2 animate-in fade-in duration-200">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Project Inquiry / Software Role"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
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
