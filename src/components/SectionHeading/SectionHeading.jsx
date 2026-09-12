import React from 'react';
import {
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Trophy,
  Radio,
  Terminal,
  HeartHandshake,
} from 'lucide-react';
import styles from './SectionHeading.module.css';

const DEFAULT_TOPICS = {
  about: { icon: User, cmd: '$ cat about.md' },
  skills: { icon: Cpu, cmd: '# Skills.json' },
  projects: { icon: FolderGit2, cmd: '$ ls -la ~/projects' },
  experience: { icon: Briefcase, cmd: '$ git log --oneline ~/experience' },
  volunteering: { icon: HeartHandshake, cmd: '$ git log --oneline ~/volunteering' },
  education: { icon: GraduationCap, cmd: '$ find ./academics -type education' },
  achievements: { icon: Trophy, cmd: '$ cat ~/milestones.log' },
  contact: { icon: Radio, cmd: '$ ping -c 4 sidharth.dev' },
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  command,
  icon: customIcon,
  align = 'left',
}) {
  const searchKey = (label || title || '').toLowerCase();
  let matchedIcon = customIcon;
  let matchedCmd = command;

  if (!matchedCmd || !matchedIcon || typeof matchedIcon === 'string') {
    for (const [k, v] of Object.entries(DEFAULT_TOPICS)) {
      if (searchKey.includes(k)) {
        matchedIcon = v.icon;
        matchedCmd = matchedCmd || v.cmd;
        break;
      }
    }
  }

  if (!matchedCmd) {
    matchedIcon = matchedIcon || Terminal;
    matchedCmd = `$ exec ./${(title || 'section').toLowerCase().replace(/\s+/g, '_')}.sh`;
  }

  let promptSymbol = '$';
  let commandText = matchedCmd;

  if (matchedCmd.startsWith('#') || matchedCmd.startsWith('$')) {
    promptSymbol = matchedCmd.charAt(0);
    commandText = matchedCmd.slice(1).trim();
  }

  const renderIcon = () => {
    if (typeof matchedIcon === 'function' || (typeof matchedIcon === 'object' && matchedIcon !== null)) {
      const IconComponent = matchedIcon;
      return <IconComponent size={26} className="text-amber-400 inline-block" />;
    }
    return <Terminal size={26} className="text-amber-400 inline-block" />;
  };

  return (
    <div className={styles.heading} data-align={align}>
      <div className={styles.terminalPrompt}>
        <span className={styles.icon}>{renderIcon()}</span>
        <span className={styles.promptSymbol}>{promptSymbol}</span>
        <span className={styles.command}>{commandText}</span>
      </div>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
