import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';

const NAV = [
  { label: 'About',      href: '#education' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [solid, setSolid]     = useState(false);
  const [open,  setOpen]      = useState(false);

  useEffect(() => {
    const h = () => setSolid(window.scrollY > 10);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header className={`nav${solid ? ' solid' : ''}`}>
      <div className="wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:'var(--nav-h)' }}>

        {/* Logo */}
        <a href="#home" style={{ display:'flex', alignItems:'center', gap:'.625rem', textDecoration:'none' }}>
          <div style={{
            width:34, height:34, borderRadius:8,
            background:'var(--blue)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily:'Manrope,sans-serif', fontWeight:800, fontSize:'.9rem', color:'#fff',
            flexShrink:0,
          }}>S</div>
          <div>
            <div style={{ fontFamily:'Manrope,sans-serif', fontWeight:700, fontSize:'.9375rem', color:'var(--ink)', lineHeight:1.2 }}>
              Sidharth R K
            </div>
            <div style={{ fontFamily:'Inter,sans-serif', fontSize:'.7rem', color:'var(--ink-4)', lineHeight:1 }}>
              Software Engineer
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav id="desk-nav" style={{ display:'flex', alignItems:'center', gap:2 }}>
          {NAV.map(l => (
            <a key={l.label} href={l.href}
              style={{
                padding:'.45rem .875rem', borderRadius:'var(--r-sm)',
                fontFamily:'Inter,sans-serif', fontSize:'.875rem', fontWeight:500,
                color:'var(--ink-3)', textDecoration:'none',
                transition:'background .15s, color .15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='var(--bg-hover)'; e.currentTarget.style.color='var(--ink)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--ink-3)'; }}
            >{l.label}</a>
          ))}
          <button
            id="nav-resume-btn" className="btn btn-primary"
            onClick={onOpenResume}
            style={{ marginLeft:'.75rem', fontSize:'.825rem' }}
          >
            <FileText size={14}/> Resume
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          id="mob-toggle"
          onClick={() => setOpen(o => !o)}
          style={{
            display:'none', padding:'.4rem', borderRadius:'var(--r-sm)',
            background:'transparent', border:'1px solid var(--border)',
            cursor:'pointer', color:'var(--ink-3)',
          }}
          aria-label="Toggle menu"
        >
          {open ? <X size={18}/> : <Menu size={18}/>}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position:'absolute', top:'var(--nav-h)', left:0, right:0,
          background:'var(--bg-surface)',
          borderBottom:'1px solid var(--border)',
          boxShadow:'var(--sh-md)',
          padding:'1rem 1.25rem 1.25rem',
        }}>
          {NAV.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{
                display:'block', padding:'.65rem .75rem', borderRadius:'var(--r-sm)',
                fontSize:'.9375rem', fontWeight:500, color:'var(--ink-3)',
                textDecoration:'none', transition:'background .15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background='var(--bg-hover)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}
            >{l.label}</a>
          ))}
          <div style={{ marginTop:'.75rem', paddingTop:'.75rem', borderTop:'1px solid var(--border)' }}>
            <button className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }}
              onClick={() => { setOpen(false); onOpenResume(); }}>
              <FileText size={14}/> View Resume
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #desk-nav { display: none !important; }
          #mob-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
