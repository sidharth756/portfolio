import { motion } from 'framer-motion';
import SkillIcon, { getSkillColor } from './SkillIcons';
import styles from './SkillGroup.module.css';

export default function SkillGroup({ label, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className={styles.group}
    >
      <h3 className={styles.label}>{label}</h3>
      <ul className={styles.list} role="list">
        {skills.map((skill) => {
          const color = getSkillColor(skill);
          return (
            <motion.li
              key={skill}
              whileHover={{
                scale: 1.06,
                borderColor: color,
                backgroundColor: `${color}22`,
                boxShadow: `0 0 16px ${color}44, 0 4px 12px rgba(0,0,0,0.5)`,
              }}
              transition={{ duration: 0.15 }}
              className={styles.tag}
              style={{
                borderColor: `${color}35`,
                backgroundColor: `${color}12`,
              }}
            >
              <SkillIcon skillName={skill} size={15} />
              <span>{skill}</span>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}
