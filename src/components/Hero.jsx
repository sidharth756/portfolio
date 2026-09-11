import React from 'react';
import { Terminal, Code, FileText, ArrowRight, ShieldCheck, Database, Layers, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for Software Engineering Internships & Projects</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="gradient-text">Sidharth R K</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2">
                <span className="font-mono text-cyan-400">&gt;</span> Full-Stack & Backend Systems Engineer
              </p>
            </div>

            {/* Subtext description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Computer Science Engineering student at <strong className="text-slate-100 font-semibold">Karpagam College of Engineering</strong> (CGPA: 7.9) and <strong className="text-slate-100 font-semibold">Associate Head</strong> at the Software Development Club. Specialized in building high-performance backend microservices with Java Spring Boot, scalable full-stack applications, and decentralized blockchain systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm glass-card text-slate-200 hover:text-white hover:border-cyan-400/50 hover:bg-slate-800/80 transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume PDF</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Profile Badges & Social Links */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">Verify Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/sidharth756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg glass-card text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/sidharth56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg glass-card text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/u/sidharth9944/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg glass-card text-xs font-medium text-slate-300 hover:text-white hover:border-amber-400/40 transition-all"
                >
                  <LeetcodeIcon className="w-4 h-4 text-amber-400" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Monospace Terminal Window Showcase */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl glow-cyan animate-float">
              
              {/* Terminal Header Bar */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  sidharth@kce:~ main
                </span>
                <span className="text-xs text-slate-500 font-mono">bash</span>
              </div>

              {/* Terminal Content Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-4 text-slate-300 bg-slate-950/70">
                <div>
                  <span className="text-emerald-400 font-semibold">sidharthrk756@kce</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-slate-500">$ </span>
                  <span className="text-white">whoami</span>
                </div>

                <div className="pl-4 text-slate-400 border-l-2 border-cyan-500/30 space-y-1">
                  <p><strong className="text-slate-200">Name:</strong> Sidharth R K</p>
                  <p><strong className="text-slate-200">Degree:</strong> BE Computer Science & Engg</p>
                  <p><strong className="text-slate-200">Institute:</strong> Karpagam College of Engg</p>
                  <p><strong className="text-slate-200">CGPA:</strong> 7.9 / 10</p>
                  <p><strong className="text-slate-200">Role:</strong> Associate Head @ SDC</p>
                </div>

                <div>
                  <span className="text-emerald-400 font-semibold">sidharthrk756@kce</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-slate-500">$ </span>
                  <span className="text-white">cat stack.json</span>
                </div>

                <div className="pl-4 text-xs text-cyan-300 font-mono bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                  <p><span className="text-slate-500">"languages":</span> ["Java", "C++", "JavaScript", "Python", "SQL"],</p>
                  <p><span className="text-slate-500">"backend":</span> ["Spring Boot", "Microservices", "NodeJS"],</p>
                  <p><span className="text-slate-500">"database":</span> ["MySQL", "MongoDB"],</p>
                  <p><span className="text-slate-500">"blockchain":</span> ["Ethereum", "Solidity"],</p>
                  <p><span className="text-slate-500">"devops":</span> ["Docker", "Linux", "AWS Basics"]</p>
                </div>

                <div className="flex items-center gap-2 pt-1 text-slate-400">
                  <span className="w-2 h-4 bg-cyan-400 animate-pulse"></span>
                  <span>ready for deployment...</span>
                </div>
              </div>

            </div>

            {/* Quick Metrics Bar below terminal */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="glass-card p-3.5 rounded-xl border border-slate-800 text-center">
                <div className="text-xl font-bold text-cyan-400">7.9 CGPA</div>
                <div className="text-xs text-slate-400">Karpagam College</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl border border-slate-800 text-center">
                <div className="text-xl font-bold text-emerald-400">Assoc. Head</div>
                <div className="text-xs text-slate-400">Software Dev Club</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
