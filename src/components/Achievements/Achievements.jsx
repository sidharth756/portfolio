import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles, ExternalLink, GitPullRequest } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { achievements } from '../../data/achievements';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section id="achievements" className={`section ${styles.section}`} aria-labelledby="achievements-heading">
      <div className="container">
        <SectionHeading
          label="06 / achievements"
          title="Achievements & Milestones"
        />

        <div className={styles.verticalList}>
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -3 }}
              className={styles.card}
              style={{ '--accent-color': item.color }}
            >
              {/* Top Row: Badge & Year */}
              <div className={styles.cardHeader}>
                <div
                  className={styles.placeBadge}
                  style={{
                    color: item.color,
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}40`,
                  }}
                >
                  {item.id === 'corsair-open-source' ? (
                    <GitPullRequest size={16} aria-hidden="true" />
                  ) : (
                    <Trophy size={16} aria-hidden="true" />
                  )}
                  <span>{item.place}</span>
                </div>
                <span className={styles.yearBadge}>{item.year}</span>
              </div>

              {/* Title & Details */}
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.venueRow}>
                  <Sparkles size={14} className={styles.venueIcon} style={{ color: item.color }} />
                  <span className={styles.venueText}>{item.venue}</span>
                </div>
                <p className={styles.detailText}>{item.detail}</p>
              </div>

              {/* Bottom Tags & Links */}
              <div className={styles.cardFooter}>
                <div className={styles.tagsRow}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={styles.tag}
                      style={{
                        backgroundColor: `${item.color}12`,
                        color: item.color,
                        borderColor: `${item.color}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.prLink && (
                  <a
                    href={item.prLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    style={{ color: item.color, borderColor: `${item.color}40` }}
                  >
                    <span>View Corsair.dev</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
