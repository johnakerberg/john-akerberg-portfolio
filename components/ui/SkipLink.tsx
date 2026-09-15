import styles from "./SkipLink.module.css";

export function SkipLink({ label }: { label: string }) {
  return (
    <a href="#main-content" className={styles.skipLink}>
      {label}
    </a>
  );
}
