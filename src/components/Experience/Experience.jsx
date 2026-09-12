import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading';
import TimelineItem from './TimelineItem';
import { experiences } from '../../data/experience';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.section}`} aria-labelledby="experience-heading">
      <div className="container">
        <div className={styles.inner}>
          <SectionHeading
            label="04 / experience"
            command="$ git log --oneline ~/experience"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.timeline}
          >
            {experiences.map((item, i) => (
              <TimelineItem
                key={item.id}
                item={item}
                isLast={i === experiences.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
