import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    { title: 'C Programming', issuer: 'Spoken Tutorial, IIT Bombay Project', category: 'Programming Languages' },
    { title: 'Java Programming', issuer: 'Spoken Tutorial, IIT Bombay Project', category: 'Programming Languages' },
    { title: 'Soft Skill Development', issuer: 'NPTEL (National Programme on Technology Enhanced Learning)', category: 'Professional Development' },
    { title: 'Fundamentals of DBMS', issuer: 'Simplilearn', category: 'Databases' },
    { title: 'The Art and Science of Communication', issuer: 'Springboard', category: 'Communication' }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#16191E] border-t border-[#262A32]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Verified course completions and technical credentials.
          </p>
        </div>

        {/* Clean Minimal Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="pro-card p-5 space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-[#20242C] border border-[#2D333F]">
                  {cert.category}
                </span>
                <h3 className="text-base font-bold text-white mt-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Issued by: <span className="text-slate-200">{cert.issuer}</span>
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
