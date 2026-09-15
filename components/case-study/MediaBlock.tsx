import { ImageSlot } from "@/components/ui/ImageSlot";
import { imageRegistry, type ImageKey } from "@/content/image-registry";
import type { Locale } from "@/lib/i18n";
import styles from "./MediaBlock.module.css";

export function MediaBlock({
  imageKey,
  lang,
  width = "content",
  caption,
}: {
  imageKey: ImageKey;
  lang: Locale;
  width?: "content" | "wide";
  caption?: string;
}) {
  const image = imageRegistry[imageKey];

  return (
    <div className={styles.block} data-width={width}>
      <ImageSlot
        src={image.src}
        alt={image.alt[lang]}
        label={imageKey}
        aspectRatio={image.ratio}
        caption={caption}
      />
    </div>
  );
}
