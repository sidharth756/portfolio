import React from 'react';
import { motion } from 'framer-motion';
import GitHubShowcase from './GitHubShowcase';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.section}`} aria-labelledby="projects-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GitHubShowcase />
        </motion.div>
      </div>
    </section>
  );
}
