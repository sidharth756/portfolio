import React, { useState, useRef, useEffect } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight, ImageIcon, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

const PROJECTS = [
  {
    id: 'credencify',
    name: 'Credencify',
    tagline: 'Blockchain Credential Verification',
    shortDesc: 'Tamper-proof digital certificate verification on Ethereum blockchain.',
    description:
      'A decentralized credential verification infrastructure that eliminates academic and professional certificate forgery using on-chain cryptographic proofs. Built with Java Spring Boot microservices, Solidity smart contracts, and a React dashboard.',
    highlights: [
      'Java Spring Boot REST microservices for auth, certificate issuance & cryptographic hashing',
      'Solidity smart contracts for immutable on-chain Ethereum record keeping',
      'React dashboard for instant QR-based certificate verification',
      'Eliminates certificate forgery for institutions using decentralized cryptographic proofs',
      'Microservices architecture with independent deployable services',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'Solidity', 'Ethereum', 'MySQL', 'Microservices'],
    status: 'In Progress',
    statusCls: 'badge-blue',
    year: '2025',
    githubUrl: 'https://github.com/sidharth756',
    // image: '/images/credencify.png',  ← drop your image here
    accentColor: '#2563EB',
    accentBg: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
  },
  {
    id: 'resource-hub',
    name: 'Resource Hub',
    tagline: 'Academic Resource Search Engine',
    shortDesc: 'Centralized platform with 45% faster resource discovery via MySQL indexing.',
    description:
      'A centralized web platform to organize and access academic and technical learning resources. Features optimized composite MySQL indexing for sub-50ms multi-tag retrieval, full RESTful API, and a clean responsive interface.',
    highlights: [
      'MySQL composite indexing achieving sub-50ms multi-tag document retrieval',
      'Node.js & Express REST API for upload, categorization and management',
      'Advanced search with tag-based filtering across thousands of resources',
      '45% improvement in resource discovery speed',
      'Responsive design for desktop and mobile users',
    ],
    tags: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    status: 'Completed',
    statusCls: 'badge-green',
    year: 'Jul 2025',
    githubUrl: 'https://github.com/sidharth756',
    // image: '/images/resource-hub.png',
    accentColor: '#059669',
    accentBg: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
  },
  {
    id: 'sdc-quiz',
    name: 'SDC Quiz Platform',
    tagline: 'College Technical Quiz Web App',
    shortDesc: 'Production quiz app used across college events and SDC workshops.',
    description:
      'An interactive technical quiz web application built for the Software Development Club at Karpagam College of Engineering. Deployed and used in college symposiums, workshops, and technical competitions.',
    highlights: [
      'Dynamic question evaluation engine with real-time score tracking',
      'Concurrent multi-user session handling during college events',
      'Customizable quiz creation tools for instructors',
      'Deployed and active across multiple college technical symposiums',
      'Collaborative development with peer developers',
    ],
    tags: ['JavaScript', 'Node.js', 'MySQL', 'HTML5', 'CSS3'],
    status: 'In Production',
    statusCls: 'badge-green',
    year: 'Oct 2024 – Present',
    githubUrl: 'https://github.com/sidharth756',
    // image: '/images/sdc-quiz.png',
    accentColor: '#7C3AED',
    accentBg: 'linear-gradient(135deg, #FAF5FF 0%, #EDE9FE 100%)',
  },
];

/* ── Project Detail Modal ── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const h = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', h);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        {/* Image strip */}
        <div style={{
          height: 220,
          background: project.accentBg,
          borderRadius: 'var(--r-xl) var(--r-xl) 0 0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          {project.image
            ? <img src={project.image} alt={project.name} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            : (
              <div style={{ textAlign:'center', opacity:.45 }}>
                <ImageIcon size={40} color={project.accentColor}/>
                <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.72rem', color: project.accentColor, marginTop:'.4rem' }}>
                  {project.name}
                </div>
              </div>
            )
          }
          {/* Close button */}
          <button onClick={onClose} style={{
            position:'absolute', top:12, right:12,
            width:32, height:32, borderRadius:'50%',
            background:'rgba(0,0,0,.25)', border:'none',
            display:'flex', alignItems:'center', justifyContent:'center',
            cursor:'pointer', color:'#fff',
            transition:'background .15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,.45)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,.25)'}
          >
            <X size={16}/>
          </button>
        </div>

        {/* Body */}
        <div style={{ padding:'1.75rem' }}>
          {/* Status + date */}
          <div style={{ display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'.875rem', flexWrap:'wrap' }}>
            <span className={`badge ${project.statusCls}`}>{project.status}</span>
            <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.72rem', color:'var(--ink-4)' }}>{project.year}</span>
          </div>

          <h3 style={{ fontFamily:'Manrope,sans-serif', fontWeight:800, fontSize:'1.4rem', color:'var(--ink)', marginBottom:'.3rem', letterSpacing:'-0.02em' }}>
            {project.name}
          </h3>
          <p style={{ fontSize:'.875rem', color:project.accentColor, fontWeight:600, marginBottom:'1.1rem' }}>
            {project.tagline}
          </p>

          <p style={{ fontSize:'.9375rem', color:'var(--ink-3)', lineHeight:1.78, marginBottom:'1.5rem' }}>
            {project.description}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom:'1.5rem' }}>
            <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.68rem', fontWeight:500, color:'var(--ink-4)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'.75rem' }}>
              Key Features
            </p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.55rem' }}>
              {project.highlights.map((h, i) => (
                <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:'.625rem', fontSize:'.9rem', color:'var(--ink-2)', lineHeight:1.65 }}>
                  <span style={{ width:6, height:6, borderRadius:'50%', background:project.accentColor, flexShrink:0, marginTop:'.55em' }}/>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem', marginBottom:'1.5rem', paddingTop:'1.25rem', borderTop:'1px solid var(--border)' }}>
            {project.tags.map(t => <span key={t} className="pill">{t}</span>)}
          </div>

          {/* CTA */}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }}>
            <GithubIcon style={{ width:16, height:16 }}/>
            View on GitHub
            <ExternalLink size={13}/>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Single Project Card ── */
