"use client";
import Image from "next/image";
const widths = [480, 960, 1600];
export function Photo({
  name,
  alt,
  ratio = 1,
  hero = false,
  className = "",
}: {
  name: string;
  alt: string;
  ratio?: number;
  hero?: boolean;
  className?: string;
}) {
  const sizes = hero
    ? "100vw"
    : "(max-width: 767px) 85vw, (max-width: 1200px) 45vw, 33vw";
  return (
    <picture className={`photo ${className}`}>
      {hero && (
        <source
          media="(max-width: 767px)"
          type="image/avif"
          srcSet={widths
            .map((w) => `/assets/hero-mobile-poster-${w}.avif ${w}w`)
            .join(", ")}
          sizes="100vw"
        />
      )}
      <source
        type="image/avif"
        srcSet={widths.map((w) => `/assets/${name}-${w}.avif ${w}w`).join(", ")}
        sizes={sizes}
      />
      <Image
        src={`/assets/${name}-960.webp`}
        alt={alt}
        width={960}
        height={Math.round(960 / ratio)}
        sizes={sizes}
        loader={({ width }) =>
          `/assets/${name}-${width <= 480 ? 480 : width <= 960 ? 960 : 1600}.webp`
        }
        fetchPriority={hero ? "high" : undefined}
        loading={hero ? "eager" : "lazy"}
      />
    </picture>
  );
}
