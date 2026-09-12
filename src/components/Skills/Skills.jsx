import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading';
import SkillGroup from './SkillGroup';
import { skillGroups } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.section}`} aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading
          label="02 / skills"
          command="# Skills.json"
          subtitle="Technologies and concepts I work with regularly."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.grid}
        >
          {skillGroups.map((group) => (
            <SkillGroup key={group.label} label={group.label} skills={group.skills} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
