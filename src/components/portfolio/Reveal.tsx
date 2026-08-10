import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subtitle}</p> : null}
      <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
    </Reveal>
  );
}