import React from 'react';
import { Users, CheckCircle2, Calendar } from 'lucide-react';

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-[#121418]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Leadership & Extracurricular Activities
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Roles in tech student organizations and community software projects.
          </p>
        </div>

        {/* Leadership Card */}
        <div className="pro-card p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#282D37] pb-4">
            <div>
              <span className="inline-block px-2.5 py-1 rounded text-xs font-mono bg-[#20242C] text-sky-400 border border-[#2D333F] mb-2">
                ASSOCIATE HEAD
              </span>
              <h3 className="text-xl font-bold text-white">
                Software Development Club (SDC) — Karpagam College of Engineering
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Oct 2024 – Present
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Leading collaborative software development initiatives for college operations, mentoring peers on coding projects, and organizing campus-wide technical competitions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded bg-[#181B20] border border-[#282D37] text-xs text-slate-300 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>College Operation Software:</strong> Developing custom software tools for college operations in collaboration with peer developers.</span>
            </div>
            <div className="p-3 rounded bg-[#181B20] border border-[#282D37] text-xs text-slate-300 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Quiz Web Application:</strong> Built an interactive online quiz web app used for conducting technical quizzes during events & workshops.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
