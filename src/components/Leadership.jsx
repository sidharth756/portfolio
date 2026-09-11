import React from 'react';
import { Users, Award, Code2, Sparkles, CheckCircle2, Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Users className="w-3.5 h-3.5" />
            <span>EXTRACURRICULAR LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership & <span className="gradient-text-emerald">Community Impact</span>
          </h2>
          <p className="text-slate-400 text-base">
            Driving software initiatives, mentoring fellow engineering students, and building custom operational tools at Karpagam College of Engineering.
          </p>
        </div>

        {/* Spotlight Card */}
        <div className="glass-card rounded-3xl border border-cyan-500/30 p-8 sm:p-10 relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-cyan-950/20 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
                  ASSOCIATE HEAD
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Oct 2024 – Present
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Software Development Club (SDC) — KCE
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Serving as Associate Head for the Software Development Club at Karpagam College of Engineering, leading peer developer teams, organizing technical workshops, and engineering software tools used across campus operations.
              </p>

              {/* Responsibilities bullets */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Custom College Software Solutions:</strong> Engineered custom software tools for streamlining college operations and technical event management.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Technical Event Organization:</strong> Coordinated peer coding sessions, hackathons, and technical workshops to promote programming excellence.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Quiz Web Application:</strong> Built an interactive online quiz web app used across SDC technical competitions and campus workshops.</span>
                </div>
              </div>
            </div>

            {/* Right Stat Callout Box */}
            <div className="lg:col-span-4 space-y-4">
              <div className="glass-card p-6 rounded-2xl border border-slate-800 text-center space-y-2 bg-slate-900/80">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mx-auto mb-2">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="text-2xl font-black text-white">SDC Associate Head</div>
                <div className="text-xs text-slate-400 font-mono">Karpagam College of Engineering</div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1 text-center bg-slate-900/60">
                <div className="text-sm font-bold text-emerald-400">Technical Quiz Platform</div>
                <div className="text-xs text-slate-400">In production for campus events & workshops</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
