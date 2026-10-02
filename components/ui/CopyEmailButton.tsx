"use client";

import { useEffect, useState } from "react";
import styles from "./CopyEmailButton.module.css";

type CopyEmailButtonProps = {
  email: string;
  label: string;
  copiedLabel: string;
  className?: string;
};

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers/contexts without the async clipboard API
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  }
}

export function CopyEmailButton({ email, label, copiedLabel, className }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  return (
    <>
      <button
        type="button"
        className={[styles.button, className].filter(Boolean).join(" ")}
        onClick={async () => setCopied(await copyText(email))}
      >
        <span aria-hidden="true" className={styles.icon}>
          {copied ? "✓" : "⧉"}
        </span>
        <span>{copied ? copiedLabel : label}</span>
      </button>
      {/* Separate live region so the confirmation is announced once */}
      <span role="status" className="sr-only">
        {copied ? copiedLabel : ""}
      </span>
    </>
  );
}
