import React from 'react';
import { ArrowRight, FileText, ExternalLink, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

const LINKS = [
  { Icon: GithubIcon,   label: 'GitHub',   url: 'https://github.com/sidharth756',        color: '#fff' },
  { Icon: LinkedinIcon, label: 'LinkedIn', url: 'https://linkedin.com/in/sidharth56',    color: '#60A5FA' },
  { Icon: LeetcodeIcon, label: 'LeetCode', url: 'https://leetcode.com/u/sidharth9944/', color: '#FCD34D' },
];

const CODE_LINES = [
  { color: '#94A3B8', text: '// sidharth.dev' },
  { color: '#7DD3FC', text: 'const developer = {' },
  { color: '#94A3B8', text: '  name:' },
  { color: '#86EFAC', text: '    "Sidharth R K",' },
  { color: '#94A3B8', text: '  stack:' },
  { color: '#FCD34D', text: '    ["Java","Spring","React"],' },
  { color: '#94A3B8', text: '  cgpa:' },
  { color: '#F9A8D4', text: '    7.9,' },
  { color: '#94A3B8', text: '  available:' },
  { color: '#86EFAC', text: '    true,' },
  { color: '#7DD3FC', text: '};' },
];

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="hero-section">

      {/* ── LEFT: text content ── */}
      <div className="hero-left">
        {/* Location pill */}
        <div style={{ display:'flex', alignItems:'center', gap:'.4rem', marginBottom:'2rem' }}>
          <span style={{
            display:'inline-flex', alignItems:'center', gap:'.4rem',
            padding:'.28rem .75rem', borderRadius:999,
            background:'#ECFDF5', color:'#059669',
            border:'1px solid #A7F3D0',
            fontFamily:'Inter,sans-serif', fontWeight:600, fontSize:'.75rem',
          }}>
            <span style={{ width:6, height:6, background:'#10B981', borderRadius:'50%' }}/>
            Open to Opportunities
          </span>
          <span style={{
            display:'inline-flex', alignItems:'center', gap:'.3rem',
            fontFamily:'JetBrains Mono,monospace', fontSize:'.72rem', color:'var(--ink-4)',
          }}>
            <MapPin size={11}/> Coimbatore, India
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily:'Manrope,sans-serif', fontWeight:900,
          fontSize:'clamp(3rem,6.5vw,5rem)',
          color:'var(--ink)', letterSpacing:'-0.04em',
          lineHeight:1.0, marginBottom:'.75rem',
        }}>
          Sidharth<br/>R K
        </h1>

        {/* Role */}
        <div style={{
          fontFamily:'Inter,sans-serif', fontWeight:500,
          fontSize:'clamp(1rem,2vw,1.25rem)',
          color:'var(--blue)', marginBottom:'1.5rem',
          letterSpacing:'-0.01em',
        }}>
          Software Engineer &nbsp;·&nbsp; Full-Stack Developer
        </div>

        {/* Bio */}
        <p style={{
          fontSize:'1rem', color:'var(--ink-3)', lineHeight:1.8,
          maxWidth:500, marginBottom:'2.25rem',
        }}>
          CS Engineering student at{' '}
          <strong style={{ color:'var(--ink-2)', fontWeight:600 }}>Karpagam College of Engineering</strong>{' '}
          (CGPA 7.9) and <strong style={{ color:'var(--ink-2)', fontWeight:600 }}>Associate Head</strong> of the
          Software Development Club. Building microservices, full-stack platforms, and
          blockchain verification systems.
        </p>

        {/* CTAs */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.75rem', marginBottom:'2.5rem' }}>
          <button id="hero-resume-btn" className="btn btn-primary" onClick={onOpenResume}>
            <FileText size={15}/>
            View Resume
          </button>
          <a href="#projects" className="btn btn-outline">
            View Projects <ArrowRight size={14}/>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let's Talk
          </a>
        </div>

        {/* Social */}
        <div style={{
          display:'flex', alignItems:'center', gap:'1.5rem',
          paddingTop:'2rem', borderTop:'1px solid var(--border)',
        }}>
          {LINKS.map(({ Icon, label, url }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer"
              style={{
                display:'flex', alignItems:'center', gap:'.4rem',
                fontSize:'.8375rem', fontWeight:500,
                color:'var(--ink-3)', transition:'color .15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-3)'}
            >
              <Icon style={{ width:16, height:16 }}/>{label}
            </a>
          ))}
        </div>
      </div>

      {/* ── RIGHT: dark panel with code card ── */}
      <div className="hero-right">
        <div className="dot-grid"/>

        <div className="code-card">
          {/* Terminal header dots */}
          <div style={{ display:'flex', gap:6, marginBottom:'1.25rem' }}>
            {['#FF5F57','#FEBC2E','#28C840'].map(c => (
              <span key={c} style={{ width:11, height:11, borderRadius:'50%', background:c }}/>
            ))}
          </div>

          {/* Code lines */}
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.83rem', lineHeight:1.9 }}>
            {CODE_LINES.map((l, i) => (
              <div key={i} style={{ color: l.color }}>{l.text}</div>
            ))}
          </div>

          {/* Blinking cursor */}
          <div style={{
            display:'inline-block', width:9, height:17, borderRadius:2,
            background:'rgba(255,255,255,.5)', marginTop:4,
            animation:'blink 1.1s step-start infinite',
          }}/>
        </div>

        {/* Floating stat chips */}
        {[
          { val:'7.9', lbl:'CGPA', top:'18%', right:'8%' },
          { val:'3+', lbl:'Projects', bottom:'22%', right:'6%' },
        ].map(({ val, lbl, ...pos }) => (
          <div key={lbl} style={{
            position:'absolute', ...pos,
            background:'rgba(255,255,255,.1)',
            border:'1px solid rgba(255,255,255,.15)',
            borderRadius:var_r,
            padding:'.5rem .875rem', backdropFilter:'blur(6px)',
            textAlign:'center',
          }}>
            <div style={{ fontFamily:'Manrope,sans-serif', fontWeight:800, fontSize:'1.1rem', color:'#fff' }}>{val}</div>
            <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.62rem', color:'rgba(255,255,255,.5)', letterSpacing:'.08em', textTransform:'uppercase' }}>{lbl}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}

// inline var helper
const var_r = 'var(--r)';
