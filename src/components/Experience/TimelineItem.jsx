import { motion } from 'framer-motion';
import styles from './TimelineItem.module.css';

export default function TimelineItem({ item, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className={`${styles.item} ${isLast ? styles.last : ''}`}
    >
      <div className={styles.spine}>
        <div className={styles.dot} />
        {!isLast && <div className={styles.line} />}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <span className={styles.year}>{item.year}</span>
            <h3 className={styles.role}>{item.role}</h3>
            <p className={styles.org}>
              {item.org}
              <span className={styles.orgDetail}> · {item.orgDetail}</span>
            </p>
          </div>
        </div>
        <p className={styles.desc}>{item.description}</p>
        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
