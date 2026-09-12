import React from 'react';
import { Terminal, Shield, Activity, Radio, LineChart, FileText, Cpu } from 'lucide-react';
import styles from './ProjectPreview.module.css';

export default function ProjectPreview({ projectId }) {
  switch (projectId) {
    case 'trackmate':
      return (
        <div className={styles.previewContainer} data-theme="orange">
          <div className={styles.previewHeader}>
            <div className={styles.dots}>
              <span className={styles.dot} data-color="red" />
              <span className={styles.dot} data-color="yellow" />
              <span className={styles.dot} data-color="green" />
            </div>
            <span className={styles.previewTitle}>trackmate // gps-telemetry-engine</span>
          </div>
          <div className={styles.previewBody}>
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <Activity size={14} className={styles.iconOrange} />
                <span>GPS Stream: Active</span>
              </div>
              <div className={styles.statBox}>
                <Cpu size={14} className={styles.iconGold} />
                <span>Kafka Queue: 1.2k msg/s</span>
              </div>
            </div>
            <div className={styles.mockGraph}>
              <div className={styles.bar} style={{ height: '40%' }} />
              <div className={styles.bar} style={{ height: '70%' }} />
              <div className={styles.bar} style={{ height: '55%' }} />
              <div className={styles.bar} style={{ height: '90%' }} />
              <div className={styles.bar} style={{ height: '65%' }} />
              <div className={styles.bar} style={{ height: '85%' }} />
            </div>
          </div>
        </div>
      );

    case 'ripple':
      return (
        <div className={styles.previewContainer} data-theme="cyan">
          <div className={styles.previewHeader}>
            <div className={styles.dots}>
              <span className={styles.dot} data-color="red" />
              <span className={styles.dot} data-color="yellow" />
              <span className={styles.dot} data-color="green" />
            </div>
            <span className={styles.previewTitle}>ripple // ble-mesh-protocol</span>
          </div>
          <div className={styles.previewBody}>
            <div className={styles.meshRow}>
              <Radio size={16} className={styles.iconCyan} />
              <span>P2P BLE Mesh · X25519 Encrypted</span>
            </div>
            <div className={styles.nodesGrid}>
              <span className={styles.nodePill}>Node #01 [Active]</span>
              <span className={styles.nodePill}>Node #02 [Hop 1]</span>
              <span className={styles.nodePill}>Node #03 [Hop 2]</span>
            </div>
          </div>
        </div>
      );

    case 'stocklens':
      return (
        <div className={styles.previewContainer} data-theme="blue">
          <div className={styles.previewHeader}>
            <div className={styles.dots}>
              <span className={styles.dot} data-color="red" />
              <span className={styles.dot} data-color="yellow" />
              <span className={styles.dot} data-color="green" />
            </div>
            <span className={styles.previewTitle}>stocklens // ai-advisor-analytics</span>
          </div>
          <div className={styles.previewBody}>
            <div className={styles.meshRow}>
              <LineChart size={16} className={styles.iconBlue} />
              <span>TensorFlow Prediction Model: 94.2% Acc</span>
            </div>
            <div className={styles.chartLine} />
          </div>
        </div>
      );

    case 'resumate':
      return (
        <div className={styles.previewContainer} data-theme="yellow">
          <div className={styles.previewHeader}>
            <div className={styles.dots}>
              <span className={styles.dot} data-color="red" />
              <span className={styles.dot} data-color="yellow" />
              <span className={styles.dot} data-color="green" />
            </div>
            <span className={styles.previewTitle}>resumate // ats-resume-builder</span>
          </div>
          <div className={styles.previewBody}>
            <div className={styles.meshRow}>
              <FileText size={16} className={styles.iconGold} />
              <span>Gemini AI Smart Resume Parser &amp; Formatter</span>
            </div>
            <div className={styles.docLines}>
              <div className={styles.docLine} style={{ width: '80%' }} />
              <div className={styles.docLine} style={{ width: '60%' }} />
              <div className={styles.docLine} style={{ width: '90%' }} />
            </div>
          </div>
        </div>
      );

    case 'credencify':
    default:
      return (
        <div className={styles.previewContainer} data-theme="violet">
          <div className={styles.previewHeader}>
            <div className={styles.dots}>
              <span className={styles.dot} data-color="red" />
              <span className={styles.dot} data-color="yellow" />
              <span className={styles.dot} data-color="green" />
            </div>
            <span className={styles.previewTitle}>credencify // sepolia-smart-contract</span>
          </div>
          <div className={styles.previewBody}>
            <div className={styles.meshRow}>
              <Shield size={16} className={styles.iconViolet} />
              <span>Sepolia Testnet · Solidity Smart Contract Verified</span>
            </div>
            <div className={styles.hashBox}>
              TxHash: 0x8a92f...73e19 (Tamper-Proof IPFS)
            </div>
          </div>
        </div>
      );
  }
}
