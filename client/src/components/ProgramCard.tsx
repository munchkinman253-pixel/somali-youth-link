import { ShieldCheck, Users, MessageSquareHeart, GraduationCap } from "lucide-react";
import type { Program } from "@/data";

const ICONS: Record<string, typeof ShieldCheck> = {
  peace: ShieldCheck,
  family: Users,
  safety: MessageSquareHeart,
  mentorship: GraduationCap,
};

export default function ProgramCard({ program }: { program: Program }) {
  const Icon = ICONS[program.id] ?? ShieldCheck;
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/70 to-transparent" />
        <span className="absolute left-4 bottom-4 grid place-items-center size-11 rounded-xl bg-white text-navy shadow-md">
          <Icon className="size-5" />
        </span>
      </div>
      <div className="p-6">
        <p className="eyebrow">{program.short}</p>
        <h3 className="mt-2 font-display text-lg font-bold text-navy leading-snug">
          {program.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {program.description}
        </p>
      </div>
    </article>
  );
}
