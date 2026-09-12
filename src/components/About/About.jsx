import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code2, Server, BookOpen, Zap } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './About.module.css';

const META = [
  { label: 'Based in',         value: 'India', icon: MapPin },
  { label: 'Focus',            value: 'Java Full-Stack Developer', icon: Code2 },
  { label: 'Primary Stack',    value: 'Java & Spring Boot', icon: Server },
  { label: 'Problem Solving',  value: 'LeetCode & GeeksforGeeks', icon: Zap },
  { label: 'Exploring',        value: 'AI Fundamentals', icon: BookOpen },
];

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.grid}
        >
          {/* Left column: Section Heading & Quick Specs */}
          <div className={styles.left}>
            <SectionHeading
              label="01 / about"
              title="A little about me"
            />

            <div className={styles.meta}>
              {META.map(({ label, value, icon: Icon }) => (
                <div key={label} className={styles.metaRow}>
                  <span className={styles.metaLabel}>
                    <Icon size={13} className={styles.metaIcon} aria-hidden="true" />
                    {label}
                  </span>
                  <span className={styles.metaValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Single Clean Bio Card */}
          <div className={styles.right}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={styles.bioCard}
            >
              <p className={styles.paraLead}>
                Hi, I’m <strong className={styles.highlightText}>Sidharth</strong> — a Computer Science Engineering student passionate about becoming a <strong>Java Full-Stack Developer</strong>, with a strong focus on backend development using <strong>Java &amp; Spring Boot</strong>.
              </p>
              <p className={styles.para}>
                I enjoy solving real-world engineering problems, sharpening my logic through competitive programming on <strong>LeetCode</strong> &amp; <strong>GeeksforGeeks</strong>, and bringing a clean, creative coding vibe to everything I build.
              </p>
              <p className={styles.para}>
                Alongside full-stack development, I explore <strong>AI fundamentals</strong> to understand how intelligent systems work and how they integrate into production software. As a quick learner, I adapt easily, explore new technologies, and build practical projects to stay aligned with industry trends.
              </p>
              <p className={styles.para}>
                I’m open to internships, collaborations, and opportunities that help me grow as a developer and problem-solver.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