function ProjectCard({ project, onLearnMore }) {
  return (
    <div className="proj-card">
      {/* Image */}
      <div className="proj-img-wrap" style={{ background: project.accentBg }}>
        {project.image
          ? <img src={project.image} alt={project.name}/>
          : (
            <div className="proj-img-placeholder">
              <ImageIcon size={32} color={project.accentColor} style={{ opacity:.5 }}/>
              <span style={{ color: project.accentColor, opacity:.4 }}>{project.name}</span>
            </div>
          )
        }
        {/* Status badge overlay */}
        <div style={{ position:'absolute', top:12, left:12 }}>
          <span className={`badge ${project.statusCls}`}>{project.status}</span>
        </div>
      </div>

      {/* Body */}
      <div className="proj-body">
        <div>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.68rem', color:'var(--ink-4)', marginBottom:'.3rem' }}>
            {project.year}
          </div>
          <h3 style={{ fontFamily:'Manrope,sans-serif', fontWeight:800, fontSize:'1.1rem', color:'var(--ink)', letterSpacing:'-0.02em', marginBottom:'.3rem' }}>
            {project.name}
          </h3>
          <p style={{ fontSize:'.8375rem', color:'var(--ink-3)', lineHeight:1.65 }}>
            {project.shortDesc}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.35rem' }}>
          {project.tags.slice(0, 4).map(t => <span key={t} className="pill" style={{ fontSize:'.7rem' }}>{t}</span>)}
          {project.tags.length > 4 && (
            <span className="pill" style={{ fontSize:'.7rem' }}>+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Footer */}
        <div style={{ display:'flex', gap:'.5rem', marginTop:'auto', paddingTop:'.75rem', borderTop:'1px solid var(--border)' }}>
          <button
            onClick={() => onLearnMore(project)}
            className="btn btn-primary"
            style={{ flex:1, justifyContent:'center', fontSize:'.825rem' }}
          >
            Learn More <ArrowUpRight size={13}/>
          </button>
          <a
            href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding:'.55rem .75rem' }}
            title="GitHub"
          >
            <GithubIcon style={{ width:16, height:16 }}/>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Projects Section ── */
export default function Projects() {
  const [selected, setSelected] = useState(null);
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 380, behavior: 'smooth' });
  };

  // drag-to-scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let isDown = false, startX = 0, scrollLeft = 0;
    const md = e => { isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; };
    const mu = () => { isDown = false; };
    const mm = e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - el.offsetLeft; el.scrollLeft = scrollLeft - (x - startX) * 1.2; };
    el.addEventListener('mousedown', md);
    window.addEventListener('mouseup', mu);
    el.addEventListener('mousemove', mm);
    return () => { el.removeEventListener('mousedown', md); window.removeEventListener('mouseup', mu); el.removeEventListener('mousemove', mm); };
  }, []);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        {/* Header row */}
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:'1rem', flexWrap:'wrap', marginBottom:'2.5rem' }}>
          <div>
            <span className="eyebrow">Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p style={{ marginTop:'.5rem', fontSize:'.9375rem', color:'var(--ink-3)', maxWidth:480 }}>
              Systems I've designed and shipped — from blockchain infrastructure to production web platforms.
            </p>
          </div>

          {/* Arrow buttons */}
          <div style={{ display:'flex', gap:'.5rem', flexShrink:0 }}>
            <button onClick={() => scroll(-1)} className="btn btn-outline" style={{ padding:'.55rem .75rem' }} aria-label="Prev">
              <ChevronLeft size={18}/>
            </button>
            <button onClick={() => scroll(1)} className="btn btn-outline" style={{ padding:'.55rem .75rem' }} aria-label="Next">
              <ChevronRight size={18}/>
            </button>
          </div>
        </div>

        {/* ── SLIDER ── */}
        <div ref={trackRef} className="slider-track">
          {PROJECTS.map(p => (
            <ProjectCard key={p.id} project={p} onLearnMore={setSelected}/>
          ))}
          {/* "More coming soon" placeholder */}
          <div style={{
            flex:'0 0 280px', borderRadius:'var(--r-lg)',
            border:'2px dashed var(--border-2)',
            display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center',
            gap:'.75rem', padding:'2rem', textAlign:'center',
            color:'var(--ink-4)',
          }}>
            <div style={{ fontSize:'2rem' }}>+</div>
            <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.75rem', lineHeight:1.6 }}>
              More projects<br/>coming soon
            </div>
          </div>
        </div>

        {/* Drop-image hint */}
        <p style={{ marginTop:'1.25rem', fontFamily:'JetBrains Mono,monospace', fontSize:'.7rem', color:'var(--ink-4)', letterSpacing:'.05em' }}>
          💡 Drop your project screenshots in <code>/public/images/</code> and update the <code>image</code> field in Projects.jsx
        </p>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)}/>}
    </section>
  );
}
