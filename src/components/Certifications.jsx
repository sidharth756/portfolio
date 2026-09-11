import React from 'react';
import { ShieldCheck } from 'lucide-react';

const CERTS = [
  { title: 'C Programming',                       issuer: 'Spoken Tutorial — IIT Bombay',  cat: 'Programming',   catCls: 'badge-blue'   },
  { title: 'Java Programming',                     issuer: 'Spoken Tutorial — IIT Bombay',  cat: 'Programming',   catCls: 'badge-blue'   },
  { title: 'Soft Skill Development',               issuer: 'NPTEL',                         cat: 'Professional',  catCls: 'badge-amber'  },
  { title: 'Fundamentals of DBMS',                 issuer: 'Simplilearn',                   cat: 'Database',      catCls: 'badge-green'  },
  { title: 'The Art & Science of Communication',   issuer: 'Springboard',                   cat: 'Communication', catCls: 'badge-purple' },
];

const ICON_STYLE = {
  'badge-blue':   { bg:'#EFF6FF', border:'#BFDBFE', color:'var(--blue)' },
  'badge-green':  { bg:'#ECFDF5', border:'#A7F3D0', color:'#059669'     },
  'badge-amber':  { bg:'#FFFBEB', border:'#FDE68A', color:'#B45309'     },
  'badge-purple': { bg:'#FAF5FF', border:'#DDD6FE', color:'#7C3AED'     },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="wrap">
        {/* Header */}
        <div style={{ marginBottom:'2.75rem' }}>
          <span className="eyebrow">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p style={{ marginTop:'.5rem', fontSize:'.9375rem', color:'var(--ink-3)', maxWidth:500 }}>
            Verified course completions from accredited platforms and institutions.
          </p>
        </div>

        {/* Cert cards grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'1rem' }}>
          {CERTS.map((cert, i) => {
            const st = ICON_STYLE[cert.catCls];
            return (
              <div key={i} className="card" style={{ padding:'1.25rem 1.375rem', display:'flex', alignItems:'center', gap:'.875rem' }}>
                <div style={{
                  width:40, height:40, borderRadius:10, flexShrink:0,
                  background:st.bg, border:`1px solid ${st.border}`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <ShieldCheck size={18} color={st.color}/>
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontFamily:'Manrope,sans-serif', fontWeight:700, fontSize:'.9375rem', color:'var(--ink)', marginBottom:'.2rem', lineHeight:1.3 }}>
                    {cert.title}
                  </div>
                  <div style={{ fontSize:'.8125rem', color:'var(--ink-4)', marginBottom:'.4rem' }}>
                    {cert.issuer}
                  </div>
                  <span className={`badge ${cert.catCls}`} style={{ fontSize:'.68rem' }}>
                    {cert.cat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
