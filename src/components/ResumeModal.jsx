import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

export default function ResumeModal({ onClose }) {
  const resumeUrl = '/Resume-06.pdf';

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
    <div
      className="modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="modal-box"
        style={{ maxWidth:960, height:'92vh', display:'flex', flexDirection:'column' }}
      >
        {/* Header */}
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          padding:'1rem 1.5rem', borderBottom:'1px solid var(--border)',
          background:'var(--bg-muted)', flexShrink:0,
          borderRadius:'var(--r-xl) var(--r-xl) 0 0',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.75rem' }}>
            <div style={{ width:36, height:36, borderRadius:8, background:'var(--blue-light)', border:'1px solid #BFDBFE', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <FileText size={16} color="var(--blue)"/>
            </div>
            <div>
              <div style={{ fontFamily:'Manrope,sans-serif', fontWeight:700, fontSize:'.9375rem', color:'var(--ink)' }}>
                Sidharth_RK_Resume.pdf
              </div>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'.68rem', color:'var(--ink-4)' }}>
                Software Engineer · Full-Stack Developer
              </div>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'.5rem' }}>
            <a href={resumeUrl} download="Sidharth_RK_Resume.pdf" className="btn btn-primary" style={{ fontSize:'.8125rem', padding:'.45rem .9rem' }}>
              <Download size={14}/> Download
            </a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding:'.45rem .65rem' }} title="Open in new tab">
              <ExternalLink size={14}/>
            </a>
            <button onClick={onClose} className="btn btn-ghost" style={{ padding:'.45rem .65rem', border:'1px solid var(--border)' }} title="Close">
              <X size={16}/>
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <div style={{ flex:1, padding:'.875rem', background:'var(--bg)', overflow:'hidden' }}>
          <iframe
            src={resumeUrl}
            title="Sidharth R K Resume"
            style={{ width:'100%', height:'100%', border:'1px solid var(--border)', borderRadius:'var(--r)', background:'#fff' }}
          />
        </div>
      </div>
    </div>
  );
}
