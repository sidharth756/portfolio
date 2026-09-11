import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const resumeUrl = '/Resume-06.pdf';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card max-w-4xl w-full h-[90vh] rounded-3xl border border-slate-700/80 overflow-hidden shadow-2xl flex flex-col">
        
        {/* Modal Header Bar */}
        <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-none">
                Sidharth_RK_Resume.pdf
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Official Curriculum Vitae
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download="Sidharth_RK_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-card text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Embed / Preview Container */}
        <div className="flex-1 bg-slate-950 p-2 sm:p-4 relative overflow-hidden">
          <iframe
            src={resumeUrl}
            title="Sidharth R K Resume Preview"
            className="w-full h-full rounded-2xl border border-slate-800 bg-white"
          />
        </div>

      </div>
    </div>
  );
}
