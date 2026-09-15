import { translations } from "@/content/translations";
import type { Locale } from "@/lib/i18n";
import type { CaseInsight } from "@/content/projects";
import styles from "./InsightBlock.module.css";

export function InsightBlock({ insight, lang }: { insight: CaseInsight; lang: Locale }) {
  const t = translations[lang];

  return (
    <div className={styles.block}>
      <p className={styles.eyebrow}>{t.insightLabel}</p>

      <div className={styles.row}>
        <p className={styles.rowLabel}>{t.insightObservation}</p>
        <p className={styles.rowValue}>{insight.observation[lang]}</p>
      </div>

      <div className={styles.arrow} aria-hidden="true">
        ↓
      </div>

      <div className={styles.row}>
        <p className={styles.rowLabel}>{t.insightWhy}</p>
        <p className={styles.rowValue}>{insight.why[lang]}</p>
      </div>

      <div className={styles.arrow} aria-hidden="true">
        ↓
      </div>

      <div className={styles.row}>
        <p className={styles.rowLabel}>{t.insightImplication}</p>
        <p className={styles.rowValue}>{insight.implication[lang]}</p>
      </div>
    </div>
  );
}
