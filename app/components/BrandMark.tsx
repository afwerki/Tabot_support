import Image from "next/image";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-mark compact" : "brand-mark"} aria-hidden="true">
      <Image
        src="/tabot-logo.png"
        alt=""
        width={1254}
        height={1254}
        priority
        unoptimized
      />
    </span>
  );
}
