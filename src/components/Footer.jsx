import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#0F1114] border-t border-[#20242C] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div>
            <span className="font-bold text-white">Sidharth R K</span> — Software Engineer & Full-Stack Developer
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/sidharth756" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/sidharth56" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/sidharth9944/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LeetCode
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Sidharth R K</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-[#1C2027] text-slate-300 hover:text-white border border-[#2B303C]"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
