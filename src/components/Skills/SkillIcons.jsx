import React from 'react';
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa6';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiSolidity,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiVite,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiUbuntu,
  SiFigma,
  SiGooglecolab,
  SiEclipseide,
  SiPostman,
  SiIntellijidea,
  SiEthereum,
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiRedis,
} from 'react-icons/si';
import {
  Server,
  Network,
  Layout,
  Cpu,
  Database,
  Binary,
  Boxes,
  Code2,
  Globe,
  Terminal,
} from 'lucide-react';

const ICON_MAP = {
  // Languages
  'Java': { icon: FaJava, color: '#e76f51' },
  'C++': { icon: SiCplusplus, color: '#00599C' },
  'C': { icon: SiC, color: '#A8B9CC' },
  'Python': { icon: SiPython, color: '#3776ab' },
  'JavaScript': { icon: SiJavascript, color: '#f7df1e' },
  'SQL': { icon: Database, color: '#38bdf8' },
  'Solidity': { icon: SiSolidity, color: '#aa67da' },
  'HTML': { icon: FaHtml5, color: '#e34c26' },
  'CSS': { icon: FaCss3Alt, color: '#264de4' },
  'TypeScript': { icon: SiTypescript, color: '#3178c6' },

  // Backend
  'Spring Boot': { icon: SiSpringboot, color: '#6db33f' },
  'Spring Cloud': { icon: SiSpring, color: '#6db33f' },
  'Spring Security': { icon: SiSpring, color: '#6db33f' },
  'Node.js': { icon: SiNodedotjs, color: '#5fa04e' },
  'Express': { icon: SiExpress, color: '#f8fafc' },
  'REST APIs': { icon: Server, color: '#38bdf8' },
  'JPA / Hibernate': { icon: SiHibernate, color: '#59666C' },
  'Microservices': { icon: Cpu, color: '#f59e0b' },
  'API Gateway': { icon: Network, color: '#a855f7' },
  'Redis': { icon: SiRedis, color: '#dc2626' },

  // Frontend
  'React': { icon: SiReact, color: '#61dafb' },
  'Vite': { icon: SiVite, color: '#646cff' },
  'CSS Modules': { icon: FaCss3Alt, color: '#264de4' },
  'Responsive Design': { icon: Layout, color: '#38bdf8' },
  'Next.js': { icon: SiNextdotjs, color: '#f8fafc' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06b6d4' },

  // Databases
  'MySQL': { icon: SiMysql, color: '#4479a1' },
  'MongoDB': { icon: SiMongodb, color: '#47a248' },
  'Supabase': { icon: SiSupabase, color: '#3ecf8e' },

  // Tools & Infra
  'Git': { icon: SiGit, color: '#f05032' },
  'GitHub': { icon: SiGithub, color: '#f8fafc' },
  'Docker': { icon: SiDocker, color: '#2496ed' },
  'Linux': { icon: SiLinux, color: '#fcc624' },
  'Ubuntu': { icon: SiUbuntu, color: '#e95420' },
  'Figma': { icon: SiFigma, color: '#f24e1e' },
  'Google Colab': { icon: SiGooglecolab, color: '#f9ab00' },
  'Eclipse': { icon: SiEclipseide, color: '#2c2255' },
  'Postman': { icon: SiPostman, color: '#ff6c37' },
  'IntelliJ IDEA': { icon: SiIntellijidea, color: '#fe315d' },
  'VS Code': { icon: Code2, color: '#007acc' },

  // Concepts
  'Data Structures & Algorithms': { icon: Binary, color: '#f59e0b' },
  'OOP': { icon: Boxes, color: '#38bdf8' },
  'DBMS': { icon: Database, color: '#a855f7' },
  'Computer Networks': { icon: Network, color: '#10b981' },
  'OS': { icon: Cpu, color: '#38bdf8' },
  'Blockchain / Web3': { icon: SiEthereum, color: '#627eea' },
};

export function getSkillColor(skillName) {
  return ICON_MAP[skillName]?.color || '#a855f7';
}

export default function SkillIcon({ skillName, size = 16 }) {
  const item = ICON_MAP[skillName];
  if (!item) {
    return <Terminal size={size} style={{ color: '#94a3b8' }} />;
  }

  const IconComp = item.icon;
  return <IconComp size={size} style={{ color: item.color }} aria-hidden="true" />;
}
