/* Home — Civic Trust: editorial hero, mission, programs, impact, CTA.
   Palette: navy + sky; give-magenta reserved for Donate. */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Heart,
  ArrowRight,
  ShieldCheck,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import ProgramCard from "@/components/ProgramCard";
import CtaBand from "@/components/CtaBand";
import { PROGRAMS, IMPACT, GALLERY, CONTACT } from "@/data";
import { heroCommunity, groupPhoto } from "@/assets";

export default function Home() {
  const galleryPreview = GALLERY.flatMap((a) => a.images).slice(0, 6);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--navy-deep)]">
        <div className="absolute inset-0">
          <img
            src={heroCommunity}
            alt="Somali Youth Link community members together"
            className="h-full w-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)] via-[var(--navy-deep)]/90 to-[var(--navy)]/40" />
        </div>

        <div className="container relative grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur"
            >
              <Sparkles className="size-4 text-sky" />
              Community safety, built on trust — {CONTACT.city}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-6 font-display font-extrabold text-white text-[clamp(2.4rem,5.6vw,4rem)] leading-[1.03]"
            >
              Showing up for youth,{" "}
              <span className="text-sky">one block at a time.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed"
            >
              Somali Youth Link is a Minneapolis nonprofit where trained, unarmed
              peace ambassadors de-escalate conflict, mentor young people, and
              connect families to the resources they need.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button asChild variant="give" size="xl">
                <Link href="/donate">
                  <Heart className="size-5" /> Stand with our ambassadors
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/15"
              >
                <Link href="/about">
                  Learn our story <ArrowRight className="size-5" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 text-white">
                <ShieldCheck className="size-6 text-sky" />
                <p className="font-display font-semibold">Our promise</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Unarmed, culturally-rooted, and consistently present — preventing
                harm before it happens and helping families feel supported.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {IMPACT.slice(0, 2).map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/10 p-4">
                    <p className="font-display text-3xl font-bold text-white">
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-white/70 leading-snug">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <img
                src={groupPhoto}
                alt="Somali Youth Link community gathering"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-4 hidden sm:block rounded-xl bg-[var(--navy)] px-6 py-5 shadow-lg">
                <p className="font-display text-white text-lg font-bold leading-tight">
                  Built with the community,
                  <br /> for the community.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <span className="eyebrow">Our mission</span>
            <div className="brand-rule mt-3" />
            <h2 className="section-title mt-4">
              Trust, presence, and pathways to safety
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Our trained, unarmed peace ambassadors help de-escalate conflict,
              promote nonviolence, and connect youth and families to resources.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Through mentorship in workforce development, arts, and sports — and
              through monthly parent &amp; youth safety discussions — we build
              skills, confidence, and stronger relationships that support
              long-term community safety.
            </p>
            <Button asChild size="lg" className="mt-7">
              <Link href="/about">
                More about us <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 md:py-24 bg-secondary/60">
        <div className="container">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Programs &amp; services</span>
            <div className="brand-rule mt-3" />
            <h2 className="section-title mt-4">How we support youth and families</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              From violence prevention to mentorship and family resource support,
              we provide practical, caring help rooted in community.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((program, i) => (
              <Reveal key={program.id} delay={i * 0.08}>
                <ProgramCard program={program} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="bg-[var(--navy)] py-16">
        <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
          {IMPACT.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-extrabold text-white">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EVENTS TEASER */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="rounded-3xl border border-border bg-sky-soft/60 p-8 md:p-12 grid gap-8 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-8">
              <span className="eyebrow">Monthly gathering</span>
              <h2 className="section-title mt-3">
                Parent &amp; Youth Meeting — last Friday of every month
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Join our monthly community safety discussion and empowerment
                workshop where parents and youth build trust, share strategies,
                and strengthen families together.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-4 lg:text-right">
              <Button asChild size="xl">
                <Link href="/events">
                  <CalendarDays className="size-5" /> See all events
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="pb-20 md:pb-24">
        <div className="container">
          <Reveal className="flex items-end justify-between gap-4 flex-wrap">
            <div className="max-w-xl">
              <span className="eyebrow">Community moments</span>
              <div className="brand-rule mt-3" />
              <h2 className="section-title mt-4">SYL in action</h2>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/gallery">
                View gallery <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryPreview.map((img, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Link href="/gallery">
                  <div className="group overflow-hidden rounded-xl aspect-square">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
