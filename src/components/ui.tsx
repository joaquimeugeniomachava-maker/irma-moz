import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import type { Confidence } from "../data/sistafe";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  accent = "violet",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: "violet" | "amber" | "orange" | "sky" | "emerald";
}) {
  const glows = {
    violet: "bg-[radial-gradient(circle_at_50%_0%,#7c3aed40_0%,transparent_60%)]",
    amber: "bg-[radial-gradient(circle_at_50%_0%,#c2410c33_0%,transparent_60%)]",
    orange: "bg-[radial-gradient(circle_at_50%_0%,#ea580c33_0%,transparent_60%)]",
    sky: "bg-[radial-gradient(circle_at_50%_0%,#0284c733_0%,transparent_60%)]",
    emerald: "bg-[radial-gradient(circle_at_50%_0%,#05966933_0%,transparent_60%)]",
  };
  const titles = {
    violet: "from-violet-300 via-fuchsia-400 to-violet-500",
    amber: "from-amber-300 via-rose-400 to-amber-500",
    orange: "from-orange-300 via-amber-400 to-orange-500",
    sky: "from-sky-300 via-blue-400 to-sky-500",
    emerald: "from-emerald-300 via-teal-400 to-emerald-500",
  };
  const eyes = {
    violet: "text-violet-400",
    amber: "text-amber-400",
    orange: "text-orange-400",
    sky: "text-sky-400",
    emerald: "text-emerald-400",
  };

  return (
    <header className="relative overflow-hidden px-4 pb-14 pt-16 text-center sm:px-6 sm:pt-20">
      <div className={cn("absolute inset-0", glows[accent])} />
      {eyebrow && (
        <p
          className={cn(
            "relative z-10 mb-4 text-xs font-bold uppercase tracking-[0.2em]",
            eyes[accent],
          )}
        >
          {eyebrow}
        </p>
      )}
      <h1
        className={cn(
          "relative z-10 mx-auto max-w-3xl bg-gradient-to-br bg-clip-text font-display text-4xl font-black leading-tight tracking-tight text-transparent md:text-5xl lg:text-6xl",
          titles[accent],
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="relative z-10 mx-auto mt-5 max-w-2xl text-base font-medium text-slate-300/90 md:text-lg">
          {subtitle}
        </p>
      )}
    </header>
  );
}

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 pb-16 sm:px-6", className)}>
      {children}
    </section>
  );
}

export function Badge({ estado }: { estado: Confidence | string }) {
  if (estado === "verificado" || estado === "Verificado") {
    return (
      <span className="inline-flex rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-300">
        ✅ Verificado
      </span>
    );
  }
  if (estado === "nao_verificado" || estado.includes("confirmar") || estado.includes("confirmar")) {
    return (
      <span className="inline-flex rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold text-amber-300">
        ⚠️ Não verificado
      </span>
    );
  }
  if (estado === "inconclusivo") {
    return (
      <span className="inline-flex rounded-md border border-rose-500/30 bg-rose-500/10 px-2 py-0.5 text-[11px] font-bold text-rose-300">
        ❓ Inconclusivo
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-md border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 text-[11px] font-bold text-violet-300">
      {estado}
    </span>
  );
}

export function Card({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const Comp = onClick ? "button" : "div";
  return (
    <Comp
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "rounded-2xl border border-white/5 bg-white/[0.03] p-5 text-left transition",
        onClick && "hover:border-white/15 hover:bg-white/[0.05]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
