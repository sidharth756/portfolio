import React from 'react';
import { X, ExternalLink, Layers, ShieldCheck, CheckCircle2, Cpu, Terminal, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card max-w-3xl w-full rounded-3xl border border-slate-700/80 overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="font-mono text-xs text-cyan-300 uppercase tracking-wider">{project.status}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans">
          
          {/* Title & Banner */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {project.date}
              </span>
            </div>
            <p className="text-base text-cyan-400 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Key Impact Metric Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Technical Impact</div>
              <div className="text-base sm:text-lg font-bold text-white">{project.impact}</div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-200 border border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Features List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Key Architectural Features</span>
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub / Demo Links */}
          <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository on GitHub</span>
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
