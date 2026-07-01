import { Link } from "wouter";
import { Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { donateBand } from "@/assets";
import { CONTACT } from "@/data";
import Reveal from "./Reveal";

interface CtaBandProps {
  eyebrow?: string;
  title?: string;
  text?: string;
}

export default function CtaBand({
  eyebrow = "Get involved",
  title = "Help keep youth safe and supported",
  text = "Your donation—no matter the amount—supports peace ambassador outreach, mentorship programs, safety discussions, and family support services.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)]">
      <div className="absolute inset-0">
        <img src={donateBand} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-deep)]/90 to-[var(--navy)]/70" />
      </div>
      <div className="container relative py-16 md:py-20">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 font-display font-bold text-white text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-white/80 text-lg leading-relaxed">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="give" size="xl">
              <Link href="/donate">
                <Heart className="size-5" /> Donate now
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15"
            >
              <a href={`mailto:${CONTACT.email}`}>
                <Mail className="size-5" /> Contact us
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
