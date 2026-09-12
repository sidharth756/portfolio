import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight, Layers, Code } from 'lucide-react';
import { GithubIcon } from '../Icons';
import SpotlightCard from '../ReactBits/SpotlightCard';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, variant = 'default' }) {
  return (
    <SpotlightCard
      spotlightColor="rgba(168, 85, 247, 0.14)"
      borderColor="rgba(168, 85, 247, 0.55)"
      className={`${styles.card} ${styles[variant]}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
      {/* Showcase Thumbnail Area */}
      <div className={styles.thumbnailContainer}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className={styles.thumbnailImg}
          />
        ) : (
          <div className={styles.thumbnailPlaceholder}>
            <div className={styles.placeholderGlow} />
            <div className={styles.placeholderHeader}>
              <span className={styles.dots} />
              <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                {project.id}.dev
              </span>
            </div>
            <div className={styles.placeholderCenter}>
              <Layers size={24} style={{ color: 'var(--accent)', opacity: 0.8 }} />
              <span className={styles.placeholderTitle}>{project.title}</span>
            </div>
          </div>
        )}
      </div>

      <div className={styles.cardInner}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
          </div>
          <div className={styles.links}>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
                aria-label={`Live demo of ${project.title}`}
              >
                <ExternalLink size={14} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
              aria-label={`GitHub repo for ${project.title}`}
            >
              <GithubIcon size={14} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.tagline}>{project.tagline}</p>
          {variant !== 'compact' && (
            <p className={styles.description}>{project.description}</p>
          )}
        </div>

        {/* Highlights */}
        {project.highlights && variant !== 'compact' && (
          <ul className={styles.highlights} role="list">
            {project.highlights.map((h, i) => (
              <li key={i} className={styles.highlight}>
                <ChevronRight size={12} className={styles.highlightIcon} aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className={styles.tech}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </SpotlightCard>
);
}
