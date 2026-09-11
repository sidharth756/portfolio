import React from 'react';
import { FileText, ArrowRight, Mail, MapPin, GraduationCap, Building2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="pt-36 pb-20 relative bg-[#121418]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md subtle-badge text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>BE Computer Science & Engineering Student @ KCE</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Sidharth R K
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-sky-400">
              Software Engineer & Full-Stack Developer
            </p>
          </div>

          {/* Professional Summary */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Computer Science Engineering student at <strong className="text-white">Karpagam College of Engineering</strong> (CGPA: 7.9) and <strong className="text-white">Associate Head</strong> at the Software Development Club. Experienced in building backend microservices with Java Spring Boot, full-stack applications with React & Node.js, and decentralized blockchain systems.
          </p>

          {/* Key Facts Summary Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-[#262A32]">
            <div className="p-3 rounded-lg bg-[#181B20] border border-[#272B35]">
              <div className="text-sm font-bold text-white">7.9 CGPA</div>
              <div className="text-xs text-slate-400">BE Computer Science</div>
            </div>
            <div className="p-3 rounded-lg bg-[#181B20] border border-[#272B35]">
              <div className="text-sm font-bold text-white">Assoc. Head</div>
              <div className="text-xs text-slate-400">Software Dev Club</div>
            </div>
            <div className="p-3 rounded-lg bg-[#181B20] border border-[#272B35]">
              <div className="text-sm font-bold text-white">Credencify</div>
              <div className="text-xs text-slate-400">Blockchain Project</div>
            </div>
            <div className="p-3 rounded-lg bg-[#181B20] border border-[#272B35]">
              <div className="text-sm font-bold text-white">Resource Hub</div>
              <div className="text-xs text-slate-400">Search Engine</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors shadow-sm"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs bg-[#1F232B] text-slate-200 border border-[#2D333F] hover:bg-[#282D38] hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume PDF</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs text-slate-300 hover:text-white hover:bg-[#1C2027] transition-colors"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Verified Profiles Row */}
          <div className="flex items-center gap-4 pt-4 text-xs">
            <span className="text-slate-400 font-medium">Verified Profiles:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/sidharth756"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/sidharth56"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/sidharth9944/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <LeetcodeIcon className="w-4 h-4 text-slate-400" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
