import React, { useState } from 'react';
import { Code2, Server, Database, Wrench, Layers, Terminal, Sparkles, Shield, Cpu } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'devops', label: 'DevOps & Tools' },
  ];

  const skillItems = [
    // Languages
    { name: 'Java', category: 'languages', level: 'Advanced', icon: Code2, desc: 'Spring Boot, OOP, Microservices', color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30' },
    { name: 'C', category: 'languages', level: 'Intermediate', icon: Terminal, desc: 'Low-level programming, Memory & Pointers', color: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30' },
    { name: 'C++', category: 'languages', level: 'Proficient', icon: Code2, desc: 'Data Structures & Algorithms', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30' },
    { name: 'Python', category: 'languages', level: 'Proficient', icon: Terminal, desc: 'Automation, Scripting & Analytics', color: 'from-yellow-500/20 to-emerald-500/20 text-yellow-400 border-yellow-500/30' },
    { name: 'JavaScript (ES6+)', category: 'languages', level: 'Advanced', icon: Code2, desc: 'Async JS, React, Node.js', color: 'from-amber-400/20 to-yellow-500/20 text-amber-300 border-amber-400/30' },
    { name: 'SQL', category: 'languages', level: 'Advanced', icon: Database, desc: 'Relational Queries, Joins & Indexing', color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30' },
    { name: 'Solidity', category: 'languages', level: 'Intermediate', icon: Shield, desc: 'Smart Contracts, Ethereum, Blockchain', color: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30' },

    // Backend & DB
    { name: 'Spring Boot', category: 'backend', level: 'Advanced', icon: Server, desc: 'REST APIs, Microservices Architecture', color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30' },
    { name: 'Microservices Architecture', category: 'backend', level: 'Intermediate', icon: Layers, desc: 'Service Discovery, API Gateways', color: 'from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30' },
    { name: 'NodeJS', category: 'backend', level: 'Advanced', icon: Server, desc: 'Express API Server & Microservices', color: 'from-emerald-600/20 to-green-500/20 text-emerald-400 border-emerald-600/30' },
    { name: 'MySQL', category: 'backend', level: 'Advanced', icon: Database, desc: 'Database Schema Design, Transactions', color: 'from-cyan-500/20 to-blue-600/20 text-cyan-400 border-cyan-500/30' },
    { name: 'MongoDB', category: 'backend', level: 'Intermediate', icon: Database, desc: 'NoSQL Document Store, Aggregations', color: 'from-emerald-500/20 to-lime-500/20 text-emerald-400 border-emerald-500/30' },

    // Frontend
    { name: 'ReactJS', category: 'frontend', level: 'Advanced', icon: Code2, desc: 'Hooks, State Management, Modern UI', color: 'from-cyan-400/20 to-blue-500/20 text-cyan-300 border-cyan-400/30' },
    { name: 'HTML5 & CSS3', category: 'frontend', level: 'Advanced', icon: Code2, desc: 'Responsive Layouts, Glassmorphism UI', color: 'from-orange-500/20 to-amber-500/20 text-orange-400 border-orange-500/30' },

    // DevOps & Tools
    { name: 'Docker', category: 'devops', level: 'Intermediate', icon: Wrench, desc: 'Containerization & Isolation', color: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30' },
    { name: 'Linux OS', category: 'devops', level: 'Proficient', icon: Terminal, desc: 'Bash Scripting & Server Admin', color: 'from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30' },
    { name: 'Git / GitHub', category: 'devops', level: 'Advanced', icon: Wrench, desc: 'Version Control & Workflow', color: 'from-rose-500/20 to-red-500/20 text-rose-400 border-rose-500/30' },
    { name: 'CI/CD Pipelining', category: 'devops', level: 'Intermediate', icon: Layers, desc: 'Automated Deployment & Testing', color: 'from-indigo-500/20 to-cyan-500/20 text-indigo-400 border-indigo-500/30' },
    { name: 'Developer Tools', category: 'devops', level: 'Advanced', icon: Wrench, desc: 'VS Code, IntelliJ IDEA, Eclipse, Figma', color: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30' }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillItems 
    : skillItems.filter(item => item.category === activeTab);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive toolkit spanning core algorithms, backend microservices, full-stack engineering, databases, and DevOps tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComp = skill.icon;
            return (
              <div 
                key={index}
                className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} border flex items-center justify-center`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="capitalize">Category: {skill.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80"></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
