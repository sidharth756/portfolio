import React from 'react';
import {
  JavaIcon, SpringBootIcon, PythonIcon, ReactIcon,
  NodeIcon, MysqlIcon, MongoIcon, DockerIcon, AwsIcon,
  GithubIcon, SolidityIcon,
} from './Icons';

const GROUPS = [
  {
    label: 'Languages',
    color: '#6366F1',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    skills: [
      { name: 'Java',        Icon: JavaIcon,     iconColor: '#E76F00' },
      { name: 'Python',      Icon: PythonIcon,   iconColor: '#3776AB' },
      { name: 'JavaScript',  Icon: null,         iconColor: null },
      { name: 'C / C++',     Icon: null,         iconColor: null },
      { name: 'SQL',         Icon: null,         iconColor: null },
      { name: 'Solidity',    Icon: SolidityIcon, iconColor: '#363636' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    color: '#059669',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    skills: [
      { name: 'Spring Boot',   Icon: SpringBootIcon, iconColor: '#6DB33F' },
      { name: 'React',         Icon: ReactIcon,      iconColor: '#61DAFB' },
      { name: 'Node.js',       Icon: NodeIcon,       iconColor: '#339933' },
      { name: 'Express.js',    Icon: null,           iconColor: null },
      { name: 'Microservices', Icon: null,           iconColor: null },
      { name: 'REST APIs',     Icon: null,           iconColor: null },
    ],
  },
  {
    label: 'Databases',
    color: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    skills: [
      { name: 'MySQL',   Icon: MysqlIcon, iconColor: '#4479A1' },
      { name: 'MongoDB', Icon: MongoIcon, iconColor: '#47A248' },
    ],
  },
  {
    label: 'DevOps & Tools',
    color: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    skills: [
      { name: 'Git & GitHub',  Icon: GithubIcon, iconColor: '#111' },
      { name: 'Docker',        Icon: DockerIcon, iconColor: '#2496ED' },
      { name: 'AWS',           Icon: AwsIcon,    iconColor: '#FF9900' },
      { name: 'Linux',         Icon: null,       iconColor: null },
      { name: 'IntelliJ IDEA', Icon: null,       iconColor: null },
      { name: 'VS Code',       Icon: null,       iconColor: null },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        {/* Header */}
        <div style={{ marginBottom:'2.75rem' }}>
          <span className="eyebrow">Stack</span>
          <h2 className="section-title">Technical Skills</h2>
          <p style={{ marginTop:'.5rem', fontSize:'.9375rem', color:'var(--ink-3)', maxWidth:500 }}>
            Technologies I use to design, build, and ship production-grade software.
          </p>
        </div>

        {/* 2×2 grid of skill group cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.25rem' }}>
          {GROUPS.map(group => (
            <div key={group.label} className="card" style={{ padding:'1.5rem' }}>
              {/* Group header */}
              <div style={{ display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'1rem' }}>
                <div style={{
                  width:8, height:8, borderRadius:'50%',
                  background:group.color, flexShrink:0,
                }}/>
                <span style={{
                  fontFamily:'JetBrains Mono,monospace',
                  fontSize:'.7rem', fontWeight:500,
                  color:group.color, textTransform:'uppercase', letterSpacing:'.1em',
                }}>
                  {group.label}
                </span>
              </div>

              {/* Skill pills */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'.4rem' }}>
                {group.skills.map(({ name, Icon, iconColor }) => (
                  <span key={name} className="pill">
                    {Icon && (
                      <Icon style={{ width:13, height:13, color:iconColor || 'var(--ink-4)', flexShrink:0 }}/>
                    )}
                    {name}
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
