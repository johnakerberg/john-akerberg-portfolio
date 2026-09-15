import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ArrowLink.module.css";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function ArrowLink({ href, children, external = false, className }: ArrowLinkProps) {
  const classes = [styles.link, className].filter(Boolean).join(" ");
  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden="true" className={styles.arrow}>
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
