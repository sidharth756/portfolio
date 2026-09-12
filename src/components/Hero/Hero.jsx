import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import MagnetButton from '../ReactBits/MagnetButton';
import ShinyText from '../ReactBits/ShinyText';
import profilePic from '../../assets/Bright-PIC.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={`${styles.inner} container`}>
        {/* Left Content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            <span
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <ShinyText text="JAVA FULL-STACK DEVELOPER · STUDENT" speed={3} />
            </span>
          </div>

          <motion.h1
            id="hero-heading"
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Building reliable software<br />
            <span className={styles.headlineAccent}>
              <ShinyText text="with Java &amp; Spring Boot" speed={3.5} />
            </span><br />
            modern backend &amp; web apps.
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi, I'm Sidharth — a Computer Science Engineering student passionate about
            becoming a Java Full-Stack Developer. I solve real-world problems on LeetCode &amp; GFG and explore AI fundamentals.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <MagnetButton>
              <a href="#projects" className={styles.primaryCta}>
                View Projects
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </MagnetButton>
            <MagnetButton>
              <a
                href="https://github.com/sidharth756"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryCta}
              >
                <GithubIcon size={16} aria-hidden="true" />
                GitHub
              </a>
            </MagnetButton>
            <MagnetButton>
              <a
                href="/Resume-06.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryCta}
              >
                <Download size={16} aria-hidden="true" />
                Resume
              </a>
            </MagnetButton>
          </motion.div>

          <div className={styles.statusRow}>
            <div className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Open for Internships &amp; Collaborations</span>
            </div>
            <a
              href="https://linkedin.com/in/sidharth56"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinSocialBadge}
            >
              <LinkedinIcon size={13} aria-hidden="true" />
              <span>3K+ LinkedIn Network</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Sleek Portrait Visual + Terminal Bar */}
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {/* Portrait Frame */}
          <div className={styles.portraitCard}>
            <img
              src={profilePic}
              alt="Sidharth R K — Software Engineer"
              className={styles.portraitImg}
            />
            <div className={styles.portraitGradient} />
            <div className={styles.portraitTag}>
              <span className={styles.heroStatusDot} aria-hidden="true" />
              <span>Sidharth R K · Software Engineer</span>
            </div>
          </div>

          {/* Compact Terminal Bar */}
          <div className={styles.terminalBar}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalDots}>
                <span className={styles.termDot} data-color="red" />
                <span className={styles.termDot} data-color="yellow" />
                <span className={styles.termDot} data-color="green" />
              </div>
              <span className={styles.terminalTitle}>whoami.sh</span>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.termLine}>
                <span className={styles.termPrefix}>$ </span>
                <span className={styles.termAccent}>whoami </span>
                <span className={styles.termText}>→ sidharth-rk (Java Full-Stack)</span>
              </div>
              <div className={styles.termLine}>
                <span className={styles.termPrefix}>stack: </span>
                <span className={styles.termText}>Java · Spring Boot · React · AI</span>
              </div>
              <div className={styles.termLine}>
                <span className={styles.termPrefix}>social: </span>
                <span className={styles.termText}>3,000+ LinkedIn Network</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
