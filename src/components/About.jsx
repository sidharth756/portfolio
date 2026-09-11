import React from 'react';
import { BookOpen, Award, Layers, Users, MapPin, Calendar, CheckCircle2, Shield, Cpu, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Sidharth R K</span>
          </h2>
          <p className="text-slate-400 text-base">
            Passionate software developer with a strong foundation in computer science engineering, microservices, and modern web application development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Academic Journey Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-6">
              <span className="w-2 h-6 rounded-full bg-cyan-400"></span>
              Education Timeline
            </h3>

            {/* KCE Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 relative group hover:border-cyan-500/40 transition-all">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Karpagam College of Engineering
                  </h4>
                  <p className="text-sm font-semibold text-cyan-400">
                    BE — Computer Science & Engineering
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    <Calendar className="w-3 h-3" />
                    09 2024 – 05 2028
                  </span>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1 justify-end">
                    <MapPin className="w-3 h-3" /> Coimbatore, India
                  </p>
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold font-mono border border-emerald-500/20 mb-4">
                Current Score: CGPA 7.9 / 10.0
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pursuing a rigorous engineering curriculum covering Data Structures & Algorithms, Object-Oriented Programming (OOPS), Operating Systems, DBMS, Software Engineering, and Cloud Fundamentals.
              </p>
            </div>

            {/* School Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 relative group hover:border-indigo-500/40 transition-all">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    SRT Universal Mat Hr Sec School
                  </h4>
                  <p className="text-sm font-semibold text-indigo-400">
                    Grade 12 (HSC) Higher Secondary
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    <Calendar className="w-3 h-3" />
                    07 2022 – 03 2024
                  </span>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1 justify-end">
                    <MapPin className="w-3 h-3" /> Sathyamangalam, India
                  </p>
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-bold font-mono border border-indigo-500/20">
                Score: 78.0%
              </div>
            </div>

          </div>

          {/* Right: Core Coursework & Leadership Highlights */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Core Coursework Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>Academic Focus & Coursework</span>
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {[
                  'Data Structures & Algorithms (DSA)',
                  'Full-Stack Web Development',
                  'Object-Oriented Programming (OOPS)',
                  'Operating Systems (OS)',
                  'Database Management Systems (DBMS)',
                  'Cloud Computing Basics (AWS)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Spotlight Card */}
            <div className="glass-card p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-slate-900/40 to-indigo-950/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold font-mono border border-cyan-500/30">
                  LEADERSHIP ROLE
                </span>
                <span className="text-xs text-slate-400 font-mono">Oct 2024 – Present</span>
              </div>

              <h4 className="text-lg font-extrabold text-white">
                Software Development Club (SDC)
              </h4>
              <p className="text-xs font-semibold text-cyan-400">
                Associate Head — Karpagam College of Engg
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Directing software initiatives for college operations, mentoring peers on full-stack coding, and organizing high-impact technical hackathons & quizzes.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
