import React from 'react';
import { Bookmark, ChevronRight, FolderGit2 } from 'lucide-react';
import MagicBento from '../ReactBits/MagicBento';
import { sidebarRepositories } from '../../data/githubRepos';
import styles from './GitHubShowcase.module.css';

export default function GitHubShowcase() {
  return (
    <div className={styles.wrapper}>
      {/* Terminal Command Header */}
      <div className={styles.terminalHeader}>
        <FolderGit2 size={20} className="text-amber-400 inline-block mr-1" />
        <span className={styles.promptSymbol}>$</span>
        <span className={styles.promptCommand}>ls -la ~/projects</span>
      </div>

      {/* Main Showcase Grid */}
      <div className={styles.showcaseGrid}>
        {/* Left Sidebar: Repositories */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarTitleGroup}>
              <Bookmark size={16} className={styles.sidebarIcon} />
              <span className={styles.sidebarTitle}>Repositories</span>
            </div>
            <span className={styles.repoBadge}>{sidebarRepositories.length || 23}</span>
          </div>

          <div className={styles.repoList}>
            {sidebarRepositories.map((repo, idx) => (
              <a
                key={idx}
                href={repo.githubUrl || 'https://github.com/sidharth756'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoItem}
              >
                <div className={styles.repoItemHeader}>
                  <span className={styles.repoItemName}>{repo.name}</span>
                  <span className={styles.publicTag}>Public</span>
                </div>

                <div className={styles.repoItemMeta}>
                  {repo.language && (
                    <span className={styles.langWrapper}>
                      <span
                        className={styles.langDot}
                        style={{ backgroundColor: repo.languageColor || '#f1e05a' }}
                      />
                      <span className={styles.langName}>{repo.language}</span>
                    </span>
                  )}
                  <span className={styles.updatedText}>{repo.updated}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Main Content: Magic Bento Grid */}
        <div className={styles.mainContent}>
          <div className={styles.pinnedHeader}>
            <span className={styles.pinnedTitle}>PINNED FEATURED PROJECTS</span>
          </div>

          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="168, 85, 247"
          />
        </div>
      </div>

      {/* Footer CTA: View all repositories */}
      <div className={styles.footerRow}>
        <a
          href="https://github.com/sidharth756"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewAllBtn}
        >
          View all repositories <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}


