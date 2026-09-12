import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Education.module.css';

const EDUCATION_ITEMS = [
  {
    id: 'college',
    degree: 'Bachelor of Engineering — Computer Science',
    institution: 'Karpagam College of Engineering',
    period: '2024 — 2028',
    icon: GraduationCap,
    courseworkLabel: 'Relevant Coursework',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Computer Networks',
      'Operating Systems',
      'Software Engineering',
    ],
  },
  {
    id: 'schooling',
    degree: 'Higher Secondary (HSC) — Computer Science & Mathematics',
    institution: 'SRT Universal Higher Secondary School',
    period: '2022 — 2024',
    icon: School,
    courseworkLabel: 'Core Subjects',
    coursework: [
      'Mathematics',
      'Computer Science',
      'Physics',
      'Chemistry',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className={`section ${styles.section}`} aria-labelledby="education-heading">
      <div className="container">
        <SectionHeading
          label="05 / education"
          command="$ find ./academics -type education"
        />

        <div className={styles.list}>
          {EDUCATION_ITEMS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={styles.card}
              >
                <div className={styles.icon}>
                  <IconComponent size={22} aria-hidden="true" />
                </div>
                <div className={styles.body}>
                  <div className={styles.top}>
                    <div>
                      <h3 className={styles.degree}>{item.degree}</h3>
                      <p className={styles.institution}>{item.institution}</p>
                    </div>
                    <div className={styles.period}>
                      <Calendar size={13} aria-hidden="true" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div className={styles.coursework}>
                    <span className={styles.courseLabel}>{item.courseworkLabel}</span>
                    <div className={styles.courses}>
                      {item.coursework.map((c) => (
                        <span key={c} className={styles.course}>{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
