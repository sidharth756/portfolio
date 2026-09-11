import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Search, Zap, Code2, ArrowUpRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'credencify',
      title: 'Credencify',
      subtitle: 'Blockchain-Powered Digital Credential Verification Platform',
      status: 'Ongoing Project',
      date: 'Present',
      impact: '100% Tamper-Proof Digital Certificate Validation on Ethereum Blockchain',
      tags: ['Java', 'Spring Boot', 'Microservices', 'ReactJS', 'MySQL', 'Ethereum', 'Solidity'],
      description: 'Developing a decentralized credential infrastructure capable of delivering tamper-proof certificate verification, trusted ownership, and seamless interoperability across multiple organizations.',
      highlights: [
        'Designed microservices backend using Java Spring Boot and MySQL for scalable user & certificate management.',
        'Integrated Ethereum blockchain smart contracts written in Solidity for immutable on-chain record keeping.',
        'Created a modern ReactJS web dashboard enabling instant certificate hashing, verification, and QR validation.',
        'Ensured 100% tamper-proof security eliminating fake degree and certificate fraud for institutions.'
      ],
      githubUrl: 'https://github.com/sidharth756',
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10'
    },
    {
      id: 'resource-hub',
      title: 'Resource Hub',
      subtitle: 'Centralized Academic & Technical Material Search Engine',
      status: 'Completed',
      date: 'July 2025',
      impact: '45% Faster Resource Discovery Speed for Students & Developers',
      tags: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'MySQL'],
      description: 'Designed and developed a centralized web platform to organize and access academic and technical learning resources with intelligent indexing.',
      highlights: [
        'Implemented an advanced search & filtering algorithm improving resource discovery speed by 45%.',
        'Structured MySQL database schema with optimized indexing for multi-tag document retrieval.',
        'Built full REST API endpoints with Node.js & Express for resource uploading and categorize management.',
        'Developed a clean, accessible frontend interface with responsive CSS grid layout.'
      ],
      githubUrl: 'https://github.com/sidharth756',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10'
    },
    {
      id: 'sdc-quiz-app',
      title: 'SDC Technical Quiz Web App',
      subtitle: 'Interactive Competition Platform for Software Development Club',
      status: 'Production Live',
      date: 'Oct 2024 – Present',
      impact: 'Deployed for College-wide Technical Events & Workshops at KCE',
      tags: ['JavaScript', 'NodeJS', 'HTML5/CSS3', 'MySQL'],
      description: 'Engineered a specialized technical quiz application to facilitate college events, competitive coding rounds, and interactive student workshops for SDC.',
      highlights: [
        'Built dynamic question evaluation engine with real-time score tracking.',
        'Handled multi-user concurrent quiz sessions during college technical symposiums.',
        'Collaborated with peers to integrate customizable question sets and leaderboard views.'
      ],
      githubUrl: 'https://github.com/sidharth756',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10'
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Software Projects</span>
          </h2>
          <p className="text-slate-400 text-base">
            Real-world systems engineered with Java Spring Boot, Microservices, Blockchain, React, and Node.js.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Header Status & Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{project.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between gap-2">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </h3>
                <p className="text-xs font-semibold text-cyan-400/90 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Impact Highlight */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-5 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Zap className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span className="truncate">{project.impact}</span>
                </div>
              </div>

              {/* Tags & Action Buttons */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 flex items-center gap-1"
                  >
                    <span>View Architecture Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl glass-card text-slate-400 hover:text-white hover:border-cyan-400/50 transition-colors"
                    title="View GitHub Source"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
