import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./ImageSlot.module.css";

export type ImageSlotProps = {
  src?: string | null;
  alt: string;
  label?: string;
  caption?: string;
  aspectRatio?: `${number}/${number}`;
  objectPosition?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Show the slot key and ratio inside the placeholder (useful while building). */
  placeholderMeta?: boolean;
};

/**
 * Renders either the real image (when `src` is set) or an intentional,
 * aspect-ratio-preserving placeholder (when it isn't). The surrounding
 * layout never needs to change when a real URL is added later.
 */
export function ImageSlot({
  src,
  alt,
  label = "IMAGE PLACEHOLDER",
  caption,
  aspectRatio = "4/3",
  objectPosition = "center",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  placeholderMeta = true,
}: ImageSlotProps) {
  const frameStyle = { aspectRatio: aspectRatio.replace("/", " / ") } as CSSProperties;
  const figureClasses = [styles.figure, className].filter(Boolean).join(" ");

  return (
    <figure className={figureClasses}>
      <div className={styles.frame} style={frameStyle}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            style={{ objectFit: "cover", objectPosition }}
            priority={priority}
          />
        ) : (
          <div className={styles.placeholder} role="img" aria-label={alt}>
            {placeholderMeta ? (
              <>
                <span className={styles.placeholderLabel}>{label}</span>
                <span className={styles.placeholderRatio}>{aspectRatio.replace("/", ":")}</span>
              </>
            ) : null}
          </div>
        )}
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
