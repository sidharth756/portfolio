import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { GithubIcon, LinkedinIcon } from '../Icons';
import styles from './Contact.module.css';

const LINKS = [
  {
    href: 'mailto:sidharthrk756@gmail.com',
    icon: Mail,
    label: 'Email',
    value: 'sidharthrk756@gmail.com',
    external: false,
  },
  {
    href: 'tel:+919342755756',
    icon: Phone,
    label: 'Call / Phone',
    value: '+91 93427 55756',
    external: false,
  },
  {
    href: 'https://discord.com',
    icon: MessageSquare,
    label: 'Discord',
    value: 'sidharth_56',
    external: true,
  },
  {
    href: 'https://github.com/sidharth756',
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/sidharth756',
    external: true,
  },
  {
    href: 'https://linkedin.com/in/sidharth56',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sidharth56',
    badge: '3K+ Followers',
    isLinkedIn: true,
    external: true,
  },
];

export default function Contact() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#6366f1', '#fbbf24'],
    });
  };

  return (
    <section id="contact" className={`section ${styles.section}`} aria-labelledby="contact-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.inner}
        >
          <div className={styles.copy}>
            <SectionHeading
              label="07 / contact"
              command="ping -c 4 sidharth.dev"
            />
            <h2 id="contact-heading" className={styles.title}>
              Let's build something useful.
            </h2>
            <p className={styles.desc}>
              I'm always interested in engineering problems, collaborative projects,
              internships, and open-source work. If something resonates, reach out.
            </p>
            <a
              href="https://linkedin.com/in/sidharth56"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
              onClick={triggerConfetti}
              aria-label="Connect with Sidharth on LinkedIn"
            >
              Get in touch
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className={styles.links}>
            {LINKS.map(({ href, icon: Icon, label, value, badge, isLinkedIn, external }) => (
              <a
                key={label}
                href={href}
                className={`${styles.linkItem} ${isLinkedIn ? styles.linkedinCard : ''}`}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={`${label}: ${value}`}
              >
                <div className={`${styles.linkIcon} ${isLinkedIn ? styles.linkedinIconWrapper : ''}`}>
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div className={styles.linkBody}>
                  <div className="flex items-center gap-2">
                    <span className={styles.linkLabel}>{label}</span>
                    {badge && <span className={styles.linkedinBadge}>{badge}</span>}
                  </div>
                  <span className={styles.linkValue}>{value}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
