import { GithubIcon, LinkedinIcon } from '../Icons';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.inner} container`}>
        <p className={styles.copy}>
          © {year} Sidharth R K
        </p>

        <p className={styles.built}>
          Built with React · Deployed on Cloudflare Pages
        </p>
        

        <nav className={styles.links} aria-label="Footer social links">
          <a
            href="https://github.com/sidharth756"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="GitHub"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href="https://linkedin.com/in/sidharth56"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={15} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
