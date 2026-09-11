import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-[#121418]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Background & Education
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Academic profile and core computer science coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Timeline */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* KCE Card */}
            <div className="pro-card p-6 space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Karpagam College of Engineering
                  </h3>
                  <p className="text-sm font-semibold text-sky-400">
                    BE — Computer Science & Engineering
                  </p>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#20242C] text-slate-300 font-mono">
                    09 2024 – 05 2028
                  </span>
                  <p className="mt-1">Coimbatore, India</p>
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold font-mono border border-emerald-500/20">
                Current Score: CGPA 7.9 / 10.0
              </div>
            </div>

            {/* School Card */}
            <div className="pro-card p-6 space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    SRT Universal Mat Hr Sec School
                  </h3>
                  <p className="text-sm font-semibold text-slate-300">
                    Grade 12 (HSC) Higher Secondary
                  </p>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#20242C] text-slate-300 font-mono">
                    07 2022 – 03 2024
                  </span>
                  <p className="mt-1">Sathyamangalam, India</p>
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded bg-[#20242C] text-slate-300 text-xs font-semibold font-mono border border-[#2F3542]">
                Score: 78.0%
              </div>
            </div>

          </div>

          {/* Coursework Focus */}
          <div className="lg:col-span-5">
            <div className="pro-card p-6 space-y-4">
              <h3 className="text-base font-bold text-white border-b border-[#292E38] pb-3">
                Core Coursework
              </h3>

              <div className="space-y-2.5">
                {[
                  'Data Structures & Algorithms',
                  'Object-Oriented Programming (OOPS)',
                  'Operating Systems',
                  'Database Management Systems (DBMS)',
                  'Full-Stack Web Development',
                  'Cloud Computing Basics (AWS)'
                ].map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
