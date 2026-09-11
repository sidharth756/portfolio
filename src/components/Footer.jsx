import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white font-bold tracking-tight">Sidharth R K</p>
              <p className="text-xs text-slate-400 font-mono">BE CSE @ Karpagam College of Engineering</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sidharth756"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-card text-slate-400 hover:text-white hover:border-cyan-400/50 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://linkedin.com/in/sidharth56"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-card text-slate-400 hover:text-white hover:border-indigo-400/50 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://leetcode.com/u/sidharth9944/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-card text-slate-400 hover:text-white hover:border-amber-400/50 transition-colors"
              aria-label="LeetCode"
            >
              <LeetcodeIcon className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-slate-400">
              © {new Date().getFullYear()} Sidharth R K. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
