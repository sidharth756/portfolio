import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import MagnetButton from '../ReactBits/MagnetButton';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const isClickScrollRef = useRef(false);

  const handleNavClick = (href) => {
    setActiveSection(href);
    isClickScrollRef.current = true;
    setTimeout(() => {
      isClickScrollRef.current = false;
    }, 900);
  };

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      setScrolled(window.scrollY > 40);

      if (isClickScrollRef.current) {
        ticking = false;
        return;
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 180;

      if (isAtBottom) {
        setActiveSection((prev) => (prev !== '#contact' ? '#contact' : prev));
        ticking = false;
        return;
      }

      const sections = ['#contact', '#experience', '#projects', '#skills', '#about'];
      const triggerPoint = window.innerHeight * 0.55;

      for (const section of sections) {
        const el = document.querySelector(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            setActiveSection((prev) => (prev !== section ? section : prev));
            break;
          }
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={`${styles.nav} container`} aria-label="Main navigation">
        {/* Logo / Brand Monogram */}
        <a href="#hero" className={styles.logo} aria-label="sidharthdev.xyz — Home">
          <div className="flex items-baseline gap-0.5">
            <span className={styles.logoName}>sidharthdev</span>
            <span className={styles.logoSuffix}>.xyz</span>
          </div>
        </a>

        {/* Floating Desktop Nav Links with Active Pill */}
        <div className={styles.linksContainer}>
          <ul className={styles.links} role="list">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className={`${styles.link} ${isActive ? styles.activeLink : ''}`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className={styles.activePill}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Actions */}
        <div className={styles.actions}>
          <a
            href="https://github.com/sidharth756"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/sidharth56"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon size={18} />
          </a>

          <MagnetButton className="ml-1">
            <a
              href="/Resume-06.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
              aria-label="Download resume"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>
          </MagnetButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={styles.drawer}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <ul className={styles.drawerLinks} role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.drawerLink} ${activeSection === link.href ? styles.activeDrawerLink : ''}`}
                    onClick={() => {
                      setActiveSection(link.href);
                      setMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.drawerActions}>
              <div className="flex items-center gap-3 mb-2">
                <a
                  href="https://github.com/sidharth756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.drawerIconLink}
                  onClick={() => setMenuOpen(false)}
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sidharth56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.drawerIconLink}
                  onClick={() => setMenuOpen(false)}
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </div>
              <a
                href="/Resume-06.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.drawerResumeBtn}
                onClick={() => setMenuOpen(false)}
              >
                <FileText size={14} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
