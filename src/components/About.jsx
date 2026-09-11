import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const COURSES = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Operating Systems',
  'Database Management (DBMS)',
  'Computer Networks',
  'Full-Stack Web Development',
  'Cloud Computing Basics',
];

export default function About() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        {/* Header */}
        <div style={{ marginBottom:'2.75rem' }}>
          <span className="eyebrow">Background</span>
          <h2 className="section-title">Education</h2>
          <p style={{ marginTop:'.5rem', fontSize:'.9375rem', color:'var(--ink-3)', maxWidth:500 }}>
            Building a strong CS foundation while actively shipping real-world projects.
          </p>
        </div>

        {/* Education cards row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'1.25rem', marginBottom:'2rem' }}>

          {/* KCE */}
          <div className="card" style={{ padding:'1.625rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'.625rem', marginBottom:'1rem' }}>
              <div style={{ width:40, height:40, borderRadius:10, background:'var(--blue-light)', border:'1px solid #BFDBFE', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <GraduationCap size={18} color="var(--blue)"/>
              </div>
              <span className="badge badge-green">Current · 2024–2028</span>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'.5rem' }}>
              <div>
                <h3 style={{ fontSize:'1.0625rem', fontWeight:700, color:'var(--ink)', marginBottom:'.3rem' }}>
                  Karpagam College of Engineering
                </h3>
                <p style={{ fontSize:'.875rem', color:'var(--blue)', fontWeight:600, marginBottom:'.25rem' }}>
                  BE — Computer Science & Engineering
                </p>
                <p style={{ fontSize:'.8125rem', color:'var(--ink-4)' }}>
                  Coimbatore, Tamil Nadu, India
                </p>
              </div>
              <div style={{ textAlign:'right', flexShrink:0 }}>
                <div style={{ fontFamily:'Manrope,sans-serif', fontWeight:800, fontSize:'1.625rem', color:'var(--ink)', letterSpacing:'-0.03em', lineHeight:1 }}>7.9</div>
                <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.62rem', color:'var(--ink-4)', textTransform:'uppercase', letterSpacing:'.07em' }}>CGPA</div>
              </div>
            </div>
          </div>

          {/* School */}
          <div className="card" style={{ padding:'1.625rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'.625rem', marginBottom:'1rem' }}>
              <div style={{ width:40, height:40, borderRadius:10, background:'#F3F4F6', border:'1px solid #E5E7EB', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <BookOpen size={18} color="var(--ink-3)"/>
              </div>
              <span className="badge badge-gray">Completed · 2022–2024</span>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'.5rem' }}>
              <div>
                <h3 style={{ fontSize:'1.0625rem', fontWeight:700, color:'var(--ink)', marginBottom:'.3rem' }}>
                  SRT Universal Mat Hr Sec School
                </h3>
                <p style={{ fontSize:'.875rem', color:'var(--ink-2)', fontWeight:500, marginBottom:'.25rem' }}>
                  Higher Secondary — Grade 12 (HSC)
                </p>
                <p style={{ fontSize:'.8125rem', color:'var(--ink-4)' }}>
                  Sathyamangalam, Tamil Nadu, India
                </p>
              </div>
              <div style={{ textAlign:'right', flexShrink:0 }}>
                <div style={{ fontFamily:'Manrope,sans-serif', fontWeight:800, fontSize:'1.625rem', color:'var(--ink)', letterSpacing:'-0.03em', lineHeight:1 }}>78%</div>
                <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.62rem', color:'var(--ink-4)', textTransform:'uppercase', letterSpacing:'.07em' }}>Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Coursework */}
        <div>
          <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.68rem', fontWeight:500, color:'var(--ink-4)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'.875rem' }}>
            Relevant Coursework
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem' }}>
            {COURSES.map(c => <span key={c} className="pill">{c}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
