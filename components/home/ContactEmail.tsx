"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import styles from "./ContactEmail.module.css";

type ContactEmailProps = {
  email: string;
  ctaLabel: string;
  promptText: string;
  openMailLabel: string;
  copyLabel: string;
  copiedLabel: string;
  closeLabel: string;
};

/**
 * "Contact me" no longer jumps straight into the visitor's mail app.
 * It reveals the address with two choices: copy it, or knowingly open
 * the default mail client (mailto:). Works for people on webmail too.
 */
export function ContactEmail({
  email,
  ctaLabel,
  promptText,
  openMailLabel,
  copyLabel,
  copiedLabel,
  closeLabel,
}: ContactEmailProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className={styles.wrap}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.cta}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {ctaLabel}
        <span aria-hidden="true" className={styles.arrow}>
          →
        </span>
      </button>

      <div id={panelId} className={styles.panel} hidden={!open}>
        <button type="button" className={styles.close} onClick={close} aria-label={closeLabel}>
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
        <p className={styles.prompt}>{promptText}</p>
        <p className={styles.address}>{email}</p>
        <div className={styles.actions}>
          <CopyEmailButton email={email} label={copyLabel} copiedLabel={copiedLabel} />
          <a href={`mailto:${email}`} className={styles.mailLink}>
            {openMailLabel} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
