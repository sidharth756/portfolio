import React from 'react';
import { Award, CheckCircle, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'C Programming',
      issuer: 'Spoken Tutorial, IIT Bombay Project',
      type: 'Technical Certification',
      color: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
    },
    {
      title: 'Java Programming',
      issuer: 'Spoken Tutorial, IIT Bombay Project',
      type: 'Technical Certification',
      color: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
    },
    {
      title: 'Soft Skill Development',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      type: 'Professional Skills',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
    },
    {
      title: 'Fundamentals of DBMS',
      issuer: 'Simplilearn',
      type: 'Database Architecture',
      color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
    },
    {
      title: 'The Art and Science of Communication',
      issuer: 'Springboard',
      type: 'Professional Development',
      color: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10'
    }
  ];

  return (
    <section id="certifications" className="py-24 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACCOMPLISHMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-slate-400 text-base">
            Verified certifications in programming languages, database management, soft skills, and communication.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${cert.color}`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {cert.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  Issued by: <span className="text-slate-200">{cert.issuer}</span>
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Accomplishment</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
