import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

const SOCIALS = [
  { Icon: GithubIcon,   label: 'GitHub',   handle: 'sidharth756',   url: 'https://github.com/sidharth756',        color: '#111' },
  { Icon: LinkedinIcon, label: 'LinkedIn', handle: 'sidharth56',    url: 'https://linkedin.com/in/sidharth56',    color: '#0A66C2' },
  { Icon: LeetcodeIcon, label: 'LeetCode', handle: 'sidharth9944',  url: 'https://leetcode.com/u/sidharth9944/', color: '#FFA116' },
];

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      style={{
        display:'flex', alignItems:'center', gap:3,
        background:'var(--bg-muted)', border:'1px solid var(--border)',
        borderRadius:'var(--r-xs)', padding:'.2rem .55rem',
        cursor:'pointer', fontFamily:'JetBrains Mono,monospace', fontSize:'.7rem',
        color: copied ? '#059669' : 'var(--ink-4)', transition:'color .15s',
      }}
    >
      {copied ? <Check size={11}/> : <Copy size={11}/>}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    // Simulate send (replace with real API call / FormSubmit / EmailJS etc.)
    setTimeout(() => {
      setStatus('sent');
      setForm({ name:'', email:'', subject:'', message:'' });
      setTimeout(() => setStatus(null), 6000);
    }, 900);
  };

  return (
    <section id="contact" className="section">
      <div className="wrap">
        {/* Header */}
        <div style={{ marginBottom:'3rem' }}>
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p style={{ marginTop:'.5rem', fontSize:'.9375rem', color:'var(--ink-3)', maxWidth:500 }}>
            Open to internships, full-time roles, and open-source collaborations. I reply within 24 hours.
          </p>
        </div>

        {/* Two-column: form + info */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'1fr 420px',
          gap:'2.5rem',
          alignItems:'start',
        }}>

          {/* ── LEFT: Form ── */}
          <div className="card" style={{ padding:'2rem' }}>
            <h3 style={{ fontFamily:'Manrope,sans-serif', fontWeight:700, fontSize:'1.125rem', color:'var(--ink)', marginBottom:'1.5rem' }}>
              Send a Message
            </h3>

            {status === 'sent' && (
              <div style={{
                display:'flex', alignItems:'center', gap:'.6rem',
                padding:'.875rem 1rem', borderRadius:'var(--r-sm)',
                background:'#ECFDF5', border:'1px solid #A7F3D0',
                color:'#059669', fontSize:'.9rem', fontWeight:500,
                marginBottom:'1.25rem',
              }}>
                <Check size={16}/> Message sent! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
              {/* Name + Email row */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                <div>
                  <label style={{ display:'block', fontFamily:'Inter,sans-serif', fontSize:'.78rem', fontWeight:600, color:'var(--ink-3)', marginBottom:'.4rem', textTransform:'uppercase', letterSpacing:'.05em' }}>
                    Name *
                  </label>
                  <input
                    type="text" required className="input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm({...form, name:e.target.value})}
                  />
                </div>
                <div>
                  <label style={{ display:'block', fontFamily:'Inter,sans-serif', fontSize:'.78rem', fontWeight:600, color:'var(--ink-3)', marginBottom:'.4rem', textTransform:'uppercase', letterSpacing:'.05em' }}>
                    Email *
                  </label>
                  <input
                    type="email" required className="input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm({...form, email:e.target.value})}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display:'block', fontFamily:'Inter,sans-serif', fontSize:'.78rem', fontWeight:600, color:'var(--ink-3)', marginBottom:'.4rem', textTransform:'uppercase', letterSpacing:'.05em' }}>
                  Subject
                </label>
                <input
                  type="text" className="input"
                  placeholder="Internship opportunity / Collaboration / Other"
                  value={form.subject}
                  onChange={e => setForm({...form, subject:e.target.value})}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display:'block', fontFamily:'Inter,sans-serif', fontSize:'.78rem', fontWeight:600, color:'var(--ink-3)', marginBottom:'.4rem', textTransform:'uppercase', letterSpacing:'.05em' }}>
                  Message *
                </label>
                <textarea
                  required className="input"
                  placeholder="Tell me about the opportunity or what you'd like to discuss..."
                  value={form.message}
                  onChange={e => setForm({...form, message:e.target.value})}
                />
              </div>

              {/* Submit */}
              <button
                type="submit" className="btn btn-primary"
                disabled={status === 'sending'}
                style={{ justifyContent:'center', padding:'.75rem', fontSize:'.9375rem', marginTop:'.25rem' }}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <><Send size={15}/> Send Message</>
                )}
              </button>
            </form>
          </div>

          {/* ── RIGHT: Contact info ── */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {/* Email */}
            <div className="card" style={{ padding:'1.25rem 1.375rem' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'.875rem' }}>
                  <div style={{ width:38, height:38, borderRadius:9, background:'var(--blue-light)', border:'1px solid #BFDBFE', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <Mail size={16} color="var(--blue)"/>
                  </div>
                  <div>
                    <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.67rem', color:'var(--ink-4)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:'.15rem' }}>Email</div>
                    <a href="mailto:sidharthrk756@gmail.com" style={{ fontFamily:'Inter,sans-serif', fontWeight:600, fontSize:'.9rem', color:'var(--ink)' }}>
                      sidharthrk756@gmail.com
                    </a>
                  </div>
                </div>
                <CopyBtn text="sidharthrk756@gmail.com"/>
              </div>
            </div>

            {/* Phone */}
            <div className="card" style={{ padding:'1.25rem 1.375rem' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'.875rem' }}>
                  <div style={{ width:38, height:38, borderRadius:9, background:'#ECFDF5', border:'1px solid #A7F3D0', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <Phone size={16} color="#059669"/>
                  </div>
                  <div>
                    <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.67rem', color:'var(--ink-4)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:'.15rem' }}>Phone / WhatsApp</div>
                    <a href="tel:+919342755756" style={{ fontFamily:'Inter,sans-serif', fontWeight:600, fontSize:'.9rem', color:'var(--ink)' }}>
                      +91 9342 755 756
                    </a>
                  </div>
                </div>
                <CopyBtn text="+919342755756"/>
              </div>
            </div>

            {/* Location */}
            <div className="card" style={{ padding:'1.25rem 1.375rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'.875rem' }}>
                <div style={{ width:38, height:38, borderRadius:9, background:'#FFF7ED', border:'1px solid #FED7AA', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <MapPin size={16} color="#C2410C"/>
                </div>
                <div>
                  <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.67rem', color:'var(--ink-4)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:'.15rem' }}>Location</div>
                  <div style={{ fontFamily:'Inter,sans-serif', fontWeight:600, fontSize:'.9rem', color:'var(--ink)' }}>
                    Sathyamangalam / Coimbatore, TN
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div style={{ paddingTop:'.25rem' }}>
              <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.67rem', color:'var(--ink-4)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'.75rem' }}>
                Find me online
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'.5rem' }}>
                {SOCIALS.map(({ Icon, label, handle, url, color }) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                    className="card"
                    style={{ padding:'.875rem 1.125rem', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'.75rem', transition:'box-shadow .2s, transform .2s, border-color .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateX(3px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <div style={{ display:'flex', alignItems:'center', gap:'.75rem' }}>
                      <Icon style={{ width:19, height:19, color, flexShrink:0 }}/>
                      <div>
                        <div style={{ fontFamily:'Manrope,sans-serif', fontWeight:700, fontSize:'.875rem', color:'var(--ink)' }}>{label}</div>
                        <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.72rem', color:'var(--ink-4)' }}>/{handle}</div>
                      </div>
                    </div>
                    <ExternalLink size={13} color="var(--ink-4)"/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 860px) {
          #contact .wrap > div:last-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
