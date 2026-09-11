import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'credencify',
      title: 'Credencify',
      subtitle: 'Blockchain-Powered Credential Verification Platform',
      status: 'Ongoing',
      date: '2025',
      impact: '100% Tamper-Proof Digital Certificate Validation',
      tags: ['Java', 'Spring Boot', 'Microservices', 'ReactJS', 'MySQL', 'Ethereum', 'Solidity'],
      description: 'Developing a blockchain-powered credential verification platform enabling 100% tamper-proof digital certificate validation through immutable on-chain credential records.',
      highlights: [
        'Engineered Java Spring Boot microservices for scalable user and certificate management.',
        'Integrated Ethereum blockchain smart contracts written in Solidity for immutable verification.',
        'Built modern ReactJS web dashboard enabling instant certificate hashing and verification.',
        'Created a decentralized credential infrastructure supporting secure cross-organization validation.'
      ],
      githubUrl: 'https://github.com/sidharth756'
    },
    {
      id: 'resource-hub',
      title: 'Resource Hub',
      subtitle: 'Centralized Academic & Technical Resource Platform',
      status: 'Completed',
      date: 'July 2025',
      impact: '45% Improvement in Resource Discovery Speed',
      tags: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'MySQL'],
      description: 'Designed and developed a centralized web platform to organize and access academic and technical resources.',
      highlights: [
        'Implemented an advanced search functionality that improved resource discovery speed by 45%.',
        'Optimized MySQL database schema for fast document categorization and retrieval.',
        'Built full RESTful API endpoints with Node.js and Express.',
        'Designed a responsive web interface for seamless mobile and desktop browsing.'
      ],
      githubUrl: 'https://github.com/sidharth756'
    },
    {
      id: 'sdc-quiz-app',
      title: 'SDC Quiz Web Application',
      subtitle: 'Interactive Competition & Workshop Platform',
      status: 'In Production',
      date: 'Oct 2024 – Present',
      impact: 'Deployed for College-wide Technical Competitions at KCE',
      tags: ['JavaScript', 'NodeJS', 'HTML5', 'CSS3', 'MySQL'],
      description: 'Built a custom technical quiz web application to support Software Development Club activities, used for conducting technical quizzes during events and workshops.',
      highlights: [
        'Engineered dynamic question evaluation engine with instant score calculations.',
        'Handled multi-user concurrent sessions during college symposiums.',
        'Collaborated with peer developers to build admin management tools.'
      ],
      githubUrl: 'https://github.com/sidharth756'
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-[#16191E] border-b border-[#262A32]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Selected software development work across full-stack engineering, microservices, and blockchain.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="pro-card p-6 flex flex-col justify-between space-y-4 hover:border-slate-600 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-sky-400 bg-[#20242C] px-2.5 py-1 rounded border border-[#2D333F]">
                    {project.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{project.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </h3>
                <p className="text-xs font-semibold text-slate-300">
                  {project.subtitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="p-2.5 rounded bg-[#121418] border border-[#272B35] text-xs font-mono text-emerald-400">
                  ⚡ {project.impact}
                </div>
              </div>

              {/* Tags & Action Links */}
              <div className="pt-4 border-t border-[#282D37] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded text-[11px] font-mono bg-[#20242C] text-slate-300 border border-[#2D333F]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 rounded text-[11px] font-mono text-slate-400 bg-[#20242C] border border-[#2D333F]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1 text-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-semibold text-sky-400 hover:text-sky-300"
                  >
                    Details & Architecture →
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-[#20242C] text-slate-300 hover:text-white border border-[#2F3542]"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Modal */}
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
