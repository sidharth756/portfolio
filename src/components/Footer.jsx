import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

const SOCIALS = [
  { Icon: GithubIcon,   label: 'GitHub',   url: 'https://github.com/sidharth756' },
  { Icon: LinkedinIcon, label: 'LinkedIn', url: 'https://linkedin.com/in/sidharth56' },
  { Icon: LeetcodeIcon, label: 'LeetCode', url: 'https://leetcode.com/u/sidharth9944/' },
];

const NAV = [
  { label: 'About',      href: '#education' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Footer() {
  return (
    <footer style={{ background:'var(--ink)', borderTop:'1px solid rgba(255,255,255,.06)', padding:'3rem 0 2rem' }}>
      <div className="wrap">
        {/* Top row */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:'2rem', alignItems:'start', marginBottom:'2.5rem', flexWrap:'wrap' }}>
          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'.625rem', marginBottom:'.875rem' }}>
              <div style={{ width:32, height:32, borderRadius:7, background:'var(--blue)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Manrope,sans-serif', fontWeight:800, fontSize:'.875rem', color:'#fff' }}>S</div>
              <span style={{ fontFamily:'Manrope,sans-serif', fontWeight:700, fontSize:'1rem', color:'#fff' }}>Sidharth R K</span>
            </div>
            <p style={{ fontFamily:'Inter,sans-serif', fontSize:'.875rem', color:'rgba(255,255,255,.45)', lineHeight:1.7, maxWidth:340 }}>
              Software Engineer & Full-Stack Developer based in Coimbatore, India.
              Building things with Java, Spring Boot, React & Node.js.
            </p>
            {/* Social */}
            <div style={{ display:'flex', gap:'.375rem', marginTop:'1.25rem' }}>
              {SOCIALS.map(({ Icon, label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                  title={label}
                  style={{
                    width:36, height:36, borderRadius:'var(--r-sm)',
                    border:'1px solid rgba(255,255,255,.1)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:'rgba(255,255,255,.5)', transition:'background .15s, color .15s, border-color .15s',
                    textDecoration:'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,.08)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='rgba(255,255,255,.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='rgba(255,255,255,.5)'; e.currentTarget.style.borderColor='rgba(255,255,255,.1)'; }}
                >
                  <Icon style={{ width:16, height:16 }}/>
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.68rem', fontWeight:500, color:'rgba(255,255,255,.3)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'.875rem' }}>
              Navigation
            </div>
            <nav style={{ display:'flex', flexDirection:'column', gap:'.4rem' }}>
              {NAV.map(l => (
                <a key={l.label} href={l.href}
                  style={{
                    fontFamily:'Inter,sans-serif', fontSize:'.875rem', fontWeight:500,
                    color:'rgba(255,255,255,.5)', textDecoration:'none', transition:'color .15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color='rgba(255,255,255,.9)'}
                  onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,.5)'}
                >{l.label}</a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display:'flex', flexWrap:'wrap',
          alignItems:'center', justifyContent:'space-between', gap:'1rem',
          paddingTop:'1.5rem', borderTop:'1px solid rgba(255,255,255,.07)',
        }}>
          <span style={{ fontFamily:'Inter,sans-serif', fontSize:'.8125rem', color:'rgba(255,255,255,.3)' }}>
            © {new Date().getFullYear()} Sidharth R K · Built with React & Vite
          </span>
          <button
            onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            style={{
              display:'flex', alignItems:'center', gap:'.4rem',
              background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.1)',
              borderRadius:'var(--r-sm)', padding:'.4rem .75rem',
              fontFamily:'Inter,sans-serif', fontSize:'.78rem', fontWeight:500,
              color:'rgba(255,255,255,.5)', cursor:'pointer', transition:'background .15s, color .15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,.12)'; e.currentTarget.style.color='rgba(255,255,255,.85)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,.07)'; e.currentTarget.style.color='rgba(255,255,255,.5)'; }}
          >
            <ArrowUp size={13}/> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
