import { useState } from "react";
import { ImageOff } from "lucide-react";

/**
 * Drop-in <img> replacement. If the real photo at `src` hasn't been added
 * yet (404), it shows a soft placeholder instead of a broken-image icon,
 * so the site still looks intentional before every asset is in place.
 */
export default function ImageWithFallback({ src, alt, className = "", fallbackClassName = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-brand-50 text-brand-300 ${className} ${fallbackClassName}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff size={28} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
