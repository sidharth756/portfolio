import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'C', 'C++', 'Python', 'JavaScript (ES6+)', 'SQL', 'Solidity']
    },
    {
      title: 'Backend & Databases',
      skills: ['Spring Boot', 'Microservices', 'Node.js', 'MySQL', 'MongoDB', 'REST APIs']
    },
    {
      title: 'Frontend & Web',
      skills: ['ReactJS', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git / GitHub', 'Docker', 'Linux OS', 'AWS Basics', 'CI/CD Pipelines', 'IntelliJ IDEA', 'VS Code', 'Figma']
    }
  ];

  return (
    <section id="skills" className="py-16 bg-[#16191E] border-y border-[#262A32]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Categorized overview of programming languages, frameworks, databases, and developer tools.
          </p>
        </div>

        {/* Concise 4-Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="pro-card p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2 border-b border-[#292E38] pb-3">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <span>{cat.title}</span>
              </h3>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-md text-xs font-medium bg-[#20242C] text-slate-200 border border-[#2F3542] hover:border-sky-500/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
