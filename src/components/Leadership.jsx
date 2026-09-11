import React from 'react';
import { Users, CheckCircle2 } from 'lucide-react';

const BULLETS = [
  { bold: 'Software Development:', text: 'Built custom tools streamlining college administrative operations and student management systems.' },
  { bold: 'Event Management:', text: 'Organized coding workshops, competitive hackathons, and technical quizzes for 200+ students across multiple semesters.' },
  { bold: 'Quiz Platform:', text: 'Led development of an interactive quiz web application actively deployed across college symposiums and technical workshops.' },
];

export default function Leadership() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        {/* Header */}
        <div style={{ marginBottom:'2.75rem' }}>
          <span className="eyebrow">Leadership</span>
          <h2 className="section-title">Experience</h2>
          <p style={{ marginTop:'.5rem', fontSize:'.9375rem', color:'var(--ink-3)', maxWidth:500 }}>
            Technical leadership and hands-on engineering at the Software Development Club.
          </p>
        </div>

        {/* Single experience card */}
        <div className="card" style={{ padding:'2rem', maxWidth:860 }}>
          {/* Role header */}
          <div style={{
            display:'flex', flexWrap:'wrap', justifyContent:'space-between',
            alignItems:'flex-start', gap:'1rem',
            marginBottom:'1.5rem', paddingBottom:'1.5rem', borderBottom:'1px solid var(--border)',
          }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'.6rem' }}>
                <div style={{
                  width:38, height:38, borderRadius:9,
                  background:'var(--blue-light)', border:'1px solid #BFDBFE',
                  display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                }}>
                  <Users size={17} color="var(--blue)"/>
                </div>
                <span className="badge badge-blue" style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.68rem', letterSpacing:'.08em' }}>
                  ASSOCIATE HEAD
                </span>
              </div>
              <h3 style={{ fontFamily:'Manrope,sans-serif', fontWeight:800, fontSize:'1.125rem', color:'var(--ink)', marginBottom:'.3rem', letterSpacing:'-0.02em' }}>
                Software Development Club (SDC)
              </h3>
              <p style={{ fontSize:'.875rem', color:'var(--ink-3)' }}>
                Karpagam College of Engineering — Coimbatore, Tamil Nadu
              </p>
            </div>
            <div style={{ textAlign:'right', flexShrink:0 }}>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.75rem', color:'var(--ink-4)', lineHeight:1.5 }}>
                Oct 2024 – Present
              </div>
              <span className="badge badge-green" style={{ marginTop:'.4rem' }}>
                <span style={{ width:6, height:6, background:'#10B981', borderRadius:'50%' }}/>
                Active
              </span>
            </div>
          </div>

          {/* Summary */}
          <p style={{ fontSize:'.9375rem', color:'var(--ink-3)', lineHeight:1.78, marginBottom:'1.375rem' }}>
            Directing student software development teams for college operations, mentoring peers in full-stack
            programming, and organizing technical competitions and workshops for the wider developer community.
          </p>

          {/* Bullets */}
          <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.75rem' }}>
            {BULLETS.map((b, i) => (
              <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:'.75rem', fontSize:'.9rem', color:'var(--ink-3)', lineHeight:1.7 }}>
                <CheckCircle2 size={16} color="#10B981" style={{ flexShrink:0, marginTop:'.2em' }}/>
                <span>
                  <strong style={{ color:'var(--ink)', fontWeight:600 }}>{b.bold}</strong>{' '}{b.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
