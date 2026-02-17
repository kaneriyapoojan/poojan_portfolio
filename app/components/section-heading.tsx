import { cn } from "@/app/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 space-y-3", className)}>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {subtitle ? <p className="max-w-3xl text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}
