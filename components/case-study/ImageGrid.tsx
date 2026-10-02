import { ImageSlot } from "@/components/ui/ImageSlot";
import { imageRegistry, type ImageKey } from "@/content/image-registry";
import type { Locale } from "@/lib/i18n";
import styles from "./ImageGrid.module.css";

export function ImageGrid({
  imageKeys,
  lang,
  columns = 2,
  compact = false,
}: {
  imageKeys: ImageKey[];
  lang: Locale;
  columns?: 2 | 3;
  /** Half-size items, e.g. tall phone mockups */
  compact?: boolean;
}) {
  return (
    <div
      className={styles.grid}
      data-columns={columns}
      data-compact={compact ? "" : undefined}
    >
      {imageKeys.map((key) => {
        const image = imageRegistry[key];
        return (
          <ImageSlot
            key={key}
            src={image.src}
            alt={image.alt[lang]}
            label={key}
            aspectRatio={image.ratio}
          />
        );
      })}
    </div>
  );
}
